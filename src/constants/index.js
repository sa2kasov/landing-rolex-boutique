import { facebook, instagram, shieldTick, support, truckFast, x } from '../assets/icons'
import { bigWatch1, bigWatch2, bigWatch3, customer1, customer2, watch4, watch5, watch6, watch7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from '../assets/images'

export const navLinks = [
  { href: "#all", label: "All" },
  { href: "#classic", label: "Classic" },
  { href: "#professional", label: "Professional" },
  { href: "#watches-by-theme", label: "Watches by Theme" },
];

export const watches = [
  {
    thumbnail: thumbnailShoe1,
    bigWatch: bigWatch1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigWatch: bigWatch2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigWatch: bigWatch3,
  },
];

export const statistics = [
  { value: '14', label: 'New Models' },
  { value: '2k+', label: 'Stores' },
  { value: '500k+', label: 'Watches/year' }
];

export const products = [
  {
    imgURL: watch4,
    name: "Sky Dweller",
    price: "$23,400",
  },
  {
    imgURL: watch5,
    name: "GMT Master II",
    price: "$14,500",
  },
  {
    imgURL: watch6,
    name: "Explorer",
    price: "$9,100",
  },
  {
    imgURL: watch7,
    name: "Oyster Perpetual 31",
    price: "$11,000",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Shipping Methods",
    subtext: "Every item shipped out of our store is fully insured and requires a signature confirmation upon delivery."
  },
  {
    imgURL: shieldTick,
    label: "Watch Appraisal",
    subtext: "Our watch appraisal service is designed to provide you with a thorough assessment of your watch’s condition and value."
  },
  {
    imgURL: support,
    label: "Quality Assurance",
    subtext: "Our boutique has been in the business for years and has served thousands of customers in the country."
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Askhat Yilmaz',
    rating: 9.8,
    feedback: "Impeccable service and an unmatched selection – this Rolex boutique experience exceeded all expectations!"
  },
  {
    imgURL: customer2,
    customerName: 'Lola Montgomery',
    rating: 10,
    feedback: "From start to finish, every moment spent at this Rolex boutique was nothing short of perfection."
  }
];


export const footerLinks = [
  {
    title: "Models",
    links: [
      { name: "Datejust", link: "/" },
      { name: "Submariner", link: "/" },
      { name: "GMT-Master II", link: "/" },
      { name: "Day-Date", link: "/" },
      { name: "Cosmograph Daytona", link: "/" },
      { name: "Oyster Perpetual", link: "/" },
      { name: "Yacht-Master", link: "/" },
      { name: "More...", link: "/" }
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About Us", link: "/" },
      { name: "Virtual Appointments", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Watch Insurance", link: "/" },
      { name: "Terms & Conditions", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@rolex.com", link: "mailto:customer@rolex.com" },
      { name: "+71234567890", link: "tel:+71234567890" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: x, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];