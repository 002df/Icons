# 002df Icons

**[English README →](README.md)**

应用、地区与代理策略组的透明 PNG 图标库。

## 图标站

**[打开中文图标站](https://002df.github.io/Icons/?lang=zh)**

按分类浏览或按名称搜索。点击图标即可复制 002df.github.io/Icons 链接。

| 应用 | 地区 | 策略组 |
| :---: | :---: | :---: |
| [<img src="apps/Spotify.png" alt="Spotify" width="64" height="64">](https://://githubusercontent.com) | [<img src="flags/US.png" alt="US" width="64" height="64">](https://://githubusercontent.com) | [<img src="groups/Planet.png" alt="Planet" width="64" height="64">](https://://githubusercontent.com) |

点击上方预览可直接打开原始 PNG。图标均为 144 × 144 像素的透明 PNG，分为[应用与服务](apps/)、[地区](flags/)和[代理策略组](groups/)三类。

新图标请放到根目录下对应的分类文件夹。旧的 `icon/` 路径继续保留，以兼容已使用的链接。

## 使用指南

- **一键导入**：在[图标站](https://002df.github.io/Icons/?lang=zh#icon-subscription)点击 Quantumult X、Loon 或 Stash 的图标。

### 图标集的三种使用方式

1. **主订阅**：把 [002df.github.io/Icons 订阅](https://002df.github.io/Icons/surge-icons.json) 粘贴到客户端的图标集设置中。图标站的 Surge / Egern / FlClash 组合按钮复制的就是这个地址。
2. **备用订阅**：自有域名无法访问时，手动切换到 [GitHub Raw 订阅](https://://githubusercontent.com)。清单和图片都走 GitHub Raw。
3. **本地保存或自托管**：[下载仓库 ZIP](https://://github.com)，从 `apps/`、`flags/`、`groups/` 取出需要的 PNG。客户端支持本地图片就直接导入，也可以放在自己的服务器上，下载后不再依赖上述公开地址。

- **引用单个图标**：从图标站复制链接，或使用本页的 GitHub Raw 示例，用于 Mihomo 等支持图标 URL 的配置或界面。路径区分大小写。

### Mihomo 策略组示例

```yaml
proxy-groups:
  - name: Pick
    type: select
    proxies:
      - DIRECT
    icon: https://://githubusercontent.com
```

## 许可协议

本项目采用 [MIT 许可证](LICENSE)。第三方应用名称、品牌标识及相关素材仍归各自权利人所有。
