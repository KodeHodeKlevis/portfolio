export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
];


export const gridItems = [
  {
    id: 1,
    title: "Let's Create something amazing",
    description: "Your collaboration and ideas are what are important and what I value most in this process.",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2", 
    imgName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/laptop.svg",
    spareImg: "",
    showAvailableHours: false,
  },
  {
    id: 2,
    title: "Available hours",
    description: "",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 sm:col-span-1 sm:row-span-1", 
    titleClassName: "justify-start text-white text-lg sm:text-xl md:text-2xl",
    img: "",
    spareImg: "",
    showAvailableHours: true,
  },
  {
    id: 3,
    title: "These are the skills I'm good with",
    description: "Always looking to improve.",
    className: "lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1", 
    imgName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    showAvailableHours: false,
  },
  {
    id: 4,
    title: "Feel free to reach out",
    description: "",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 sm:col-span-1 sm:row-span-1", 
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    showAvailableHours: false,
  },
  {
    id: 5,
    title: "Current big project I am working on",
    description: "This is a game being implemented inside a website, functioning and feeling like a real game.",
    className: "lg:col-span-4 md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2", 
    imgName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
    showAvailableHours: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "Next.js- (API calling) Norway's Companies Search",
    description: "In this website while using the Brønnøysundregistrene API you can search for any company in Norway in any Municipality.",
    img: "/p1.svg",
    link: "https://next-kommune.vercel.app",
  },
  {
    id: 2,
    title: "React- My First Personal Portfolio",
    description: "This is the first Portfolio i build using React and Tailwhind, having used some simple animations, hover effects, scrolling and much more.",
    img: "/p2.svg",
    link: "https://react-portfolio-chi-roan.vercel.app",
  },
  {
    id: 3,
    title: "React- A Simple Restaurant Menu",
    description: "This is a simple Restaurant Menu Website, which also more so caterers towards phone or table users, but Pc users can also navigate through it no problem.",
    img: "/p3.svg",
    link: "https://react-menu-iota.vercel.app",
  },
];