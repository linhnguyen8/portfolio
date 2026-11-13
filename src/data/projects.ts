// Projects page content (carried over word-for-word from the old projects page).
// Paragraphs use the same "parts" format as home.ts: strings, or { text, href } for links.

import type { Item } from "./home";

export type Project = {
  title: string;
  dates: string;
  course?: string;
  image: { src: string; alt: string; width: number; height: number };
  paragraphs: Item[];
  links: { text: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "HeatSync",
    dates: "Feb – May 2025",
    course: "6.900",
    image: { src: "/img/projects/sm/p-heatsync.jpg", alt: "HeatSync product", width: 866, height: 1200 },
    paragraphs: [
      [
        { text: "6.900", href: "https://efi.mit.edu/spring25/information" },
        " (Engineering for Impact) is an advanced systems design course at MIT where teams of students build full-stack hardware-software solutions for real-world partners.",
      ],
      [
        "Our team of eight collaborated with the MIT Office of Sustainability to develop HeatSync, a portable, low-cost weather monitoring system for campus-wide deployment. We were tasked with designing and building six watertight, field-deployable HeatSync units that met MITOS’s functional and environmental specifications.",
      ],
      [
        "I served as the Industrial Design subteam lead and contributed to the Sensors subteam, focusing on enclosure design, environmental durability, and sensor integration.",
      ],
    ],
    links: [{ text: "process →", href: "/heatsync/" }],
  },
  {
    title: "Gonio",
    dates: "Sep – Dec 2024",
    course: "2.009",
    image: { src: "/img/projects/sm/p-gonio.jpg", alt: "Gonio product", width: 1200, height: 800 },
    paragraphs: [
      [
        { text: "2.009", href: "https://2009.mit.edu/" },
        " is MIT's famous Senior Mechanical Engineering Capstone class, where students are put into teams of ~15 who work together through the product development cycle from ideation, design, to alpha prototype.",
      ],
      [
        "I was a part of the Yellow Team! Our product is ",
        { text: "Gonio", href: "https://www.009balance.com/products/yellow-product-sheet.pdf" },
        ": an adjustable device for knee rehabilitation that monitors patients' seated exercises in real time and shares data with their physical therapist.",
      ],
    ],
    links: [
      { text: "process →", href: "/gonio/" },
      { text: "alpha prototype launch @ ~43:34", href: "https://www.009balance.com/webcast" },
    ],
  },
  {
    title: "Stirling Engine",
    dates: "Feb – May 2024",
    image: { src: "/img/projects/sm/p-sterling.jpg", alt: "Stirling engine", width: 1200, height: 899 },
    paragraphs: [
      [
        "As an ",
        { text: "apprentice", href: "https://meche.mit.edu/featured-classes/pappalardo-lab-apprentice" },
        " for the Pappalardo Lab, I designed a Stirling engine that I fabricated with manual machining on the mill and lathe. It was an assembly with over a dozen parts, which I machined to have tolerances to enable the engine to spin at over 200 RPM.",
      ],
    ],
    links: [],
  },
  {
    title: "Portable Weather Station",
    dates: "Feb – May 2024",
    course: "6.115",
    image: { src: "/img/projects/sm/p-6115.jpg", alt: "6.115 weather station", width: 1200, height: 900 },
    paragraphs: [
      [
        "For my Microcomputer Laboratory ",
        { text: "(6.115)", href: "https://web.mit.edu/6.115/www/" },
        " class’s final project, I developed a portable weather station that collects and analyzes weather data, which can then be transmitted to a base station via bluetooth for real-time weather data visualization. Both the weather station and the base station utilized the Programmable System-on-Chip (PSoC) platform as their main architecture. This platform facilitated the processing of data collected from digital sensors and interpretation of the data to be displayed on a TFT LCD display.",
      ],
    ],
    links: [{ text: "final report", href: "/papers/6115.pdf" }],
  },
  {
    title: "Multiplayer Chip-8 Emulator",
    dates: "Sep – Dec 2023",
    course: "6.111",
    image: { src: "/img/projects/sm/p-6111.jpg", alt: "6.111 emulator", width: 1200, height: 665 },
    paragraphs: [
      [
        "For my Digital Systems Laboratory ",
        { text: "(6.111)", href: "https://fpga.mit.edu/6205/F23/information" },
        " class’s final project, I worked alongside my teammates to create a FPGA-based game emulator for the Chip-8 interpreter. It supports several customization options which can be set by the user in a configuration menu and is designed in parallel manner, which can allow multiple Chip-8 instances to run on the same processor. The project was coded in Verilog.",
      ],
    ],
    links: [
      { text: "final report", href: "/papers/6111.pdf" },
      { text: "demo", href: "https://fpga.mit.edu/videos/2023/team20/video.mp4" },
      { text: "code", href: "https://github.com/linhnguyen8/6111" },
    ],
  },
  {
    title: "Competition Robot",
    dates: "Feb – May 2023",
    course: "2.007",
    image: { src: "/img/projects/sm/p-robot.jpg", alt: "2.007 robot", width: 1200, height: 900 },
    paragraphs: [
      [
        "In ",
        { text: "2.007", href: "https://meche.mit.edu/featured-classes/design-and-manufacturing-i" },
        ": Design and Manufacturing I, students undertake the challenge of designing and manufacturing a robot capable of executing various tasks on a designated game board throughout the semester to compete in the class competition.",
      ],
      [
        "I chose to design a robot that could perform two tasks: autonomously go up a ramp and align itself to spin two centrifuge wheels of different torques at 200+ RPM and pull a multiplier ring that required 40N to pull to the maximum points.",
      ],
    ],
    links: [{ text: "process →", href: "/2007robot/" }],
  },
  {
    title: "Autonomous Optical Density Sensor",
    dates: "June – Aug 2022",
    image: { src: "/img/projects/sm/p-od-sensor.jpg", alt: "OD sensor", width: 1200, height: 900 },
    paragraphs: [
      [
        "I worked in the CAD lab under the guidance of ",
        { text: "Charlene Xia", href: "https://news.mit.edu/2021/saving-seaweed-machine-learning-1022" },
        ". I was tasked to create an inexpensive modular optical density sensor system that autonomously measures the density of spirulina grown in artificial environments to examine the effects of temperature on the size and shape of spirulina. The purpose of this device was to analyze how climate change affects spirulina, a blue-green algae that is a source of food for many aquatic species and has a spiral shape that changes with respect to increases in water temperature.",
      ],
    ],
    links: [{ text: "process →", href: "/odsensor/" }],
  },
  {
    title: "Inexpensive Arsenic Water Purification Device",
    dates: "Jan – Oct 2021",
    image: { src: "/img/projects/sm/p-arsenic.jpg", alt: "Arsenic filtration device", width: 1200, height: 900 },
    paragraphs: [
      [
        "I wanted to find an affordable way to remove arsenic from well water, a major issue in Maine. With no lab access due to the pandemic, I converted my basement into a makeshift lab to experiment with arsenic-removal compounds.",
      ],
      [
        "I developed a novel and inexpensive water purification system that can remove Arsenic from well water employing Carbon Nanotubes (CNT) and Iron-Oxide in a matrix derived from Calcium Alginate. My solution was an equitable alternative that was 90x cheaper than commercialized Arsenic treatment.",
      ],
      [
        "For my work, I won the First Place Grand Award for the Maine State Science Fair and First Place Undergraduate Research Poster at the ASEE-NE Conference",
      ],
    ],
    links: [
      { text: "poster", href: "/papers/asee-poster.pdf" },
      {
        text: "news",
        href: "https://mainedoenews.net/2021/04/09/deering-high-school-senior-is-top-winner-at-maine-state-science-fair/",
      },
    ],
  },
  {
    title: "Reform the Narrative",
    dates: "June 2020 – Aug 2022",
    image: { src: "/img/projects/sm/p-rtn.jpg", alt: "Reform the Narrative", width: 1200, height: 598 },
    paragraphs: [
      [
        "During the rise of the Black Lives Matter movement, I found that there was a lacking in a comprehensive platform to spread Anti-Racism resources to the public. So, I decided to build the platform myself. I self-taught myself HTML, CSS, and Javascript to create the educational website that is now “Reform the Narrative” which aims to help users have centralized access to anti-racism resources.",
      ],
      [
        "I collaborated with local schools to develop marketing, graphic design, and new features for the site. I also wanted to include a storytelling component to “Reform the Narrative” in order to amplify the voices of students from underrepresented communities by conducting interviews about their stories.",
      ],
    ],
    links: [{ text: "site", href: "https://reformthenarrative.com" }],
  },
  {
    title: "Popsicle Stick Lamp",
    dates: "June 2020",
    image: { src: "/img/projects/sm/p-lamp.jpg", alt: "Popsicle stick lamp", width: 1200, height: 900 },
    paragraphs: [
      [
        "During the COVID lockdown, I crafted this lamp as a creative way to repurpose my surplus of popsicle sticks. The lamp's structure is assembled from popsicle sticks, and supplemented by (unused) barbecue skewers. Not only does it provide ambient lighting in my room, it also doubles as a functional and stylish decor.",
      ],
    ],
    links: [],
  },
];
