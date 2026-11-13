// Detail pages for individual projects (/heatsync/, /gonio/, /odsensor/, /2007robot/).
// Content carried over from the original site.
//
// Each page is a list of sections. A section has a heading, text blocks, and images.
//   { p: ... }   a paragraph (string, or parts with links like home.ts)
//   { h: "..." } a small subheading inside the section
//   { ul: [...] } a bullet list; each bullet can have a bold label (b) and nested bullets (sub)
// Images use their original paths; optimized copies are looked up automatically.

import type { Item } from "./home";

export type Bullet = { b?: string; t?: string | Item; sub?: Bullet[] };
export type Block = { p: string | Item } | { h: string } | { ul: Bullet[] };
export type Img = { src: string; alt: string; caption?: string };
export type CaseSection = { heading: string; blocks?: Block[]; images?: Img[] };
export type CaseStudy = {
  slug: string;
  title: string;
  subtitle?: string;
  meta: string;
  sections: CaseSection[];
};

const H = "/img/projects/6900/";
const G = "/img/projects/2009/";
const O = "/img/projects/odsensor/";
const R = "/img/projects/2007/";

export const caseStudies: CaseStudy[] = [
  // ───────────────────────────── HeatSync ─────────────────────────────
  {
    slug: "heatsync",
    title: "HeatSync",
    subtitle: "campus weather monitoring system",
    meta: "feb – may 2025 · 6.900",
    sections: [
      {
        heading: "project overview",
        blocks: [
          {
            p: [
              { text: "6.900", href: "https://efi.mit.edu/spring25/information" },
              " (Engineering for Impact) is an advanced systems design course at MIT where teams of students build full-stack hardware-software solutions for real-world partners.",
            ],
          },
          {
            p: "Working in a team of 8, we developed HeatSync, a portable, low-cost weather monitoring system developed for MIT's Office of Sustainability to provide localized weather data across campus.",
          },
          {
            p: "This project addresses a critical issue: Boston's heat emergencies are declared using airport weather data, which doesn't accurately represent conditions in underserved urban neighborhoods, which often experience significantly higher temperatures than reported by distant weather stations, leading to inadequate heat emergency responses and public health risks.",
          },
        ],
        images: [
          { src: H + "HeatSyncTeamPic.JPG", alt: "HeatSync team picture" },
          { src: H + "enclosure.png", alt: "HeatSync unit" },
        ],
      },
      {
        heading: "industrial design subteam (lead)",
        blocks: [
          { p: "As the Industrial Design team lead, I was responsible for:" },
          {
            ul: [
              { b: "Enclosure Design & CAD:", t: "Led the design and iteration of all enclosure versions, reducing final size by 30% while maintaining functionality" },
              { b: "Component Integration:", t: "Ensured seamless integration of electronics, sensors, and user-facing elements" },
              { b: "Field Testing Coordination:", t: "Organized and participated in field testing to validate design performance" },
              { b: "Manufacturing Oversight:", t: "Managed 3D printing, post-processing, and assembly of six production units" },
            ],
          },
        ],
        images: [{ src: H + "components.png", alt: "HeatSync components" }],
      },
      {
        heading: "sensor subteam",
        blocks: [
          { p: "As a member of the Sensors team, I contributed to:" },
          {
            ul: [
              { b: "Sensor Selection:", t: "Evaluated temperature/humidity sensors based on accuracy (±0.28°C), cost (<$1.50), and environmental requirements" },
              { b: "Custom PCB Design:", t: "Designed and assembled custom PCBs for sensor prototyping and testing" },
              { b: "Radiation Shield Validation:", t: "Conducted controlled experiments proving radiation shields improve measurement accuracy at high temperatures" },
              { b: "Field Performance Analysis:", t: "Compared sensor performance against commercial HOBO data loggers" },
            ],
          },
        ],
        images: [{ src: H + "veml.png", alt: "VEML7700 sensor board" }],
      },
      {
        heading: "sensor specifications",
        blocks: [
          { h: "Specifications (*** means higher priority)" },
          {
            ul: [
              { t: "It should accurately measure the air temperature and humidity, with dynamics appropriate for the use case.***" },
              { t: "It should measure ground surface temperature, with dynamics appropriate for the use case.*" },
              { t: "Data from a sensor node should be able to be tied to a location.***" },
            ],
          },
          { h: "Sensor Selection Criteria" },
          {
            ul: [
              { b: "Temperature Range & Accuracy:", t: "20°C–50°C, ±0.28°C (≤ ±0.5°F)" },
              { b: "Relative Humidity Range & Accuracy:", t: "0–100%, ≤ ±2%" },
              { b: "Availability:", t: "Must be in stock at DigiKey (non-Marketplace only)" },
              { b: "Voltage:", t: "3.3V system compatibility" },
              { b: "Power Consumption:", t: "≤ 1 mW (typical measurement mode)" },
              { b: "Communication:", t: "Must support I²C protocol" },
              { b: "Package Type:", t: "SMT packages easy to solder (SOIC, DFN, QFN)" },
              { b: "Cost:", t: "≤ $1.50 per unit at 1,000-unit scale" },
            ],
          },
        ],
      },
      {
        heading: "sensor research, prototyping, and field testing",
        blocks: [
          { h: "Sensor Research & Prototyping" },
          {
            ul: [
              { t: "We expanded our sensor scope to include wind and solar sensors for calibration after identifying temperature inaccuracies in the prior year's design." },
              {
                b: "Prototyped Sensors:",
                sub: [{ t: "Temp/RH: HS401, DHT22, SHTC3" }, { t: "Wind: FS3000-1015" }, { t: "Sunlight: VEML7700-TT" }],
              },
              { t: "For each sensor, we designed custom PCBs with appropriate passives and connectors for power and I²C, manually assembled them, and conducted field testing to evaluate accuracy and integration feasibility." },
            ],
          },
          { h: "Sensor Field Testing" },
          {
            ul: [
              { t: "We compared our sensor readings to the HOBO MX2302A, a commercial-grade temperature/humidity logger." },
              { t: "At room temperature, all sensors performed similarly to the HOBO." },
              { t: "The VEML7700-TT was tested under direct sunlight, but wind testing proved difficult due to the FS3000-1015's unidirectional nature." },
            ],
          },
          { h: "Final Sensor Selection" },
          {
            ul: [
              { t: "Since all candidate sensors had similar accuracy specs, we shifted focus toward improving accuracy through enclosure design (e.g., radiation shielding) to help mitigate climate factors that can bias sensor readings" },
              {
                t: "Final Sensor Choices:",
                sub: [
                  { b: "SHT40", t: "for Temp/RH — inexpensive, readily available, and comparable to HOBO." },
                  { b: "VEML7700-TT", t: "retained for light sensing to evaluate sun exposure's effect." },
                  { b: "FS3000-1015", t: "discarded due to cost, unidirectionality, and pivot away from environmental calibration" },
                ],
              },
            ],
          },
        ],
        images: [
          { src: H + "sensorResearch.png", alt: "Sensor research overview" },
          { src: H + "sensorGraph.png", alt: "Sensor field test graph" },
          { src: H + "sensorGraph2.png", alt: "Sensor field test graph" },
          { src: H + "sht40.png", alt: "SHT40 sensor board" },
          { src: H + "veml.png", alt: "VEML7700 sensor board" },
        ],
      },
      {
        heading: "industrial design specifications",
        blocks: [
          { h: "Specifications (*** means higher priority)" },
          {
            ul: [
              { t: "It should be portable and able to be set up by an average person in a variety of outdoor environments on the MIT campus, including on a tripod or attached to poles of various dimensions.***" },
              { t: "It should be able to be physically attached to a HOBO MX2302A data logger.*" },
              { t: "It should be rugged and able to withstand a summertime Boston-area environment (heat, rain, wind and curious people).***" },
              { t: "Community-engaging design" },
            ],
          },
          { h: "Design Iteration from Previous Version" },
          { p: "We retained strengths from last year’s enclosure (e.g., ingress sealing, waterproofing, compactness), while iterating on:" },
          {
            ul: [
              { b: "Community Engagement:", t: "Added an E-Paper display to show real-time temperature and Heat Index, plus a QR code linking to a map of all HeatSync devices across campus." },
              { b: "Accuracy at High Temperatures:", t: "Added a radiation shield to reduce sun-induced heat distortion." },
              { b: "Modularity:", t: "Designed for easy assembly, debugging, and diverse mounting." },
            ],
          },
        ],
        images: [
          { src: H + "enclosureExterior.png", alt: "Enclosure exterior" },
          { src: H + "enclosureEpaper.png", alt: "Enclosure with E-Paper display" },
          { src: H + "enclosureModular.png", alt: "Modular enclosure design" },
        ],
      },
      {
        heading: "radiation shield testing",
        blocks: [
          {
            ul: [
              { t: "We tested an open-source radiation shield by comparing a shielded sensor vs. an exposed one under heat (using an incandescent bulb in a covered setup)." },
              { t: "At moderate temperatures, both sensors aligned with the HOBO." },
              { t: "At high temperatures, the shielded sensor outperformed both the unshielded sensor and the HOBO, indicating strong potential for mitigating solar heat distortion." },
            ],
          },
        ],
        images: [
          { src: H + "sensorLampSetup.jpg", alt: "Radiation shield test setup" },
          { src: H + "sensorLampOn.jpg", alt: "Radiation shield test with lamp on" },
        ],
      },
      {
        heading: "enclosure iterations",
        blocks: [
          { h: "Enclosure V1" },
          {
            ul: [
              { t: "Bulky but functional; enabled initial field testing." },
              { t: "Compared radiation-shielded vs. unshielded sensors using MIT Sailing Pavilion data as a benchmark (spring conditions showed minimal difference)." },
            ],
          },
          { h: "Enclosure V6 (Final)" },
          { p: "We iterated through several versions to arrive at a final design that was:" },
          {
            ul: [
              { b: "Compact", t: "— Reduced lid and base size by 30%" },
              { b: "Watertight", t: "— Spraypainted white PLA prints; sealed with O-rings, epoxy, and conformal coatings" },
              { b: "Modular", t: "— Mountable via tripod or pole, swappable PCB layers" },
              { b: "Engaging", t: "— HeatSync logo, QR code, googly eyes, and E-Paper display" },
            ],
          },
          { h: "Main Design Highlights" },
          {
            ul: [
              { b: "Radiation Shield Connector:", t: "Enabled full shielding with just 2 added plates instead of 6, reducing cost and material." },
              {
                b: "Interior Design:",
                sub: [{ t: "Standoffs for quick access and debugging" }, { t: "Indents to reduce weight" }, { t: "Interlocking lip for secure assembly" }],
              },
              {
                b: "Exterior Design:",
                sub: [
                  { t: "Dual mounting options (pole + tripod)" },
                  { t: "Weatherproofing: O-rings, spray paint, sealed sensor panels" },
                  { t: "Real-time feedback via E-Paper + QR-enabled web dashboard" },
                ],
              },
            ],
          },
        ],
        images: [
          { src: H + "heatsyncV1.jpg", alt: "Enclosure V1" },
          { src: H + "IDSubteam.JPG", alt: "Industrial Design subteam" },
          { src: H + "enclosure.png", alt: "Final HeatSync enclosure" },
          { src: H + "enclosureSide.png", alt: "Final HeatSync enclosure, side view" },
        ],
      },
    ],
  },

  // ───────────────────────────── Gonio ─────────────────────────────
  {
    slug: "gonio",
    title: "Gonio",
    subtitle: "knee rehabilitation system",
    meta: "sep – dec 2024 · 2.009",
    sections: [
      {
        heading: "background",
        blocks: [
          {
            p: [
              { text: "2.009", href: "https://2009.mit.edu/" },
              ' is MIT\'s famous Senior Mechanical Engineering Capstone class, where students are put into teams of ~15 who work together through the product development cycle from ideation, design, to alpha prototype. Our theme this year was "Balance"!',
            ],
          },
          {
            p: 'I was on Yellow Team and I served as 1 of 2 system integrators. As described by the 2.009 website, "the system integrators will assume a number of coordination and integration functions during the project, from both a project management and technical design viewpoint. While they are not the owners of the design vision (the team is), they are the hub of team communication."',
          },
        ],
        images: [{ src: G + "build-2.jpeg", alt: "Yellow Team picture" }],
      },
      {
        heading: "system integrator role",
        blocks: [
          { p: "The system integrators have management responsibilities that include:" },
          {
            ul: [
              { t: "Coordinating weekly team meetings, agendas, and goals." },
              { t: "Structuring the process to define task forces." },
              { t: "Ensuring that the meeting minutes and team's Slack workspace is properly maintained." },
              { t: "Facilitating communication within and between team task forces." },
              { t: "Forming and maintaining the overall project schedule in consultation with the team lab instructors." },
              { t: "Spearheading the development of the product contract and specifications." },
              { t: "Forming and maintaining a system image of the product as it is designed." },
              { t: "Helping with the physical integration of product subsystems." },
            ],
          },
        ],
        images: [{ src: G + "si-description.jpeg", alt: "System integrator description" }],
      },
      {
        heading: "milestone 1: 6 opportunities",
        blocks: [
          {
            p: 'We started out with over 100 product opportunities, ranging from categories of home-use, medical, to mobile safety. From those concepts, we split into subteams and narrowed down to six compelling problems/opportunities to explore, focusing on unmet needs rather than solutions. I specifically worked on the subteam of "accountability & independence in medical care." Each team delivers elevator pitches for each opportunity during a 6-minute presentation to showcase their most promising ideas, derived from research, observations, and brainstorming. This helped us refine problem identification skills and provides exposure to opportunities being considered by classmates.',
          },
        ],
        images: [{ src: G + "6-ops.png", alt: "Six opportunities" }],
      },
      {
        heading: "milestone 2: feasibility models",
        blocks: [
          {
            p: "We then developed four product concepts and assess their feasibility by identifying key risks and building models (physical, numerical, or analytic) to address them. We evaluated each concept based on feasibility, market potential, user needs, and unique value propositions. This includes conducting market research, benchmarking, and gathering user feedback to create a user persona. Findings from these analyses guided our selection of one concept to pursue for further development.",
          },
          {
            p: "For our feasibility analysis, we developed four concepts: Hands-Free Crutch, Fire Suppression Systems in Shredder Facilities, Retractable Training Wheels, and Smart Cast to help with muscle atrophy. I contributed as part of the Hands-Free Crutch subteam, focusing on the limitations of traditional crutches in mobility and convenience. We conducted market research on the crutch industry and analyzed the user space by examining injury types. A key insight was the distinction between the consumer persona (doctors prescribing the device) and the user persona (patients using it), which shaped our approach to product development.",
          },
        ],
        images: [
          { src: G + "feasibility.jpg", alt: "Hands-free crutch feasibility" },
          { src: G + "feasibility-market.jpg", alt: "Crutch market research" },
          { src: G + "feasibility-solution.jpg", alt: "Crutch solution concept" },
        ],
      },
      {
        heading: "milestone 3: architecture review",
        blocks: [
          {
            p: "After evaluating our four concepts and conducting user interviews, we chose to focus on the Smart Cast, which addresses the clear need to prevent muscle atrophy during recovery. This led us to explore the broader rehabilitation space, where we identified accountability in physical therapy—especially post–total knee replacement—as a key challenge. With a $9.4B market growing at 5.1% annually, we saw potential in improving recovery outcomes through consistent physical therapy, which can speed up healing by 20–30% and reduce long-term costs by 10–15%. However, current barriers like limited mobility, scheduling issues, and high in-clinic costs reduce adherence. We aimed to develop a wearable that tracks PT exercises and improves patient–therapist communication.",
          },
          {
            p: "We focused on developing our most critical module: the sensing technology for detecting patient exercises by measuring knee range of motion. We tested various sensors and ultimately selected an IMU for its accuracy and ease of integration. Additionally, we explored Bluetooth connectivity to enable data transmission from the patient to the physical therapist. This milestone allowed us to refine our product architecture, validate high-risk components, and gather valuable design feedback through physical prototyping.",
          },
        ],
        images: [
          { src: G + "architecture.jpg", alt: "Architecture review" },
          { src: G + "arch-imu.png", alt: "IMU testing" },
        ],
      },
      {
        heading: "milestone 4: technical review",
        blocks: [
          {
            p: "The Technical Review assesses the functionality of each team's final prototype and provides critical feedback to guide improvements before the final presentation. We had to present a fully functional, testable prototype, demonstrating that all technical features are operational. Addressing key technical challenges early was essential for allowing time to debug and have a successful system integration.",
          },
          { p: "To get a working prototype, we divided into several subteams: Straps, Sensors, App, User Interviews, and Market" },
          {
            ul: [
              { b: "Straps:", t: "We iterated through multiple strap designs to securely hold the sensor unit while ensuring comfort and ease of use for the wearer." },
              { b: "Sensors:", t: "We evaluated both raw IMUs with custom calculations and pre-packaged IMUs, ultimately selecting the latter for smoother integration." },
              { b: "App:", t: "We built a simple application that displayed knee angles based on IMU data, allowing real-time feedback." },
              { b: "Market:", t: "We conducted research to inform our business strategy and identify a viable go-to-market plan." },
              { b: "User Interviews:", t: "We tested our prototypes with users to gather feedback and iterated based on their input to better address user needs." },
            ],
          },
        ],
        images: [
          { src: G + "technical-review.jpg", alt: "Technical review" },
          { src: G + "tech-review-app.jpg", alt: "Technical review app" },
          { src: G + "tech-straps.jpg", alt: "Strap prototypes" },
        ],
      },
      {
        heading: "milestone 5: final presentation",
        blocks: [
          {
            p: "The Final Presentation was a formal product launch event attended by classmates, instructors, industry guests, and the broader MIT community. Each team showcased their work through a 7-minute polished presentation, demonstrating their alpha prototype—a detailed, looks-like and works-like version of the final product. The presentation highlighted key design merits, technical innovations, user impact, and potential market realization. We presented our product to a live audience of ~1,000 people with an online audience of ~10,000!!",
          },
          { p: "I was lucky enough to have been chosen as one of the presenters, which was a rewarding opportunity!" },
          {
            p: ["Watch our presentation ", { text: "here", href: "https://www.009balance.com/webcast" }, " @ ~43:34."],
          },
        ],
        images: [
          { src: G + "final-presentation.jpg", alt: "Final presentation" },
          { src: G + "yellow-team-pic.jpeg", alt: "Yellow Team" },
        ],
      },
      {
        heading: "final product: gonio",
        blocks: [
          { p: "Our final product is Gonio: a rehabilitation system that enables patients recovering from total knee replacement surgery to do physical therapy remotely." },
          {
            p: "The Gonio System contains 3 components: motion sensors that attach to the body, an associated app that reads the sensors and guides the user through their exercises, and a website that allows PTs to monitor patient progress and provide timely, remote feedback.",
          },
        ],
        images: [
          { src: G + "gonio-case.jpg", alt: "Gonio case" },
          { src: G + "gonio-straps.jpg", alt: "Gonio straps" },
          { src: G + "gonio-phone.jpg", alt: "Gonio app" },
        ],
      },
    ],
  },

  // ───────────────────────────── OD sensor ─────────────────────────────
  {
    slug: "odsensor",
    title: "Optical Density Sensor",
    meta: "june – aug 2022 · CAD lab",
    sections: [
      {
        heading: "background",
        blocks: [
          {
            p: "I worked in the CAD lab under the guidance of Charlene Xia during the summer of 2022. I was tasked to create an inexpensive modular optical density sensor system that autonomously measures the density of spirulina grown in artificial environments.",
          },
          {
            p: "An optical density sensor quantifies the density of a liquid sample with the intensity of the light that passes through the sample and the intensity of light before it enters the sample. However, many commercial optical density sensors are expensive, which is a hindrance in accessibility to biological research.",
          },
          {
            p: "The purpose of this device was to analyze how climate change affects spirulina, a blue-green algae that is a source of food for many aquatic species and has a spiral shape that changes with respect to increases in water temperature.",
          },
          {
            p: "The device is made up of three components: a 3D printed fluid channel and casing, Peristaltic Pump with a L298N Motor Driver, Arduino Nano 33 IoT with Breadboard—all assembled on a lego base plate.",
          },
        ],
        images: [{ src: O + "od-background.jpg", alt: "Optical density sensor" }],
      },
      {
        heading: "fluid channel",
        blocks: [
          {
            p: "I designed a clear channel that allowed for water containing the spirulina to flow through and had nozzles at each end that attached to a peristaltic pump that pumped water through the OD sensor.",
          },
        ],
        images: [{ src: O + "od-fluid-split.png", alt: "Fluid channel exploded view" }],
      },
      {
        heading: "sensor enclosure",
        blocks: [
          {
            p: "The clear channel was sandwiched by two 3D printed casings that contained openings for a red LED and 3 photoresistors that measure transmission, reflection, and calibration.",
          },
        ],
        images: [{ src: O + "od-sensor-assem-split.png", alt: "Sensor enclosure exploded view" }],
      },
      {
        heading: "lego modularity",
        blocks: [
          {
            p: "A key feature of the fluid channel-sensor system is its enclosure, designed to fit onto a standardized LEGO base plate. This modular design enables seamless integration of additional optical density sensors with different LEDs, allowing for future expansion and alignment on the LEGO board as needed.",
          },
        ],
        images: [{ src: O + "od-lego.png", alt: "Enclosure on LEGO base plate" }],
      },
      {
        heading: "autonomizing pump",
        blocks: [
          {
            p: "I reverse engineered an existing peristaltic pump and replaced its step motor with a L298N Motor Driver in order to permit the device to be controlled autonomously with an Arduino. Programming in C++, I designed software that collected both serial plotting data of the values read and the serial monitor data and automatically saved them in a CSV file for further analysis.",
          },
        ],
        images: [{ src: O + "od-pump.png", alt: "Peristaltic pump" }],
      },
      {
        heading: "final assembly",
        images: [{ src: "/img/projects/p-od-sensor.jpg", alt: "Final optical density sensor assembly" }],
      },
    ],
  },

  // ───────────────────────────── 2.007 robot ─────────────────────────────
  {
    slug: "2007robot",
    title: "2.007 Competition Robot",
    meta: "feb – may 2023 · 2.007",
    sections: [
      {
        heading: "challenge",
        blocks: [
          {
            p: "The 2.007 gameboard features multiple challenges that students' robots can tackle to score points, with time as the primary constraint. This year's theme, Wakanda Forever, was inspired by Black Panther 2 since it was set on MIT's campus. My strategy focused on designing a robot that could consistently score points each round by completing non-competitive tasks. I prioritized two challenges:",
          },
          {
            ul: [
              {
                b: "Spinning the Centrifuge Wheels –",
                t: "The gameboard features two centrifuge wheels positioned side by side, with the outer wheel requiring more torque to spin. Points are awarded based on the robot’s ability to reach specific RPM benchmarks, with higher RPMs yielding more points—up to a maximum of 200 RPM. Exceeding this limit results in zero points.",
              },
              {
                b: "Pulling the Multiplier –",
                t: "The point multiplier comprised of a hook attached to a rope that requires 40N of force to pull. If fully extended, the multiplier can multiply the robot's total points by 2x.",
              },
            ],
          },
        ],
        images: [{ src: R + "gameboard.jpg", alt: "2.007 gameboard" }],
      },
      {
        heading: "torque speed measurements",
        blocks: [
          {
            p: "To achieve the desired spinner that could spin the centrifuge wheels at the max speed, I conducted torque measurements on each wheel and constructed a prototype spinner using 1 LDO (Linear DC Motor) with various gear ratios. This experimentation provided data for my torque-speed calculations.",
          },
        ],
        images: [{ src: R + "spinner1.jpg", alt: "First prototype spinner" }],
      },
      {
        heading: "torque speed calculations",
        blocks: [
          {
            p: "Utilizing a torque-speed curve and power calculations, I determined the optimal number of LDO motors and the necessary gear ratio to meet the specified speed requirements.",
          },
        ],
        images: [{ src: R + "centrifugecal.jpeg", alt: "Centrifuge torque-speed calculations" }],
      },
      {
        heading: "gearbox v1",
        blocks: [
          {
            p: "Integrating theoretical and experimental insights, I devised a gearbox system capable of spinning the heavier wheel, establishing a benchmark for designing a dual spinner system that successfully spun the two wheels simultaneously and met the RPM criteria during trial runs.",
          },
        ],
        images: [{ src: R + "gearbox.png", alt: "Gearbox V1" }],
      },
      {
        heading: "winch for multiplier ring",
        blocks: [
          {
            p: "To pull the multiplier hook, I designed a winch system connected to a hook via a string. The motor-driven winch provides a mechanical advantage, generating the necessary force to pull the multiplier ring efficiently.",
          },
        ],
        images: [{ src: R + "winch.png", alt: "Winch" }],
      },
      {
        heading: "carabiner hook for multiplier ring",
        blocks: [
          {
            p: "The system uses two hooks: one fixed to the robot and a detachable one that latches onto the multiplier ring. Inspired by a carabiner, I engineered a secure and easy-to-attach hook connected to the winch via a string.",
          },
          {
            p: "The process works as follows: The robot attaches its carabiner-style hook to the multiplier ring, then drives away to tension the system while latching its second hook onto the gameboard railings. Once positioned, the winch is actuated, pulling the multiplier ring toward the robot and activating the 2x score multiplier.",
          },
        ],
        images: [{ src: R + "carabiner.png", alt: "Carabiner hook" }],
      },
      {
        heading: "gearbox v2",
        blocks: [
          {
            p: "For the final integrated design of the spinners onto my robot's body, I chose to make a lighter version of my Gearbox V1, where I mounted the LDO motors and its gear train onto sheet metal plates that can be easily removed from my robot's chassis body to ensure that the components can be switched out easily if there is an issue.",
          },
        ],
        images: [{ src: R + "gearboxV2.png", alt: "Gearbox V2" }],
      },
      {
        heading: "final robot",
        images: [
          { src: R + "robotfront.jpeg", alt: "Robot front view", caption: "front view" },
          { src: R + "robotback.jpeg", alt: "Robot back view", caption: "back view" },
          { src: R + "robotside.jpeg", alt: "Robot side view", caption: "side view" },
        ],
      },
    ],
  },
];
