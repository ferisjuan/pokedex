import { Table } from '@mantine/core';
import { Stat } from '../../interfaces';
import { keygen } from '../../lib';
import { useParseStatsData } from './useParseStatsData';

interface PokemonStatsProps {
  stats: Stat[]
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  const {
    statsRow,
    statsTHeader,
  } = useParseStatsData(stats)

  return (
    <Table>
      <thead>
        <tr>
          {statsTHeader?.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {statsRow?.map((stat) => (
            <td key={keygen(stat)}>
              {stat.base_stat} - {stat.effort}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  )
}
