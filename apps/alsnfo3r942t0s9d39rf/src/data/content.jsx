const WX = 'https://static.wixstatic.com/media'

export const CO = {
  office: {
    address: '1901 Losee Road #110, Las Vegas, NV 89030',
    language: 'Language: English / Korean',
    tel: '+1 949-279-7456',
    telHref: 'tel:+19492797456',
  },
  website: 'https://www.temp.com',
  websiteLabel: 'www.temp.com',
}

export const IM = {
  hero: `${WX}/fd1380_7869533a15e84cfd9e03fabc8e01de22f000.jpg/v1/fit/w_1920,h_1080,q_90,enc_avif,quality_auto/hero.jpg`,
}

const wd = (id, ext = 'jpg') =>
  `${WX}/${id}/v1/fit/w_1400,h_960,q_90,enc_avif,quality_auto/p.${ext}`
const tl = (id, ext = 'jpg') =>
  `${WX}/${id}/v1/fit/w_900,h_1125,q_90,enc_avif,quality_auto/p.${ext}`

const GL = [
  wd('8bb438_dbc34d8b0df546e3b720b14ff670ba83~mv2.jpg'),
  tl('8bb438_f2d393d3ad61468890a2616c56fff0f5~mv2.jpg'),
  tl('8bb438_e83d8cc28a044555b7672018983789a7~mv2.jpg'),
  wd('8bb438_f6bbdd3a41df4bcab09c7333855ba583f003.jpg'),
  tl('8bb438_189ac9d807b640ffbeca24c41d965bae~mv2.jpg'),
  tl('8bb438_02133a81229f49e09dc4c20f107f1eb6~mv2.jpg'),
  tl('8bb438_f7a5e921e855433896901546de91b43e~mv2.png', 'png'),
  wd('8bb438_927f3e749a784536afbcdd81890e8064f003.jpg'),
  tl('8bb438_31254b5ad37446c8949144e34adc2113~mv2.jpg'),
  tl('8bb438_c9e1a83e7f7b43799dbe5a8d3fd81f0b~mv2.jpg'),
  tl('8bb438_324d1f8b463e45d891b5de00c83989ad~mv2.jpg'),
  tl('8bb438_22ae62c08916403d955425d5e8c70a11~mv2.jpg'),
]

export const FL = ['All', 'Trade Show', 'Brand Environment', 'Live Event', 'Custom Booth']

export const PJ = GL.map((img, i) => ({
  title: `프로젝트 이름 ${String(i + 1).padStart(2, '0')}`,
  cat: FL[(i % 4) + 1],
  filter: FL[(i % 4) + 1],
  img,
}))

export const TS = [
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

export const STA = [
  { value: 450, suffix: '+', label: 'Projects delivered' },
  { value: 32, suffix: '', label: 'Countries reached' },
  { value: 18, suffix: '', label: 'Industry awards' },
  { value: 15, suffix: 'yr', label: 'Of experience' },
]

export const CL = [
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

export const VL = [
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
    icon: (
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
    ),
  },
]
