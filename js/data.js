// ========== InnoWit Energy Storage - Shared Data Layer ==========
const DB = {
  _key: 'innowit_db',
  _version: 8,

  defaults() {
    return {
      _version: 8,
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
          image: 'images/products/innostack5000.jpg?v=2',
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
          image: 'images/products/innowall10k.jpg?v=2',
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
          image: 'images/products/innocubec100.jpg?v=2',
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
          image: 'images/products/innocontainer.jpg?v=2',
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
          image: 'images/products/innopowerrack.jpg?v=2',
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
          image: 'images/products/innocellpro.jpg?v=2',
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
        },
        {
          id: 4, date: '2023-12-31',
          title: 'Energy Storage Applications: Generation, Grid, and User Side',
          titleCN: '储能系统在发电侧、电网侧、用户侧应用介绍',
          summary: 'A comprehensive overview of how energy storage systems are applied across generation-side, grid-side, and user-side scenarios, including peak shaving, frequency regulation, and arbitrage.',
          summaryCN: '全面介绍储能系统在发电侧、电网侧、用户侧三大场景中的应用，涵盖调峰填谷、调频、峰谷套利等核心功能。',
          image: 'images/blog1.jpg',
          category: 'Knowledge',
          categoryCN: '知识',
          content: '<h2><span class="section-num">01</span>Generation-Side Energy Storage</h2><p>Generation-side energy storage (also known as power-supply-side storage) is primarily built at thermal power plants, wind farms, and photovoltaic stations. It serves as supporting infrastructure to ensure safe and stable power system operation, including traditional pumped-hydro storage and new types such as electrochemical, compressed-air, and compressed-CO2 storage.</p><table><thead><tr><th>Application</th><th>Description</th></tr></thead><tbody><tr><td><strong>Renewable Smoothing</strong></td><td>Smooths intermittent and volatile renewable output through storage stations, meeting grid connection requirements.</td></tr><tr><td><strong>Renewable Consumption</strong></td><td>Stores surplus renewable energy during high generation and releases it during low generation, reducing curtailment of wind and solar.</td></tr><tr><td><strong>Peak Shaving</strong></td><td>Charges batteries during low-demand periods and discharges during peak-demand periods, achieving load leveling.</td></tr><tr><td><strong>Frequency Regulation</strong></td><td>When system frequency deviates from target, grid-connected entities adjust active output to reduce frequency deviation. China\'s grid frequency is 50Hz with normal deviation of ±0.2Hz for large systems.</td></tr><tr><td><strong>Ancillary Dynamic Operation</strong></td><td>Combines storage with conventional units to improve efficiency and defer new unit construction.</td></tr></tbody></table><h2><span class="section-num">02</span>Grid-Side Energy Storage</h2><p>Grid-side energy storage refers to storage resources that can be uniformly dispatched by power dispatching agencies, respond to grid flexibility demands, and play a systemic role. The location of storage projects is not restricted, and investment entities are diverse.</p><table><thead><tr><th>Application</th><th>Description</th></tr></thead><tbody><tr><td><strong>Relieving Transmission Congestion</strong></td><td>When line congestion occurs, stores unsent electricity in storage devices upstream; discharges when line load falls below capacity.</td></tr><tr><td><strong>Deferring Grid Upgrades</strong></td><td>Improves transmission capacity and asset utilization, deferring costly grid upgrade investments.</td></tr><tr><td><strong>Grid Security & Reliability</strong></td><td>Provides fast power buffering, absorbs or supplements energy, and offers active/reactive compensation to stabilize grid voltage.</td></tr></tbody></table><h2><span class="section-num">03</span>User-Side Energy Storage</h2><p>User-side energy storage is built to reduce electricity costs and minimize outage losses across various user scenarios. In China, the primary profit model for commercial & industrial storage is peak-valley price arbitrage — charging during low-price periods and discharging during high-price periods.</p><table><thead><tr><th>Application</th><th>Description</th></tr></thead><tbody><tr><td><strong>Distributed Energy Consumption</strong></td><td>Balances generation and load in microgrids with high penetration of distributed renewables, maximizing renewable utilization.</td></tr><tr><td><strong>Peak-Valley Arbitrage</strong></td><td>Charges at low prices and discharges at high prices to capture price spreads and reduce electricity costs.</td></tr><tr><td><strong>Power Quality Improvement</strong></td><td>Uses spare storage capacity to address low power factor, voltage imbalance, and other power quality issues.</td></tr><tr><td><strong>Demand Response</strong></td><td>Participates in demand response programs by storing at low prices and discharging at high prices, earning subsidies or discounted rates.</td></tr><tr><td><strong>Supply Reliability</strong></td><td>During outages, supplies stored energy to end users, preventing disruption during fault repair.</td></tr></tbody></table><blockquote>Energy storage across generation, grid, and user sides collectively forms the backbone of a modern, flexible, and resilient power system — enabling higher renewable penetration, lower costs, and greater reliability.</blockquote>',
          contentCN: '<h2><span class="section-num">01</span>发电侧储能</h2><p>发电侧储能（也称电源侧储能、供电侧储能）主要建设在火电厂、风电场、光伏电站，是各类发电厂用来促进电力系统安全平稳运行的配套设施，包括以抽水蓄能为主的传统储能和以电化学储能、压缩空气储能、压缩二氧化碳储能等为代表的新型储能。</p><table><thead><tr><th>主要用途</th><th>详解</th></tr></thead><tbody><tr><td><strong>可再生能源平滑出力</strong></td><td>通过建设储能电站平抑可再生能源发电出力波动，对随机性、间歇性和波动性的可再生能源发电出力进行平滑控制，满足并网要求。</td></tr><tr><td><strong>促进可再生能源消纳</strong></td><td>储能系统在资源充足时将可再生能源的多发电量存储起来，在资源不足时输送出去，有效缓解新能源电站弃风、弃光现象。</td></tr><tr><td><strong>电力调峰</strong></td><td>发电厂在用电负荷低谷时段对电池充电，在用电负荷高峰时段将存储的电量释放，实现用电负荷的削峰填谷。</td></tr><tr><td><strong>系统调频</strong></td><td>频率的变化会影响发电及用电设备的安全高效运行及寿命。电力系统频率偏离目标频率时，并网主体通过调频系统、自动功率控制等方式，调整有功出力减少频率偏差。中国电网额定频率为50Hz，对3GW以上的大容量系统，正常频率偏差运行值为±0.2Hz，小系统则为±0.5Hz。</td></tr><tr><td><strong>辅助动态运行</strong></td><td>通过储能与传统机组结合，辅助动态运行，提高传统机组运行效率，延缓新建机组。</td></tr></tbody></table><h2><span class="section-num">02</span>电网侧储能</h2><p>电网侧储能是指电力系统中能接受电力调度机构统一调度、响应电网灵活性需求、能发挥全局性、系统性作用的储能资源。这一定义下，储能项目建设位置不受限制，投资建设主体具有多样性。</p><table><thead><tr><th>主要用途</th><th>详解</th></tr></thead><tbody><tr><td><strong>缓解输变电阻塞</strong></td><td>将储能系统安装在线路上游，当发生线路阻塞时可将无法输送的电能储存到储能设备中，等到线路负荷小于线路容量时，储能系统再向线路放电。</td></tr><tr><td><strong>延缓电网升级改造</strong></td><td>储能设备安装在电网中，可提升电网的输送能力，提高能源利用效率和电网整体资产利用水平，从而延缓电网升级改造。</td></tr><tr><td><strong>提高电网安全性和可靠性</strong></td><td>储能设备可提供功率快速缓冲，吸收或补充电能，提供有功功率支撑，进行有功或无功补偿，以稳定、平滑电网电压的波动。</td></tr></tbody></table><h2><span class="section-num">03</span>用户侧储能</h2><p>用户侧储能通常是指在不同的用户用电场景下，根据用户的诉求，以降低用户用电成本、减少停电限电损失等为目的建设的储能电站。我国目前工商业储能最主要的盈利方式是峰谷电价差套利——用户侧储能能够帮助用户在电网低谷时充电，白天用电高峰时放电，达到节约用电成本的目的。</p><table><thead><tr><th>主要用途</th><th>详解</th></tr></thead><tbody><tr><td><strong>促进分布式能源消纳</strong></td><td>微电网系统中有较大比例的分布式新能源电源，配置储能系统可以调节发电与负荷之间的平衡，最大化地利用可再生能源。</td></tr><tr><td><strong>峰谷价差套利</strong></td><td>在实施峰谷电价的电力市场中，通过低电价时储能系统充电，高电价时储能系统放电，实现峰谷电价差套利，降低用电成本。</td></tr><tr><td><strong>提升电能质量</strong></td><td>利用储能冗余容量治理生产过程中出现的功率因数低、电压不平衡等电能质量问题。</td></tr><tr><td><strong>需求响应</strong></td><td>储能系统通过高储低放参与需求响应，获得补贴或优惠电价。</td></tr><tr><td><strong>保证供电可靠性</strong></td><td>发生停电故障时，储能能够将储备的能量供应给终端用户，避免故障修复过程中的电能中断，保证供电可靠性。</td></tr></tbody></table><blockquote>发电侧、电网侧、用户侧储能共同构成了现代电力系统灵活性调节的基础——更高的可再生能源消纳率、更低的用电成本、更可靠的供电保障。</blockquote>'
        }
      ],
      messages: []
    };
  },

  get() {
    try {
      const raw = localStorage.getItem(this._key);
      if (!raw) return this.defaults();
      const data = JSON.parse(raw);
      if (!data._version || data._version < this._version) {
        this.set(this.defaults());
        return this.defaults();
      }
      return data;
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
