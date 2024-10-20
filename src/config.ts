export const DELAY_BEFORE_CLOSE = 3_000;
export const DELAY_AFTER_CLOSE = 2_000;
export const DELAY_INITIAL = 4_000;

export const SERVICES_AMOUNT = 5;

export enum Service {
  GMAIL,
  DISCORD,
  TIKTOK,
  YOUTUBE,
  SLACK,
}

export const SERVICE_CONFIGS = {
  default: {
    card: {
      background: "#EAEFFA",
      blur1: "#C1C4FB",
      blur2: "#CEDAF8",
      blur3: null,
      blur4: null,
      foreground1: "#596C91",
      foreground2: "#061E40",
      border: "#7499FA",
      icon: "#5B658C",
    },
    ball: {
      radial1: "#306DEB",
      radial2: "#747BED",
      background: "#AECDEF",
      border: "#A0ACE2",
      base: "#FFFFFF",
    },
    name: "",
  },
  [Service.GMAIL]: {
    name: "Gmail",
    card: {
      background: "#F1FFF5",
      blur1: "#E3BAB7",
      blur2: "#CEDAF8",
      blur3: "#C7FFD5",
      blur4: "#F6E8C1",
      foreground1: "#688972",
      foreground2: "#053E20",
      border: "#76C479",
      icon: "#5E8770",
    },
    ball: {
      radial1: "#34A853",
      radial2: "#3AC892",
      background: "#A3E5AD",
      border: "#89D297",
      base: "#FFFFFF",
    },
  },
  [Service.DISCORD]: {
    name: "Discord",
    card: {
      background: "#DFFBFA",
      blur1: "#85D4FF",
      blur2: "#B9F4F3",
      blur3: null,
      blur4: null,
      foreground1: "#639596",
      foreground2: "#0C4041",
      border: "#7499FA",
      icon: "#5BA3A4",
    },
    ball: {
      radial1: "#30EBE8",
      radial2: "#30B0EB",
      background: "#D9F8F8",
      border: "#C69DEE",
      base: "#5865F2",
    },
  },
  [Service.TIKTOK]: {
    name: "TikTok",
    card: {
      background: "#FFF0F4",
      blur1: "#E998AD",
      blur2: "#BCE7EB",
      blur3: "#CEDAF8",
      blur4: null,
      foreground1: "#588E90",
      foreground2: "#0F3A3C",
      border: "#7499FA",
      icon: "#5B658C",
    },
    ball: {
      radial1: "#69C9D0",
      radial2: "#F77C9B",
      background: "#C0E7EB",
      border: "#FEBECE",
      base: "#000000",
    },
  },
  [Service.YOUTUBE]: {
    name: "YouTube",
    card: {
      background: "#FBE5E3",
      blur1: "#F4A3D9",
      blur2: "#F6C8C3",
      blur3: null,
      blur4: null,
      foreground1: "#935F5A",
      foreground2: "#40100B",
      border: "#F47D75",
      icon: "#A85859",
    },
    ball: {
      radial1: "#EA4335",
      radial2: "#E5354A",
      background: "#F7B5B2",
      border: "#F28F8B",
      base: "#FF0000",
    },
  },
  [Service.SLACK]: {
    name: "Slack",
    card: {
      background: "#F1FDFF",
      blur1: "#B6ECFC",
      blur2: "#F9C7D6",
      blur3: "#FFF1D1",
      blur4: "#BCE4D3",
      foreground1: "#918459",
      foreground2: "#402D06",
      border: "#76C479",
      icon: "#5BA3A4",
    },
    ball: {
      radial1: "#FBBC05",
      radial2: "#FB8C05",
      background: "#FDEBA4",
      border: "#FDE17A",
      base: "#FFFFFF",
    },
  },
};

export const COMAPNY_NAMES = [
  "Nexio Inc.",
  "Virox Ltd.",
  "Lumos Co.",
  "Zephy Corp.",
  "Orbis Inc.",
  "Prysm Labs",
  "Zyntro Ltd.",
  "Kova Inc.",
  "Astra Co.",
  "Fluxis Inc.",
];
