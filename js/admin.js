/**
 * 管理后台脚本
 */
document.addEventListener('DOMContentLoaded', function() {
  // 检查登录状态（非登录页）
  const isLoginPage = document.getElementById('loginForm');
  if (!isLoginPage && !DB.isLoggedIn()) {
    window.location.href = 'index.html';
    return;
  }

  // 如果在登录页且已登录，跳转到仪表盘
  if (isLoginPage && DB.isLoggedIn()) {
    window.location.href = 'dashboard.html';
    return;
  }

  // 登录表单
  if (isLoginPage) {
    isLoginPage.addEventListener('submit', handleLogin);
  }

  // 仪表盘
  const dashboard = document.getElementById('dashboard');
  if (dashboard) {
    initDashboard();
  }

  // 产品管理
  const productsTable = document.getElementById('productsTableBody');
  if (productsTable) {
    initProducts();
  }

  // 留言管理
  const messagesTable = document.getElementById('messagesTableBody');
  if (messagesTable) {
    initMessages();
  }

  // 设置
  const settingsForm = document.getElementById('settingsForm');
  if (settingsForm) {
    initSettings();
  }

  // 退出登录
  document.querySelectorAll('.btn-logout').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      DB.logout();
      window.location.href = 'index.html';
    });
  });

  // 移动端菜单
  const menuToggle = document.querySelector('.menu-toggle-admin');
  const sidebar = document.querySelector('.admin-sidebar');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }
});

// ==================== 登录 ====================
function handleLogin(e) {
  e.preventDefault();
  const form = e.target;
  const username = form.username.value.trim();
  const password = form.password.value.trim();
  const errorEl = document.getElementById('loginError');

  if (DB.login(username, password)) {
    window.location.href = 'dashboard.html';
  } else {
    errorEl.classList.add('show');
    form.password.value = '';
    setTimeout(() => errorEl.classList.remove('show'), 3000);
  }
}

// ==================== 仪表盘 ====================
function initDashboard() {
  const products = DB.getProducts();
  const messages = DB.getMessages();
  const unreadCount = messages.filter(m => m.status === 'unread').length;
  const settings = DB.getSettings();

  // 统计数字
  document.getElementById('statProducts').textContent = products.length;
  document.getElementById('statMessages').textContent = messages.length;
  document.getElementById('statUnread').textContent = unreadCount;
  document.getElementById('statCountries').textContent = settings.countries || '60+';

  // 最近留言
  const recentMessages = document.getElementById('recentMessages');
  if (recentMessages) {
    if (messages.length === 0) {
      recentMessages.innerHTML = '<tr><td colspan="4" class="table-empty">暂无留言</td></tr>';
    } else {
      recentMessages.innerHTML = messages.slice(0, 5).map(m => `
        <tr>
          <td>${m.name}</td>
          <td>${m.email}</td>
          <td>${formatDate(m.createdAt)}</td>
          <td><span class="badge ${m.status === 'unread' ? 'badge-danger' : m.status === 'read' ? 'badge-warning' : 'badge-success'}">${statusText(m.status)}</span></td>
        </tr>
      `).join('');
    }
  }

  // 最近产品
  const recentProducts = document.getElementById('recentProducts');
  if (recentProducts) {
    if (products.length === 0) {
      recentProducts.innerHTML = '<tr><td colspan="4" class="table-empty">暂无产品</td></tr>';
    } else {
      recentProducts.innerHTML = products.slice(0, 5).map(p => `
        <tr>
          <td>${p.icon || '🔋'} ${p.name}</td>
          <td><span class="badge badge-info">${categoryText(p.category)}</span></td>
          <td>${p.specs.capacity}</td>
          <td>${formatDate(p.createdAt)}</td>
        </tr>
      `).join('');
    }
  }

  // 更新侧边栏未读数
  updateUnreadBadge(unreadCount);
}

// ==================== 产品管理 ====================
function initProducts() {
  renderProductsTable();
  setupProductModal();
}

function renderProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  const products = DB.getProducts();
  if (products.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="table-empty">暂无产品，点击"添加产品"创建第一个产品</td></tr>';
    return;
  }
  tbody.innerHTML = products.map(p => `
    <tr>
      <td>${p.icon || '🔋'} ${p.name}</td>
      <td><span class="badge badge-info">${categoryText(p.category)}</span></td>
      <td>${p.specs.capacity}</td>
      <td>${p.specs.cycles}</td>
      <td>${p.badge ? `<span class="badge badge-success">${p.badge}</span>` : '<span class="badge badge-gray">无</span>'}</td>
      <td>
        <button class="action-btn edit" onclick="editProduct(${p.id})">编辑</button>
        <button class="action-btn delete" onclick="deleteProduct(${p.id})">删除</button>
      </td>
    </tr>
  `).join('');
}

function setupProductModal() {
  const modal = document.getElementById('productModal');
  const addBtn = document.getElementById('addProductBtn');
  const closeBtn = document.getElementById('modalClose');
  const cancelBtn = document.getElementById('modalCancel');
  const form = document.getElementById('productForm');

  if (addBtn) {
    addBtn.addEventListener('click', () => openProductModal());
  }
  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeProductModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeProductModal(); });

  if (form) {
    form.addEventListener('submit', handleProductSave);
  }

  // 认证标签输入
  setupFeaturesInput();
}

function openProductModal(product) {
  const modal = document.getElementById('productModal');
  const form = document.getElementById('productForm');
  const title = document.getElementById('modalTitle');
  document.getElementById('productId').value = product ? product.id : '';
  title.textContent = product ? '编辑产品' : '添加产品';

  if (product) {
    form.name.value = product.name || '';
    form.category.value = product.category || 'residential';
    form.icon.value = product.icon || '🔋';
    form.badge.value = product.badge || '';
    form.description.value = product.description || '';
    form.capacity.value = product.specs?.capacity || '';
    form.chemistry.value = product.specs?.chemistry || 'LiFePO4';
    form.voltage.value = product.specs?.voltage || '';
    form.cycles.value = product.specs?.cycles || '';
    form.warranty.value = product.specs?.warranty || '';
    setFeaturesTags(product.features || []);
  } else {
    form.reset();
    setFeaturesTags([]);
  }

  modal.classList.add('show');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('show');
}

function editProduct(id) {
  const product = DB.getProduct(id);
  if (product) openProductModal(product);
}

function deleteProduct(id) {
  if (confirm('确定要删除该产品吗？此操作不可撤销。')) {
    DB.deleteProduct(id);
    renderProductsTable();
    showToast('产品已删除', 'success');
  }
}

function handleProductSave(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.productId.value;
  const features = getFeaturesTags();

  const data = {
    name: form.name.value.trim(),
    category: form.category.value,
    icon: form.icon.value.trim() || '🔋',
    badge: form.badge.value.trim(),
    description: form.description.value.trim(),
    specs: {
      capacity: form.capacity.value.trim(),
      chemistry: form.chemistry.value.trim(),
      voltage: form.voltage.value.trim(),
      cycles: form.cycles.value.trim(),
      warranty: form.warranty.value.trim()
    },
    features: features
  };

  if (id) {
    DB.updateProduct(id, data);
    showToast('产品已更新', 'success');
  } else {
    DB.addProduct(data);
    showToast('产品已添加', 'success');
  }

  closeProductModal();
  renderProductsTable();
}

function setupFeaturesInput() {
  const container = document.getElementById('featuresTags');
  const input = document.getElementById('featuresInput');
  if (!container || !input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      e.preventDefault();
      addFeatureTag(input.value.trim());
      input.value = '';
    }
  });
}

function addFeatureTag(text) {
  const container = document.getElementById('featuresTags');
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.innerHTML = `${text} <span class="tag-remove" onclick="this.parentElement.remove()">x</span>`;
  container.insertBefore(tag, document.getElementById('featuresInput'));
}

function getFeaturesTags() {
  const tags = document.querySelectorAll('#featuresTags .tag');
  return Array.from(tags).map(t => t.textContent.replace('x', '').trim());
}

