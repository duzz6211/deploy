const WIX = 'https://static.wixstatic.com/media'

/** White (transparent bg) logo from the original Wix site — invert on light backgrounds. */
export const LOGO = `${WIX}/fd1380_fbd588b560db418bb9a2c6f124bc6960~mv2.png/v1/fill/w_250,h_250,al_c,q_95/517_Logo-01.png`

export const COMPANY = {
  koreaHq: {
    label: 'Korea Headquarters',
    address: '#517, Bldg. B, 52 Chungmin-ro, Songpa-gu, Seoul, South Korea',
    tel: '+82 2 501 5535',
    telHref: 'tel:+8225015535',
  },
  usa: {
    label: 'USA Office',
    address: '9101 W. Sahara Ave, Suite 105 #1431, Las Vegas, NV 89117, United States',
  },
  website: 'https://www.trinityone1.com/',
  websiteLabel: 'www.trinityone1.com',
}

export const IMG = {
  // real hero background from main.html
  hero: `${WIX}/fd1380_7869533a15e84cfd9e03fabc8e01de22f000.jpg/v1/fit/w_1920,h_1080,q_90,enc_avif,quality_auto/hero.jpg`,
  svcHero: `${WIX}/8bb438_927f3e749a784536afbcdd81890e8064f003.jpg/v1/fit/w_1920,h_1084,q_90,enc_avif,quality_auto/svc-hero.jpg`,
  aboutHero: `${WIX}/8bb438_f2d393d3ad61468890a2616c56fff0f5~mv2.jpg/v1/fit/w_1920,h_1084,q_90,enc_avif,quality_auto/about-hero.jpg`,
  // "11.jpg" — about/story image from main.html
  about: `${WIX}/fd1380_67ec3a00a8e248509f51e8ae5330b6dd~mv2.jpg/v1/fit/w_1200,h_1600,q_90,enc_avif,quality_auto/about.jpg`,
  // "CES_2025_Attendance.jpg" from main.html — 360 brand creative section
  cap2: `${WIX}/fd1380_c1a6ad8b2b244efa98d13a9b0c03d455~mv2.jpg/v1/fit/w_1600,h_1200,q_90,enc_avif,quality_auto/ces-2025.jpg`,
}

/* Full 12-photo Featured Projects gallery from main.html (order: wides at grid wide slots). */
const wide = (id, ext = 'jpg') => `${WIX}/${id}/v1/fit/w_1400,h_960,q_90,enc_avif,quality_auto/p.${ext}`
const tall = (id, ext = 'jpg') => `${WIX}/${id}/v1/fit/w_900,h_1125,q_90,enc_avif,quality_auto/p.${ext}`

const GALLERY = [
  wide('8bb438_dbc34d8b0df546e3b720b14ff670ba83~mv2.jpg'),
  tall('8bb438_f2d393d3ad61468890a2616c56fff0f5~mv2.jpg'),
  tall('8bb438_e83d8cc28a044555b7672018983789a7~mv2.jpg'),
  wide('8bb438_f6bbdd3a41df4bcab09c7333855ba583f003.jpg'),
  tall('8bb438_189ac9d807b640ffbeca24c41d965bae~mv2.jpg'),
  tall('8bb438_02133a81229f49e09dc4c20f107f1eb6~mv2.jpg'),
  tall('8bb438_f7a5e921e855433896901546de91b43e~mv2.png', 'png'),
  wide('8bb438_927f3e749a784536afbcdd81890e8064f003.jpg'),
  tall('8bb438_31254b5ad37446c8949144e34adc2113~mv2.jpg'),
  tall('8bb438_c9e1a83e7f7b43799dbe5a8d3fd81f0b~mv2.jpg'),
  tall('8bb438_324d1f8b463e45d891b5de00c83989ad~mv2.jpg'),
  tall('8bb438_22ae62c08916403d955425d5e8c70a11~mv2.jpg'),
]

export const FILTERS = ['All', 'Trade Show', 'Brand Environment', 'Live Event', 'Custom Booth']

// 프로젝트 이름/카테고리는 아직 미정 — 초안 placeholder
export const PROJECTS = GALLERY.map((img, i) => ({
  title: `프로젝트 이름 ${String(i + 1).padStart(2, '0')}`,
  cat: FILTERS[(i % 4) + 1],
  filter: FILTERS[(i % 4) + 1],
  img,
}))

