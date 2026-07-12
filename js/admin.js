// ========== InnoWit Admin Panel ==========
const ADMIN_CREDS = { user: 'admin', pass: 'admin123' };

function checkAuth() {
  if (sessionStorage.getItem('innowit_auth') !== 'true') {
    const p = window.location.pathname;
    if (!p.includes('/admin/index.html') && !p.includes('/admin/login.html')) {
      window.location.href = p.replace(/\/[^\/]+$/, '/index.html');
    }
    return false;
  }
  return true;
}

function login(user, pass) {
  if (user === ADMIN_CREDS.user && pass === ADMIN_CREDS.pass) {
    sessionStorage.setItem('innowit_auth', 'true');
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem('innowit_auth');
  window.location.href = 'index.html';
}

// ===== Dashboard =====
function loadDashboard() {
  if (!checkAuth()) return;
  const products = DB.getProducts();
  const messages = DB.getMessages();
  const unread = messages.filter(m => !m.read).length;

  document.getElementById('statProducts').textContent = products.length;
  document.getElementById('statMessages').textContent = messages.length;
  document.getElementById('statUnread').textContent = unread;

  // Recent messages
  const msgTable = document.getElementById('recentMessages');
  if (msgTable) {
    if (messages.length === 0) {
      msgTable.innerHTML = '<tr><td colspan="4" class="empty">No messages yet</td></tr>';
    } else {
      msgTable.innerHTML = messages.slice(0, 5).map(m =>
        `<tr><td>${m.name}</td><td>${m.email}</td><td>${new Date(m.date).toLocaleDateString()}</td><td>${m.read ? '<span class="badge badge-success">Read</span>' : '<span class="badge badge-warning">New</span>'}</td></tr>`
      ).join('');
    }
  }

  // Recent products
  const prodTable = document.getElementById('recentProducts');
  if (prodTable) {
    prodTable.innerHTML = products.slice(0, 5).map(p =>
      `<tr><td>${p.name}</td><td>${p.category}</td><td>$${p.price.toLocaleString()}</td><td>${p.featured ? '<span class="badge badge-success">Featured</span>' : '-'}</td></tr>`
    ).join('');
  }
}

// ===== Products Management =====
function loadProductsAdmin() {
  if (!checkAuth()) return;
  const products = DB.getProducts();
  const tbody = document.getElementById('productTableBody');
  if (!tbody) return;

  tbody.innerHTML = products.map(p =>
    `<tr>
      <td><strong>${p.name}</strong></td>
      <td>${p.category}</td>
      <td>$${p.price.toLocaleString()}</td>
      <td>${p.specs.capacity || p.specs.Energy || p.specs.Power || p.specs.Capacity || '-'}</td>
      <td>${p.featured ? '<span class="badge badge-success">Yes</span>' : '-'}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="editProduct(${p.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">Del</button>
      </td>
    </tr>`
  ).join('');
}

function showProductForm(id) {
  const product = id ? DB.getProduct(id) : {
    id: null, name: '', nameCN: '', category: 'lithium-battery', categoryCN: '锂电池',
    price: 0, priceCN: '', image: '', video: '',
    specs: {},
    features: [], featuresCN: [],
    description: '', descriptionCN: '', featured: false
  };

  const cats = [
    { v: 'lithium-battery', n: 'Lithium Battery' },
    { v: 'ess', n: 'Energy Storage System' },
    { v: 'ev-charger', n: 'EV Charger' },
    { v: 'inverter', n: 'Solar Inverter' }
  ];

  const catOpts = cats.map(c => `<option value="${c.v}" ${product.category === c.v ? 'selected' : ''}>${c.n}</option>`).join('');

  const html = `
    <div class="modal-overlay" id="productModal" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <h2>${id ? 'Edit Product' : 'New Product'}</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div class="form-group">
            <label>Name (EN)</label>
            <input class="form-control" id="prodName" value="${product.name}">
          </div>
          <div class="form-group">
            <label>名称 (中文)</label>
            <input class="form-control" id="prodNameCN" value="${product.nameCN}">
          </div>
          <div class="form-group">
            <label>Category</label>
            <select class="form-control" id="prodCat">${catOpts}</select>
          </div>
          <div class="form-group">
            <label>Price (USD)</label>
            <input class="form-control" type="number" id="prodPrice" value="${product.price}">
          </div>
          <div class="form-group">
            <label>Price (CNY)</label>
            <input class="form-control" id="prodPriceCN" value="${product.priceCN}">
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input class="form-control" id="prodImage" value="${product.image}">
          </div>
          <div class="form-group">
            <label>Video URL (YouTube)</label>
            <input class="form-control" id="prodVideo" value="${product.video}" placeholder="https://youtube.com/watch?v=...">
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:12px">
          ${['capacity','voltage','chemistry','cycles','warranty','weight'].map(s =>
            `<div class="form-group"><label>${s}</label><input class="form-control" id="spec_${s}" value="${product.specs[s] || ''}"></div>`
          ).join('')}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:12px">
          <div class="form-group">
            <label>Features (EN, comma separated)</label>
            <textarea class="form-control" id="prodFeatures">${product.features.join(', ')}</textarea>
          </div>
          <div class="form-group">
            <label>特点 (中文, 逗号分隔)</label>
            <textarea class="form-control" id="prodFeaturesCN">${product.featuresCN.join(', ')}</textarea>
          </div>
          <div class="form-group">
            <label>Description (EN)</label>
            <textarea class="form-control" id="prodDesc">${product.description}</textarea>
          </div>
          <div class="form-group">
            <label>描述 (中文)</label>
            <textarea class="form-control" id="prodDescCN">${product.descriptionCN}</textarea>
          </div>
        </div>
        <div class="form-group" style="margin-top:12px">
          <label><input type="checkbox" id="prodFeatured" ${product.featured ? 'checked' : ''}> Featured Product</label>
        </div>
        <div class="modal-actions">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="saveProductForm(${id || 'null'})">Save Product</button>
        </div>
      </div>
    </div>`;
  document.getElementById('modalContainer').innerHTML = html;
}

function closeModal() { document.getElementById('modalContainer').innerHTML = ''; }

function saveProductForm(id) {
  const product = {
    id: id || null,
    name: document.getElementById('prodName').value,
    nameCN: document.getElementById('prodNameCN').value,
    category: document.getElementById('prodCat').value,
    categoryCN: { 'lithium-battery': '锂电池', 'ess': '储能系统', 'ev-charger': 'EV充电桩', 'inverter': '太阳能逆变器' }[document.getElementById('prodCat').value],
    price: parseInt(document.getElementById('prodPrice').value) || 0,
    priceCN: document.getElementById('prodPriceCN').value,
    image: document.getElementById('prodImage').value,
    video: document.getElementById('prodVideo').value,
    specs: {
      capacity: document.getElementById('spec_capacity').value,
      voltage: document.getElementById('spec_voltage').value,
      chemistry: document.getElementById('spec_chemistry').value,
      cycles: document.getElementById('spec_cycles').value,
      warranty: document.getElementById('spec_warranty').value,
      weight: document.getElementById('spec_weight').value
    },
    features: document.getElementById('prodFeatures').value.split(',').map(f => f.trim()).filter(Boolean),
    featuresCN: document.getElementById('prodFeaturesCN').value.split(',').map(f => f.trim()).filter(Boolean),
    description: document.getElementById('prodDesc').value,
    descriptionCN: document.getElementById('prodDescCN').value,
    featured: document.getElementById('prodFeatured').checked
  };
  DB.saveProduct(product);
  closeModal();
  loadProductsAdmin();
}

function editProduct(id) { showProductForm(id); }
function deleteProduct(id) {
  if (confirm('Delete this product?')) {
    DB.deleteProduct(id);
    loadProductsAdmin();
  }
}

function filterProducts() {
  if (!checkAuth()) return;
  const q = (document.getElementById('searchProducts')?.value || '').toLowerCase();
  const cat = document.getElementById('filterCat')?.value || 'all';
  const products = DB.getProducts().filter(p => {
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.nameCN.includes(q);
    const matchCat = cat === 'all' || p.category === cat;
    return matchQ && matchCat;
  });
  const tbody = document.getElementById('productTableBody');
  tbody.innerHTML = products.map(p =>
    `<tr>
      <td><strong>${p.name}</strong></td>
      <td>${p.category}</td>
      <td>$${p.price.toLocaleString()}</td>
      <td>${p.specs.capacity || p.specs.Energy || p.specs.Power || p.specs.Capacity || '-'}</td>
      <td>${p.featured ? '<span class="badge badge-success">Yes</span>' : '-'}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="editProduct(${p.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">Del</button>
      </td>
    </tr>`
  ).join('');
}

// ===== Messages Management =====
function loadMessagesAdmin() {
  if (!checkAuth()) return;
  const messages = DB.getMessages();
  const tbody = document.getElementById('messageTableBody');
  if (!tbody) return;

  if (messages.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty">No messages yet</td></tr>';
    return;
  }

  tbody.innerHTML = messages.map(m =>
    `<tr>
      <td>${m.name}</td>
      <td>${m.email}</td>
      <td>${m.subject || '-'}</td>
      <td>${new Date(m.date).toLocaleDateString()}</td>
      <td>${m.read ? '<span class="badge badge-success">Read</span>' : '<span class="badge badge-warning">New</span>'}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="viewMessage(${m.id})">View</button>
        <button class="btn btn-sm btn-danger" onclick="delMessage(${m.id})">Del</button>
      </td>
    </tr>`
  ).join('');
}

function viewMessage(id) {
  const m = DB.getMessages().find(m2 => m2.id === id);
  if (!m) return;
  DB.markRead(id);
  alert(`From: ${m.name}\nEmail: ${m.email}\nPhone: ${m.phone || '-'}\nSubject: ${m.subject || '-'}\n\nMessage:\n${m.message}`);
  loadMessagesAdmin();
}

function delMessage(id) {
  if (confirm('Delete this message?')) {
    DB.deleteMessage(id);
    loadMessagesAdmin();
  }
}

// ===== Settings =====
function loadSettings() {
  if (!checkAuth()) return;
  const s = DB.getSite();

  const fields = [
    { id: 'siteName', label: 'Company Name (EN)', key: 'name' },
    { id: 'siteNameCN', label: '公司名称 (中文)', key: 'nameCN' },
    { id: 'siteTagline', label: 'Tagline (EN)', key: 'tagline' },
    { id: 'siteTaglineCN', label: '标语 (中文)', key: 'taglineCN' },
    { id: 'sitePhone', label: 'Phone', key: 'phone' },
    { id: 'siteEmail', label: 'Email', key: 'email' },
    { id: 'siteAddress', label: 'Address', key: 'address' },
    { id: 'siteWhatsApp', label: 'WhatsApp', key: 'whatsapp' },
    { id: 'siteWechat', label: 'WeChat', key: 'wechat' }
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) el.value = s[f.key] || '';
  });

  document.getElementById('siteFactory').value = s.factory;
  document.getElementById('siteYears').value = s.years;
  document.getElementById('siteCountries').value = s.countries;
  document.getElementById('siteCycles').value = s.cycles;
  document.getElementById('siteCerts').value = (s.certifications || []).join(', ');
}

