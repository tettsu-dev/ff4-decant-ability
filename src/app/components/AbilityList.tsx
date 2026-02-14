// すべてのアビリティを表示するコンポーネント
'use client';

import { Abilities } from '../../assets/Abilities';

interface StatusLabel {
  key: string;
  label: string;
  color: string;
}

const StatusLabels: StatusLabel[] = [
  { key: 'hp',  label: 'HP',    color: '#ff6b6b' },
  { key: 'mp',  label: 'MP',    color: '#7eb8ff' },
  { key: 'str', label: '力',    color: '#ff9f43' },
  { key: 'spd', label: '素早さ', color: '#ffd32a' },
  { key: 'sta', label: '体力',   color: '#44bd32' },
  { key: 'int', label: '知性',   color: '#00d2d3' },
  { key: 'spr', label: '精神',   color: '#e84393' },
];

// 指定キャラクターが装備可能なアビリティ一覧を返却する
function getEquipableAbilities(charactorId: string) {
  return Abilities.filter(ability => {
    if (ability.type === 'デカント' || ability.type === '共通') {
      // デカントアビリティと共通アビリティは全キャラ装備可能
      return true;
    } else if (ability.type === '専用') {
      // 専用アビリティは対象キャラのみ装備可能
      return ability.exclusiveFor?.includes(charactorId) ?? false;
    }
  });
}

// 指定キャラクターが装備可能なアビリティ一覧を表示する
export default function AbilityList({ charactorId }: { charactorId: string }) {

  const equipableAbilities = getEquipableAbilities(charactorId);

  return (
    <section>
      <h2>◆装備可能なアビリティ一覧</h2>

      <div>検索フィルター</div>

      <div>
        <table>
          <thead>
            <tr>
              <th>アビリティ</th>
              <th>種別</th>
              {StatusLabels.map(label => (
                <th key={label.key} style={{ color: label.color }}>{label.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {equipableAbilities.map(ability => (
              <tr key={ability.name}>
                <td>{ability.name}</td>
                <td>{ability.type}</td>
                {StatusLabels.map(label => {
                  const value = ability[label.key as keyof typeof ability] ?? '-';
                  return <td key={label.key} style={{ color: label.color }}>{value}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}