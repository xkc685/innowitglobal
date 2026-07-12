// ========== InnoWit Frontend Site Logic ==========

// Language detection: returns true if current page is Chinese
function isZH() {
  return window.location.pathname.includes('/zh/');
}

// Translation helper
function t(en, zh) {
  return isZH() ? zh : en;
}

// Get correct relative path prefix based on page depth
function pathPrefix() {
  const path = window.location.pathname;
  // /en/blog/ or /zh/blog/ or /en/shop/ or /zh/shop/ -> ../../
  if (/(\/en\/|\/zh\/)(blog|shop)\//.test(path)) return '../../';
  // /en/ or /zh/ -> ../
  if (/(\/en\/|\/zh\/)/.test(path)) return '../';
  // root level (old pages) -> ./
  return '';
}

// Resolve image path: prepend path prefix for relative paths, leave absolute URLs as-is
function resolveImg(path, fallback) {
  if (!path) return pathPrefix() + fallback;
  if (path.startsWith('http') || path.startsWith('//') || path.startsWith('data:') || path.startsWith('/')) return path;
  return pathPrefix() + path;
}

// Cart management
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

// Initialize Swiper
function initSwiper() {
  if (typeof Swiper === 'undefined') return;
  new Swiper('.slider', {
    effect: 'fade', autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true }, loop: true
  });
}

// Load site settings into page
function loadSiteSettings() {
  const s = DB.getSite();
  if (!s) return;

  // Brand
  document.querySelectorAll('#brandName').forEach(el => el.textContent = s.name);
  document.querySelectorAll('#footerBrand').forEach(el => el.textContent = s.name);
  document.querySelectorAll('#footerTagline').forEach(el => el.textContent = s.tagline);

  // Contact
  document.querySelectorAll('#hdrPhone').forEach(el => el.textContent = s.phone);
  document.querySelectorAll('#hdrEmail').forEach(el => el.textContent = s.email);
  document.querySelectorAll('#footerPhone').forEach(el => el.textContent = s.phone);
  document.querySelectorAll('#footerEmail').forEach(el => el.textContent = s.email);
  document.querySelectorAll('#footerAddr').forEach(el => el.textContent = s.address);

  const phoneEls = document.querySelectorAll('a[href^="tel:"]');
  phoneEls.forEach(el => el.href = 'tel:' + s.phone.replace(/[^+\d]/g, ''));
  const mailEls = document.querySelectorAll('a[href^="mailto:"]');
  mailEls.forEach(el => el.href = 'mailto:' + s.email);

  // Stats
  if (document.getElementById('statYears')) document.getElementById('statYears').textContent = s.years + '+';
  if (document.getElementById('statCountries')) document.getElementById('statCountries').textContent = s.countries + '+';
  if (document.getElementById('statFactory')) document.getElementById('statFactory').textContent = s.factory;
  if (document.getElementById('statCycles')) document.getElementById('statCycles').textContent = s.cycles + '+';

  // Certifications
  if (s.certifications) {
    const badges = s.certifications.map(c => `<span class="badge bg-light text-dark px-3 py-2 fs-6">${c}</span>`).join('');
    document.querySelectorAll('#certBadges').forEach(el => el.innerHTML = badges);
  }

  // Page title
  document.title = s.name + ' - ' + s.tagline;
}

// Load featured products on home page
function loadFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;
  const products = DB.getProducts().filter(p => p.featured);
  if (products.length === 0) {
    // fallback to first 4
    const all = DB.getProducts().slice(0, 4);
    container.innerHTML = all.map(renderProductCard).join('');
    return;
  }
  container.innerHTML = products.map(renderProductCard).join('');
}

function renderProductCard(p) {
  const pf = pathPrefix();
  const img = resolveImg(p.image, 'images/service1.jpg');
  return `
    <div class="col-md-6 col-lg-3">
      <div class="product-card card h-100">
        <img src="${img}" alt="${p.name}" onerror="this.src='${pf}images/service1.jpg'">
        <div class="card-body">
          <span class="badge bg-secondary mb-2">${p.category}</span>
          <h5 class="card-title">${p.name}</h5>
          <p class="text-muted small">${p.specs?.capacity || ''}</p>
          <div class="price">${fmtPrice(p.price, p.priceCN)}</div>
          <a href="product-detail.html?id=${p.id}" class="btn btn-outline-primary btn-sm w-100 mt-2">${t('View Details', '查看详情')}</a>
        </div>
      </div>
    </div>`;
}

