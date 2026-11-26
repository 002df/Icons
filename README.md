# NetKit

**[中文文档 →](README.zh-CN.md)**

A collection of transparent PNG icons for apps, regions, and proxy groups.

## Jennie Icons

**[Open the icon gallery](https://icons.jennie.win/)**

Browse by category or search by name. Click an icon in the gallery to copy its URL on icons.jennie.win.

| Apps | Regions | Proxy groups |
| :---: | :---: | :---: |
| [<img src="apps/Spotify.png" alt="Spotify" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/apps/Spotify.png) | [<img src="flags/US.png" alt="US" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/flags/US.png) | [<img src="groups/Planet.png" alt="Planet" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/groups/Planet.png) |

Click a preview above to open its original PNG. Icons are 144 × 144 px transparent PNGs, organized into [apps and services](apps/), [regions](flags/), and [proxy groups](groups/).

New icons belong in the root-level category folders. The original `icon/` paths are retained for compatibility.

## Quick start

- **One-click import:** In the [subscription section](https://icons.jennie.win/#icon-subscription), click the Quantumult X, Loon, or Stash icon.
- **Subscribe to the icon set:** Use the Surge / Egern / FlClash button to copy the [subscription URL](https://icons.jennie.win/surge-icons.json), then paste it into your client's icon set settings.
- **Use a single icon:** Copy its URL from the gallery or use the GitHub Raw examples in this README and paste it into a configuration or interface that supports icon URLs. Paths are case-sensitive.

### Mihomo example

```yaml
proxy-groups:
  - name: Pick
    type: select
    proxies:
      - DIRECT
    icon: https://raw.githubusercontent.com/jennieveloramae/Icons/main/groups/Planet.png
```

## License

This project uses the [MIT License](LICENSE). Third-party names, logos, trademarks, and related artwork belong to their respective rights holders.
