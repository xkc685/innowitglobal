// ========== InnoWit Frontend Site Logic (v2.0 Dark Tech) ==========

// Language detection: returns true if current page is Chinese
function isZH() {
  return window.location.pathname.includes('/zh/');
}

// Translation helper
function t(en, zh) {
  return isZH() ? zh : en;
}

// Get correct relative path prefix for resources (CSS/JS/images at root level)
function pathPrefix() {
  const path = window.location.pathname;
  if (/(\/en\/|\/zh\/)(blog|shop|admin)\//.test(path)) return '../../';
  if (/(\/en\/|\/zh\/)/.test(path)) return '../';
  return '';
}

// Generate same-language relative link (stays in /en/ or /zh/ directory)
// Use this for navigation between pages in the same language
function langLink(page) {
  const path = window.location.pathname;
  if (/(\/en\/|\/zh\/)(blog|shop|admin)\//.test(path)) return '../' + page;
  return page;
}

// Resolve image path
function resolveImg(path, fallback) {
  if (!path) return pathPrefix() + (fallback || 'images/placeholder.svg');
  if (path.startsWith('http') || path.startsWith('//') || path.startsWith('data:') || path.startsWith('/')) return path;
  return pathPrefix() + path;
}

// ============ Cart Management ============
function getCart() {
  try { return JSON.parse(localStorage.getItem('innowit_cart') || '[]'); } catch(e) { return []; }
}
function saveCart(cart) { localStorage.setItem('innowit_cart', JSON.stringify(cart)); }
function addToCart(id, qty) {
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart(cart);
  updateCartCount();
  alert(t('Added to cart!', '已加入购物车！'));
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => { el.textContent = count; });
}

// ============ Header Scroll Effect ============
function initHeaderScroll() {
  const header = document.querySelector('header.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
}

// ============ Scroll Reveal ============
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (els.length === 0) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ============ Swiper ============
function initSwiper() {
  if (typeof Swiper === 'undefined') return;
  const el = document.querySelector('.slider');
  if (!el) return;
  new Swiper(el, {
    effect: 'fade', autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true }, loop: true
  });
  // Solution carousel
  const solSwiper = document.querySelector('.sol-swiper');
  if (solSwiper) {
    new Swiper(solSwiper, {
      slidesPerView: 1, spaceBetween: 24,
      pagination: { el: '.sol-pagination', clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 4 } }
    });
  }
  // Project carousel
  const projSwiper = document.querySelector('.proj-swiper');
  if (projSwiper) {
    new Swiper(projSwiper, {
      slidesPerView: 1, spaceBetween: 24,
      pagination: { el: '.proj-pagination', clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }
    });
  }
}

// ============ Load Site Settings ============
function loadSiteSettings() {
  const s = DB.getSite();
  if (!s) return;

  document.querySelectorAll('#brandName').forEach(el => el.textContent = isZH() ? s.nameCN : s.name);
  document.querySelectorAll('#footerBrand').forEach(el => el.textContent = isZH() ? s.nameCN : s.name);
  document.querySelectorAll('#footerTagline').forEach(el => el.textContent = isZH() ? s.taglineCN : s.tagline);

  document.querySelectorAll('#hdrPhone').forEach(el => el.textContent = s.phone);
  document.querySelectorAll('#hdrEmail').forEach(el => el.textContent = s.email);
  document.querySelectorAll('#footerPhone').forEach(el => el.textContent = s.phone);
  document.querySelectorAll('#footerEmail').forEach(el => el.textContent = s.email);
  document.querySelectorAll('#footerAddr').forEach(el => el.textContent = s.address);

  // Stats
  if (document.getElementById('statYears')) document.getElementById('statYears').textContent = s.years;
  if (document.getElementById('statCountries')) document.getElementById('statCountries').textContent = s.countries;
  if (document.getElementById('statPatents')) document.getElementById('statPatents').textContent = s.patents;
  if (document.getElementById('statFactory')) document.getElementById('statFactory').textContent = s.factory;

  // Certifications
  if (s.certifications) {
    const badges = s.certifications.map(c => `<span class="cert-badge">${c}</span>`).join('');
    document.querySelectorAll('#certBadges').forEach(el => el.innerHTML = badges);
  }

  // Footer social
  if (s.social) {
    document.querySelectorAll('#socialLinks').forEach(el => {
      el.innerHTML = `
        <a href="${s.social.facebook || '#'}" class="footer-social-link"><iconify-icon icon="mdi:facebook" width="18"></iconify-icon></a>
        <a href="${s.social.linkedin || '#'}" class="footer-social-link"><iconify-icon icon="mdi:linkedin" width="18"></iconify-icon></a>
        <a href="${s.social.twitter || '#'}" class="footer-social-link"><iconify-icon icon="mdi:twitter" width="18"></iconify-icon></a>
        <a href="${s.social.youtube || '#'}" class="footer-social-link"><iconify-icon icon="mdi:youtube" width="18"></iconify-icon></a>
      `;
    });
  }
}

