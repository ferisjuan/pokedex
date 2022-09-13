import {useMemo} from "react";
import {Stat} from "../../interfaces";

interface UseParseStatsData {
  statsTHeader: string[]
  statsRow: Record<string, number>[];
}

export const useParseStatsData = (
  stats: Stat[]
): UseParseStatsData => {
  const statsTHeader = useMemo(() => {
    if(!stats) return []

    return stats.map(({stat}) => stat.name);
  }, [stats]);

  const statsRow = useMemo(() => {
    if(!stats) return []

    return stats.map(({base_stat, effort}) => ({
      base_stat,
      effort,
    }));
  }, [stats]);

  return {
    statsRow,
    statsTHeader,
  };
};
