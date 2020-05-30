import GloryLevels from "../data/glory-levels";

const getDifference = (a: number, b: number) => {
  return b - a;
};

const getCurrentRank = (points: number) => {
  const minRank = GloryLevels[0].total;

  const maxRank = GloryLevels[GloryLevels.length - 1].total;

  for (let index = 0; index < GloryLevels.length; index++) {
    if (points < minRank) {
      return { prev: null, current: GloryLevels[0], next: GloryLevels[1] };
    }

    if (points >= maxRank) {
      return {
        prev: GloryLevels[GloryLevels.length - 2],
        current: GloryLevels[GloryLevels.length - 1],
        next: GloryLevels[GloryLevels.length - 1],
      };
    }

    if (GloryLevels[index].total <= points && GloryLevels[index + 1].total > points) {
      return { prev: GloryLevels[index - 1], current: GloryLevels[index], next: GloryLevels[index + 1] };
    }
  }
};

const calculateWinsTillLegend = (points: number, streak: number) => {};

export { getCurrentRank, getDifference };
