interface LevelTypes {
  name: string;
  total: number;
  loss: number;
  wins: [number, number, number, number, number];
}
const GloryLevels: Array<LevelTypes> = [
  {
    name: "Guardian I",
    total: 0,
    loss: 60,
    wins: [80, 100, 120, 140, 160],
  },
  {
    name: "Guardian II",
    total: 40,
    loss: 60,
    wins: [80, 100, 120, 140, 160],
  },
  {
    name: "Guardian III",
    total: 110,
    loss: 60,
    wins: [80, 100, 120, 140, 160],
  },
  {
    name: "Brave I",
    total: 110,
    loss: 60,
    wins: [68, 88, 108, 136, 148],
  },
  {
    name: "Brave II",
    total: 370,
    loss: 60,
    wins: [68, 88, 108, 136, 148],
  },
  {
    name: "Brave III",
    total: 665,
    loss: 60,
    wins: [68, 88, 108, 136, 148],
  },
  {
    name: "Heroic I",
    total: 1050,
    loss: 52,
    wins: [60, 80, 100, 128, 140],
  },
  {
    name: "Heroic II",
    total: 1260,
    loss: 52,
    wins: [60, 80, 100, 128, 140],
  },
  {
    name: "Heroic III",
    total: 1625,
    loss: 52,
    wins: [60, 80, 100, 128, 140],
  },
  {
    name: "Fabled I",
    total: 2100,
    loss: 60,
    wins: [40, 60, 80, 108, 120],
  },
  {
    name: "Fabled II",
    total: 2380,
    loss: 60,
    wins: [40, 60, 80, 108, 120],
  },
  {
    name: "Fabled III",
    total: 2870,
    loss: 60,
    wins: [40, 60, 80, 108, 120],
  },
  {
    name: "Mythic I",
    total: 3500,
    loss: 68,
    wins: [40, 60, 80, 108, 120],
  },
  {
    name: "Mythic II",
    total: 3880,
    loss: 68,
    wins: [40, 60, 80, 108, 120],
  },
  {
    name: "Mythic III",
    total: 4545,
    loss: 68,
    wins: [40, 60, 80, 108, 120],
  },
  {
    name: "Legend",
    total: 5450,
    loss: 68,
    wins: [40, 60, 80, 108, 120],
  },
  {
    name: "Max",
    total: 5500,
    loss: 68,
    wins: [0, 0, 0, 0, 0],
  },
];

export default GloryLevels;
