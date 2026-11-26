"""Build the GitHub Pages artifact into a new directory."""

import argparse
import json
from pathlib import Path
import shutil
from urllib.parse import quote


ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = ("apps", "groups", "flags")
SITE_ROOT = "https://icons.jennie.win/"
RAW_ROOT = "https://raw.githubusercontent.com/jennieveloramae/Icons/main/"


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
    name = "Jennie Icons (GitHub Raw)" if raw else "NetKit Icons"
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


def build(output):
    output.mkdir(parents=True)
    shutil.copyfile(ROOT / "pages" / "index.html", output / "index.html")

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
