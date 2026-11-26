# NetKit

**[English README →](README.md)**

应用、地区与代理策略组的透明 PNG 图标库。

## Jennie Icons

**[打开中文图标站](https://icons.jennie.win/?lang=zh)**

按分类浏览或按名称搜索。点击图标即可复制 GitHub Raw 链接。

| 应用 | 地区 | 策略组 |
| :---: | :---: | :---: |
| [<img src="icon/apps/Spotify.png" alt="Spotify" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/icon/apps/Spotify.png) | [<img src="icon/flags/US.png" alt="US" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/icon/flags/US.png) | [<img src="icon/groups/Planet.png" alt="Planet" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/icon/groups/Planet.png) |

点击上方预览可直接打开原始 PNG。图标均为 144 × 144 像素的透明 PNG，分为[应用与服务](icon/apps/)、[地区](icon/flags/)和[代理策略组](icon/groups/)三类。

## 使用指南

- **一键导入**：在[图标站](https://icons.jennie.win/?lang=zh#icon-subscription)点击 Quantumult X、Loon 或 Stash 的图标。
- **订阅图标集**：点击 Surge / Egern / FlClash 的组合按钮复制[订阅链接](https://icons.jennie.win/surge-icons.json)，再粘贴到客户端的图标集设置中。
- **引用单个图标**：从图标站复制 Raw 链接，用于 Mihomo 等支持图标 URL 的配置或界面。路径区分大小写。

### Mihomo 策略组示例

```yaml
proxy-groups:
  - name: Pick
    type: select
    proxies:
      - DIRECT
    icon: https://raw.githubusercontent.com/jennieveloramae/Icons/main/icon/groups/Planet.png
```

## 许可协议

本项目采用 [MIT 许可证](LICENSE)。第三方应用名称、品牌标识及相关素材仍归各自权利人所有。
