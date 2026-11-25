# NetKit Icons

**A unified icon collection for network proxy clients.**

收录应用、地区与代理策略组图标。不同客户端的图标集订阅和单个图标引用方式，请参阅[使用指南](../README.md#使用指南)。

**[在线浏览和搜索图标](https://icons.jennie.win/?lang=zh)**

- 规格为 144 × 144 的透明 PNG。
- [Apps](apps/) 用于应用与服务，[Flags](flags/) 用于地区，[Groups](groups/) 用于策略组。

## Usage · 使用说明

在图标站点击图标即可复制 GitHub Raw 链接。把链接粘贴到支持图标 URL 的客户端配置中，也可在浏览器中打开链接查看原始 PNG。文件名区分大小写。

Mihomo 配置示例：

```yaml
proxy-groups:
  - name: Pick
    type: select
    proxies:
      - DIRECT
    icon: https://raw.githubusercontent.com/jennieveloramae/NetKit/main/icon/groups/Planet.png
```

## Updates · 更新图标

将 PNG 添加到对应的分类目录，或在目录中删除、重命名文件，然后将变更提交并推送到 `main`。GitHub Actions 会重新生成清单并部署图标库。

首次部署时，在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。可在 **Actions** 中运行 **Deploy NetKit to GitHub Pages** 来触发首次部署或重试。

第三方应用名称、品牌标识及商标归其各自权利人所有。项目授权请参阅 [LICENSE](../LICENSE)。
