const projectorData = [
    {
         key:1,
        name: "4K Ultra HD Smart Projector",
        price: 1800,
        discount: 15,
        rate: 4.9,
        view: 820,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (1).jpeg",
        category: 8,
        address: "Tech Hub",
        phone: "+1-555-1234",
        datetime_open: "08:00 to 06:00",
        nameShop: "Vision Electronics",
        description: "A stunning 4K Ultra HD projector with smart features, HDR support, and high brightness for home theaters."
    },
    {
         key:2,
        name: "Portable Mini Projector",
        price: 350,
        discount: 8,
        rate: 4.5,
        view: 540,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (2).jpeg",
        category: 8,
        address: "Affordable Electronics",
        phone: "+1-555-5678",
        datetime_open: "08:00 to 06:00",
        nameShop: "Pocket Tech",
        description: "A compact and lightweight mini projector with built-in speakers, perfect for outdoor movie nights."
    },
    {
         key:3,
        name: "1080p Business Presentation Projector",
        price: 900,
        discount: 10,
        rate: 4.7,
        view: 700,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (3).jpeg",
        category: 8,
        address: "Office Essentials",
        phone: "+1-555-9101",
        datetime_open: "08:00 to 06:00",
        nameShop: "Business Tech",
        description: "A professional 1080p projector designed for crisp and clear presentations in office and conference rooms."
    },
    {
         key:4,
        name: "Gaming Projector with High Refresh Rate",
        price: 1200,
        discount: 12,
        rate: 4.8,
        view: 880,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (4).jpeg",
        category: 8,
        address: "Gaming Gadgets",
        phone: "+1-555-1122",
        datetime_open: "08:00 to 06:00",
        nameShop: "Gamer's Paradise",
        description: "A gaming-focused projector with ultra-low latency, high refresh rate, and vivid colors for an immersive experience."
    },
    {
         key:5,
        name: "Short-Throw Laser Projector",
        price: 2500,
        discount: 18,
        rate: 5.0,
        view: 1200,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (5).jpeg",
        category: 8,
        address: "Home Cinema",
        phone: "+1-555-3344",
        datetime_open: "08:00 to 06:00",
        nameShop: "Home Theater Experts",
        description: "A premium short-throw laser projector with stunning picture quality and a built-in sound system."
    },
    {
         key:6,
        name: "Budget-Friendly LED Projector",
        price: 280,
        discount: 5,
        rate: 4.3,
        view: 500,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (6).jpeg",
        category: 8,
        address: "Tech Market",
        phone: "+1-555-5566",
        datetime_open: "08:00 to 06:00",
        nameShop: "Smart Electronics",
        description: "An affordable LED projector with decent picture quality, great for casual movie watching."
    },
    {
         key:7,
        name: "Wireless Smart Projector with Android TV",
        price: 1100,
        discount: 10,
        rate: 4.7,
        view: 750,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (7).jpeg",
        category: 8,
        address: "Smart Home Store",
        phone: "+1-555-7788",
        datetime_open: "08:00 to 06:00",
        nameShop: "Connected Living",
        description: "A wireless smart projector with built-in Android TV, voice control, and easy streaming capabilities."
    },
    {
         key:8,
        name: "4K Outdoor Projector with Waterproof Design",
        price: 1600,
        discount: 12,
        rate: 4.8,
        view: 900,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (8).jpeg",
        category: 8,
        address: "Outdoor Gadgets",
        phone: "+1-555-9911",
        datetime_open: "08:00 to 06:00",
        nameShop: "Adventure Tech",
        description: "A rugged 4K projector built for outdoor use, featuring waterproof and dustproof construction."
    },
    {
         key:9,
        name: "Home Cinema Projector with Dolby Audio",
        price: 1400,
        discount: 10,
        rate: 4.9,
        view: 880,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (9).jpeg",
        category: 8,
        address: "Cinema Tech",
        phone: "+1-555-2233",
        datetime_open: "08:00 to 06:00",
        nameShop: "Entertainment Zone",
        description: "A high-end projector with Dolby Audio and HDR support, bringing a true theater experience to your home."
    },
    {
         key:10,
        name: "Pocket Projector with Wireless Connectivity",
        price: 450,
        discount: 8,
        rate: 4.4,
        view: 620,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (10).jpeg",
        category: 8,
        address: "Portable Tech",
        phone: "+1-555-4455",
        datetime_open: "08:00 to 06:00",
        nameShop: "Travel Gadgets",
        description: "A super-portable projector that connects wirelessly to your phone or laptop, great for presentations on the go."
    },
    {
         key:11,
        name: "Epson Home Cinema 5050UB 4K PRO-UHD",
        price: 2800,
        discount: 15,
        rate: 5.0,
        view: 3200,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (11).jpeg",
        category: 8,
        address: "Epson Showroom",
        phone: "+1-555-9911",
        datetime_open: "08:00 to 06:00",
        nameShop: "Epson Store",
        description: "True 4K resolution, HDR10 support, and an advanced projection system for an immersive home theater experience."
    },
    {
         key:12,
        name: "BenQ TK850 4K HDR Home Theater Projector",
        price: 1700,
        discount: 12,
        rate: 4.8,
        view: 2700,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (12).jpeg",
        category: 8,
        address: "BenQ Electronics",
        phone: "+1-555-9922",
        datetime_open: "08:00 to 06:00",
        nameShop: "BenQ Store",
        description: "4K UHD resolution with HDR-PRO technology, high brightness, and sports mode for an incredible viewing experience."
    },
    {
         key:13,
        name: "Sony VPL-VW325ES 4K HDR Home Theater Projector",
        price: 5000,
        discount: 18,
        rate: 5.0,
        view: 4100,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (13).jpeg",
        category: 8,
        address: "Sony Electronics",
        phone: "+1-555-9933",
        datetime_open: "08:00 to 06:00",
        nameShop: "Sony Store",
        description: "A high-end 4K projector with advanced HDR and SXRD panel technology, delivering exceptional clarity and contrast."
    },
    {
         key:14,
        name: "ViewSonic PX701-4K Home Projector",
        price: 950,
        discount: 10,
        rate: 4.6,
        view: 1900,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (14).jpeg",
        category: 8,
        address: "ViewSonic Retail",
        phone: "+1-555-9944",
        datetime_open: "08:00 to 06:00",
        nameShop: "ViewSonic Store",
        description: "Ultra-fast refresh rate, 4K UHD clarity, and high brightness make this an excellent choice for gaming and movies."
    },
    {
         key:15,
        name: "LG HU85LA Ultra Short Throw 4K Projector",
        price: 3500,
        discount: 14,
        rate: 4.9,
        view: 3400,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (15).jpeg",
        category: 8,
        address: "LG Electronics",
        phone: "+1-555-9955",
        datetime_open: "08:00 to 06:00",
        nameShop: "LG Store",
        description: "A premium ultra-short-throw laser projector with stunning 4K quality and built-in smart TV features."
    },
    {
         key:16,
        name: "Optoma UHD50X True 4K UHD Projector",
        price: 1600,
        discount: 10,
        rate: 4.7,
        view: 2500,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (16).jpeg",
        category: 8,
        address: "Optoma Tech",
        phone: "+1-555-9966",
        datetime_open: "08:00 to 06:00",
        nameShop: "Optoma Store",
        description: "Gaming-optimized projector with an ultra-fast refresh rate, HDR10 support, and excellent color accuracy."
    },
    {
         key:17,
        name: "XGIMI Horizon Pro 4K Smart Projector",
        price: 1300,
        discount: 9,
        rate: 4.5,
        view: 1600,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (17).jpeg",
        category: 8,
        address: "XGIMI Electronics",
        phone: "+1-555-9977",
        datetime_open: "08:00 to 06:00",
        nameShop: "XGIMI Store",
        description: "Smart Android-based 4K projector with auto keystone correction, voice control, and bright LED projection."
    },
    {
         key:18,
        name: "Anker Nebula Cosmos Max 4K Projector",
        price: 1200,
        discount: 7,
        rate: 4.6,
        view: 1500,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (18).jpeg",
        category: 8,
        address: "Anker Store",
        phone: "+1-555-9988",
        datetime_open: "08:00 to 06:00",
        nameShop: "Anker Nebula",
        description: "A compact and portable 4K projector with Dolby Audio and Android TV built-in for seamless streaming."
    },
    {
         key:19,
        name: "Epson EF-12 Mini Laser Streaming Projector",
        price: 900,
        discount: 6,
        rate: 4.4,
        view: 1200,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (19).jpeg",
        category: 8,
        address: "Epson Smart Devices",
        phone: "+1-555-9999",
        datetime_open: "08:00 to 06:00",
        nameShop: "Epson Store",
        description: "A compact laser projector with built-in Android TV, high contrast, and powerful sound performance."
    },
    {
         key:20,
        name: "Samsung The Premiere LSP9T 4K Ultra Short Throw",
        price: 4500,
        discount: 20,
        rate: 5.0,
        view: 5000,
        image: "../../../public/imageTypeofCategory/imageProjector/projector (20).jpeg",
        category: 8,
        address: "Samsung Retail",
        phone: "+1-555-0000",
        datetime_open: "08:00 to 06:00",
        nameShop: "Samsung Store",
        description: "A revolutionary triple-laser ultra-short-throw projector with 4K HDR and premium home theater features."
    }
];

export default projectorData