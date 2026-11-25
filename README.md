# NetKit

**[中文文档 →](README.zh-CN.md)**

A collection of transparent PNG icons for apps, regions, and proxy groups.

## Jennie Icons

**[Open the icon gallery](https://icons.jennie.win/)**

Browse by category or search by name. Click an icon in the gallery to copy its GitHub Raw URL.

| Apps | Regions | Proxy groups |
| :---: | :---: | :---: |
| [<img src="icon/apps/Spotify.png" alt="Spotify" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/NetKit/main/icon/apps/Spotify.png) | [<img src="icon/flags/US.png" alt="US" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/NetKit/main/icon/flags/US.png) | [<img src="icon/groups/Planet.png" alt="Planet" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/NetKit/main/icon/groups/Planet.png) |

Click a preview above to open its original PNG. Icons are 144 × 144 px transparent PNGs, organized into [apps and services](icon/apps/), [regions](icon/flags/), and [proxy groups](icon/groups/).

## Quick start

- **One-click import:** In the [subscription section](https://icons.jennie.win/#icon-subscription), click the Quantumult X, Loon, or Stash icon.
- **Subscribe to the icon set:** Use the Surge / Egern / FlClash button to copy the [subscription URL](https://icons.jennie.win/surge-icons.json), then paste it into your client's icon set settings.
- **Use a single icon:** Copy its GitHub Raw URL from the gallery and paste it into a configuration or interface that supports icon URLs. Paths are case-sensitive.

### Mihomo example

```yaml
proxy-groups:
  - name: Pick
    type: select
    proxies:
      - DIRECT
    icon: https://raw.githubusercontent.com/jennieveloramae/NetKit/main/icon/groups/Planet.png
```

## License

This project uses the [MIT License](LICENSE). Third-party names, logos, trademarks, and related artwork belong to their respective rights holders.
