# NetKit

**Proxy Rules, Icons & Network Resources**

一个面向主流网络代理客户端的个人资源库，提供策略组图标及相关网络配置资源。

支持 **Mihomo、sing-box、Surge、Quantumult X、Loon、Egern** 等主流客户端，致力于让网络配置更加简洁、直观、易于管理。

## Features · 项目内容

| 分类 | 说明 |
| --- | --- |
| **Icons** | 统一风格的应用、地区及策略组图标 |
| **Configs** | 自用网络配置与参考示例（计划补充） |
| **Rules** | 自用多客户端兼容的网络分流规则（计划补充） |
| **Scripts & Modules** | 实用脚本及模块（计划补充） |


## Icons · 图标资源

提供统一视觉风格的 PNG 图标，适用于应用分流、节点分类、策略选择及其他网络配置场景。

| Applications | Regions | Proxy Groups |
| :---: | :---: | :---: |
| ![Apps](icon/apps/Spotify.png) | ![Flags](icon/flags/US.png) | ![Groups](icon/groups/Planet.png) |
| 应用与服务 | 地区图标 | 策略组图标 |

- 格式：PNG
- 尺寸：144 × 144
- 分类：Apps / Flags / Groups
- 支持通过 GitHub Raw URL 直接引用

**[在线浏览和搜索图标](https://jennieveloramae.github.io/NetKit/)** · [图标使用说明](icon/README.md)

### 图标引用示例

```text
https://raw.githubusercontent.com/jennieveloramae/NetKit/main/icon/apps/Spotify.png
```

在 Mihomo 中引用：

```yaml
icon: https://raw.githubusercontent.com/jennieveloramae/NetKit/main/icon/groups/Planet.png
```

## Usage · 使用说明

本项目资源均可通过 GitHub Raw URL 直接引用。

```text
https://raw.githubusercontent.com/jennieveloramae/NetKit/main/
```

使用时在基础地址后添加对应的文件路径即可。

例如：

```text
icon/flags/JP.png
rules/surge/appleradio.list
```

注意文件路径区分大小写，并确保所使用的客户端支持对应的资源格式。

## Notes · 注意事项

- 本项目主要用于个人学习、配置管理及技术交流。
- 不同代理客户端的配置格式可能存在差异，请根据实际版本使用。
- 分流规则可能随网络服务及域名变化而调整，不保证适用于所有网络环境。
- 建议在修改或导入配置之前备份原有文件。
- 第三方应用名称、品牌标识及商标归其各自权利人所有。

## License

本项目采用 [MIT License](LICENSE)。

第三方品牌标识及相关素材仍受其原有权利约束。

---

**NetKit** · Simple, Clean & Organized.
