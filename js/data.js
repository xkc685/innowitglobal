// ========== InnoWit Energy Storage - Shared Data Layer (v2.0 Dark Tech) ==========
const DB = {
  _key: 'innowit_db',
  _version: 20,

  defaults() {
    return {
      _version: 20,
      site: {
        name: 'InnoWit',
        nameCN: '英诺维特',
        tagline: 'Advanced Energy Storage Solutions',
        taglineCN: '先进储能解决方案',
        phone: '+86 755 1234 5678',
        email: 'sales@innowitglobal.com',
        address: 'Shenzhen High-Tech Park, Guangdong, China',
        whatsapp: '+86 138 0000 0000',
        wechat: 'InnoWit_Energy',
        factory: '10,000 m²',
        years: '15+',
        countries: '100+',
        patents: '50+',
        cycles: '6000+',
        certifications: ['CE', 'UL 1973', 'IEC 62619', 'UN38.3', 'RoHS', 'ISO 9001', 'ISO 14001'],
        social: { facebook: '#', linkedin: '#', twitter: '#', youtube: '#' }
      },
      categories: [
        { id: 'lithium-battery', name: 'Lithium Battery', nameCN: '锂电池', icon: 'mdi:battery-charging', desc: 'LiFePO4 battery for home and commercial applications.', descCN: '磷酸铁锂电池，适用于家庭和商业场景。' },
        { id: 'ess', name: 'Energy Storage System', nameCN: '储能系统', icon: 'mdi:solar-power', desc: 'Flexible modular design for residential, commercial, and utility-scale storage.', descCN: '模块化设计，覆盖住宅、商业和公用事业级储能。' },
        { id: 'ev-charger', name: 'EV Charger', nameCN: 'EV充电桩', icon: 'mdi:ev-station', desc: 'All-in-one fast charging stations for home and public use.', descCN: '一体化快充充电站，适用于家庭和公共场景。' },
        { id: 'inverter', name: 'Solar Inverter', nameCN: '太阳能逆变器', icon: 'mdi:sine-wave', desc: 'Hybrid and off-grid inverters for seamless energy management.', descCN: '混合和离网逆变器，实现无缝能源管理。' }
      ],
      products: [
        // === Lithium Battery ===
        {
          id: 1, name: 'InnoWall 5K', nameCN: 'InnoWall 5K 壁挂电池',
          category: 'lithium-battery', subcategory: 'Residential',
          price: 2499, priceCN: '¥17,999',
          image: 'images/products/innowall10k.jpg?v=4',
          specs: { 'Voltage': '51.2V', 'Capacity': '100Ah', 'Energy': '5.12 kWh', 'Battery Type': 'LiFePO4', 'Cycle Life': '6000+ Cycles', 'Dimension (W×L×H)': '460×543×202mm', 'Weight': '45 kg', 'Protection': 'IP21', 'Configuration': '16S1P' },
          features: [
            { title: 'Real-Time Monitoring', desc: 'Large display with on/off controls for energy status and health.', icon: 'mdi:monitor' },
            { title: 'Modular Scalability', desc: 'Expand from 5kWh to 80kWh+ via 16 parallel units.', icon: 'mdi:expand-arrows' },
            { title: 'Ultra-Safe Design', desc: 'UL-certified LiFePO4 cells + multi-layer BMS for overcharge/thermal protection.', icon: 'mdi:shield-check' },
            { title: 'Inverter Compatibility', desc: 'Seamless integration with SolarEdge, SMA, and other leading brands.', icon: 'mdi:swap-horizontal' },
            { title: 'High Power Performance', desc: '0.5C fast charging (2hrs full) and 1C discharge for peak loads.', icon: 'mdi:flash' },
            { title: 'Space-Saving', desc: 'Slim wall-mounted installation reduces floor space by 60%.', icon: 'mdi:wall' }
          ],
          featuresCN: ['实时监控', '模块化扩展', '超高安全性', '逆变器兼容', '高功率性能', '节省空间'],
          description: 'A compact, lightweight energy solution featuring LiFePO4 cells and advanced BMS for protection against overcharge, overheating, and short circuits. Enables remote monitoring via smart devices, real-time parameter tracking, and seamless integration into homes. Optimizes energy costs with peak shaving/valley filling, provides backup power during outages, and ensures eco-friendly operation.',
          descriptionCN: '紧凑轻便的能源解决方案，采用磷酸铁锂电芯和先进BMS，提供过充、过热和短路保护。支持智能设备远程监控、实时参数追踪和无缝家居集成。通过削峰填谷优化能源成本，在停电时提供备用电源，确保环保运行。',
          featured: true
        },
        {
          id: 2, name: 'InnoWall 10K', nameCN: 'InnoWall 10K 壁挂电池',
          category: 'lithium-battery', subcategory: 'Residential',
          price: 4299, priceCN: '¥30,999',
          image: 'images/products/innowall10k.jpg?v=4',
          specs: { 'Voltage': '51.2V', 'Capacity': '200Ah', 'Energy': '10.24 kWh', 'Battery Type': 'LiFePO4', 'Cycle Life': '8000+ Cycles', 'Dimension (W×L×H)': '460×543×220mm', 'Weight': '85 kg', 'Protection': 'IP65', 'Configuration': '16S2P' },
          features: [
            { title: 'Ultra-Slim Wall-Mount', desc: 'Space-saving design that mounts flush against any wall.', icon: 'mdi:wall' },
            { title: 'Hybrid Inverter Ready', desc: 'Compatible with all major hybrid inverter brands.', icon: 'mdi:swap-horizontal' },
            { title: 'Peak Shaving', desc: 'Automatically shifts energy usage to off-peak hours.', icon: 'mdi:chart-line' },
            { title: 'Emergency Backup', desc: 'Seamless switchover during power outages.', icon: 'mdi:backup-restore' },
            { title: 'App Control', desc: 'Full control via iOS/Android app with cloud connectivity.', icon: 'mdi:cellphone' }
          ],
          featuresCN: ['超薄壁挂', '混合逆变器就绪', '削峰填谷', '应急备电', 'APP控制'],
          description: 'InnoWall 10K is a high-capacity wall-mounted battery for residential energy storage. Its ultra-slim design saves space while delivering 10.24kWh of reliable backup power with 8000+ cycle life.',
          descriptionCN: 'InnoWall 10K 是一款大容量壁挂式家用储能电池。超薄设计节省空间，提供10.24kWh可靠备电，循环寿命超过8000次。',
          featured: true
        },
        {
          id: 3, name: 'InnoCube C100', nameCN: 'InnoCube C100 商业储能柜',
          category: 'lithium-battery', subcategory: 'Commercial',
          price: 12999, priceCN: '¥93,999',
          image: 'images/products/innocubec100.jpg?v=4',
          specs: { 'Voltage': '768V', 'Capacity': '130Ah', 'Energy': '100 kWh', 'Battery Type': 'LiFePO4', 'Cycle Life': '8000+ Cycles', 'Dimension (W×L×H)': '1200×800×1800mm', 'Weight': '920 kg', 'Protection': 'IP54', 'Cooling': 'Liquid Cooling' },
          features: [
            { title: 'Liquid Cooling', desc: 'Advanced thermal management for optimal performance.', icon: 'mdi:snowflake' },
            { title: 'Grid-Forming Capable', desc: 'Can operate in island mode and form local grids.', icon: 'mdi:transmission-tower' },
            { title: 'Fire Suppression', desc: 'Built-in fire suppression system for maximum safety.', icon: 'mdi:fire-extinguisher' },
            { title: 'Remote Diagnostics', desc: 'Cloud-based monitoring and predictive maintenance.', icon: 'mdi:cloud-cog' },
            { title: 'Peak Shaving Automation', desc: 'AI-driven load prediction and energy optimization.', icon: 'mdi:robot' }
          ],
          featuresCN: ['液冷散热', '构网型支持', '消防系统', '远程诊断', '智能削峰'],
          description: 'InnoCube C100 is a commercial-grade energy storage cabinet delivering 100kWh capacity with liquid cooling. Ideal for office buildings, retail, and small industrial applications.',
          descriptionCN: 'InnoCube C100 是商业级储能柜，提供100kWh容量和液冷散热。适用于办公楼、零售和小型工业场景。',
          featured: true
        },
        {
          id: 4, name: 'InnoCell Pro 280Ah', nameCN: 'InnoCell Pro 280Ah 电芯',
          category: 'lithium-battery', subcategory: 'Cells',
          price: 199, priceCN: '¥1,429',
          image: 'images/products/innocellpro.jpg?v=4',
          specs: { 'Voltage': '3.2V', 'Capacity': '280Ah', 'Energy': '0.896 kWh', 'Battery Type': 'LiFePO4', 'Cycle Life': '6000+ Cycles', 'Dimension (W×L×H)': '72×174×207mm', 'Weight': '5.4 kg', 'Configuration': 'Grade A', 'Certification': 'UN38.3' },
          features: [
            { title: 'Grade A Cells', desc: 'Premium quality cells with strict quality control.', icon: 'mdi:medal' },
            { title: 'Laser-Welded Terminals', desc: 'Professional-grade terminals for reliable connection.', icon: 'mdi:welding' },
            { title: 'QR Traceability', desc: 'Individual QR code for full lifecycle tracking.', icon: 'mdi:qrcode' },
            { title: 'Low IR Matched', desc: 'Matched internal resistance for optimal pack performance.', icon: 'mdi:resistor' },
            { title: 'UN38.3 Certified', desc: 'Passes all UN transport safety tests.', icon: 'mdi:certificate' }
          ],
          featuresCN: ['A品电芯', '激光焊接端子', '二维码追溯', '低内阻匹配', 'UN38.3认证'],
          description: 'Premium individual LiFePO4 cell for battery pack assembly. Grade A cells with full traceability for OEM and DIY applications.',
          descriptionCN: '用于电池组组装的高级单体磷酸铁锂电芯。A品电芯，全追溯体系，适用于OEM和DIY场景。',
          featured: false
        },
        // === Energy Storage System ===
        {
          id: 5, name: 'InnoStack 5000', nameCN: 'InnoStack 5000 堆叠储能',
          category: 'ess', subcategory: 'Residential ESS',
          price: 3499, priceCN: '¥24,999',
          image: 'images/products/innostack5000.jpg?v=4',
          specs: { 'System Capacity': '5.12 kWh (expandable to 30kWh)', 'Voltage': '51.2V', 'Battery Type': 'LiFePO4', 'Cycle Life': '6000+ Cycles', 'Warranty': '10 Years', 'Weight': '48 kg per module', 'Inverter': 'Built-in 5kW Hybrid', 'Protection': 'IP65' },
          features: [
            { title: 'Modular Stackable Design', desc: 'Stack from 5kWh to 30kWh by adding modules.', icon: 'mdi:view-module' },
            { title: 'Built-in Hybrid Inverter', desc: '5kW hybrid inverter integrated, no extra equipment needed.', icon: 'mdi:sine-wave' },
            { title: 'Smart BMS Protection', desc: 'Multi-layer battery management for safety and longevity.', icon: 'mdi:shield-check' },
            { title: 'WiFi Monitoring', desc: 'Real-time monitoring from anywhere via app.', icon: 'mdi:wifi' },
            { title: 'IP65 Waterproof', desc: 'Suitable for indoor and outdoor installation.', icon: 'mdi:water' },
            { title: 'Zero Maintenance', desc: 'Set-and-forget design with automatic operation.', icon: 'mdi:auto-fix' }
          ],
          featuresCN: ['模块化堆叠', '内置混合逆变器', '智能BMS', 'WiFi监控', 'IP65防水', '免维护'],
          description: 'InnoStack 5000 is a modular residential energy storage system with built-in hybrid inverter. Stackable 5.12kWh modules scale from 5kWh to 30kWh based on your needs.',
          descriptionCN: 'InnoStack 5000 是模块化住宅储能系统，内置混合逆变器。可堆叠5.12kWh模块，从5kWh扩展至30kWh。',
          featured: true
        },
        {
          id: 6, name: 'InnoContainer M500', nameCN: 'InnoContainer M500 集装箱储能',
          category: 'ess', subcategory: 'Commercial & Industrial ESS',
          price: 49999, priceCN: '¥359,999',
          image: 'images/products/innocontainer.jpg?v=4',
          specs: { 'System Capacity': '500 kWh', 'Voltage': '768V', 'Battery Type': 'LiFePO4', 'Cycle Life': '10000+ Cycles', 'Warranty': '20 Years', 'Container Size': '20ft Standard', 'Cooling': 'HVAC', 'Grid Services': 'VPP Ready' },
          features: [
            { title: 'Containerized Design', desc: '20ft standard container, transport-ready and plug-and-play.', icon: 'mdi:container' },
            { title: 'HVAC Climate Control', desc: 'Precision temperature control for all environments.', icon: 'mdi:thermostat' },
            { title: 'Grid Services (VPP)', desc: 'Virtual power plant ready for grid revenue streams.', icon: 'mdi:transmission-tower' },
            { title: 'SCADA Integration', desc: 'Full SCADA compatibility for industrial monitoring.', icon: 'mdi:monitor-dashboard' },
            { title: '24/7 Remote Monitoring', desc: 'Round-the-clock monitoring with predictive maintenance.', icon: 'mdi:shield-clock' }
          ],
          featuresCN: ['集装箱式设计', 'HVAC温控', '虚拟电厂', 'SCADA集成', '24/7监控'],
          description: 'Containerized utility-scale energy storage system. 500kWh capacity supports grid services, renewable integration, and industrial peak shaving.',
          descriptionCN: '集装箱式公用事业级储能系统。500kWh容量支持电网服务、可再生能源整合和工业削峰填谷。',
          featured: false
        },
        {
          id: 7, name: 'InnoPower Rack 48V', nameCN: 'InnoPower Rack 48V 机架电池',
          category: 'ess', subcategory: 'Rack Mount ESS',
          price: 1899, priceCN: '¥13,699',
          image: 'images/products/innopowerrack.jpg?v=4',
          specs: { 'Capacity': '4.8 kWh', 'Voltage': '48V', 'Battery Type': 'LiFePO4', 'Cycle Life': '5000+ Cycles', 'Warranty': '7 Years', 'Form Factor': '19-inch Rack', 'Parallel': 'Up to 16 units', 'Weight': '42 kg' },
          features: [
            { title: '19-inch Rack Mount', desc: 'Standard server rack form factor for easy integration.', icon: 'mdi:server' },
            { title: 'Parallel up to 16 units', desc: 'Scale to 76.8kWh with 16 parallel units.', icon: 'mdi:expand-arrows' },
            { title: 'Solar Charge Ready', desc: 'Direct solar panel connection with built-in MPPT.', icon: 'mdi:solar-power' },
            { title: 'Deep Discharge Protection', desc: 'Automatic cutoff prevents damaging discharge levels.', icon: 'mdi:battery-alert' },
            { title: 'Plug & Play', desc: 'Quick installation with no complex configuration.', icon: 'mdi:power-plug' }
          ],
          featuresCN: ['19英寸机架', '16台并联', '太阳能充电', '深度放电保护', '即插即用'],
          description: 'Rack-mounted battery system for off-grid and telecom applications. Compact 19-inch form factor with parallel capability up to 76.8kWh.',
          descriptionCN: '机架式电池系统，用于离网和通信场景。紧凑19英寸规格，支持并联扩展至76.8kWh。',
          featured: false
        },
        // === EV Charger ===
        {
          id: 8, name: 'InnoCharge AC11', nameCN: 'InnoCharge AC11 交流充电桩',
          category: 'ev-charger', subcategory: 'Home Charger',
          price: 599, priceCN: '¥4,299',
          image: 'images/products/ev-charger-ac.jpg?v=1',
          specs: { 'Power': '11 kW', 'Input Voltage': '220-240V AC', 'Phases': 'Single/Three Phase', 'Current': 'Up to 32A', 'Connector': 'Type 2', 'Protection': 'IP54', 'Connectivity': 'WiFi + Bluetooth', 'Certification': 'CE, RoHS' },
          features: [
            { title: 'Smart Charging', desc: 'Schedule charging during off-peak hours via app.', icon: 'mdi:clock-time-four' },
            { title: 'RFID Authentication', desc: 'Secure access control with RFID cards.', icon: 'mdi:contactless-payment' },
            { title: 'Load Balancing', desc: 'Dynamic power distribution for multiple chargers.', icon: 'mdi:scale-balance' },
            { title: 'OCPP Compliant', desc: 'Open Charge Point Protocol for network integration.', icon: 'mdi:api' },
            { title: 'LED Status Indicator', desc: 'Visual charging status at a glance.', icon: 'mdi:led-on' }
          ],
          featuresCN: ['智能充电', 'RFID认证', '负载均衡', 'OCPP协议', 'LED指示'],
          description: 'Smart home EV charger with 11kW AC charging power. Type 2 connector, WiFi connectivity, and OCPP compliance for network management.',
          descriptionCN: '智能家用EV充电桩，11kW交流充电功率。Type 2接口，WiFi连接，支持OCPP协议。',
          featured: true
        },
        {
          id: 9, name: 'InnoCharge DC120', nameCN: 'InnoCharge DC120 直流快充',
          category: 'ev-charger', subcategory: 'Fast Charger',
          price: 12999, priceCN: '¥93,999',
          image: 'images/products/ev-charger-dc.jpg?v=1',
          specs: { 'Power': '120 kW', 'Input Voltage': '380V AC Three Phase', 'Output Voltage': '200-1000V DC', 'Current': 'Up to 200A', 'Connector': 'CCS2 + CHAdeMO', 'Protection': 'IP54', 'Cooling': 'Liquid Cooling', 'Display': '7-inch Touchscreen' },
          features: [
            { title: 'Ultra-Fast Charging', desc: 'Charge most EVs to 80% in 30 minutes.', icon: 'mdi:flash' },
            { title: 'Dual Connector', desc: 'CCS2 and CHAdeMO for universal compatibility.', icon: 'mdi:ev-plug-type2' },
            { title: 'Liquid Cooling', desc: 'Maintains optimal temperature during high-power charging.', icon: 'mdi:snowflake' },
            { title: 'Touchscreen Display', desc: '7-inch interactive display for user guidance.', icon: 'mdi:monitor' },
            { title: 'OCPP 2.0 Ready', desc: 'Latest OCPP protocol for smart network management.', icon: 'mdi:api' }
          ],
          featuresCN: ['超快充电', '双接口', '液冷散热', '触摸屏', 'OCPP 2.0'],
          description: '120kW DC fast charger for commercial and public charging stations. Dual connector support with liquid cooling for reliable high-power delivery.',
          descriptionCN: '120kW直流快充桩，适用于商业和公共充电站。双接口支持，液冷散热确保高功率稳定输出。',
          featured: false
        },
        // === Solar Inverter ===
        {
          id: 10, name: 'InnoHybrid 5K', nameCN: 'InnoHybrid 5K 混合逆变器',
          category: 'inverter', subcategory: 'Hybrid Inverter',
          price: 1299, priceCN: '¥9,299',
          image: 'images/products/inverter-hybrid.jpg?v=1',
          specs: { 'Rated Power': '5 kW', 'DC Input': '120-500V', 'MPPT': 'Dual MPPT', 'Efficiency': '98.2%', 'Battery Voltage': '48V', 'Grid Type': 'On/Off-Grid Hybrid', 'Protection': 'IP65', 'Warranty': '5 Years' },
          features: [
            { title: 'Dual MPPT', desc: 'Two independent MPPTs for maximum solar harvest.', icon: 'mdi:solar-power' },
            { title: 'On/Off-Grid Hybrid', desc: 'Seamless switching between grid-tied and off-grid mode.', icon: 'mdi:swap-horizontal' },
            { title: '98.2% Efficiency', desc: 'Industry-leading conversion efficiency.', icon: 'mdi:percent' },
            { title: 'Smart Energy Management', desc: 'AI-driven load forecasting and optimization.', icon: 'mdi:brain' },
            { title: 'App Control', desc: 'Full monitoring and control via mobile app.', icon: 'mdi:cellphone' }
          ],
          featuresCN: ['双路MPPT', '混合并离网', '98.2%效率', '智能能源管理', 'APP控制'],
          description: '5kW hybrid inverter with dual MPPT for residential solar+storage systems. Seamlessly switches between grid-tied and off-grid modes.',
          descriptionCN: '5kW混合逆变器，双路MPPT，适用于住宅光伏+储能系统。在并网和离网模式间无缝切换。',
          featured: true
        },
        {
          id: 11, name: 'InnoOffGrid 3K', nameCN: 'InnoOffGrid 3K 离网逆变器',
          category: 'inverter', subcategory: 'Off-Grid Inverter',
          price: 899, priceCN: '¥6,499',
          image: 'images/products/inverter-offgrid.jpg?v=1',
          specs: { 'Rated Power': '3 kW', 'DC Input': '120-450V', 'MPPT': 'Single MPPT', 'Efficiency': '97.5%', 'Battery Voltage': '24V/48V', 'Output': 'Pure Sine Wave', 'Protection': 'IP65', 'Warranty': '5 Years' },
          features: [
            { title: 'Pure Sine Wave', desc: 'Clean power output for sensitive electronics.', icon: 'mdi:sine-wave' },
            { title: 'Off-Grid Specialist', desc: 'Designed for remote areas without grid access.', icon: 'mdi:map-marker-off' },
            { title: 'Solar Charge Controller', desc: 'Built-in MPPT charge controller.', icon: 'mdi:solar-power' },
            { title: 'AC Charger', desc: 'Backup AC charging for generator integration.', icon: 'mdi:generator-portable' },
            { title: 'Rugged Design', desc: 'IP65 rated for harsh outdoor environments.', icon: 'mdi:shield' }
          ],
          featuresCN: ['纯正弦波', '离网专用', '内置MPPT', 'AC充电', '坚固设计'],
          description: '3kW off-grid inverter with built-in MPPT for remote area power systems. Pure sine wave output for sensitive electronics.',
          descriptionCN: '3kW离网逆变器，内置MPPT，适用于偏远地区电力系统。纯正弦波输出保护敏感电子设备。',
          featured: false
        },
        {
          id: 12, name: 'InnoGrid 100K', nameCN: 'InnoGrid 100K 工商业逆变器',
          category: 'inverter', subcategory: 'C&I Inverter',
          price: 8999, priceCN: '¥64,999',
          image: 'images/products/inverter-ci.jpg?v=1',
          specs: { 'Rated Power': '100 kW', 'DC Input': '200-850V', 'MPPT': 'Quad MPPT', 'Efficiency': '98.8%', 'Battery Voltage': '600-1000V', 'Grid Type': 'Grid-Tied + Storage', 'Protection': 'IP65', 'Warranty': '10 Years' },
          features: [
            { title: '100kW C&I Power', desc: 'Designed for commercial and industrial installations.', icon: 'mdi:factory' },
            { title: 'Quad MPPT', desc: 'Four independent MPPTs for complex roof layouts.', icon: 'mdi:grid' },
            { title: '98.8% Efficiency', desc: 'Maximum energy harvest with minimal losses.', icon: 'mdi:percent' },
            { title: 'Grid Support', desc: 'Reactive power compensation and grid services.', icon: 'mdi:transmission-tower' },
            { title: 'Remote Firmware Updates', desc: 'OTA updates for continuous improvement.', icon: 'mdi:update' }
          ],
          featuresCN: ['100kW工商业', '四路MPPT', '98.8%效率', '电网支持', '远程固件升级'],
          description: '100kW commercial & industrial inverter with quad MPPT and storage capability. Designed for large-scale rooftop and ground-mount installations.',
          descriptionCN: '100kW工商业逆变器，四路MPPT和储能功能。适用于大型屋顶和地面安装。',
          featured: false
        }
      ],
      solutions: [
        { id: 'residential', name: 'Residential Solutions', nameCN: '住宅解决方案', icon: 'mdi:home', image: 'images/solution-residential.jpg', desc: 'Energy savings, 24/7 power backup, sustainable power control for home.', descCN: '节能省钱、全天候备电、家庭智能用电管理。' },
        { id: 'commercial', name: 'Commercial & Industrial', nameCN: '工商业解决方案', icon: 'mdi:factory', image: 'images/solution-commercial.jpg', desc: 'Slashes energy costs, stabilizes power supply, maximizes ROI through modular scalability.', descCN: '降低用电成本、稳定供电、模块化扩展最大化投资回报。' },
        { id: 'utility', name: 'Utility-Scale', nameCN: '公用事业解决方案', icon: 'mdi:transmission-tower', image: 'images/solution-utility.jpg', desc: 'Grid-level storage for renewable integration, frequency regulation, and capacity support.', descCN: '电网级储能，支持可再生能源整合、调频和容量支撑。' },
        { id: 'ev-charging', name: 'EV Charging', nameCN: 'EV充电解决方案', icon: 'mdi:ev-station', image: 'images/solution-ev.jpg', desc: 'PV storage and charging integrated energy storage solutions.', descCN: '光储充一体化能源解决方案。' }
      ],
      projects: [
        { id: 1, title: '20kW/20kWh Off Grid Solar System in Ghana', titleCN: '加纳 20kW/20kWh 离网光伏系统', location: 'Ghana', image: 'images/project-ghana.jpg', desc: '8kW solar + 20kW/20kWh off grid system powering a local school.', descCN: '8kW光伏 + 20kW/20kWh离网系统为当地学校供电。' },
        { id: 2, title: '39kW 61kWh Solar and Battery System in Jamaica', titleCN: '牙买加 39kW 61kWh 光伏储能系统', location: 'Jamaica', image: 'images/project-jamaica.jpg', desc: 'Island microgrid with solar generation and battery storage for a resort.', descCN: '海岛微电网项目，为度假村提供光伏发电和电池储能。' },
        { id: 3, title: '160kW/307kWh Solar Energy Storage System in Kenya', titleCN: '肯尼亚 160kW/307kWh 储能系统', location: 'Kenya', image: 'images/project-kenya.jpg', desc: 'Utility-scale storage system supporting rural electrification.', descCN: '公用事业级储能系统，支持农村电气化。' }
      ],
      milestones: [
        { year: '2010', title: 'Company Founded', titleCN: '公司成立', desc: 'Established as a solar energy storage system integrator.', descCN: '成立为太阳能储能系统集成商。' },
        { year: '2013', title: 'First 10kWh System', titleCN: '首款10kWh系统', desc: 'Launched our first residential energy storage product.', descCN: '推出首款住宅储能产品。' },
        { year: '2017', title: 'Global Expansion', titleCN: '全球扩张', desc: 'Products sold to 50+ countries worldwide.', descCN: '产品销往全球50+国家。' },
        { year: '2019', title: '10,000m² Factory', titleCN: '万平米工厂', desc: 'Opened new automated production facility.', descCN: '开设全新自动化生产工厂。' },
        { year: '2023', title: '100+ Patents', titleCN: '百项专利', desc: 'Reached 100+ product patents in energy storage technology.', descCN: '储能技术产品专利突破100项。' },
        { year: '2026', title: 'Next-Gen ESS', titleCN: '下一代储能', desc: 'Launching AI-optimized energy storage platform.', descCN: '推出AI优化的储能平台。' }
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
          id: 4, date: '2026-07-10',
          title: 'Energy Storage Applications: Generation, Grid, and User Side',
          titleCN: '储能系统在发电侧、电网侧、用户侧应用介绍',
          summary: 'A comprehensive overview of how energy storage systems are applied across generation-side, grid-side, and user-side scenarios.',
          summaryCN: '全面介绍储能系统在发电侧、电网侧、用户侧三大场景中的应用。',
          image: 'images/blog1.jpg',
          category: 'Knowledge',
          categoryCN: '知识',
          content: '<h2><span class="section-num">01</span>Generation-Side Energy Storage</h2><p>Generation-side energy storage is primarily built at thermal power plants, wind farms, and photovoltaic stations to ensure safe and stable power system operation.</p><table><thead><tr><th>Application</th><th>Description</th></tr></thead><tbody><tr><td><strong>Renewable Smoothing</strong></td><td>Smooths intermittent and volatile renewable output through storage stations.</td></tr><tr><td><strong>Renewable Consumption</strong></td><td>Stores surplus renewable energy during high generation and releases it during low generation.</td></tr><tr><td><strong>Peak Shaving</strong></td><td>Charges batteries during low-demand periods and discharges during peak-demand periods.</td></tr><tr><td><strong>Frequency Regulation</strong></td><td>Adjusts active output to reduce frequency deviation when system frequency deviates from target.</td></tr></tbody></table><h2><span class="section-num">02</span>Grid-Side Energy Storage</h2><p>Grid-side energy storage refers to storage resources that can be uniformly dispatched by power dispatching agencies, responding to grid flexibility demands.</p><table><thead><tr><th>Application</th><th>Description</th></tr></thead><tbody><tr><td><strong>Relieving Transmission Congestion</strong></td><td>Stores energy upstream of congested lines and discharges when line capacity allows.</td></tr><tr><td><strong>Deferring Grid Upgrades</strong></td><td>Improves grid transmission capacity and asset utilization, deferring upgrade investments.</td></tr><tr><td><strong>Grid Security</strong></td><td>Provides fast power buffering, absorbing or supplementing energy to stabilize voltage.</td></tr></tbody></table><h2><span class="section-num">03</span>User-Side Energy Storage</h2><p>User-side energy storage aims to reduce electricity costs and minimize outage losses for end users.</p><table><thead><tr><th>Application</th><th>Description</th></tr></thead><tbody><tr><td><strong>Distributed Energy Consumption</strong></td><td>Balances generation and load in microgrids with distributed renewable sources.</td></tr><tr><td><strong>Peak-Valley Arbitrage</strong></td><td>Charges at low rates and discharges at high rates to reduce electricity costs.</td></tr><tr><td><strong>Power Quality</strong></td><td>Treats power factor issues and voltage imbalance using storage redundancy.</td></tr><tr><td><strong>Demand Response</strong></td><td>Participates in demand response programs for subsidies and incentives.</td></tr></tbody></table>',
          contentCN: '<h2><span class="section-num">01</span>发电侧储能</h2><p>发电侧储能主要建设在火电厂、风电场、光伏电站，是各类发电厂用来促进电力系统安全平稳运行的配套设施。</p><table><thead><tr><th>主要用途</th><th>详解</th></tr></thead><tbody><tr><td><strong>可再生能源平滑出力</strong></td><td>通过建设储能电站平抑可再生能源发电出力波动，满足并网要求。</td></tr><tr><td><strong>促进可再生能源消纳</strong></td><td>储能系统在资源充足时将多发电量存储起来，在资源不足时输送出去，缓解弃风弃光。</td></tr><tr><td><strong>电力调峰</strong></td><td>发电厂在用电负荷低谷时段充电，在高峰时段释放电量，实现削峰填谷。</td></tr><tr><td><strong>系统调频</strong></td><td>频率偏离目标频率时，并网主体通过调频系统调整有功出力减少频率偏差。</td></tr></tbody></table><h2><span class="section-num">02</span>电网侧储能</h2><p>电网侧储能是指能接受电力调度机构统一调度、响应电网灵活性需求的储能资源。</p><table><thead><tr><th>主要用途</th><th>详解</th></tr></thead><tbody><tr><td><strong>缓解输变电阻塞</strong></td><td>将储能系统安装在线路上游，阻塞时储存电能，线路负荷小于容量时再放电。</td></tr><tr><td><strong>延缓电网升级改造</strong></td><td>提升电网输送能力，提高资产利用水平，延缓电网升级改造投资。</td></tr><tr><td><strong>提高电网安全性</strong></td><td>提供功率快速缓冲，吸收或补充电能，稳定平滑电网电压波动。</td></tr></tbody></table><h2><span class="section-num">03</span>用户侧储能</h2><p>用户侧储能以降低用电成本、减少停电限电损失为目的，通过峰谷电价差套利实现盈利。</p><table><thead><tr><th>主要用途</th><th>详解</th></tr></thead><tbody><tr><td><strong>分布式能源消纳</strong></td><td>配置储能系统调节发电与负荷平衡，最大化利用可再生能源。</td></tr><tr><td><strong>峰谷价差套利</strong></td><td>低电价时充电，高电价时放电，实现峰谷电价差套利。</td></tr><tr><td><strong>提升电能质量</strong></td><td>利用储能冗余容量治理功率因数低、电压不平衡等电能质量问题。</td></tr><tr><td><strong>需求响应</strong></td><td>通过高储低放参与需求响应，获得补贴或激励。</td></tr></tbody></table>'
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

  getCategories() { return this.get().categories; },
  getProducts() { return this.get().products; },
  getProduct(id) { return this.get().products.find(p => p.id === id); },
  getProductsByCategory(catId) { return this.get().products.filter(p => p.category === catId); },
  saveProduct(product) {
    const d = this.get();
    const idx = d.products.findIndex(p => p.id === product.id);
    if (idx >= 0) d.products[idx] = product;
    else { product.id = Date.now(); d.products.push(product); }
    this.set(d); return product;
  },
  deleteProduct(id) { const d = this.get(); d.products = d.products.filter(p => p.id !== id); this.set(d); },

  getSolutions() { return this.get().solutions; },
  getProjects() { return this.get().projects; },
  getMilestones() { return this.get().milestones; },

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
