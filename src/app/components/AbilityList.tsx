// すべてのアビリティを表示するコンポーネント
'use client';

import { Abilities } from '../../assets/Abilities';
import { StatusLabels } from '../../assets/Charactors';

interface StatusLabel {
  key: string;
  label: string;
  color: string;
}

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