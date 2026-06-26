// ========== InnoWit Frontend Site Logic ==========

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
  alert('Added to cart!');
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
  const img = p.image || '../images/service1.jpg';
  return `
    <div class="col-md-6 col-lg-3">
      <div class="product-card card h-100">
        <img src="${img}" alt="${p.name}" onerror="this.src='../images/service1.jpg'">
        <div class="card-body">
          <span class="badge bg-secondary mb-2">${p.category}</span>
          <h5 class="card-title">${p.name}</h5>
          <p class="text-muted small">${p.specs?.capacity || ''}</p>
          <div class="price">${fmtPrice(p.price, p.priceCN)}</div>
          <a href="product-detail.html?id=${p.id}" class="btn btn-outline-primary btn-sm w-100 mt-2">View Details</a>
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
    container.innerHTML = '<div class="col-12 text-center py-5 text-muted"><h4>No products found</h4></div>';
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
  if (!p) { container.innerHTML = '<div class="text-center py-5"><h3>Product not found</h3></div>'; return; }

  document.title = p.name + ' - ' + DB.getSite().name;
  const img = p.image || '../images/service1.jpg';

  container.innerHTML = `
    <div class="row g-5">
      <div class="col-lg-6">
        <div class="product-gallery">
          <img src="${img}" alt="${p.name}" class="shadow" onerror="this.src='../images/service1.jpg'">
        </div>
        ${p.video ? `<div class="video-wrapper mt-4">${p.video.includes('youtube') ? `<iframe src="https://www.youtube.com/embed/${p.video.split('v=')[1]?.split('&')[0] || ''}" frameborder="0" allowfullscreen></iframe>` : p.video}</div>` : ''}
      </div>
      <div class="col-lg-6">
        <span class="badge bg-secondary mb-2">${p.category}</span>
        <h1 class="fw-bold mb-2">${p.name}</h1>
        <div class="price fs-3 mb-4">${fmtPrice(p.price, p.priceCN)}</div>
        <p class="mb-4">${p.description}</p>

        <h5 class="fw-bold mb-3">Technical Specifications</h5>
        <table class="spec-table mb-4">
          ${Object.entries(p.specs || {}).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
        </table>

        <h5 class="fw-bold mb-3">Key Features</h5>
        <ul class="mb-4">
          ${(p.features || []).map(f => `<li class="mb-2">${f}</li>`).join('')}
        </ul>

        <div class="d-flex gap-3">
          <input type="number" value="1" min="1" class="form-control" style="width:80px" id="productQty" onclick="this.select()">
          <button class="btn btn-primary px-4" onclick="addToCart(${p.id},parseInt(document.getElementById('productQty').value))">Add to Cart</button>
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
    container.innerHTML = '<div class="col-12 text-center py-5"><h4>No articles yet</h4></div>';
    return;
  }
  container.innerHTML = posts.map(post => `
    <div class="col-md-6 col-lg-4">
      <div class="blog-card card h-100">
        <img src="${post.image || '../images/blog1.jpg'}" alt="${post.title}" onerror="this.src='../images/blog1.jpg'">
        <div class="card-body">
          <span class="badge bg-primary mb-2">${post.category}</span>
          <small class="text-muted d-block mb-2">${post.date}</small>
          <h5 class="card-title">${post.title}</h5>
          <p class="text-muted">${post.summary}</p>
          <a href="post.html?id=${post.id}" class="btn btn-outline-primary btn-sm">Read More</a>
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
  if (!post) { container.innerHTML = '<div class="text-center py-5"><h3>Article not found</h3></div>'; return; }

  document.title = post.title + ' - Blog - ' + DB.getSite().name;
  container.innerHTML = `
    <article>
      <img src="${post.image || '../images/blog1.jpg'}" alt="${post.title}" class="w-100 rounded-4 mb-4" style="max-height:400px;object-fit:cover">
      <span class="badge bg-primary mb-2">${post.category}</span>
      <small class="text-muted d-block mb-3">${post.date}</small>
      <h1 class="fw-bold mb-4">${post.title}</h1>
      <div class="fs-5 text-muted lh-lg">${post.summary}</div>
    </article>`;
}

// Load featured blog on home
function loadFeaturedBlog() {
  const container = document.getElementById('latestBlog');
  if (!container) return;
  const posts = DB.getBlog().slice(0, 3);
  container.innerHTML = posts.map(post => `
    <div class="col-md-4">
      <div class="blog-card card h-100">
        <img src="${post.image || '../images/blog1.jpg'}" alt="${post.title}" onerror="this.src='../images/blog1.jpg'">
        <div class="card-body">
          <small class="text-muted">${post.date}</small>
          <h5>${post.title}</h5>
          <p class="text-muted small">${post.summary}</p>
          <a href="blog/post.html?id=${post.id}" class="btn btn-sm btn-outline-primary">Read</a>
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
  if (!msg.name || !msg.email || !msg.message) { alert('Please fill required fields'); return; }
  DB.addMessage(msg);
  alert('Message sent! We will get back to you soon.');
  document.querySelectorAll('#contactName,#contactEmail,#contactPhone,#contactSubject,#contactMessage').forEach(el => el.value = '');
}

// Load cart page
function loadCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  const cart = getCart();
  const products = DB.getProducts();

  if (cart.length === 0) {
    container.innerHTML = '<div class="text-center py-5"><h4>Your cart is empty</h4><a href="../products.html" class="btn btn-primary mt-3">Browse Products</a></div>';
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
        <img src="${p.image || '../images/service1.jpg'}" alt="${p.name}" onerror="this.src='../images/service1.jpg'">
        <div class="flex-grow-1">
          <h6>${p.name}</h6>
          <small class="text-muted">${p.specs?.capacity || ''}</small>
        </div>
        <span>$${p.price.toLocaleString()}</span>
        <input type="number" class="form-control qty-input" value="${item.qty}" min="1" onchange="updateCartQty(${p.id},this.value)">
        <span class="fw-bold">$${(p.price * item.qty).toLocaleString()}</span>
        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${p.id})">Remove</button>
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadSiteSettings();
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