function setFeaturesTags(features) {
  const container = document.getElementById('featuresTags');
  if (!container) return;
  container.querySelectorAll('.tag').forEach(t => t.remove());
  features.forEach(f => addFeatureTag(f));
}

// ==================== 留言管理 ====================
function initMessages() {
  renderMessagesTable();
  updateUnreadBadge(DB.getMessages().filter(m => m.status === 'unread').length);
}

function renderMessagesTable(filter) {
  const tbody = document.getElementById('messagesTableBody');
  let messages = DB.getMessages();
  if (filter && filter !== 'all') {
    messages = messages.filter(m => m.status === filter);
  }

  if (messages.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="table-empty">暂无留言</td></tr>';
    return;
  }

  tbody.innerHTML = messages.map(m => `
    <tr>
      <td>${m.name}</td>
      <td>${m.email}${m.company ? '<br><small style="color:var(--admin-text-muted)">' + m.company + '</small>' : ''}</td>
      <td style="max-width:300px;">${(m.message || '').substring(0, 60)}${m.message && m.message.length > 60 ? '...' : ''}</td>
      <td>${formatDate(m.createdAt)}</td>
      <td><span class="badge ${m.status === 'unread' ? 'badge-danger' : m.status === 'read' ? 'badge-warning' : 'badge-success'}">${statusText(m.status)}</span></td>
      <td>
        <button class="action-btn view" onclick="viewMessage(${m.id})">查看</button>
        ${m.status === 'unread' ? `<button class="action-btn edit" onclick="markRead(${m.id})">标为已读</button>` : ''}
        <button class="action-btn delete" onclick="deleteMessage(${m.id})">删除</button>
      </td>
    </tr>
  `).join('');

  // 筛选事件
  const filterSelect = document.getElementById('messageFilter');
  if (filterSelect && !filterSelect.dataset.bound) {
    filterSelect.dataset.bound = '1';
    filterSelect.addEventListener('change', (e) => renderMessagesTable(e.target.value));
  }
}

