# Jennie Icons

**[English README →](README.md)**

应用、地区与代理策略组的透明 PNG 图标库。

## 图标站

**[打开中文图标站](https://icons.jennie.win/?lang=zh)**

按分类浏览或按名称搜索。点击图标即可复制 icons.jennie.win 链接。

| 应用 | 地区 | 策略组 |
| :---: | :---: | :---: |
| [<img src="apps/Spotify.png" alt="Spotify" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/apps/Spotify.png) | [<img src="flags/US.png" alt="US" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/flags/US.png) | [<img src="groups/Planet.png" alt="Planet" width="64" height="64">](https://raw.githubusercontent.com/jennieveloramae/Icons/main/groups/Planet.png) |

点击上方预览可直接打开原始 PNG。图标均为 144 × 144 像素的透明 PNG，分为[应用与服务](apps/)、[地区](flags/)和[代理策略组](groups/)三类。

新图标请放到根目录下对应的分类文件夹。旧的 `icon/` 路径继续保留，以兼容已使用的链接。

## 使用指南

- **一键导入**：在[图标站](https://icons.jennie.win/?lang=zh#icon-subscription)点击 Quantumult X、Loon 或 Stash 的图标。
- **订阅图标集**：点击 Surge / Egern / FlClash 的组合按钮复制[订阅链接](https://icons.jennie.win/surge-icons.json)，再粘贴到客户端的图标集设置中。
  - [GitHub Raw 备用订阅](https://raw.githubusercontent.com/jennieveloramae/Icons/raw-subscription/surge-icons.json)：主订阅无法访问时使用。
- **引用单个图标**：从图标站复制链接，或使用本页的 GitHub Raw 示例，用于 Mihomo 等支持图标 URL 的配置或界面。路径区分大小写。

### Mihomo 策略组示例

```yaml
proxy-groups:
  - name: Pick
    type: select
    proxies:
      - DIRECT
    icon: https://raw.githubusercontent.com/jennieveloramae/Icons/main/groups/Planet.png
```

## 许可协议

本项目采用 [MIT 许可证](LICENSE)。第三方应用名称、品牌标识及相关素材仍归各自权利人所有。