// Load all products on products page
function loadAllProducts(filter) {
  const container = document.getElementById('allProducts');
  if (!container) return;
  let products = DB.getProducts();
  if (filter && filter !== 'all') products = products.filter(p => p.category === filter);
  if (products.length === 0) {
    container.innerHTML = '<div class="col-12 text-center py-5 text-muted"><h4>' + t('No products found', '暂无产品') + '</h4></div>';
    return;
  }
  container.innerHTML = products.map(renderProductCard).join('');
}

// Load product detail
function loadProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const p = DB.getProduct(id);
  if (!p) { container.innerHTML = '<div class="text-center py-5"><h3>' + t('Product not found', '未找到该产品') + '</h3></div>'; return; }

  document.title = p.name + ' - ' + DB.getSite().name;
  const pf = pathPrefix();
  const img = resolveImg(p.image, 'images/service1.jpg');

  container.innerHTML = `
    <div class="row g-5">
      <div class="col-lg-6">
        <div class="product-gallery">
          <img src="${img}" alt="${p.name}" class="shadow" onerror="this.src='${pf}images/service1.jpg'">
        </div>
        ${p.video ? `<div class="video-wrapper mt-4">${p.video.includes('youtube') ? `<iframe src="https://www.youtube.com/embed/${p.video.split('v=')[1]?.split('&')[0] || ''}" frameborder="0" allowfullscreen></iframe>` : p.video}</div>` : ''}
      </div>
      <div class="col-lg-6">
        <span class="badge bg-secondary mb-2">${p.category}</span>
        <h1 class="fw-bold mb-2">${p.name}</h1>
        <div class="price fs-3 mb-4">${fmtPrice(p.price, p.priceCN)}</div>
        <p class="mb-4">${p.description}</p>

        <h5 class="fw-bold mb-3">${t('Technical Specifications', '技术参数')}</h5>
        <table class="spec-table mb-4">
          ${Object.entries(p.specs || {}).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
        </table>

        <h5 class="fw-bold mb-3">${t('Key Features', '核心特点')}</h5>
        <ul class="mb-4">
          ${(p.features || []).map(f => `<li class="mb-2">${f}</li>`).join('')}
        </ul>

        <div class="d-flex gap-3">
          <input type="number" value="1" min="1" class="form-control" style="width:80px" id="productQty" onclick="this.select()">
          <button class="btn btn-primary px-4" onclick="addToCart(${p.id},parseInt(document.getElementById('productQty').value))">${t('Add to Cart', '加入购物车')}</button>
        </div>
      </div>
    </div>`;
}

// Load blog list
function loadBlogList() {
  const container = document.getElementById('blogList');
  if (!container) return;
  const posts = DB.getBlog();
  if (posts.length === 0) {
    container.innerHTML = '<div class="col-12 text-center py-5"><h4>' + t('No articles yet', '暂无文章') + '</h4></div>';
    return;
  }
  const pf = pathPrefix();
  container.innerHTML = posts.map(post => `
    <div class="col-md-6 col-lg-4">
      <div class="blog-card card h-100">
        <img src="${resolveImg(post.image, 'images/blog1.jpg')}" alt="${isZH() ? (post.titleCN || post.title) : post.title}" onerror="this.src='${pf}images/blog1.jpg'">
        <div class="card-body">
          <span class="badge bg-primary mb-2">${isZH() ? (post.categoryCN || post.category) : post.category}</span>
          <small class="text-muted d-block mb-2">${post.date}</small>
          <h5 class="card-title">${isZH() ? (post.titleCN || post.title) : post.title}</h5>
          <p class="text-muted">${isZH() ? (post.summaryCN || post.summary) : post.summary}</p>
          <a href="post.html?id=${post.id}" class="btn btn-outline-primary btn-sm">${t('Read More', '阅读全文')}</a>
        </div>
      </div>
    </div>`).join('');
}

