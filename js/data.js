// ========== InnoWit Energy Storage - Shared Data Layer (v2.0 Dark Tech) ==========
const DB = {
  _key: 'innowit_db',
  _version: 21,

  defaults() {
    return {
      _version: 21,
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
          id: 1, name: 'HuaDa Solar Street Light Battery', nameCN: '华达太阳能路灯电池组',
          category: 'lithium-battery', subcategory: 'LiFePO4 Battery Pack',
          price: 89, priceCN: '¥640',
          image: 'images/placeholder.svg',
          specs: { 'Voltage Range': '6.4V - 25.6V', 'Capacity': '24Ah - 30Ah', 'Battery Type': 'LiFePO4', 'Cycle Life': '2000+ Cycles', 'Application': 'Solar Street Light', 'Certification': 'CE, FCC, RoHS', 'Protection': 'BMS Built-in', 'Configuration': '2S-8S' },
          features: [
            { title: 'Long Cycle Life', desc: '2000+ deep cycles for reliable outdoor lighting.', icon: 'mdi:battery-heart' },
            { title: 'Wide Voltage Range', desc: 'Supports 6.4V to 25.6V systems for various lamp designs.', icon: 'mdi:lightning-bolt' },
            { title: 'All-Weather Operation', desc: 'Operates in harsh outdoor environments with wide temperature tolerance.', icon: 'mdi:weather-sunny' },
            { title: 'Smart BMS', desc: 'Built-in protection against overcharge, over-discharge, and short circuit.', icon: 'mdi:shield-check' },
            { title: 'Lightweight', desc: 'Compact design for easy installation inside lamp poles.', icon: 'mdi:feather' },
            { title: 'Eco-Friendly', desc: 'Non-toxic LiFePO4 chemistry with no heavy metals.', icon: 'mdi:leaf' }
          ],
          featuresCN: ['长循环寿命', '宽电压范围', '全天候运行', '智能BMS', '轻量化', '环保'],
          description: 'HuaDa solar street light battery packs use LiFePO4 cells with 2000+ cycles and wide voltage range (6.4V-25.6V). Designed for solar street lights, garden lights, and outdoor lighting systems. Built-in BMS ensures safety and reliability in all weather conditions.',
          descriptionCN: '华达太阳能路灯电池组采用磷酸铁锂电芯，循环寿命2000次以上，电压范围6.4V-25.6V。适用于太阳能路灯、庭院灯和户外照明系统。内置BMS确保全天候安全可靠运行。',
          featured: false
        },
        {
          id: 2, name: 'HuaDa Golf Cart Battery Pack', nameCN: '华达高尔夫球车电池组',
          category: 'lithium-battery', subcategory: 'LiFePO4 Battery Pack',
          price: 499, priceCN: '¥3,590',
          image: 'images/placeholder.svg',
          specs: { 'Voltage Range': '12.8V - 51.2V', 'Capacity': '50Ah - 106Ah', 'Battery Type': 'LiFePO4', 'Cycle Life': '4000+ Cycles', 'Application': 'Golf Cart / Mobility', 'Certification': 'CE, FCC, RoHS', 'Protection': 'BMS Built-in', 'Configuration': '4S-16S' },
          features: [
            { title: 'Drop-in Replacement', desc: 'Direct replacement for lead-acid batteries in golf carts and mobility vehicles.', icon: 'mdi:swap-horizontal' },
            { title: '4000+ Cycles', desc: 'Four times the cycle life of traditional lead-acid batteries.', icon: 'mdi:recycle' },
            { title: 'Fast Charging', desc: 'Supports high-current charging for quick turnaround.', icon: 'mdi:flash' },
            { title: 'Lightweight', desc: 'Up to 60% lighter than equivalent lead-acid batteries.', icon: 'mdi:feather' },
            { title: 'Maintenance-Free', desc: 'No watering or terminal cleaning required.', icon: 'mdi:wrench' },
            { title: 'Safe Chemistry', desc: 'LiFePO4 thermal stability prevents fire or explosion risks.', icon: 'mdi:shield-check' }
          ],
          featuresCN: ['直接替换', '4000次循环', '快速充电', '轻量化', '免维护', '安全化学'],
          description: 'HuaDa golf cart battery packs (12.8V-51.2V) deliver 4000+ cycles and are designed as drop-in replacements for lead-acid batteries. Ideal for golf carts, electric wheelchairs, cleaning machines, and low-speed electric vehicles.',
          descriptionCN: '华达高尔夫球车电池组（12.8V-51.2V）循环寿命4000次以上，可直接替换铅酸电池。适用于高尔夫球车、电动轮椅、清洁设备和低速电动车。',
          featured: false
        },
        // === Energy Storage System - Portable ===
        {
          id: 3, name: 'HuaDa Portable Power Station H092 1000W', nameCN: '华达便携式户外电源 H092 1000W',
          category: 'ess', subcategory: 'Portable Power Station',
          price: 599, priceCN: '¥4,299',
          image: 'images/placeholder.svg',
          specs: { 'Rated Power': '1000W', 'Peak Power': '2000W', 'Battery Capacity': '1024Wh', 'Battery Type': 'LiFePO4', 'Output Ports': 'AC + USB + DC + Car', 'Input': 'AC/DC/Solar', 'Weight': '13 kg', 'Protection': 'CE, FCC, RoHS' },
          features: [
            { title: 'Multiple Outputs', desc: 'AC sockets, USB-A, USB-C, DC ports, and car outlet for all devices.', icon: 'mdi:power-plug' },
            { title: 'Solar Charging', desc: 'Recharge via solar panels for off-grid power.', icon: 'mdi:solar-power' },
            { title: 'Pure Sine Wave', desc: 'Safe for sensitive electronics like laptops and medical devices.', icon: 'mdi:sine-wave' },
            { title: 'Portable Design', desc: 'Compact handle design for camping, RV, and outdoor work.', icon: 'mdi:briefcase' },
            { title: 'LED Display', desc: 'Real-time battery status and output monitoring.', icon: 'mdi:monitor' },
            { title: 'Built-in BMS', desc: 'Multi-layer safety protection for worry-free operation.', icon: 'mdi:shield-check' }
          ],
          featuresCN: ['多输出接口', '太阳能充电', '纯正弦波', '便携设计', 'LED显示', '内置BMS'],
          description: 'HuaDa H092 1000W portable power station delivers 1024Wh of LiFePO4 power for outdoor adventures, camping, RV life, and emergency backup. Multiple output ports and solar charging support keep your devices powered anywhere.',
          descriptionCN: '华达H092 1000W便携式户外电源提供1024Wh磷酸铁锂电力，适用于户外探险、露营、房车和应急备电。多输出接口和太阳能充电支持，让您的设备随时随地有电。',
          featured: true
        },
        {
          id: 4, name: 'HuaDa Portable Power Station H094 2500W', nameCN: '华达便携式户外电源 H094 2500W',
          category: 'ess', subcategory: 'Portable Power Station',
          price: 1299, priceCN: '¥9,299',
          image: 'images/placeholder.svg',
          specs: { 'Rated Power': '2500W', 'Peak Power': '5000W', 'Battery Capacity': '2496Wh', 'Battery Type': 'LiFePO4', 'Output Ports': 'AC + USB + DC + Car', 'Input': 'AC/DC/Solar', 'Weight': '38 kg', 'Protection': 'CE, FCC, RoHS' },
          features: [
            { title: 'High Power Output', desc: '2500W rated with 5000W surge for demanding appliances.', icon: 'mdi:flash' },
            { title: 'Large Capacity', desc: '2496Wh capacity for extended off-grid operation.', icon: 'mdi:battery-high' },
            { title: 'Fast Recharge', desc: 'High-speed AC input for quick turnaround.', icon: 'mdi:clock-fast' },
            { title: 'Multiple Devices', desc: 'Power refrigerators, power tools, and electronics simultaneously.', icon: 'mdi:devices' },
            { title: 'Rugged Build', desc: 'Durable enclosure for outdoor and jobsite use.', icon: 'mdi:hammer' },
            { title: 'Smart Protection', desc: 'Advanced BMS with overcurrent and temperature protection.', icon: 'mdi:shield-check' }
          ],
          featuresCN: ['高功率输出', '大容量', '快速充电', '多设备同时供电', '坚固耐用', '智能保护'],
          description: 'HuaDa H094 2500W portable power station offers 2496Wh capacity and 2500W continuous output for heavy-duty appliances, worksites, and extended camping. Reliable LiFePO4 battery with comprehensive safety protection.',
          descriptionCN: '华达H094 2500W便携式户外电源提供2496Wh容量和2500W持续输出，适用于大功率电器、工地和长期露营。磷酸铁锂电池配合全面安全保护。',
          featured: true
        },
        {
          id: 5, name: 'HuaDa Pull-Rod Power Station H095 3kWh', nameCN: '华达多功能推拉式电源 H095 3kWh',
          category: 'ess', subcategory: 'Portable Power Station',
          price: 1999, priceCN: '¥14,299',
          image: 'images/placeholder.svg',
          specs: { 'Battery Capacity': '3 kWh', 'Rated Output': '3600W', 'Battery Type': 'LiFePO4', 'Solar Input': 'Max 3600W', 'EV Charging': 'Max 1200W', 'Weight': '90 kg', 'Protection': 'CE, FCC, RoHS' },
          features: [
            { title: 'Pull-Rod Mobility', desc: 'Wheeled suitcase design for easy transport and storage.', icon: 'mdi:briefcase' },
            { title: '3-in-1 Function', desc: 'Home backup, outdoor power, and EV emergency charging.', icon: 'mdi:car-electric' },
            { title: 'High Solar Input', desc: 'Accepts up to 3600W of solar charging.', icon: 'mdi:solar-power' },
            { title: 'EV Charging', desc: 'Provides emergency charging for electric vehicles.', icon: 'mdi:ev-station' },
            { title: 'Home Expansion', desc: 'Stackable from 3kWh up to 18kWh for home backup.', icon: 'mdi:expand-arrows' },
            { title: 'Smart Display', desc: 'Touchscreen control with real-time energy monitoring.', icon: 'mdi:monitor' }
          ],
          featuresCN: ['拉杆移动', '三合一功能', '高太阳能输入', '电动车充电', '家庭扩展', '智能显示'],
          description: 'HuaDa H095 3kWh pull-rod power station combines portable power, home backup, and EV emergency charging in one wheeled unit. Pull-rod design makes it easy to move while 3kWh capacity supports multiple scenarios.',
          descriptionCN: '华达H095 3kWh推拉式电源将便携电源、家庭备电和电动车应急充电集于一体。拉杆设计便于移动，3kWh容量支持多种场景。',
          featured: false
        },
        {
          id: 6, name: 'HuaDa Pull-Rod Power Station H095 6kWh', nameCN: '华达多功能推拉式电源 H095 6kWh',
          category: 'ess', subcategory: 'Portable Power Station',
          price: 3499, priceCN: '¥24,999',
          image: 'images/placeholder.svg',
          specs: { 'Battery Capacity': '6 kWh', 'Rated Output': '7200W', 'Battery Type': 'LiFePO4', 'Solar Input': 'Max 7200W', 'EV Charging': 'Max 3600W', 'Weight': '160 kg', 'Protection': 'CE, FCC, RoHS' },
          features: [
            { title: 'Double Capacity', desc: '6kWh capacity with parallel capability up to 18kWh.', icon: 'mdi:battery-sync' },
            { title: 'Parallel Operation', desc: 'Combine units to reach 7200W output for home appliances.', icon: 'mdi:parallel' },
            { title: 'EV Fast Charging', desc: 'Up to 3600W emergency EV charging for roadside rescue.', icon: 'mdi:car-electric' },
            { title: 'High Solar Input', desc: 'Accepts up to 7200W solar for fast off-grid recharge.', icon: 'mdi:solar-power' },
            { title: 'Rugged Wheels', desc: 'All-terrain wheels for outdoor and emergency deployment.', icon: 'mdi:truck' },
            { title: 'APP Control', desc: 'Monitor and control via smartphone application.', icon: 'mdi:cellphone' }
          ],
          featuresCN: ['双倍容量', '并联运行', '电动车快充', '高太阳能输入', '全地形轮', 'APP控制'],
          description: 'HuaDa H095 6kWh pull-rod power station offers 6kWh capacity and 7200W parallel output capability. Ideal for home emergency backup, outdoor events, and EV emergency charging. Parallel units scale to 18kWh.',
          descriptionCN: '华达H095 6kWh推拉式电源提供6kWh容量和7200W并联输出能力。适用于家庭应急备电、户外活动和电动车应急充电。并联可扩展至18kWh。',
          featured: true
        },
        // === Energy Storage System - Residential ===
        {
          id: 7, name: 'HuaDa Residential ESS H096 5kWh', nameCN: '华达家庭储能系统 H096 5kWh',
          category: 'ess', subcategory: 'Residential ESS',
          price: 2499, priceCN: '¥17,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '5.12 kWh', 'Battery Voltage': '51.2V', 'Battery Type': 'LiFePO4', 'Cycle Life': '3000+ Cycles', 'Dimension (W×L×H)': '445×145×515mm', 'Weight': '48 kg', 'Installation': 'Wall/Floor', 'Protection': 'IP20' },
          features: [
            { title: 'Compact Home ESS', desc: '5.12kWh capacity perfect for average household backup.', icon: 'mdi:home-battery' },
            { title: 'Wall or Floor', desc: 'Flexible installation options for any home layout.', icon: 'mdi:wall' },
            { title: 'Smart BMS', desc: 'Real-time monitoring and protection of battery cells.', icon: 'mdi:chip' },
            { title: 'Long Cycle Life', desc: '3000+ cycles with capacity retention above 80%.', icon: 'mdi:recycle' },
            { title: 'LCD Display', desc: 'User-friendly interface showing battery status and parameters.', icon: 'mdi:monitor' },
            { title: 'RS485/CAN', desc: 'Communication interface for inverter integration.', icon: 'mdi:connection' }
          ],
          featuresCN: ['紧凑家用储能', '壁挂/落地', '智能BMS', '长循环寿命', 'LCD显示', 'RS485/CAN'],
          description: 'HuaDa H096 5kWh residential energy storage system provides 5.12kWh of LiFePO4 capacity for home backup and solar self-consumption. Wall or floor installation with smart BMS and LCD display.',
          descriptionCN: '华达H096 5kWh家庭储能系统提供5.12kWh磷酸铁锂容量，用于家庭备电和光伏自发自用。支持壁挂或落地安装，配备智能BMS和LCD显示屏。',
          featured: false
        },
        {
          id: 8, name: 'HuaDa Residential ESS H096 10kWh', nameCN: '华达家庭储能系统 H096 10kWh',
          category: 'ess', subcategory: 'Residential ESS',
          price: 4299, priceCN: '¥30,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '10.24 kWh', 'Battery Voltage': '51.2V', 'Battery Type': 'LiFePO4', 'Cycle Life': '3000+ Cycles', 'Dimension (W×L×H)': '445×145×615mm', 'Weight': '95 kg', 'Installation': 'Wall/Floor', 'Protection': 'IP20' },
          features: [
            { title: 'Double Capacity', desc: '10.24kWh capacity for extended home backup power.', icon: 'mdi:battery-high' },
            { title: 'Modular Design', desc: 'Stackable modules for easy capacity expansion.', icon: 'mdi:view-module' },
            { title: 'Peak Shaving', desc: 'Store solar energy and discharge during peak rate hours.', icon: 'mdi:chart-line' },
            { title: 'Emergency Backup', desc: 'Automatic switchover during grid outages.', icon: 'mdi:backup-restore' },
            { title: 'APP Monitoring', desc: 'Track energy usage and battery health remotely.', icon: 'mdi:cellphone' },
            { title: 'Certified Safe', desc: 'CE, FCC, RoHS certified with multi-layer protection.', icon: 'mdi:shield-check' }
          ],
          featuresCN: ['双倍容量', '模块化设计', '削峰填谷', '应急备电', 'APP监控', '安全认证'],
          description: 'HuaDa H096 10kWh residential ESS delivers 10.24kWh capacity for larger homes and longer backup. Stackable modular design allows easy expansion as energy needs grow.',
          descriptionCN: '华达H096 10kWh家庭储能系统提供10.24kWh容量，适用于较大住宅和更长备电时间。模块化堆叠设计便于随能源需求增长而扩展。',
          featured: true
        },
        {
          id: 9, name: 'HuaDa Residential ESS H096 15kWh', nameCN: '华达家庭储能系统 H096 15kWh',
          category: 'ess', subcategory: 'Residential ESS',
          price: 5999, priceCN: '¥43,199',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '14.33 kWh', 'Battery Voltage': '51.2V', 'Battery Type': 'LiFePO4', 'Cycle Life': '3000+ Cycles', 'Dimension (W×L×H)': '445×145×715mm', 'Weight': '120 kg', 'Installation': 'Floor', 'Protection': 'IP20' },
          features: [
            { title: 'High Capacity', desc: '14.33kWh capacity for large homes or small commercial use.', icon: 'mdi:battery' },
            { title: 'Stackable', desc: 'Vertical stacking saves floor space.', icon: 'mdi:view-grid' },
            { title: 'WiFi/Bluetooth', desc: 'Wireless connectivity for mobile app monitoring.', icon: 'mdi:wifi' },
            { title: 'Wide Temp Range', desc: 'Operates from -20°C to 50°C discharge.', icon: 'mdi:thermometer' },
            { title: 'Uninterruptible', desc: 'Seamless UPS function for critical home loads.', icon: 'mdi:power' },
            { title: 'LiFePO4 Chemistry', desc: 'Thermal runaway-free chemistry for home safety.', icon: 'mdi:shield-home' }
          ],
          featuresCN: ['高容量', '可堆叠', 'WiFi/蓝牙', '宽温度范围', '不间断供电', '磷酸铁锂'],
          description: 'HuaDa H096 15kWh residential ESS provides 14.33kWh capacity for large homes or light commercial applications. Floor-standing stackable design with wireless monitoring and wide temperature operation.',
          descriptionCN: '华达H096 15kWh家庭储能系统提供14.33kWh容量，适用于大型住宅或轻型商业应用。落地式堆叠设计，支持无线监控和宽温度运行。',
          featured: false
        },
        {
          id: 10, name: 'HuaDa Modular ESS H096 5-20kWh', nameCN: '华达模块化家庭储能 H096 5-20kWh',
          category: 'ess', subcategory: 'Residential ESS',
          price: 5299, priceCN: '¥38,099',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '5-20 kWh Expandable', 'Battery Module': '5.12 kWh each', 'Battery Type': 'LiFePO4', 'Cycle Life': '3000+ Cycles', 'Voltage': '51.2V', 'Parallel': 'Up to 4 modules', 'Protection': 'IP20' },
          features: [
            { title: 'Scalable Capacity', desc: 'Start with 5kWh and expand up to 20kWh by adding modules.', icon: 'mdi:expand-arrows' },
            { title: 'Plug-and-Play', desc: 'Easy module connection without complex wiring.', icon: 'mdi:power-plug' },
            { title: 'Balanced System', desc: 'Auto-balancing between modules for optimal performance.', icon: 'mdi:scale-balance' },
            { title: 'Home Integration', desc: 'Compatible with most hybrid solar inverters.', icon: 'mdi:home-automation' },
            { title: 'Remote Upgrade', desc: 'Firmware updates over-the-air for new features.', icon: 'mdi:update' },
            { title: 'Space Efficient', desc: 'Slim tower design fits in garages and utility rooms.', icon: 'mdi:arrow-expand-vertical' }
          ],
          featuresCN: ['可扩展容量', '即插即用', '系统平衡', '家庭集成', '远程升级', '节省空间'],
          description: 'HuaDa H096 modular ESS offers flexible capacity from 5kWh to 20kWh. Each 5.12kWh module connects easily to scale with your energy needs. Compatible with major hybrid inverters.',
          descriptionCN: '华达H096模块化储能系统提供5kWh至20kWh灵活容量。每个5.12kWh模块可轻松连接，随能源需求扩展。兼容主流混合逆变器。',
          featured: true
        },
        {
          id: 11, name: 'HuaDa All-in-One ESS H096 10kWh Pro', nameCN: '华达一体机储能 H096 10kWh Pro',
          category: 'ess', subcategory: 'Residential ESS',
          price: 5999, priceCN: '¥43,199',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '10.24 kWh', 'Inverter Power': '5 kW', 'Battery Type': 'LiFePO4', 'Cycle Life': '3000+ Cycles', 'Voltage': '176-270V', 'Output': 'AC 230V', 'Protection': 'IP20' },
          features: [
            { title: 'All-in-One', desc: 'Battery and inverter integrated in one cabinet.', icon: 'mdi:box' },
            { title: '5kW Inverter', desc: 'Built-in 5kW hybrid inverter for solar + storage.', icon: 'mdi:sine-wave' },
            { title: 'Easy Install', desc: 'Single unit reduces installation time and cost.', icon: 'mdi:tools' },
            { title: 'Smart Energy', desc: 'AI energy management maximizes solar self-consumption.', icon: 'mdi:brain' },
            { title: 'LCD Touchscreen', desc: 'Intuitive control panel for system status and settings.', icon: 'mdi:tablet' },
            { title: 'Backup Power', desc: 'UPS-level switchover for critical loads.', icon: 'mdi:backup-restore' }
          ],
          featuresCN: ['一体机', '5kW逆变器', '安装简便', '智能能源', '触摸屏', '备电功能'],
          description: 'HuaDa H096 10kWh Pro all-in-one ESS combines 10.24kWh battery with 5kW hybrid inverter in a single cabinet. Simplifies installation while providing complete solar + storage + backup functionality.',
          descriptionCN: '华达H096 10kWh Pro一体机将10.24kWh电池和5kW混合逆变器集成在一个机柜中。简化安装，同时提供完整的光伏+储能+备电功能。',
          featured: true
        },
        // === Energy Storage System - Commercial ===
        {
          id: 12, name: 'HuaDa Commercial ESS H098 50kWh', nameCN: '华达商业储能柜 H098 50kWh',
          category: 'ess', subcategory: 'Commercial ESS',
          price: 19999, priceCN: '¥143,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '50.6 kWh', 'Battery Voltage': '563.2V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '25 kW', 'Dimension (W×L×H)': '819×900×1916mm', 'Weight': '900 kg', 'Protection': 'IP20', 'Cooling': 'Air Cooling' },
          features: [
            { title: 'C&I Grade', desc: 'Designed for commercial and industrial peak shaving.', icon: 'mdi:factory' },
            { title: 'Air Cooling', desc: 'Built-in air conditioning for battery thermal management.', icon: 'mdi:fan' },
            { title: 'Grid Connected', desc: 'AC 400V grid connection for easy integration.', icon: 'mdi:transmission-tower' },
            { title: 'Multiple Protections', desc: 'Overvoltage, overcurrent, overheat, and short-circuit protection.', icon: 'mdi:shield-check' },
            { title: 'BMS + EMS', desc: 'Battery and energy management system included.', icon: 'mdi:database' },
            { title: 'Certified', desc: 'IEC 62619, EN 61000, RoHS compliant.', icon: 'mdi:certificate' }
          ],
          featuresCN: ['工商业级', '风冷散热', '并网连接', '多重保护', 'BMS+EMS', '认证合规'],
          description: 'HuaDa H098 50kWh commercial ESS cabinet provides 50.6kWh capacity and 25kW power for C&I peak shaving and demand response. Air-cooled cabinet with integrated BMS and EMS.',
          descriptionCN: '华达H098 50kWh商业储能柜提供50.6kWh容量和25kW功率，用于工商业削峰填谷和需求响应。风冷机柜，内置BMS和EMS。',
          featured: false
        },
        {
          id: 13, name: 'HuaDa Commercial ESS H098 100kWh', nameCN: '华达商业储能柜 H098 100kWh',
          category: 'ess', subcategory: 'Commercial ESS',
          price: 34999, priceCN: '¥251,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '107.5 kWh', 'Battery Voltage': '537.6V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '50 kW', 'Dimension (W×L×H)': '1122×831×2084mm', 'Weight': '1700 kg', 'Protection': 'IP20', 'Cooling': 'Air Cooling' },
          features: [
            { title: '100kWh Class', desc: 'Large-capacity cabinet for commercial buildings.', icon: 'mdi:battery' },
            { title: '50kW Power', desc: 'Sustained 50kW output for peak load management.', icon: 'mdi:flash' },
            { title: 'Scalable', desc: 'Parallel multiple cabinets for MWh-level systems.', icon: 'mdi:expand-arrows' },
            { title: 'Smart EMS', desc: 'Energy management system optimizes charge/discharge cycles.', icon: 'mdi:chart-line' },
            { title: 'Remote Monitoring', desc: 'Cloud-based platform for 24/7 monitoring.', icon: 'mdi:cloud' },
            { title: 'Fire Safety', desc: 'Integrated fire suppression and gas detection.', icon: 'mdi:fire-extinguisher' }
          ],
          featuresCN: ['100kWh级别', '50kW功率', '可扩展', '智能EMS', '远程监控', '消防安全'],
          description: 'HuaDa H098 100kWh commercial ESS cabinet delivers 107.5kWh capacity and 50kW output. Designed for factories, shopping centers, and commercial buildings requiring large-scale energy storage.',
          descriptionCN: '华达H098 100kWh商业储能柜提供107.5kWh容量和50kW输出。适用于工厂、购物中心和商业建筑的大规模储能需求。',
          featured: true
        },
        {
          id: 14, name: 'HuaDa Commercial ESS H098 150kWh', nameCN: '华达商业储能柜 H098 150kWh',
          category: 'ess', subcategory: 'Commercial ESS',
          price: 49999, priceCN: '¥359,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '158.4 kWh', 'Battery Voltage': '768V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '100 kW', 'Dimension (W×L×H)': '1616×600×2084mm', 'Weight': '2300 kg', 'Protection': 'IP20', 'Cooling': 'Air Cooling' },
          features: [
            { title: 'High Capacity', desc: '158.4kWh capacity for large commercial installations.', icon: 'mdi:battery-high' },
            { title: '100kW Output', desc: '100kW continuous power for heavy demand periods.', icon: 'mdi:power' },
            { title: 'Demand Response', desc: 'Participate in grid demand response programs.', icon: 'mdi:transmission-tower' },
            { title: 'Voltage Support', desc: 'Helps stabilize grid voltage at the point of connection.', icon: 'mdi:current-ac' },
            { title: 'Long Lifespan', desc: '6000+ cycle life for long-term ROI.', icon: 'mdi:recycle' },
            { title: 'All Weather', desc: 'Designed for outdoor installation with climate control.', icon: 'mdi:weather-cloudy' }
          ],
          featuresCN: ['高容量', '100kW输出', '需求响应', '电压支撑', '长寿命', '全天候'],
          description: 'HuaDa H098 150kWh commercial ESS cabinet offers 158.4kWh capacity and 100kW power output. Ideal for large commercial facilities, microgrids, and industrial peak shaving applications.',
          descriptionCN: '华达H098 150kWh商业储能柜提供158.4kWh容量和100kW功率输出。适用于大型商业设施、微电网和工业削峰应用。',
          featured: false
        },
        {
          id: 15, name: 'HuaDa Commercial ESS H098 215kWh', nameCN: '华达商业储能柜 H098 215kWh',
          category: 'ess', subcategory: 'Commercial ESS',
          price: 69999, priceCN: '¥503,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '215.0 kWh', 'Battery Voltage': '768V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '100 kW', 'Dimension (W×L×H)': '1910×1272×2414mm', 'Weight': '2850 kg', 'Protection': 'IP20', 'Cooling': 'Air Cooling' },
          features: [
            { title: '200kWh+ Class', desc: 'Large-capacity commercial storage in a single cabinet.', icon: 'mdi:battery' },
            { title: 'Grid Services', desc: 'Frequency regulation and peak shaving support.', icon: 'mdi:transmission-tower' },
            { title: 'High Efficiency', desc: 'Round-trip efficiency above 88% for maximum savings.', icon: 'mdi:percent' },
            { title: 'Smart Scheduling', desc: 'AI-driven charging/discharging schedules.', icon: 'mdi:calendar-clock' },
            { title: 'Multi-Communication', desc: 'RS485/CAN/Ethernet for system integration.', icon: 'mdi:connection' },
            { title: 'Safety Systems', desc: 'Multi-level fire suppression and thermal runaway prevention.', icon: 'mdi:shield' }
          ],
          featuresCN: ['200kWh级别', '电网服务', '高效率', '智能调度', '多通信', '安全系统'],
          description: 'HuaDa H098 215kWh commercial ESS cabinet provides 215kWh capacity and 100kW output for large-scale commercial and industrial energy storage. Supports grid services and peak demand reduction.',
          descriptionCN: '华达H098 215kWh商业储能柜提供215kWh容量和100kW输出，用于大规模工商业储能。支持电网服务和削峰需求管理。',
          featured: false
        },
        {
          id: 16, name: 'HuaDa Commercial ESS H098 315kWh', nameCN: '华达商业储能柜 H098 315kWh',
          category: 'ess', subcategory: 'Commercial ESS',
          price: 99999, priceCN: '¥719,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '315.4 kWh', 'Battery Voltage': '768V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '250 kW', 'Dimension (W×L×H)': '12192×2438×2896mm', 'Weight': '3500 kg', 'Protection': 'IP20', 'Cooling': 'Air Cooling' },
          features: [
            { title: 'Maximum C&I Capacity', desc: '315.4kWh capacity for the largest commercial needs.', icon: 'mdi:battery-high' },
            { title: '250kW Power', desc: '250kW output for rapid demand response.', icon: 'mdi:flash' },
            { title: 'Container Ready', desc: 'Can be integrated into standard container systems.', icon: 'mdi:container' },
            { title: 'Grid Forming', desc: 'Capable of forming microgrid with grid-tied inverters.', icon: 'mdi:transmission-tower' },
            { title: 'Predictive Maintenance', desc: 'AI analytics predict maintenance needs.', icon: 'mdi:robot' },
            { title: 'Revenue Optimization', desc: 'Maximize revenue from energy arbitrage and grid services.', icon: 'mdi:currency-usd' }
          ],
          featuresCN: ['最大工商业容量', '250kW功率', '集装箱就绪', '构网能力', '预测性维护', '收益优化'],
          description: 'HuaDa H098 315kWh commercial ESS cabinet is the largest cabinet solution with 315.4kWh capacity and 250kW output. Designed for large commercial facilities, industrial parks, and microgrid applications.',
          descriptionCN: '华达H098 315kWh商业储能柜是最大的柜式解决方案，提供315.4kWh容量和250kW输出。适用于大型商业设施、工业园区和微电网应用。',
          featured: true
        },
        // === Energy Storage System - Industrial Container ===
        {
          id: 17, name: 'HuaDa Industrial Container ESS H098 500kWh', nameCN: '华达工业集装箱储能 H098 500kWh',
          category: 'ess', subcategory: 'Industrial Container ESS',
          price: 149999, priceCN: '¥1,079,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '502.6 kWh', 'Battery Voltage': '598.4V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '110 kW', 'Container Size': 'Custom', 'Weight': '11500 kg', 'Cooling': 'Industrial HVAC', 'Protection': 'IP54' },
          features: [
            { title: 'Containerized', desc: 'Fully integrated containerized energy storage system.', icon: 'mdi:container' },
            { title: 'Industrial HVAC', desc: 'Climate control for extreme environments.', icon: 'mdi:air-conditioner' },
            { title: 'All-in-One', desc: 'Battery, PCS, BMS, EMS, and fire suppression integrated.', icon: 'mdi:box' },
            { title: 'Plug-and-Play', desc: 'Transport-ready and quick commissioning.', icon: 'mdi:power-plug' },
            { title: 'Grid Services', desc: 'Frequency regulation, peak shaving, and renewable integration.', icon: 'mdi:transmission-tower' },
            { title: 'Remote Control', desc: 'Centralized monitoring and dispatch via cloud platform.', icon: 'mdi:cloud-cog' }
          ],
          featuresCN: ['集装箱式', '工业空调', '一体化', '即插即用', '电网服务', '远程控制'],
          description: 'HuaDa H098 500kWh containerized ESS is a complete industrial energy storage solution with 502.6kWh capacity and 110kW power. Includes battery, PCS, BMS, EMS, HVAC, and fire suppression in a single container.',
          descriptionCN: '华达H098 500kWh集装箱储能系统是完整的工业储能解决方案，提供502.6kWh容量和110kW功率。电池、PCS、BMS、EMS、空调和消防系统集成在一个集装箱内。',
          featured: false
        },
        {
          id: 18, name: 'HuaDa Industrial Container ESS H098 1MWh', nameCN: '华达工业集装箱储能 H098 1MWh',
          category: 'ess', subcategory: 'Industrial Container ESS',
          price: 279999, priceCN: '¥2,015,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '1005.3 kWh', 'Battery Voltage': '598.4V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '165 kW', 'Container Size': '20ft Standard', 'Weight': '16200 kg', 'Cooling': 'Industrial HVAC', 'Protection': 'IP54' },
          features: [
            { title: '1MWh Capacity', desc: 'Utility-scale storage in a standard 20ft container.', icon: 'mdi:battery' },
            { title: '20ft Container', desc: 'Standard shipping container for easy transport.', icon: 'mdi:container' },
            { title: '165kW Power', desc: 'High power output for grid and industrial applications.', icon: 'mdi:flash' },
            { title: 'Scalable', desc: 'Multiple containers form MWh- to GWh-scale systems.', icon: 'mdi:expand-arrows' },
            { title: 'Fire Suppression', desc: 'Aerosol and gas-based fire suppression system.', icon: 'mdi:fire-extinguisher' },
            { title: 'Energy Arbitrage', desc: 'Optimize energy costs through time-of-use arbitrage.', icon: 'mdi:chart-line' }
          ],
          featuresCN: ['1MWh容量', '20尺集装箱', '165kW功率', '可扩展', '消防系统', '能源套利'],
          description: 'HuaDa H098 1MWh containerized ESS packs 1005.3kWh capacity into a standard 20ft container. Designed for utility-scale storage, renewable integration, and grid stabilization projects.',
          descriptionCN: '华达H098 1MWh集装箱储能在标准20尺集装箱内实现1005.3kWh容量。适用于公用事业级储能、可再生能源整合和电网稳定项目。',
          featured: true
        },
        {
          id: 19, name: 'HuaDa Industrial Container ESS H098 2MWh', nameCN: '华达工业集装箱储能 H098 2MWh',
          category: 'ess', subcategory: 'Industrial Container ESS',
          price: 529999, priceCN: '¥3,815,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '2010.6 kWh', 'Battery Voltage': '598.4V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '275 kW', 'Container Size': '20ft/40ft', 'Weight': '25800 kg', 'Cooling': 'Liquid Cooling', 'Protection': 'IP54' },
          features: [
            { title: '2MWh Class', desc: 'Multi-megawatt-hour storage for large-scale projects.', icon: 'mdi:battery-high' },
            { title: 'Liquid Cooling', desc: 'Advanced liquid cooling for high-density battery packs.', icon: 'mdi:snowflake' },
            { title: 'Grid Scale', desc: 'Meets utility and grid operator requirements.', icon: 'mdi:transmission-tower' },
            { title: 'Long Duration', desc: 'Extended discharge capability for shifting renewable energy.', icon: 'mdi:clock' },
            { title: 'Black Start', desc: 'Grid restoration capability during outages.', icon: 'mdi:power' },
            { title: 'Asset Protection', desc: 'Comprehensive safety and insurance-grade monitoring.', icon: 'mdi:shield-check' }
          ],
          featuresCN: ['2MWh级别', '液冷散热', '电网规模', '长时储能', '黑启动', '资产保护'],
          description: 'HuaDa H098 2MWh containerized ESS provides 2010.6kWh capacity with liquid cooling for high-density operation. Suitable for grid-scale storage, renewable smoothing, and long-duration energy shifting.',
          descriptionCN: '华达H098 2MWh集装箱储能提供2010.6kWh容量，采用液冷散热实现高密度运行。适用于电网级储能、可再生能源平滑和长时能源转移。',
          featured: false
        },
        {
          id: 20, name: 'HuaDa Industrial Container ESS H098 3MWh', nameCN: '华达工业集装箱储能 H098 3MWh',
          category: 'ess', subcategory: 'Industrial Container ESS',
          price: 779999, priceCN: '¥5,615,999',
          image: 'images/placeholder.svg',
          specs: { 'System Capacity': '3153.9 kWh', 'Battery Voltage': '704V DC', 'Battery Type': 'LiFePO4', 'Rated Power': '550 kW', 'Container Size': '40ft Standard', 'Weight': '32000 kg', 'Cooling': 'Liquid Cooling', 'Protection': 'IP54' },
          features: [
            { title: '3MWh Capacity', desc: 'Massive 3153.9kWh capacity in a 40ft container.', icon: 'mdi:battery' },
            { title: '550kW Power', desc: 'High power output for utility and industrial demand.', icon: 'mdi:flash' },
            { title: '40ft Container', desc: 'Standard 40ft container for global shipping.', icon: 'mdi:container' },
            { title: 'Grid Stabilization', desc: 'Frequency regulation, voltage support, and spinning reserve.', icon: 'mdi:transmission-tower' },
            { title: 'Renewable Firming', desc: 'Smooths wind and solar output for grid integration.', icon: 'mdi:wind-power' },
            { title: 'Smart Dispatch', desc: 'AI-optimized dispatch for maximum revenue and value.', icon: 'mdi:brain' }
          ],
          featuresCN: ['3MWh容量', '550kW功率', '40尺集装箱', '电网稳定', '可再生能源调平', '智能调度'],
          description: 'HuaDa H098 3MWh containerized ESS delivers 3153.9kWh capacity and 550kW power in a 40ft container. The ultimate solution for utility-scale storage, grid stabilization, and renewable energy firming.',
          descriptionCN: '华达H098 3MWh集装箱储能在40尺集装箱内提供3153.9kWh容量和550kW功率。是公用事业级储能、电网稳定和可再生能源调平的最佳解决方案。',
          featured: true
        },
        // === EV Charger ===
        {
          id: 21, name: 'HuaDa Solar-Storage-Charging DC Fast Charger H096 193kWh CS', nameCN: '华达光储充液冷直流快充 H096 193kWh CS',
          category: 'ev-charger', subcategory: 'DC Fast Charger',
          price: 49999, priceCN: '¥359,999',
          image: 'images/placeholder.svg',
          specs: { 'Battery Capacity': '193 kWh', 'DC Output Power': '120 kW', 'Battery Type': 'LiFePO4', 'Output Voltage': '200-1000V DC', 'Output Current': '0-250A', 'Connector': 'CCS/CHAdeMO/GB/T', 'Cooling': 'Liquid Cooling', 'Protection': 'IP55' },
          features: [
            { title: 'Solar-Storage-Charging', desc: 'Integrated PV, battery, and DC fast charging in one unit.', icon: 'mdi:solar-power' },
            { title: '120kW DC Fast', desc: 'Provides rapid DC charging for electric vehicles.', icon: 'mdi:flash' },
            { title: 'Off-Grid Ready', desc: 'Plug-and-play off-grid fast charging station.', icon: 'mdi:power-off' },
            { title: 'LiFePO4 Battery', desc: '193kWh battery storage for continuous charging without grid.', icon: 'mdi:battery' },
            { title: 'Multi-Standard', desc: 'Supports CCS, CHAdeMO, and GB/T charging standards.', icon: 'mdi:ev-plug-type2' },
            { title: 'Liquid Cooling', desc: 'Liquid-cooled power modules for stable high-power output.', icon: 'mdi:snowflake' }
          ],
          featuresCN: ['光储充一体', '120kW直流快充', '离网就绪', '磷酸铁锂电池', '多标准', '液冷散热'],
          description: 'HuaDa H096 193kWh CS is a solar-storage-charging DC fast charging station with 193kWh LiFePO4 battery and 120kW DC output. Provides off-grid or grid-tied fast charging for EVs with multiple connector standards.',
          descriptionCN: '华达H096 193kWh CS光储充液冷直流快充站配备193kWh磷酸铁锂电池和120kW直流输出。支持离网或并网模式，为电动汽车提供多标准快充服务。',
          featured: true
        }
      ],      solutions: [
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
