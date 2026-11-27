"""Build the GitHub Pages artifact into a new directory."""

import argparse
import json
from html import escape
from pathlib import Path
import shutil
from urllib.parse import quote


ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = ("apps", "groups", "flags", "mini")
SITE_ROOT = "https://002df.github.io/Icons/"
RAW_ROOT = "https://githubusercontent.com/002df/Icons/main/"



def collect_icons():
    icons = []
    for category in CATEGORIES:
        relative_directory = Path(category)
        source_directory = ROOT / relative_directory
        if not source_directory.exists():
            # Git omits empty directories when the last icon is removed.
            continue
        for source in sorted(source_directory.iterdir(), key=lambda path: (path.name.casefold(), path.name)):
            if not source.is_file() or source.suffix.lower() != ".png":
                continue

            url_path = f"{category}/{quote(source.name, safe='')}"
            icons.append({
                "category": category,
                "name": source.stem,
                "filename": source.name,
                "image": url_path,
                "url": SITE_ROOT + url_path,
                "rawUrl": RAW_ROOT + url_path,
            })
    return icons


def write_subscription(path, icons, *, raw=False):
    field = "rawUrl" if raw else "url"
    name = "Jennie Icons (GitHub Raw)" if raw else "Jennie Icons"
    icon_set = {
        "name": name,
        "description": "PNG icons for apps, regions, and proxy groups.",
        "icons": [{"name": icon["name"], "url": icon[field]} for icon in icons],
    }
    if not icons:
        raise ValueError("No icons found; refusing to publish an empty subscription.")
    path.write_text(
        json.dumps(icon_set, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


def render_gallery(icons):
    counts = dict.fromkeys(CATEGORIES, 0)
    cards = []
    for icon in icons:
        counts[icon["category"]] += 1
        name = escape(icon["name"], quote=True)
        filename = escape(icon["filename"], quote=True)
        category = escape(icon["category"], quote=True)
        image = escape(icon["image"], quote=True)
        url = escape(icon["url"], quote=True)
        loading = "eager" if len(cards) < 4 else "lazy"
        cards.append(
            f'<li class="card" data-icon-category="{category}" data-filename="{filename}">'
            f'<a class="icon-copy" href="{url}" data-icon-name="{name}" '
            f'aria-label="Open {name}" title="Open {name}">'
            f'<img src="{image}" alt="" loading="{loading}" decoding="async"></a>'
            f'<p class="name" title="{name}">{name}</p></li>'
        )
    template = (ROOT / "pages" / "index.html").read_text(encoding="utf-8")
    markers = {"GALLERY_CARDS": "\n".join(cards), "COUNT_ALL": str(len(icons))}
    markers.update({f"COUNT_{category.upper()}": str(count) for category, count in counts.items()})
    for marker, value in markers.items():
        token = f"<!-- {marker} -->"
        if template.count(token) != 1:
            raise ValueError(f"Expected exactly one {marker} marker")
        template = template.replace(token, value)
    return template


def build(output):
    output.mkdir(parents=True)
    for asset in ("gallery.css", "gallery.js"):
        shutil.copyfile(ROOT / "pages" / asset, output / asset)

    # Continue serving old direct image links from the Pages domain.
    legacy = ROOT / "icon"
    if legacy.is_dir():
        shutil.copytree(legacy, output / "icon")

    icons = collect_icons()
    for icon in icons:
        relative_path = Path(icon["category"]) / icon["filename"]
        destination = output / relative_path
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(ROOT / relative_path, destination)

    (output / "icons.json").write_text(
        json.dumps(icons, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (output / "index.html").write_text(render_gallery(icons), encoding="utf-8")
    write_subscription(output / "surge-icons.json", icons)
    print(f"Built {len(icons)} icons in {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="Path to a new output directory or backup JSON file")
    parser.add_argument("--raw-subscription", action="store_true", help="Write only the GitHub Raw backup JSON")
    args = parser.parse_args()
    if args.raw_subscription:
        write_subscription(args.output, collect_icons(), raw=True)
    else:
        build(args.output)
