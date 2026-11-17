// Homepage content. Edit text here — the layout picks it up automatically.
//
// Each item is a list of "parts": plain strings, or { text, href } for links.
// Internal links (starting with "/") open in the same tab; external ones in a new tab.

export type Part = string | { text: string; href: string };
export type Item = Part[];
export type Section = { title: string; items: Item[] };

export const sections: Section[] = [
  {
    title: "currently",
    items: [
      [
        "i try to live by a simple idea: seek out hard problems worth solving, in hopes of making the world a little better. typically, i commit to an initiative - then i figure out the rest of the components.",
      ],
      [
        "partnership integrations @ ",
        { text: "EliseAI", href: "https://www.eliseai.com/" },
        " where i am building at the intersection of product, operations, and partnerships",
      ],
      [
        "writing on the side. i am trying to better connect the inputs of ideas and concepts from media that i consume into outputs of my own.",
      ],
    ],
  },
  {
    title: "previously",
    items: [
      [
        "worked at ",
        { text: "Amazon", href: "https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper" },
        ", ",
        { text: "TEGnology", href: "https://tegnology.dk/" },
        ", ",
        { text: "Norman B. Leventhal Center for Advanced Urbanism", href: "https://lcau.mit.edu/" },
      ],
      [
        "led teams to develop devices that solve problems ranging from ",
        { text: "improving localized climate forecasts", href: "/heatsync/" },
        " to ",
        { text: "accelerating recovery after knee surgery", href: "/gonio/" },
      ],
      [
        "taught myself to code to develop an ",
        { text: "educational website", href: "https://reformthenarrative.com/" },
        " that consolidates anti-racism resources for the public",
      ],
      [
        "built a makeshift lab in my basement to independently research and engineer ",
        {
          text: "cost-effective solutions for filtering polluted water sources",
          href: "https://mainedoenews.net/2021/04/09/deering-high-school-senior-is-top-winner-at-maine-state-science-fair/",
        },
      ],
    ],
  },
  {
    title: "additionally",
    items: [
      [
        "i believe in social reproductive labor i.e the work of educating and nurturing the next generation. so i try to pay it forward, from teaching middle schoolers to build ",
        {
          text: "autonomous robots in Bahrain",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7294215835924021249/",
        },
        " to TAing sophomores through their first competition robot in ",
        {
          text: "Design and Manufacturing I [2.007]",
          href: "https://meche.mit.edu/featured-classes/design-and-manufacturing-i",
        },
        ".",
      ],
      [
        "science fair kid at heart. i won a few awards for my work and gave the keynote at the ",
        { text: "maine engineering expo banquet", href: "https://www.engineeringme.com/" },
        " to get younger students into STEM. i still love helping students turn the questions they can't stop thinking about into projects — my ",
        { text: "email", href: "mailto:linnie.ngn@gmail.com" },
        " is always open.",
      ],
    ],
  },
];

export const bio: Item[] = [
  [
    "studied electrical engineering, computer science, and mechanical engineering @ ",
    { text: "MIT", href: "https://www.mit.edu/" },
  ],
  [
    "off the clock: running along the west side highway, cooking up new dishes, and trading life philosophies.",
  ],
];

export const pages = [
  { text: "projects", href: "/projects/" },
  { text: "writing", href: "https://linhnguyen8.substack.com/" },
];

export const socials = [
  { label: "email", href: "mailto:linnie.ngn@gmail.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/linhnguyen8/" },
  { label: "github", href: "https://github.com/linhnguyen8" },
] as const;