function viewMessage(id) {
  const msg = DB.getMessages().find(m => m.id === id);
  if (!msg) return;

  const modal = document.getElementById('messageModal');
  const body = document.getElementById('messageModalBody');
  body.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
      <div class="form-group" style="margin:0;">
        <label>姓名</label>
        <div style="padding:8px 0;font-weight:600;">${msg.name}</div>
      </div>
      <div class="form-group" style="margin:0;">
        <label>邮箱</label>
        <div style="padding:8px 0;">${msg.email}</div>
      </div>
      <div class="form-group" style="margin:0;">
        <label>公司</label>
        <div style="padding:8px 0;">${msg.company || '未填写'}</div>
      </div>
      <div class="form-group" style="margin:0;">
        <label>电话</label>
        <div style="padding:8px 0;">${msg.phone || '未填写'}</div>
      </div>
      <div class="form-group" style="margin:0;">
        <label>WhatsApp</label>
        <div style="padding:8px 0;">${msg.whatsapp || '未填写'}</div>
      </div>
      <div class="form-group" style="margin:0;">
        <label>微信</label>
        <div style="padding:8px 0;">${msg.wechat || '未填写'}</div>
      </div>
    </div>
    <div class="form-group" style="margin:0;">
      <label>留言内容</label>
      <div style="padding:12px;background:var(--admin-bg);border-radius:8px;margin-top:8px;line-height:1.7;">${msg.message}</div>
    </div>
    <div style="margin-top:16px;font-size:.85rem;color:var(--admin-text-muted);">提交时间：${formatDate(msg.createdAt)}</div>
  `;

  // 自动标记为已读
  if (msg.status === 'unread') {
    DB.updateMessageStatus(id, 'read');
  }

  modal.classList.add('show');

  const closeBtn = document.getElementById('msgModalClose');
  const cancelBtn = document.getElementById('msgModalClose2');
  if (closeBtn) closeBtn.onclick = () => { modal.classList.remove('show'); renderMessagesTable(document.getElementById('messageFilter')?.value); updateUnreadBadge(); };
  if (cancelBtn) cancelBtn.onclick = () => { modal.classList.remove('show'); renderMessagesTable(document.getElementById('messageFilter')?.value); updateUnreadBadge(); };
  modal.onclick = (e) => { if (e.target === modal) { modal.classList.remove('show'); renderMessagesTable(document.getElementById('messageFilter')?.value); updateUnreadBadge(); } };
}

function markRead(id) {
  DB.updateMessageStatus(id, 'read');
  renderMessagesTable(document.getElementById('messageFilter')?.value);
  updateUnreadBadge();
  showToast('已标记为已读', 'success');
}

function deleteMessage(id) {
  if (confirm('确定要删除该留言吗？')) {
    DB.deleteMessage(id);
    renderMessagesTable(document.getElementById('messageFilter')?.value);
    updateUnreadBadge();
    showToast('留言已删除', 'success');
  }
}

function updateUnreadBadge(count) {
  if (count === undefined) {
    count = DB.getMessages().filter(m => m.status === 'unread').length;
  }
  const badge = document.getElementById('unreadBadge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? '' : 'none';
  }
}

// ==================== 设置 ====================
function initSettings() {
  const settings = DB.getSettings();
  const form = document.getElementById('settingsForm');

  form.siteName.value = settings.siteName || '';
  form.siteNameEn.value = settings.siteNameEn || '';
  form.slogan.value = settings.slogan || '';
  form.phone.value = settings.phone || '';
  form.email.value = settings.email || '';
  form.address.value = settings.address || '';
  form.whatsapp.value = settings.whatsapp || '';
  form.wechat.value = settings.wechat || '';
  form.yearsExperience.value = settings.yearsExperience || '';
  form.factoryArea.value = settings.factoryArea || '';
  form.countries.value = settings.countries || '';
  form.chargeCycles.value = settings.chargeCycles || '';

  // 认证标签
  setCertTags(settings.certifications || []);
  setupCertInput();

  form.addEventListener('submit', handleSettingsSave);
}

function setupCertInput() {
  const input = document.getElementById('certInput');
  if (!input || input.dataset.bound) return;
  input.dataset.bound = '1';
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      e.preventDefault();
      addCertTag(input.value.trim());
      input.value = '';
    }
  });
}

function addCertTag(text) {
  const container = document.getElementById('certTags');
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.innerHTML = `${text} <span class="tag-remove" onclick="this.parentElement.remove()">x</span>`;
  container.insertBefore(tag, document.getElementById('certInput'));
}

function setCertTags(certs) {
  const container = document.getElementById('certTags');
  if (!container) return;
  container.querySelectorAll('.tag').forEach(t => t.remove());
  certs.forEach(c => addCertTag(c));
}

function getCertTags() {
  return Array.from(document.querySelectorAll('#certTags .tag')).map(t => t.textContent.replace('x', '').trim());
}

function handleSettingsSave(e) {
  e.preventDefault();
  const form = e.target;
  const settings = {
    siteName: form.siteName.value.trim(),
    siteNameEn: form.siteNameEn.value.trim(),
    slogan: form.slogan.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim(),
    address: form.address.value.trim(),
    whatsapp: form.whatsapp.value.trim(),
    wechat: form.wechat.value.trim(),
    yearsExperience: form.yearsExperience.value.trim(),
    factoryArea: form.factoryArea.value.trim(),
    countries: form.countries.value.trim(),
    chargeCycles: form.chargeCycles.value.trim(),
    certifications: getCertTags()
  };
  DB.saveSettings(settings);
  showToast('设置已保存', 'success');
}

// ==================== 工具函数 ====================
function formatDate(timestamp) {
  const d = new Date(timestamp);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

function statusText(status) {
  const map = { unread: '未读', read: '已读', replied: '已回复' };
  return map[status] || status;
}

function categoryText(cat) {
  const map = { residential: '住宅', commercial: '商业', industrial: '工业', offgrid: '离网' };
  return map[cat] || cat;
}

function showToast(msg, type) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type || ''} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}