// Load blog post detail
function loadBlogPost() {
  const container = document.getElementById('blogPostDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const post = DB.getBlog().find(p => p.id === id);
  if (!post) { container.innerHTML = '<div class="text-center py-5"><h3>' + t('Article not found', '未找到该文章') + '</h3></div>'; return; }

  document.title = post.title + ' - ' + DB.getSite().name;
  const pf = pathPrefix();
  const content = isZH() ? (post.contentCN || post.summaryCN || post.summary) : (post.content || post.summary);
  container.innerHTML = `
    <article>
      <img src="${resolveImg(post.image, 'images/blog1.jpg')}" alt="${post.title}" class="w-100 rounded-4 mb-4" style="max-height:400px;object-fit:cover" onerror="this.src='${pf}images/blog1.jpg'">
      <span class="badge bg-primary mb-2">${isZH() ? post.categoryCN : post.category}</span>
      <small class="text-muted d-block mb-3">${post.date}</small>
      <h1 class="fw-bold mb-4">${isZH() ? post.titleCN : post.title}</h1>
      <div class="fs-5 text-muted lh-lg mb-4">${isZH() ? (post.summaryCN || post.summary) : post.summary}</div>
      <div class="blog-content">${content}</div>
    </article>`;
}

// Load featured blog on home
function loadFeaturedBlog() {
  const container = document.getElementById('latestBlog');
  if (!container) return;
  const posts = DB.getBlog().slice(0, 3);
  const pf = pathPrefix();
  container.innerHTML = posts.map(post => `
    <div class="col-md-4">
      <div class="blog-card card h-100">
        <img src="${resolveImg(post.image, 'images/blog1.jpg')}" alt="${isZH() ? (post.titleCN || post.title) : post.title}" onerror="this.src='${pf}images/blog1.jpg'">
        <div class="card-body">
          <small class="text-muted">${post.date}</small>
          <h5>${isZH() ? (post.titleCN || post.title) : post.title}</h5>
          <p class="text-muted small">${isZH() ? (post.summaryCN || post.summary) : post.summary}</p>
          <a href="blog/post.html?id=${post.id}" class="btn btn-sm btn-outline-primary">${t('Read', '阅读')}</a>
        </div>
      </div>
    </div>`).join('');
}

// Contact form submit
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

// Load cart page
function loadCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  const cart = getCart();
  const products = DB.getProducts();
  const pf = pathPrefix();

  if (cart.length === 0) {
    container.innerHTML = '<div class="text-center py-5"><h4>' + t('Your cart is empty', '您的购物车是空的') + '</h4><a href="' + pf + 'products.html" class="btn btn-primary mt-3">' + t('Browse Products', '浏览产品') + '</a></div>';
    document.getElementById('cartTotal').textContent = '$0';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    total += p.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${resolveImg(p.image, 'images/service1.jpg')}" alt="${p.name}" onerror="this.src='${pf}images/service1.jpg'">
        <div class="flex-grow-1">
          <h6>${p.name}</h6>
          <small class="text-muted">${p.specs?.capacity || ''}</small>
        </div>
        <span>$${p.price.toLocaleString()}</span>
        <input type="number" class="form-control qty-input" value="${item.qty}" min="1" onchange="updateCartQty(${p.id},this.value)">
        <span class="fw-bold">$${(p.price * item.qty).toLocaleString()}</span>
        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${p.id})">${t('Remove', '移除')}</button>
      </div>`;
  }).join('');

  document.getElementById('cartTotal').textContent = '$' + total.toLocaleString();
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

// Fix language switch links to point to the corresponding page
function fixLangLinks() {
  const path = window.location.pathname;
  const langLinks = document.querySelectorAll('.lang-link');
  langLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Get current page filename
    const currentPage = path.split('/').pop() || 'index.html';
    // If link contains index.html and it's not the homepage, replace with current page
    if (link.textContent.includes('中文') && href.includes('/zh/')) {
      // Chinese link: point to corresponding zh/ page
      if (isZH()) return; // Already on Chinese page, skip
      const zhPath = href.replace(/\/zh\/index\.html$/, '/zh/' + currentPage);
      link.setAttribute('href', zhPath);
    } else if (link.textContent.includes('EN') && href.includes('/en/')) {
      // English link: point to corresponding en/ page
      if (!isZH()) return; // Already on English page, skip
      const enPath = href.replace(/\/en\/index\.html$/, '/en/' + currentPage);
      link.setAttribute('href', enPath);
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadSiteSettings();
  fixLangLinks();
  updateCartCount();
  initSwiper();
  loadFeaturedProducts();
  loadFeaturedBlog();
  loadAllProducts();
  loadProductDetail();
  loadBlogList();
  loadBlogPost();
  loadCart();
});
