export const site = {
  name: "iSystem",
  tagline: "Precision Repair. Certified Care.",
  phone: "+1 (800) 555-0142",
  phoneHref: "tel:+18005550142",
  whatsapp: "https://wa.me/18005550142",
  email: "care@isystem.repair",
  address: "Flat No.102, 1st Floor, Sree Santhoshi Mansion Complex, Sushma, Vanasthalipuram, Hyderabad, Telangana 500070",
  locations: [
    {
      name: "Vanasthalipuram Branch",
      address: "Flat No.102, 1st Floor, Sree Santhoshi Mansion Complex, Sushma, Vanasthalipuram, Hyderabad, Telangana 500070",
      mapUrl: "https://maps.app.goo.gl/QRkJBGnXrhKp9wiY6?g_st=ic"
    },
    {
      name: "L. B. Nagar Branch 1",
      address: "First floor 3-8-3, opposite Indian Petrol Pump, High Way Colony, Chandrapuri Colony, L. B. Nagar, Hyderabad, Telangana 500074",
    },
    {
      name: "L. B. Nagar Branch 2",
      address: "H.No. 3-8-2, First Floor Old Check Post, Bairamal Guda Bypass Rd, L. B. Nagar, Telangana 500074",
    },
    {
      name: "L. B. Nagar Branch 3",
      address: "Dhanunjaya Complex, Chintalkunta Rd, High Way Colony, Chandrapuri Colony, L. B. Nagar, Hyderabad, Telangana 500074",
    }
  ],
  hours: "Mon–Sat · 9:00 – 20:00",
  social: {
    instagram: "https://instagram.com/isystem",
    facebook: "https://facebook.com/isystem",
    linkedin: "https://linkedin.com/company/isystem",
  },
};

export const mobileBrands = [
  { slug: "apple", name: "Apple", tagline: "iPhone precision service" },
  { slug: "samsung", name: "Samsung", tagline: "Galaxy expert repair" },
  { slug: "google-pixel", name: "Google Pixel", tagline: "Pixel-perfect care" },
  { slug: "oneplus", name: "OnePlus", tagline: "Flagship-grade service" },
  { slug: "xiaomi", name: "Xiaomi", tagline: "Full-range Mi & Redmi" },
  { slug: "realme", name: "Realme", tagline: "Certified Realme repair" },
  { slug: "oppo", name: "Oppo", tagline: "Reno & Find series" },
  { slug: "vivo", name: "Vivo", tagline: "X & V series specialists" },
  { slug: "motorola", name: "Motorola", tagline: "Edge & Moto lineup" },
  { slug: "nothing", name: "Nothing", tagline: "Transparent tech care" },
] as const;

export const laptopBrands = [
  { slug: "macbook", name: "MacBook", tagline: "Apple Silicon service" },
  { slug: "dell", name: "Dell", tagline: "XPS, Latitude, Inspiron" },
  { slug: "hp", name: "HP", tagline: "Spectre, Envy, Pavilion" },
  { slug: "lenovo", name: "Lenovo", tagline: "ThinkPad, Yoga, Legion" },
  { slug: "asus", name: "Asus", tagline: "ZenBook, ROG, TUF" },
  { slug: "acer", name: "Acer", tagline: "Swift, Aspire, Predator" },
] as const;

export const mobileServices = [
  { slug: "screen-replacement", name: "Screen Replacement", desc: "Genuine OLED & LCD assemblies for edge-to-edge clarity." },
  { slug: "battery-replacement", name: "Battery Replacement", desc: "Restore all-day capacity with certified cells." },
  { slug: "charging-port", name: "Charging Port Repair", desc: "Precision port replacement for reliable charging." },
  { slug: "camera-repair", name: "Camera Repair", desc: "Front, rear and telephoto module restoration." },
  { slug: "speaker-repair", name: "Speaker Repair", desc: "Crisp earpiece and loudspeaker rebuilds." },
  { slug: "back-glass", name: "Back Glass Replacement", desc: "Flawless factory-finish rear glass swaps." },
  { slug: "motherboard-repair", name: "Motherboard Repair", desc: "Chip-level board diagnostics and rework." },
  { slug: "water-damage", name: "Water Damage Recovery", desc: "Ultrasonic cleaning and multi-stage revival." },
  { slug: "software-issues", name: "Software Issues", desc: "iOS & Android tuning, restore and updates." },
  { slug: "network-problems", name: "Network Problems", desc: "Antenna, modem and signal restoration." },
  { slug: "data-recovery", name: "Data Recovery", desc: "Chip-off and logical recovery specialists." },
  { slug: "phone-unlock", name: "Phone Unlock", desc: "Passcode & carrier unlock, safely handled." },
] as const;

export const laptopServices = [
  { slug: "screen", name: "Screen Repair", desc: "Retina, OLED and IPS panels replaced with precision." },
  { slug: "keyboard", name: "Keyboard Replacement", desc: "OEM keyboards with correct layout and backlight." },
  { slug: "battery", name: "Battery Replacement", desc: "Certified cells and calibrated firmware." },
  { slug: "ssd-upgrade", name: "SSD Upgrade", desc: "NVMe upgrades with full data migration." },
  { slug: "ram-upgrade", name: "RAM Upgrade", desc: "DDR4/DDR5 upgrades tested to spec." },
  { slug: "motherboard", name: "Motherboard Repair", desc: "Board-level diagnostics and micro-soldering." },
  { slug: "charging-port", name: "Charging Port", desc: "USB-C and MagSafe port service." },
  { slug: "fan-cleaning", name: "Fan & Thermal Service", desc: "Deep cleaning, repaste and airflow tuning." },
  { slug: "operating-system", name: "OS Installation", desc: "macOS, Windows and Linux clean setup." },
  { slug: "virus-removal", name: "Virus Removal", desc: "Malware clean-up and hardening." },
  { slug: "data-recovery", name: "Data Recovery", desc: "Drive imaging and file-system recovery." },
  { slug: "chip-level-repair", name: "Chip-Level Repair", desc: "BGA rework and component-level rebuilds." },
] as const;

export type Brand = (typeof mobileBrands)[number] | (typeof laptopBrands)[number];
export type Service = (typeof mobileServices)[number] | (typeof laptopServices)[number];