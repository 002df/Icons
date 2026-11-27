const isChinese = new URLSearchParams(location.search).get('lang') === 'zh';
const t = (en, zh) => isChinese ? zh : en;
const categories = { apps: t('Apps', '应用'), flags: t('Regions', '地区'), groups: t('Proxy groups', '代理策略组'), mini: t('Mini', '迷你') };

const search = document.querySelector('#search');
const filters = document.querySelectorAll('[data-category]');
const results = document.querySelector('#results');
const gallery = document.querySelector('#icon-grid');
const copyStatus = document.querySelector('#copy-status');
const copyDialog = document.querySelector('#copy-dialog');
const manualUrl = document.querySelector('#manual-url');
let category = 'all';

function setupLanguage() {
  const control = document.querySelector('#language-switch');
  const target = new URL(location.href);
  if (isChinese) target.searchParams.delete('lang');
  else target.searchParams.set('lang', 'zh');
  control.href = target.href;
  control.hreflang = isChinese ? 'en' : 'zh-Hans';
  control.title = t('Switch to Chinese', '切换到英文');
  control.setAttribute('aria-label', control.title);
  if (!isChinese) return;

  document.documentElement.lang = 'zh-Hans';
  document.title = 'Jennie Icons · 中文';
  const set = (selector, value) => { document.querySelector(selector).textContent = value; };
  const attr = (selector, key, value) => document.querySelector(selector).setAttribute(key, value);
  const setLabel = (selector, text) => {
    const node = document.querySelector(selector);
    node.lastChild.nodeValue = text;
  };
  attr('.topnav', 'aria-label', '主导航');
  set('.topnav .current', '图标');
  setLabel('.eyebrow', '图标合集');
  set('.intro', '应用、代理策略组和地区的透明 PNG 图标合集。');
  set('.hero-meta a', '喜欢 Jennie Icons？欢迎在 GitHub 上点个 ⭐ ↗');
  set('#sub-title', '图标订阅');
  set('.sub-head p', '点击图标即可导入或复制链接。');
  set('.sub-backup span:first-child', '\u81ea\u6709\u57df\u540d\u8bbf\u95ee\u4e0d\u7a33\u5b9a\u65f6\uff0c\u53ef\u4f7f\u7528');
  set('.sub-backup a', '\u0047\u0069\u0074\u0048\u0075\u0062\u0020\u0052\u0061\u0077\u0020\u5907\u7528\u8ba2\u9605');
  set('.sub-backup span:last-child', '\u3002');
  const clientNames = { quantumult: 'Quantumult X', loon: 'Loon', stash: 'Stash' };
  for (const link of document.querySelectorAll('[data-icon-app]')) {
    link.title = '一键导入';
    link.setAttribute('aria-label', '将图标集导入 ' + clientNames[link.dataset.iconApp]);
  }
  attr('#copy-icon-set', 'title', '复制图标集链接');
  attr('#copy-icon-set', 'aria-label', '复制 Surge、Egern 和 FlClash 的图标集链接');
  const customHint = '\u70b9\u51fb\u4e0b\u65b9\u56fe\u6807\u590d\u5236\u94fe\u63a5\uff0c\u518d\u7c98\u8d34\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002';
  attr('#single-icon-help', 'title', customHint);
  attr('#single-icon-help', 'aria-label', 'Mihomo 和 sing-box：' + customHint);
  set('#section-name', '全部图标');
  attr('.category-list', 'aria-label', '图标分类');
  for (const filter of filters) {
    filter.firstChild.nodeValue = (categories[filter.dataset.category] || '全部') + ' ';
  }
  set('.search .sr', '搜索图标');
  attr('#search', 'placeholder', '搜索图标…');
  set('.footer .back-top', '返回顶部 ↑');
  set('.footer .rights span:first-child', '图标版权归各自权利人所有。如有侵权，请');
  set('.footer .rights a', '提交 Issue');
  set('.footer .rights span:last-child', '。');
  set('#copy-title', '复制链接');
  set('#copy-dialog p', '请选择并复制下方的链接。');
  attr('#manual-url', 'aria-label', '待复制的链接');
  set('#copy-dialog button', '完成');
}