function saveSettings() {
  if (!checkAuth()) return;
  const s = {
    name: document.getElementById('siteName').value,
    nameCN: document.getElementById('siteNameCN').value,
    tagline: document.getElementById('siteTagline').value,
    taglineCN: document.getElementById('siteTaglineCN').value,
    phone: document.getElementById('sitePhone').value,
    email: document.getElementById('siteEmail').value,
    address: document.getElementById('siteAddress').value,
    whatsapp: document.getElementById('siteWhatsApp').value,
    wechat: document.getElementById('siteWechat').value,
    factory: document.getElementById('siteFactory').value,
    years: document.getElementById('siteYears').value,
    countries: document.getElementById('siteCountries').value,
    cycles: document.getElementById('siteCycles').value,
    certifications: document.getElementById('siteCerts').value.split(',').map(c => c.trim()).filter(Boolean)
  };
  DB.updateSite(s);
  alert('Settings saved!');
}

function backupData() { DB.backup(); }

function restoreData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const reader = new FileReader();
    reader.onload = ev => {
      if (DB.restore(ev.target.result)) {
        alert('Data restored successfully!');
        location.reload();
      } else {
        alert('Invalid backup file');
      }
    };
    reader.readAsText(e.target.files[0]);
  };
  input.click();
}

function changePassword() {
  const oldPw = prompt('Current password:');
  if (oldPw !== ADMIN_CREDS.pass) { alert('Wrong password!'); return; }
  const newPw = prompt('New password:');
  if (!newPw) return;
  const confirmPw = prompt('Confirm new password:');
  if (newPw !== confirmPw) { alert('Passwords do not match!'); return; }
  ADMIN_CREDS.pass = newPw;
  alert('Password changed! Remember your new password: ' + newPw);
}
