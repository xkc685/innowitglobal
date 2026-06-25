/**
 * 前台主脚本 - 处理导航、表单、动画等交互
 */
document.addEventListener('DOMContentLoaded', function() {

  // ---- 头部滚动效果 ----
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  // ---- 移动端菜单 ----
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  // ---- 滚动渐显动画 ----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));
  }

  // ---- 加载产品到首页 ----
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    renderProducts();
  }

  // ---- 加载产品列表页 / 详情页 ----
  const productsList = document.getElementById('productsList');
  const productDetail = document.getElementById('productDetail');
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const catParam = params.get('cat');

  if (productId && productDetail) {
    // 详情模式
    document.getElementById('listView').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';
    renderProductDetail();
  } else if (productsList) {
    // 列表模式
    document.getElementById('listView').style.display = 'block';
    if (document.getElementById('detailView')) {
      document.getElementById('detailView').style.display = 'none';
    }
    // 如果URL带了分类参数，激活对应筛选按钮
    if (catParam) {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.category === catParam);
      });
      renderProductsList(catParam);
    } else {
      renderProductsList();
    }
  }

  // ---- 加载设置到页脚和联系页 ----
  loadSiteSettings();

  // ---- 联系表单提交 ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  // ---- 产品筛选 ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.category;
        renderProductsList(category);
      });
    });
  }
});

// ==================== 渲染产品到首页 ====================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const products = DB.getProducts().slice(0, 6);
  grid.innerHTML = products.map(p => `
    <div class="product-card reveal" onclick="location.href='products.html?id=${p.id}'">
      <div class="product-image">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <span class="product-icon">${p.icon || '🔋'}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.description.substring(0, 80)}...</p>
        <div class="product-specs">
          <div class="product-spec">
            <span class="spec-label">容量</span>
            <span class="spec-value">${p.specs.capacity}</span>
          </div>
          <div class="product-spec">
            <span class="spec-label">循环</span>
            <span class="spec-value">${p.specs.cycles}</span>
          </div>
        </div>
        <a href="products.html?id=${p.id}" class="product-link">查看详情 →</a>
      </div>
    </div>
  `).join('');
}

// ==================== 渲染产品列表页 ====================
function renderProductsList(category) {
  const list = document.getElementById('productsList');
  if (!list) return;
  let products = DB.getProducts();
  if (category && category !== 'all') {
    products = products.filter(p => p.category === category);
  }
  if (products.length === 0) {
    list.innerHTML = '<p style="text-align:center;color:var(--gray-500);padding:60px;">暂无产品数据</p>';
    return;
  }
  list.innerHTML = products.map(p => `
    <div class="product-card reveal" onclick="location.href='products.html?id=${p.id}'">
      <div class="product-image">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <span class="product-icon">${p.icon || '🔋'}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.description.substring(0, 80)}...</p>
        <div class="product-specs">
          <div class="product-spec">
            <span class="spec-label">容量</span>
            <span class="spec-value">${p.specs.capacity}</span>
          </div>
          <div class="product-spec">
            <span class="spec-label">循环</span>
            <span class="spec-value">${p.specs.cycles}</span>
          </div>
        </div>
        <a href="products.html?id=${p.id}" class="product-link">查看详情 →</a>
      </div>
    </div>
  `).join('');

  // 重新触发渐显
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  list.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ==================== 渲染产品详情页 ====================
function renderProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = id ? DB.getProduct(id) : null;

  if (!product) {
    container.innerHTML = `
      <div style="text-align:center;padding:80px 0;">
        <h2 style="font-size:1.5rem;color:var(--dark);margin-bottom:16px;">未找到该产品</h2>
        <a href="products.html" class="btn btn-primary">返回产品列表</a>
      </div>`;
    return;
  }

  // 更新页面标题
  document.title = `${product.name} - 海西储能`;
  const pageTitle = document.getElementById('pageTitle');
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  if (pageTitle) pageTitle.textContent = product.name;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <span>${product.icon || '🔋'}</span>
      </div>
      <div class="product-detail-info">
        ${product.badge ? `<span class="product-badge" style="position:static;display:inline-block;margin-bottom:16px;">${product.badge}</span>` : ''}
        <h1>${product.name}</h1>
        <p class="pd-subtitle">${product.description}</p>
        <h3 style="font-size:1.1rem;margin:24px 0 12px;color:var(--dark);">技术参数</h3>
        <table class="spec-table">
          <tr><th>容量</th><td>${product.specs.capacity}</td></tr>
          <tr><th>电池化学</th><td>${product.specs.chemistry}</td></tr>
          <tr><th>电压</th><td>${product.specs.voltage}</td></tr>
          <tr><th>循环寿命</th><td>${product.specs.cycles}</td></tr>
          <tr><th>质保</th><td>${product.specs.warranty}</td></tr>
        </table>
        <h3 style="font-size:1.1rem;margin:24px 0 12px;color:var(--dark);">核心特点</h3>
        <ul class="about-list">
          ${product.features.map(f => `<li><span class="check">✓</span><span class="text">${f}</span></li>`).join('')}
        </ul>
        <div style="margin-top:32px;display:flex;gap:16px;flex-wrap:wrap;">
          <a href="contact.html" class="btn btn-primary">获取报价</a>
          <a href="products.html" class="btn btn-outline" style="color:var(--primary);border-color:var(--primary);">返回列表</a>
        </div>
      </div>
    </div>`;
}

// ==================== 加载网站设置 ====================
function loadSiteSettings() {
  const settings = DB.getSettings();
  // 更新页脚
  document.querySelectorAll('[data-setting="phone"]').forEach(el => el.textContent = settings.phone);
  document.querySelectorAll('[data-setting="email"]').forEach(el => el.textContent = settings.email);
  document.querySelectorAll('[data-setting="address"]').forEach(el => el.textContent = settings.address);
  document.querySelectorAll('[data-setting="whatsapp"]').forEach(el => el.textContent = settings.whatsapp);

  // 更新统计数据
  document.querySelectorAll('[data-stat="cycles"]').forEach(el => el.textContent = settings.chargeCycles);
  document.querySelectorAll('[data-stat="countries"]').forEach(el => el.textContent = settings.countries);
  document.querySelectorAll('[data-stat="factory"]').forEach(el => el.textContent = settings.factoryArea);
  document.querySelectorAll('[data-stat="years"]').forEach(el => el.textContent = settings.yearsExperience);

  // 更新认证
  const certContainer = document.getElementById('certGrid');
  if (certContainer && settings.certifications) {
    certContainer.innerHTML = settings.certifications.map(c =>
      `<span class="cert-badge">✓ ${c}</span>`
    ).join('');
  }
}

// ==================== 处理联系表单 ====================
function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const msg = {
    name: form.name.value,
    email: form.email.value,
    company: form.company.value,
    phone: form.phone.value,
    whatsapp: form.whatsapp.value,
    wechat: form.wechat.value,
    message: form.message.value
  };
  DB.addMessage(msg);
  form.reset();
  const success = document.getElementById('formSuccess');
  if (success) {
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  }
}