// ============ Category Cards ============
function loadCategoryCards() {
  const container = document.getElementById('categoryCards');
  if (!container) return;
  const cats = DB.getCategories();
  container.innerHTML = cats.map(cat => {
    const count = DB.getProductsByCategory(cat.id).length;
    return `
    <div class="col-md-6 col-lg-3 reveal">
      <a href="${langLink('products.html?cat=' + cat.id)}" class="text-decoration-none">
        <div class="category-card h-100">
          <div class="cat-icon"><iconify-icon icon="${cat.icon}" width="32" style="color:var(--cyan)"></iconify-icon></div>
          <h4>${isZH() ? cat.nameCN : cat.name}</h4>
          <p>${isZH() ? cat.descCN : cat.desc}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="cat-link">${t('Learn More', '了解更多')} <iconify-icon icon="mdi:arrow-right" width="16"></iconify-icon></span>
            <span class="badge badge-cyan">${count} ${t('Products', '款产品')}</span>
          </div>
        </div>
      </a>
    </div>`;
  }).join('');
  initScrollReveal();
}

// ============ Product Card ============
function renderProductCard(p) {
  const pf = pathPrefix();
  const img = resolveImg(p.image, 'images/placeholder.svg');
  const cats = DB.getCategories();
  const cat = cats.find(c => c.id === p.category);
  const catName = cat ? (isZH() ? cat.nameCN : cat.name) : p.category;
  const detailLink = langLink('product-detail.html?id=' + p.id);
  return `
    <div class="col-md-6 col-lg-4 reveal">
      <div class="product-card">
        <a href="${detailLink}">
          <img src="${img}" alt="${isZH() ? p.nameCN : p.name}" class="product-img" onerror="this.src='${pf}images/placeholder.svg'">
        </a>
        <div class="product-body">
          <span class="product-cat">${catName}</span>
          <h5><a href="${detailLink}" class="text-decoration-none" style="color:inherit">${isZH() ? p.nameCN : p.name}</a></h5>
          <p class="product-spec">${p.specs?.Energy || p.specs?.Capacity || p.specs?.Power || p.specs?.['Battery Capacity'] || ''} ${p.subcategory ? '· ' + p.subcategory : ''}</p>
          <div class="product-price">${fmtPrice(p.price, p.priceCN)}</div>
          <div class="product-footer">
            <a href="${detailLink}" class="btn btn-outline-primary btn-sm flex-grow-1">${t('View Details', '查看详情')}</a>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id},1)"><iconify-icon icon="mdi:cart-plus" width="18"></iconify-icon></button>
          </div>
        </div>
      </div>
    </div>`;
}

// ============ Featured Products ============
function loadFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;
  const products = DB.getProducts().filter(p => p.featured);
  if (products.length === 0) {
    container.innerHTML = DB.getProducts().slice(0, 6).map(renderProductCard).join('');
  } else {
    container.innerHTML = products.map(renderProductCard).join('');
  }
  initScrollReveal();
}