export const TESTIMONIALS = [
  {
    quote:
      '“The communication throughout was flawless. 517 understood our brand instantly and delivered a booth that stopped people in their tracks.”',
    person: 'Marketing Director',
    project: 'Global Technology Brand',
  },
  {
    quote:
      '“Incredibly flexible when our plans changed last minute. Their on-site team handled everything so we could focus on our guests.”',
    person: 'Head of Events',
    project: 'International Consumer Brand',
  },
  {
    quote:
      '“From first sketch to final teardown, the execution was meticulous. Easily the best exhibition partner we’ve worked with.”',
    person: 'Brand Manager',
    project: 'Automotive Group',
  },
  {
    quote:
      '“A genuinely global partner. They delivered the same standard across three continents without missing a beat.”',
    person: 'Experiential Lead',
    project: 'Enterprise Software Company',
  },
]

export const STATS = [
  { value: 450, suffix: '+', label: 'Projects delivered' },
  { value: 32, suffix: '', label: 'Countries reached' },
  { value: 18, suffix: '', label: 'Industry awards' },
  { value: 15, suffix: 'yr', label: 'Of experience' },
]

export const CLIENTS = [
  { cls: 'samsung', node: 'SAMSUNG' },
  {
    cls: 'redken',
    node: (
      <>
        REDKEN<small>5TH AVENUE NYC</small>
      </>
    ),
  },
  { cls: 'lg', node: '◉ LG' },
  { cls: 'airbus', node: 'AIRBUS' },
]

export const SERVICES = [
  {
    title: 'Trade Show Displays',
    desc: 'Custom booths engineered to draw crowds — modular systems and one-off builds that make your brand impossible to walk past.',
    icon: (
      <>
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M3 21h18M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: 'Custom Brand Environments',
    desc: 'Immersive spaces — flagship activations, showrooms and pop-ups — that let visitors step inside your brand story.',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </>
    ),
  },
  {
    title: 'Live Events',
    desc: 'Launches, conferences and experiential moments produced end-to-end, with staging, AV and show-calling handled for you.',
    icon: (
      <>
        <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
  },
  {
    title: '360° Brand Creative',
    desc: 'Concepting, art direction, graphics and motion — a single creative language carried consistently across every touchpoint.',
    icon: (
      <>
        <path d="M12 19l7-7a4 4 0 0 0-6-6l-7 7" />
        <path d="m5 19 3-1 8-8" />
        <circle cx="6.5" cy="17.5" r="1.5" />
      </>
    ),
  },
  {
    title: 'Fabrication & Build',
    desc: 'Our own workshop mills, prints, finishes and pre-builds every element — quality controlled before it ever ships.',
    icon: (
      <>
        <path d="M14 2l6 6-8 8H6v-6z" />
        <path d="M3 21h18" />
      </>
    ),
  },
  {
    title: 'Logistics & On-site',
    desc: "Global shipping, install and dismantle managed by our crew — you arrive to a finished stand and walk away when it's over.",
    icon: (
      <>
        <path d="M3 7h13v10H3z" />
        <path d="M16 10h4l1 3v4h-5z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
  },
]

export const PROCESS = [
  { num: '01', title: 'Discover', desc: 'We dig into your goals, brand and show objectives to define what success looks like on the floor.' },
  { num: '02', title: 'Design', desc: 'Concepts, 3D renders and material boards bring the idea to life before a single panel is cut.' },
  { num: '03', title: 'Build', desc: 'Our workshop fabricates and pre-assembles everything, with quality checks at every step.' },
  { num: '04', title: 'Deliver', desc: "We ship, install and manage the stand on-site — then handle teardown so you don't have to." },
]

export const VALUES = [
  {
    title: 'Craftsmanship',
    desc: 'We sweat the millimeter. Every joint, finish and light is considered so the final stand feels effortless.',
    icon: <path d="m12 2 2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z" />,
  },
  {
    title: 'Global reach',
    desc: 'One team, one standard — delivered consistently across continents without missing a beat.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
      </>
    ),
  },
  {
    title: 'Partnership',
    desc: 'We work as an extension of your team — transparent, flexible and calm when plans change last minute.',
    icon: <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />,
  },
]
