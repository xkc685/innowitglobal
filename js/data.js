// ========== InnoWit Energy Storage - Shared Data Layer ==========
const DB = {
  _key: 'innowit_db',

  defaults() {
    return {
      site: {
        name: 'InnoWit',
        nameCN: '英诺维特',
        tagline: 'Advanced LiFePO4 Energy Storage Solutions',
        taglineCN: '先进磷酸铁锂储能解决方案',
        phone: '+1 (555) 123-4567',
        email: 'info@innowitglobal.com',
        address: '123 Energy Drive, Tech Park, CA 94025, USA',
        whatsapp: '+1 (555) 987-6543',
        wechat: 'InnoWit_Energy',
        factory: '50,000 m²',
        years: '15+',
        countries: '30+',
        cycles: '6000+',
        certifications: ['CE', 'UL 1973', 'IEC 62619', 'UN38.3', 'RoHS', 'ISO 9001'],
        social: { facebook: '#', linkedin: '#', twitter: '#', youtube: '#' }
      },
      products: [
        {
          id: 1, name: 'InnoStack 5000', nameCN: '英诺堆叠 5000',
          category: 'residential', categoryCN: '住宅储能',
          price: 2499, priceCN: '¥17,999',
          image: 'images/products/innostack5000.jpg',
          video: '',
          specs: { capacity: '5.12 kWh', voltage: '51.2V', chemistry: 'LiFePO4', cycles: '6000+', warranty: '10 Years', weight: '48 kg' },
          features: ['Modular stackable design', 'Smart BMS protection', 'WiFi monitoring', 'IP65 waterproof', 'Zero maintenance'],
          featuresCN: ['模块化堆叠设计', '智能BMS保护', 'WiFi远程监控', 'IP65防水等级', '免维护设计'],
          description: 'InnoStack 5000 is a modular residential energy storage system designed for homes. With stackable 5.12kWh modules, it scales from 5kWh to 30kWh based on your needs.',
          descriptionCN: 'InnoStack 5000 是一款模块化住宅储能系统。采用可堆叠5.12kWh模块设计，可根据需求从5kWh扩展至30kWh。',
          featured: true
        },
        {
          id: 2, name: 'InnoWall 10K', nameCN: '英诺壁挂 10K',
          category: 'residential', categoryCN: '住宅储能',
          price: 4299, priceCN: '¥30,999',
          image: 'images/products/innowall10k.jpg',
          video: '',
          specs: { capacity: '10.24 kWh', voltage: '51.2V', chemistry: 'LiFePO4', cycles: '8000+', warranty: '12 Years', weight: '85 kg' },
          features: ['Ultra-slim wall-mount', 'Hybrid inverter ready', 'Peak shaving', 'Emergency backup', 'App control'],
          featuresCN: ['超薄壁挂设计', '兼容混合逆变器', '削峰填谷', '应急备电', 'APP远程控制'],
          description: 'InnoWall 10K is a high-capacity wall-mounted battery for residential energy storage. Its ultra-slim design saves space while delivering 10.24kWh of reliable backup power.',
          descriptionCN: 'InnoWall 10K 是一款大容量壁挂式家用储能电池。超薄设计节省空间，提供10.24kWh可靠备电。',
          featured: true
        },
        {
          id: 3, name: 'InnoCube C100', nameCN: '英诺立方 C100',
          category: 'commercial', categoryCN: '商业储能',
          price: 12999, priceCN: '¥93,999',
          image: 'images/products/innocubec100.jpg',
          video: '',
          specs: { capacity: '100 kWh', voltage: '768V', chemistry: 'LiFePO4', cycles: '8000+', warranty: '15 Years', weight: '920 kg' },
          features: ['Liquid cooling', 'Grid-forming capable', 'Fire suppression system', 'Remote diagnostics', 'Peak shaving automation'],
          featuresCN: ['液冷散热', '构网型支持', '消防抑制系统', '远程诊断', '自动削峰填谷'],
          description: 'InnoCube C100 is a commercial-grade energy storage cabinet delivering 100kWh capacity with liquid cooling. Ideal for office buildings, retail, and small industrial applications.',
          descriptionCN: 'InnoCube C100 是一款商业级储能柜，提供100kWh容量和液冷散热。适用于办公楼、零售和小型工业场景。',
          featured: true
        },
        {
          id: 4, name: 'InnoContainer M500', nameCN: '英诺集装箱 M500',
          category: 'industrial', categoryCN: '工业储能',
          price: 49999, priceCN: '¥359,999',
          image: 'images/products/innocontainer.jpg',
          video: '',
          specs: { capacity: '500 kWh', voltage: '768V', chemistry: 'LiFePO4', cycles: '10000+', warranty: '20 Years', weight: '4200 kg' },
          features: ['Containerized design', 'HVAC climate control', 'Grid services (VPP)', 'SCADA integration', '24/7 remote monitoring'],
          featuresCN: ['集装箱式设计', 'HVAC温控系统', '虚拟电厂服务', 'SCADA集成', '24/7远程监控'],
          description: 'InnoContainer M500 is a containerized utility-scale energy storage system. With 500kWh capacity, it supports grid services, renewable integration, and industrial peak shaving.',
          descriptionCN: 'InnoContainer M500 是集装箱式公用事业级储能系统。500kWh容量支持电网服务、可再生能源整合和工业削峰填谷。',
          featured: false
        },
        {
          id: 5, name: 'InnoPower Rack 48V', nameCN: '英诺动力机架 48V',
          category: 'offgrid', categoryCN: '离网系统',
          price: 1899, priceCN: '¥13,699',
          image: 'images/products/innopowerrack.jpg',
          video: '',
          specs: { capacity: '4.8 kWh', voltage: '48V', chemistry: 'LiFePO4', cycles: '5000+', warranty: '7 Years', weight: '42 kg' },
          features: ['19-inch rack mount', 'Parallel up to 16 units', 'Solar charge ready', 'Deep discharge protection', 'Plug & play'],
          featuresCN: ['19英寸机架安装', '支持16台并联', '太阳能充电就绪', '深度放电保护', '即插即用'],
          description: 'InnoPower Rack 48V is a rack-mounted battery system for off-grid and telecom applications. Compact 19-inch form factor with parallel capability up to 76.8kWh.',
          descriptionCN: 'InnoPower Rack 48V 是机架式电池系统，用于离网和通信场景。紧凑19英寸规格，支持并联扩展至76.8kWh。',
          featured: false
        },
        {
          id: 6, name: 'InnoCell Pro', nameCN: '英诺电芯 Pro',
          category: 'components', categoryCN: '电芯组件',
          price: 199, priceCN: '¥1,429',
          image: 'images/products/innocellpro.jpg',
          video: '',
          specs: { capacity: '3.2V 280Ah', voltage: '3.2V', chemistry: 'LiFePO4', cycles: '6000+', warranty: '5 Years', weight: '5.4 kg' },
          features: ['Grade A cells', 'Laser-welded terminals', 'Individual QR traceability', 'Low IR matched', 'UN38.3 certified'],
          featuresCN: ['A品电芯', '激光焊接端子', '独立二维码追溯', '低内阻匹配', 'UN38.3认证'],
          description: 'InnoCell Pro is our premium individual LiFePO4 cell for battery pack assembly. Grade A cells with full traceability for OEM and DIY applications.',
          descriptionCN: 'InnoCell Pro 是用于电池组组装的高级单体磷酸铁锂电芯。A品电芯，全追溯体系，适用于OEM和DIY场景。',
          featured: false
        }
      ],
      blog: [
        {
          id: 1, date: '2026-06-15',
          title: 'LiFePO4 vs NMC: Which Battery Chemistry Wins for Home Storage?',
          titleCN: '磷酸铁锂 vs 三元锂：家用储能哪种电池化学更胜一筹？',
          summary: 'A comprehensive comparison of LiFePO4 and NMC battery chemistries for residential energy storage applications.',
          summaryCN: '全面对比磷酸铁锂与三元锂电池化学在住宅储能应用中的表现。',
          image: 'images/blog1.jpg',
          category: 'Technology',
          categoryCN: '技术'
        },
        {
          id: 2, date: '2026-06-01',
          title: 'The Complete Guide to Solar + Storage ROI in 2026',
          titleCN: '2026年光伏+储能投资回报率完整指南',
          summary: 'Calculate your return on investment for solar-plus-storage systems with our detailed analysis.',
          summaryCN: '通过详细分析计算光伏+储能系统的投资回报率。',
          image: 'images/blog2.jpg',
          category: 'Guide',
          categoryCN: '指南'
        },
        {
          id: 3, date: '2026-05-20',
          title: 'How Energy Storage is Transforming Commercial Buildings',
          titleCN: '储能如何改变商业建筑用能方式',
          summary: 'Explore how battery storage systems are revolutionizing energy management in commercial real estate.',
          summaryCN: '探索电池储能系统如何在商业地产中革新能源管理。',
          image: 'images/blog3.jpg',
          category: 'Industry',
          categoryCN: '行业'
        }
      ],
      messages: []
    };
  },

  get() {
    try {
      const raw = localStorage.getItem(this._key);
      return raw ? JSON.parse(raw) : this.defaults();
    } catch (e) { return this.defaults(); }
  },

  set(data) { localStorage.setItem(this._key, JSON.stringify(data)); },

  reset() { this.set(this.defaults()); return this.defaults(); },

  getSite() { return this.get().site; },
  updateSite(updates) { const d = this.get(); Object.assign(d.site, updates); this.set(d); return d.site; },

  getProducts() { return this.get().products; },
  getProduct(id) { return this.get().products.find(p => p.id === id); },
  saveProduct(product) {
    const d = this.get();
    const idx = d.products.findIndex(p => p.id === product.id);
    if (idx >= 0) d.products[idx] = product;
    else { product.id = Date.now(); d.products.push(product); }
    this.set(d); return product;
  },
  deleteProduct(id) { const d = this.get(); d.products = d.products.filter(p => p.id !== id); this.set(d); },

  getBlog() { return this.get().blog; },
  savePost(post) {
    const d = this.get();
    const idx = d.blog.findIndex(p => p.id === post.id);
    if (idx >= 0) d.blog[idx] = post;
    else { post.id = Date.now(); d.blog.push(post); }
    this.set(d);
  },
  deletePost(id) { const d = this.get(); d.blog = d.blog.filter(p => p.id !== id); this.set(d); },

  getMessages() { return this.get().messages; },
  addMessage(msg) { const d = this.get(); msg.id = Date.now(); msg.read = false; msg.date = new Date().toISOString(); d.messages.unshift(msg); this.set(d); },
  markRead(id) { const d = this.get(); const m = d.messages.find(m => m.id === id); if (m) m.read = true; this.set(d); },
  deleteMessage(id) { const d = this.get(); d.messages = d.messages.filter(m => m.id !== id); this.set(d); },

  backup() {
    const d = this.get();
    const blob = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'innowit-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
  },

  restore(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      if (!data.site || !data.products) throw new Error('Invalid backup');
      this.set(data);
      return true;
    } catch (e) { return false; }
  }
};

// Helper: get language from URL path
function getLang() {
  const path = window.location.pathname;
  return path.includes('/zh/') ? 'zh' : 'en';
}

// Helper: get localized text
function L(en, zh) { return getLang() === 'zh' ? zh : en; }

// Helper: format currency
function fmtPrice(price, priceCN) { return getLang() === 'zh' ? priceCN : '$' + price.toLocaleString(); }