function setupTheme() {
  const root = document.documentElement;
  const button = document.querySelector('#theme-switch');
  const system = matchMedia('(prefers-color-scheme: dark)');
  let chosen;
  try { chosen = localStorage.getItem('jennie-icons-theme'); } catch {}
  if (chosen !== 'light' && chosen !== 'dark') chosen = null;

  function renderTheme() {
    const theme = chosen || (system.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    button.dataset.next = next;
    button.title = next === 'dark' ? t('Switch to dark mode', '切换到深色模式') : t('Switch to light mode', '切换到浅色模式');
    button.setAttribute('aria-label', button.title);
    for (const icon of button.querySelectorAll('[data-next-theme]')) {
      icon.toggleAttribute('hidden', icon.dataset.nextTheme !== next);
    }
  }

  renderTheme();
  button.hidden = false;
  system.addEventListener('change', renderTheme);
  button.addEventListener('click', () => {
    chosen = button.dataset.next;
    try { localStorage.setItem('jennie-icons-theme', chosen); } catch {}
    renderTheme();
  });
}

function copyWithSelection(url) {
  const previouslyFocused = document.activeElement;
  const field = document.createElement('textarea');
  field.className = 'sr';
  field.value = url;
  field.readOnly = true;
  field.tabIndex = -1;
  document.body.append(field);
  field.select();
  field.setSelectionRange(0, url.length);
  try {
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    field.remove();
    previouslyFocused.focus({ preventScroll: true });
  }
}

async function copyUrl(url, button, announcement, status = copyStatus) {
  let copied = false;
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
    } catch {
      copied = copyWithSelection(url);
    }
  } else {
    copied = copyWithSelection(url);
  }

  if (!copied) {
    manualUrl.value = url;
    if (!copyDialog.open) copyDialog.showModal();
    manualUrl.select();
    manualUrl.setSelectionRange(0, manualUrl.value.length);
    return;
  }

  if (status === copyStatus) {
    const otherStatus = document.querySelector('#subscription-copy-status');
    otherStatus.textContent = '';
  } else {
    copyStatus.textContent = '';
  }
  status.textContent = announcement;
  button.setAttribute('data-copied', '');
  clearTimeout(button.feedbackTimer);
  button.feedbackTimer = setTimeout(() => button.removeAttribute('data-copied'), 1600);
  clearTimeout(status.feedbackTimer);
  status.feedbackTimer = setTimeout(() => { status.textContent = ''; }, 2000);
  return true;
}

function setupGallery() {
  const entries = Array.from(gallery.querySelectorAll('.card'), (card) => {
    const link = card.querySelector('.icon-copy');
    const name = card.querySelector('.name').textContent;
    const group = card.dataset.iconCategory;
    link.title = t('Copy URL for ' + name, '复制 ' + name + ' 的链接');
    link.setAttribute('aria-label', link.title + ' (' + categories[group] + ')');
    return { card, group, name, link, filename: card.dataset.filename.normalize('NFC').toLowerCase() };
  });

  const desktop = !window.matchMedia('(max-width: 620px), (max-width: 950px) and (pointer: coarse)').matches;
  if (desktop) {
    for (const { card } of entries) card.querySelector('img').loading = 'eager';
  }

  function render() {
    const query = search.value.trim().normalize('NFC').toLowerCase();
    let count = 0;
    for (const { card, group, filename } of entries) {
      const visible = (category === 'all' || group === category) && filename.includes(query);
      card.hidden = !visible;
      if (visible) count++;
    }
    results.classList.toggle('sr', count > 0);
    results.classList.toggle('empty', count === 0);
    results.textContent = count
      ? t(count + (count === 1 ? ' icon' : ' icons'), '共 ' + count + ' 枚图标')
      : t('No matching icons.', '没有找到匹配的图标。');
  }

  gallery.addEventListener('click', (event) => {
    const link = event.target.closest('.icon-copy');
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    event.preventDefault();
    const name = link.dataset.iconName;
    copyUrl(link.href, link, t('Copied URL for ' + name + '.', '已复制 ' + name + ' 的链接。'));
  });

  for (const filter of filters) {
    filter.addEventListener('click', () => {
      category = filter.dataset.category;
      for (const button of filters) {
        button.setAttribute('aria-pressed', String(button === filter));
      }
      render();
    });
  }
  search.addEventListener('input', render);
  document.querySelector('.gallery-top').hidden = false;
  render();
}

function setupIconSubscription() {
  const url = new URL('./surge-icons.json', document.baseURI).href;
  const button = document.querySelector('#copy-icon-set');
  const status = document.querySelector('#subscription-copy-status');
  const singleIconHelp = document.querySelector('#single-icon-help');
  singleIconHelp.addEventListener('click', () => {
    copyStatus.textContent = '';
    status.textContent = t('Click an icon below to copy its URL, then paste it into your configuration.', '\u70b9\u51fb\u4e0b\u65b9\u56fe\u6807\u590d\u5236\u94fe\u63a5\uff0c\u518d\u7c98\u8d34\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002');
    clearTimeout(status.feedbackTimer);
    status.feedbackTimer = setTimeout(() => { status.textContent = ''; }, 4500);
  });
  singleIconHelp.hidden = false;
  button.addEventListener('click', () => copyUrl(url, button, t('Subscription URL copied', '已复制订阅链接'), status));
  button.hidden = false;

  const encodedUrl = encodeURIComponent(url);
  const imports = {
    loon: `loon://import?iconset=${encodedUrl}`,
    quantumult: `quantumult-x:///ui?module=gallery&type=icon&action=add&content=${encodeURIComponent(JSON.stringify([url]))}`,
    stash: `stash://install-icon-set?url=${encodedUrl}`,
  };
  for (const appLink of document.querySelectorAll('[data-icon-app]')) {
    appLink.href = imports[appLink.dataset.iconApp];
    appLink.hidden = false;
  }
}

setupLanguage();
setupTheme();
setupIconSubscription();
setupGallery();
