# 002df Icons

**[中文文档 →](README.zh-CN.md)**

A collection of transparent PNG icons for apps, regions, and proxy groups.

## Icon gallery

**[Open the icon gallery](https://002df.github.io)**

Browse by category or search by name. Click an icon in the gallery to copy its URL on 002df.github.io/Icons.

| Apps | Regions | Proxy groups |
| :---: | :---: | :---: |
| [<img src="apps/Spotify.png" alt="Spotify" width="64" height="64">](https://githubusercontent.com) | [<img src="flags/US.png" alt="US" width="64" height="64">](https://githubusercontent.com) | [<img src="groups/Planet.png" alt="Planet" width="64" height="64">](https://githubusercontent.com) |

Click a preview above to open its original PNG. Icons are 144 × 144 px transparent PNGs, organized into [apps and services](apps/), [regions](flags/), and [proxy groups](groups/).

New icons belong in the root-level category folders. The original `icon/` paths are retained for compatibility.

## Quick start

- **One-click import:** In the [subscription section](https://github.io#icon-subscription), click the Quantumult X, Loon, or Stash icon.

### Choose how to use the icon set

1. **Primary subscription:** Paste the [002df.github.io/Icons subscription](https://github.iosurge-icons.json) into your client's icon set settings. The Surge / Egern / FlClash button on the website copies this URL.
2. **Backup subscription:** If the primary domain is unavailable, manually switch to the [GitHub Raw subscription](https://githubusercontent.com). Both its manifest and its images use GitHub Raw.
3. **Local or self-hosted:** [Download the repository ZIP](https://github.com) and keep the PNGs you need from `apps/`, `flags/`, and `groups/`. Import them into your client if it supports local files, or serve them from your own web server. This avoids relying on either public URL after download.

- **Use a single icon:** Copy its URL from the gallery or use the GitHub Raw examples in this README and paste it into a configuration or interface that supports icon URLs. Paths are case-sensitive.

### Mihomo example

```yaml
proxy-groups:
  - name: Pick
    type: select
    proxies:
      - DIRECT
    icon: https://githubusercontent.com
```

## License

This project uses the [MIT License](LICENSE). Third-party names, logos, trademarks, and related artwork belong to their respective rights holders.