// ============ Products Page ============
function loadAllProducts() {
  const container = document.getElementById('allProducts');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const filter = params.get('cat') || 'all';

  // Render filter tabs
  const tabsContainer = document.getElementById('filterTabs');
  if (tabsContainer) {
    const cats = DB.getCategories();
    tabsContainer.innerHTML = `
      <button class="filter-tab ${filter === 'all' ? 'active' : ''}" onclick="location.href='${langLink('products.html')}'">${t('All Products', '全部产品')}</button>
      ${cats.map(c => `<button class="filter-tab ${filter === c.id ? 'active' : ''}" onclick="location.href='${langLink('products.html?cat=' + c.id)}'">${isZH() ? c.nameCN : c.name}</button>`).join('')}
    `;
  }

  let products = DB.getProducts();
  if (filter !== 'all') products = products.filter(p => p.category === filter);

  if (products.length === 0) {
    container.innerHTML = '<div class="col-12 text-center py-5"><h4 class="text-muted">' + t('No products found', '暂无产品') + '</h4></div>';
    return;
  }
  container.innerHTML = products.map(renderProductCard).join('');
  initScrollReveal();
}

// ============ Product Detail ============
function loadProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const p = DB.getProduct(id);
  if (!p) { container.innerHTML = '<div class="text-center py-5"><h3>' + t('Product not found', '未找到该产品') + '</h3></div>'; return; }

  const s = DB.getSite();
  document.title = (isZH() ? p.nameCN : p.name) + ' - ' + (isZH() ? s.nameCN : s.name);
  const pf = pathPrefix();
  const img = resolveImg(p.image, 'images/placeholder.svg');
  const cats = DB.getCategories();
  const cat = cats.find(c => c.id === p.category);
  const catName = cat ? (isZH() ? cat.nameCN : cat.name) : p.category;
  const features = p.features || [];
  const featureTexts = isZH() ? (p.featuresCN || []) : [];

  container.innerHTML = `
    <div class="row g-5">
      <div class="col-lg-6">
        <div class="product-gallery">
          <img src="${img}" alt="${isZH() ? p.nameCN : p.name}" id="mainProductImg" onerror="this.src='${pf}images/placeholder.svg'">
        </div>
      </div>
      <div class="col-lg-6">
        <nav class="breadcrumb mb-3">
          <a href="${langLink('index.html')}">${t('Home', '首页')}</a>
          <span class="sep">/</span>
          <a href="${langLink('products.html')}">${t('Products', '产品')}</a>
          <span class="sep">/</span>
          <span style="color:var(--cyan)">${isZH() ? p.nameCN : p.name}</span>
        </nav>
        <span class="badge badge-cyan mb-2">${catName}</span>
        <h1 class="fw-bold mb-3">${isZH() ? p.nameCN : p.name}</h1>
        <div class="fs-3 text-green fw-bold mb-4">${fmtPrice(p.price, p.priceCN)}</div>
        <p class="text-secondary mb-4">${isZH() ? (p.descriptionCN || p.description) : p.description}</p>

        <div class="d-flex gap-3 mb-4">
          <input type="number" value="1" min="1" class="form-control qty-input" style="width:80px" id="productQty" onclick="this.select()">
          <button class="btn btn-primary px-4" onclick="addToCart(${p.id},parseInt(document.getElementById('productQty').value))">
            <iconify-icon icon="mdi:cart-plus" width="20"></iconify-icon> ${t('Add to Cart', '加入购物车')}
          </button>
          <a href="${langLink('contact.html')}" class="btn btn-outline-primary px-4">
            <iconify-icon icon="mdi:email" width="20"></iconify-icon> ${t('Inquiry', '询价')}
          </a>
        </div>
      </div>
    </div>

    <div class="row g-5 mt-2">
      <div class="col-lg-6">
        <h3 class="fw-bold mb-3">${t('Technical Specifications', '技术参数')}</h3>
        <table class="spec-table">
          ${Object.entries(p.specs || {}).map(([k,v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('')}
        </table>
      </div>
      <div class="col-lg-6">
        <h3 class="fw-bold mb-3">${t('Key Features', '核心特点')}</h3>
        ${features.map((f, i) => `
          <div class="feature-item">
            <div class="feat-icon"><iconify-icon icon="${f.icon || 'mdi:star'}" width="22"></iconify-icon></div>
            <div>
              <h6>${isZH() ? (featureTexts[i] || f.title) : f.title}</h6>
              <p>${isZH() ? (f.descCN || f.desc) : f.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${(() => {
      const related = DB.getProducts().filter(x => x.category === p.category && x.id !== p.id).slice(0, 3);
      if (related.length === 0) return '';
      return `
        <div class="mt-5 pt-5 border-top" style="border-color:var(--border)!important">
          <h3 class="fw-bold mb-4">${t('Related Products', '相关产品')}</h3>
          <div class="row g-4">
            ${related.map(renderProductCard).join('')}
          </div>
        </div>`;
    })()}
  `;
  initScrollReveal();
}

// ============ Solutions ============
function loadSolutions() {
  const container = document.getElementById('solutionsGrid');
  if (!container) return;
  const solutions = DB.getSolutions();
  const pf = pathPrefix();
  container.innerHTML = solutions.map(sol => `
    <div class="col-md-6 col-lg-3 reveal">
      <div class="solution-card">
        <img src="${resolveImg(sol.image, 'images/placeholder.svg')}" alt="${isZH() ? sol.nameCN : sol.name}" onerror="this.src='${pf}images/placeholder.svg'">
        <div class="sol-body">
          <div class="d-flex align-items-center gap-2 mb-2">
            <iconify-icon icon="${sol.icon}" width="24" style="color:var(--cyan)"></iconify-icon>
            <h4 class="mb-0">${isZH() ? sol.nameCN : sol.name}</h4>
          </div>
          <p>${isZH() ? sol.descCN : sol.desc}</p>
          <a href="${langLink('contact.html')}" class="cat-link">${t('Learn More', '了解更多')} <iconify-icon icon="mdi:arrow-right" width="16"></iconify-icon></a>
        </div>
      </div>
    </div>`).join('');
  initScrollReveal();
}

// ============ Home Solutions Carousel ============
function loadHomeSolutions() {
  const container = document.getElementById('homeSolutions');
  if (!container) return;
  const solutions = DB.getSolutions();
  const pf = pathPrefix();
  container.innerHTML = solutions.map(sol => `
    <div class="swiper-slide">
      <div class="solution-card">
        <img src="${resolveImg(sol.image, 'images/placeholder.svg')}" alt="${isZH() ? sol.nameCN : sol.name}" onerror="this.src='${pf}images/placeholder.svg'">
        <div class="sol-body">
          <div class="d-flex align-items-center gap-2 mb-2">
            <iconify-icon icon="${sol.icon}" width="24" style="color:var(--cyan)"></iconify-icon>
            <h4 class="mb-0">${isZH() ? sol.nameCN : sol.name}</h4>
          </div>
          <p>${isZH() ? sol.descCN : sol.desc}</p>
        </div>
      </div>
    </div>`).join('');
}

// ============ Projects ============
function loadProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;
  const projects = DB.getProjects();
  const pf = pathPrefix();
  container.innerHTML = projects.map(proj => `
    <div class="col-md-6 col-lg-4 reveal">
      <div class="project-card">
        <img src="${resolveImg(proj.image, 'images/placeholder.svg')}" alt="${isZH() ? proj.titleCN : proj.title}" onerror="this.src='${pf}images/placeholder.svg'">
        <div class="proj-body">
          <span class="proj-loc"><iconify-icon icon="mdi:map-marker" width="14"></iconify-icon> ${proj.location}</span>
          <h6>${isZH() ? proj.titleCN : proj.title}</h6>
          <p>${isZH() ? (proj.descCN || proj.desc) : proj.desc}</p>
        </div>
      </div>
    </div>`).join('');
  initScrollReveal();
}

// ============ Home Projects Carousel ============
function loadHomeProjects() {
  const container = document.getElementById('homeProjects');
  if (!container) return;
  const projects = DB.getProjects();
  const pf = pathPrefix();
  container.innerHTML = projects.map(proj => `
    <div class="swiper-slide">
      <div class="project-card">
        <img src="${resolveImg(proj.image, 'images/placeholder.svg')}" alt="${isZH() ? proj.titleCN : proj.title}" onerror="this.src='${pf}images/placeholder.svg'">
        <div class="proj-body">
          <span class="proj-loc"><iconify-icon icon="mdi:map-marker" width="14"></iconify-icon> ${proj.location}</span>
          <h6>${isZH() ? proj.titleCN : proj.title}</h6>
          <p>${isZH() ? (proj.descCN || proj.desc) : proj.desc}</p>
        </div>
      </div>
    </div>`).join('');
}

// ============ Milestones ============
function loadMilestones() {
  const container = document.getElementById('milestones');
  if (!container) return;
  const milestones = DB.getMilestones();
  container.innerHTML = milestones.map(m => `
    <div class="timeline-item">
      <div class="year">${m.year}</div>
      <h6>${isZH() ? (m.titleCN || m.title) : m.title}</h6>
      <p>${isZH() ? (m.descCN || m.desc) : m.desc}</p>
    </div>`).join('');
}

// ============ Blog ============
function loadBlogList() {
  const container = document.getElementById('blogList');
  if (!container) return;
  const posts = DB.getBlog();
  if (posts.length === 0) {
    container.innerHTML = '<div class="col-12 text-center py-5"><h4 class="text-muted">' + t('No articles yet', '暂无文章') + '</h4></div>';
    return;
  }
  const pf = pathPrefix();
  container.innerHTML = posts.map(post => `
    <div class="col-md-6 col-lg-4 reveal">
      <div class="blog-card">
        <a href="post.html?id=${post.id}">
          <img src="${resolveImg(post.image, 'images/blog1.jpg')}" alt="${isZH() ? (post.titleCN || post.title) : post.title}" onerror="this.src='${pf}images/blog1.jpg'">
        </a>
        <div class="blog-body">
          <span class="blog-date">${post.date}</span>
          <span class="badge badge-cyan ms-2">${isZH() ? (post.categoryCN || post.category) : post.category}</span>
          <h5><a href="post.html?id=${post.id}" class="text-decoration-none" style="color:inherit">${isZH() ? (post.titleCN || post.title) : post.title}</a></h5>
          <p>${isZH() ? (post.summaryCN || post.summary) : post.summary}</p>
          <a href="post.html?id=${post.id}" class="cat-link">${t('Read More', '阅读全文')} <iconify-icon icon="mdi:arrow-right" width="16"></iconify-icon></a>
        </div>
      </div>
    </div>`).join('');
  initScrollReveal();
}

function loadBlogPost() {
  const container = document.getElementById('blogPostDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const post = DB.getBlog().find(p => p.id === id);
  if (!post) { container.innerHTML = '<div class="text-center py-5"><h3>' + t('Article not found', '未找到该文章') + '</h3></div>'; return; }

  const s = DB.getSite();
  document.title = (isZH() ? (post.titleCN || post.title) : post.title) + ' - ' + (isZH() ? s.nameCN : s.name);
  const pf = pathPrefix();
  const content = isZH() ? (post.contentCN || post.summaryCN || post.summary) : (post.content || post.summary);
  container.innerHTML = `
    <article>
      <img src="${resolveImg(post.image, 'images/blog1.jpg')}" alt="${post.title}" class="w-100 rounded-3 mb-4" style="max-height:400px;object-fit:cover" onerror="this.src='${pf}images/blog1.jpg'">
      <span class="badge badge-cyan mb-2">${isZH() ? (post.categoryCN || post.category) : post.category}</span>
      <small class="text-muted d-block mb-3">${post.date}</small>
      <h1 class="fw-bold mb-4">${isZH() ? (post.titleCN || post.title) : post.title}</h1>
      <div class="fs-5 text-secondary mb-4">${isZH() ? (post.summaryCN || post.summary) : post.summary}</div>
      <div class="blog-content">${content}</div>
      <div class="mt-5 pt-4 border-top" style="border-color:var(--border)!important">
        <a href="${langLink('blog/')}" class="btn btn-outline-primary"><iconify-icon icon="mdi:arrow-left"></iconify-icon> ${t('Back to Blog', '返回博客')}</a>
      </div>
    </article>`;
}

function loadFeaturedBlog() {
  const container = document.getElementById('latestBlog');
  if (!container) return;
  const posts = DB.getBlog().slice(0, 3);
  const pf = pathPrefix();
  container.innerHTML = posts.map(post => `
    <div class="col-md-4 reveal">
      <div class="blog-card">
        <a href="${langLink('blog/post.html?id=' + post.id)}">
          <img src="${resolveImg(post.image, 'images/blog1.jpg')}" alt="${isZH() ? (post.titleCN || post.title) : post.title}" onerror="this.src='${pf}images/blog1.jpg'">
        </a>
        <div class="blog-body">
          <small class="blog-date">${post.date}</small>
          <h5><a href="${langLink('blog/post.html?id=' + post.id)}" class="text-decoration-none" style="color:inherit">${isZH() ? (post.titleCN || post.title) : post.title}</a></h5>
          <p>${isZH() ? (post.summaryCN || post.summary) : post.summary}</p>
        </div>
      </div>
    </div>`).join('');
  initScrollReveal();
}

// ============ Contact Form ============
function submitContactForm() {
  const msg = {
    name: document.getElementById('contactName')?.value || '',
    email: document.getElementById('contactEmail')?.value || '',
    phone: document.getElementById('contactPhone')?.value || '',
    subject: document.getElementById('contactSubject')?.value || '',
    message: document.getElementById('contactMessage')?.value || ''
  };
  if (!msg.name || !msg.email || !msg.message) { alert(t('Please fill required fields', '请填写必填项')); return; }
  DB.addMessage(msg);
  alert(t('Message sent! We will get back to you soon.', '留言已发送！我们将尽快回复您。'));
  document.querySelectorAll('#contactName,#contactEmail,#contactPhone,#contactSubject,#contactMessage').forEach(el => el.value = '');
}

// ============ Cart ============
function loadCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  const cart = getCart();
  const products = DB.getProducts();
  const pf = pathPrefix();

  if (cart.length === 0) {
    container.innerHTML = '<div class="text-center py-5"><iconify-icon icon="mdi:cart-off" width="64" style="color:var(--text-muted)"></iconify-icon><h4 class="mt-3 text-muted">' + t('Your cart is empty', '您的购物车是空的') + '</h4><a href="' + langLink('products.html') + '" class="btn btn-primary mt-3">' + t('Browse Products', '浏览产品') + '</a></div>';
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.textContent = '$0';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    total += p.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${resolveImg(p.image, 'images/placeholder.svg')}" alt="${p.name}" onerror="this.src='${pf}images/placeholder.svg'">
        <div class="flex-grow-1">
          <h6 class="mb-1">${isZH() ? p.nameCN : p.name}</h6>
          <small class="text-muted">${p.specs?.Energy || p.specs?.Capacity || p.specs?.Power || ''}</small>
        </div>
        <span class="text-green fw-bold">$${p.price.toLocaleString()}</span>
        <input type="number" class="form-control qty-input" value="${item.qty}" min="1" onchange="updateCartQty(${p.id},this.value)" style="width:70px">
        <span class="fw-bold">$${(p.price * item.qty).toLocaleString()}</span>
        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${p.id})"><iconify-icon icon="mdi:delete" width="18"></iconify-icon></button>
      </div>`;
  }).join('');

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = '$' + total.toLocaleString();
}

function updateCartQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) { item.qty = parseInt(qty) || 1; saveCart(cart); }
  loadCart();
  updateCartCount();
}

function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  loadCart();
  updateCartCount();
}

// ============ Language Links ============
function fixLangLinks() {
  const path = window.location.pathname;
  const currentPage = path.split('/').pop() || 'index.html';
  const currentDir = path.match(/\/(en|zh)\/(.*)/);
  const subDir = currentDir && currentDir[2] ? currentDir[2].replace(/\/[^/]*$/, '/') : '';

  document.querySelectorAll('.lang-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const isChineseLink = href.includes('/zh/');
    const targetLang = isChineseLink ? 'zh' : 'en';
    const targetPage = (subDir ? subDir : '') + currentPage;
    link.setAttribute('href', '../' + targetLang + '/' + targetPage);
  });
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
  loadSiteSettings();
  fixLangLinks();
  initHeaderScroll();
  initScrollReveal();
  updateCartCount();
  initSwiper();
  loadCategoryCards();
  loadFeaturedProducts();
  loadAllProducts();
  loadProductDetail();
  loadSolutions();
  loadHomeSolutions();
  loadProjects();
  loadHomeProjects();
  loadMilestones();
  loadBlogList();
  loadBlogPost();
  loadFeaturedBlog();
  loadCart();
});
