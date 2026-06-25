/**
 * 数据管理模块 - 使用 localStorage 持久化
 * 管理产品、留言、网站设置等数据
 */
const DB = (function() {
  const KEYS = {
    PRODUCTS: 'haisic_products',
    MESSAGES: 'haisic_messages',
    SETTINGS: 'haisic_settings',
    ADMIN_AUTH: 'haisic_admin_auth'
  };

  // 默认管理员账号
  const DEFAULT_ADMIN = { username: 'admin', password: 'admin123' };

  // 初始化默认产品数据
  const defaultProducts = [
    {
      id: 1,
      name: '一体化储能系统 32kWh',
      category: 'residential',
      icon: '🏠',
      badge: '热销',
      description: '为住宅太阳能电池存储和全屋电池备份提供稳健高效的解决方案。采用高压混合储能系统设计，集成了32kWh LiFePO4电池组。',
      specs: { capacity: '32 kWh', chemistry: 'LiFePO4', voltage: '51.2V', cycles: '6000+', warranty: '10年' },
      features: ['高压混合储能设计', '可堆叠扩展容量', '智能BMS电池管理', '液冷散热系统'],
      createdAt: Date.now()
    },
    {
      id: 2,
      name: '商用储能电池柜',
      category: 'commercial',
      icon: '🏢',
      badge: '新品',
      description: '紧凑模块化设计，容量范围250kWh至2MWh，适用于中小型商业建筑或改造项目。支持与太阳能PV阵列无缝对接。',
      specs: { capacity: '250 kWh - 2 MWh', chemistry: 'LiFePO4', voltage: '三相', cycles: '6000+', warranty: '10年' },
      features: ['模块化柜式设计', 'UL 9540A安全认证', '智能温控管理', 'VPP虚拟电厂就绪'],
      createdAt: Date.now()
    },
    {
      id: 3,
      name: '集装箱式储能系统',
      category: 'commercial',
      icon: '🚢',
      badge: '',
      description: '50kWh-100kWh集装箱式储能系统，提供完全集成的即插即用方案，显著减少安装时间和复杂性。适用于中型到大型运营场景。',
      specs: { capacity: '50 - 100 kWh', chemistry: 'LiFePO4', voltage: '三相', cycles: '6000+', warranty: '10年' },
      features: ['即插即用集成方案', 'IP54防护等级', '内置消防系统', '远程监控管理'],
      createdAt: Date.now()
    },
    {
      id: 4,
      name: '壁挂式家用储能电池',
      category: 'residential',
      icon: '🔋',
      badge: '热销',
      description: '采用LiFePO4磷酸铁锂电芯，6000次循环寿命，壁挂式设计节省空间。支持智能App实时监控家庭能源使用情况。',
      specs: { capacity: '5 - 20 kWh', chemistry: 'LiFePO4', voltage: '48V/51.2V', cycles: '6000+', warranty: '10年' },
      features: ['壁挂式紧凑设计', '智能App监控', '峰值削峰填谷', '停电自动切换'],
      createdAt: Date.now()
    },
    {
      id: 5,
      name: '工业级储能块系统',
      category: 'industrial',
      icon: '🏭',
      badge: '',
      description: '为重工业储能设计，单机容量高达5MWh，应对电网级需求和大型制造负载。支持孤岛运行和黑启动功能。',
      specs: { capacity: '最高 5 MWh', chemistry: 'LiFePO4', voltage: '高压三相', cycles: '8000+', warranty: '15年' },
      features: ['电网级大容量', '黑启动功能', '多能源协调控制', '毫秒级响应'],
      createdAt: Date.now()
    },
    {
      id: 6,
      name: '离网太阳能储能系统',
      category: 'offgrid',
      icon: '☀️',
      badge: '推荐',
      description: '在偏远地区实现完全能源自给。独立系统整合太阳能发电与电池储能，无需电网支持，适合偏远站点和户外应用。',
      specs: { capacity: '10 - 100 kWh', chemistry: 'LiFePO4', voltage: '48V/72V', cycles: '6000+', warranty: '10年' },
      features: ['完全离网运行', '太阳能优先策略', '柴油发电机备用', '极端环境适应'],
      createdAt: Date.now()
    }
  ];

  // 默认网站设置
  const defaultSettings = {
    siteName: '海西储能',
    siteNameEn: 'Haisic Energy Storage',
    slogan: '专业LiFePO4储能电池制造商',
    phone: '+86 19974079502',
    email: 'celia@haisicstorage.com',
    address: '深圳市大鹏新区葵涌街道土洋第二工业区8号C栋',
    whatsapp: '+86 19974079502',
    wechat: 'haisic-storage',
    yearsExperience: '15+',
    factoryArea: '11000',
    countries: '60+',
    chargeCycles: '6000+',
    certifications: ['ISO9001', 'ISO14001', 'ISO45001', 'CE', 'FCC', 'CQC', 'RoHS', 'PSE', 'MSDS', 'UN38.3']
  };

  // 初始化
  function init() {
    if (!localStorage.getItem(KEYS.PRODUCTS)) {
      localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(defaultProducts));
    }
    if (!localStorage.getItem(KEYS.SETTINGS)) {
      localStorage.setItem(KEYS.SETTINGS, JSON.stringify(defaultSettings));
    }
    if (!localStorage.getItem(KEYS.MESSAGES)) {
      localStorage.setItem(KEYS.MESSAGES, JSON.stringify([]));
    }
  }

  // 产品 CRUD
  function getProducts() {
    return JSON.parse(localStorage.getItem(KEYS.PRODUCTS) || '[]');
  }
  function getProduct(id) {
    return getProducts().find(p => p.id === parseInt(id));
  }
  function saveProducts(products) {
    localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(products));
  }
  function addProduct(product) {
    const products = getProducts();
    product.id = Date.now();
    product.createdAt = Date.now();
    products.push(product);
    saveProducts(products);
    return product;
  }
  function updateProduct(id, data) {
    const products = getProducts();
    const idx = products.findIndex(p => p.id === parseInt(id));
    if (idx !== -1) {
      products[idx] = { ...products[idx], ...data };
      saveProducts(products);
      return products[idx];
    }
    return null;
  }
  function deleteProduct(id) {
    let products = getProducts();
    products = products.filter(p => p.id !== parseInt(id));
    saveProducts(products);
  }

  // 留言管理
  function getMessages() {
    return JSON.parse(localStorage.getItem(KEYS.MESSAGES) || '[]');
  }
  function addMessage(msg) {
    const messages = getMessages();
    msg.id = Date.now();
    msg.createdAt = Date.now();
    msg.status = 'unread'; // unread | read | replied
    messages.unshift(msg);
    localStorage.setItem(KEYS.MESSAGES, JSON.stringify(messages));
    return msg;
  }
  function updateMessageStatus(id, status) {
    const messages = getMessages();
    const idx = messages.findIndex(m => m.id === parseInt(id));
    if (idx !== -1) {
      messages[idx].status = status;
      localStorage.setItem(KEYS.MESSAGES, JSON.stringify(messages));
    }
  }
  function deleteMessage(id) {
    let messages = getMessages();
    messages = messages.filter(m => m.id !== parseInt(id));
    localStorage.setItem(KEYS.MESSAGES, JSON.stringify(messages));
  }

  // 设置管理
  function getSettings() {
    return JSON.parse(localStorage.getItem(KEYS.SETTINGS) || '{}');
  }
  function saveSettings(settings) {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  }

  // 管理员认证
  function login(username, password) {
    if (username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password) {
      const token = { username, loginAt: Date.now() };
      sessionStorage.setItem(KEYS.ADMIN_AUTH, JSON.stringify(token));
      return true;
    }
    return false;
  }
  function logout() {
    sessionStorage.removeItem(KEYS.ADMIN_AUTH);
  }
  function isLoggedIn() {
    return !!sessionStorage.getItem(KEYS.ADMIN_AUTH);
  }

  // 初始化
  init();

  return {
    getProducts, getProduct, addProduct, updateProduct, deleteProduct,
    getMessages, addMessage, updateMessageStatus, deleteMessage,
    getSettings, saveSettings,
    login, logout, isLoggedIn
  };
})();
