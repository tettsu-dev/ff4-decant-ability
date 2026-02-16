// すべてのアビリティを表示するコンポーネント
'use client';

import { getEquipableAbilities } from '../../assets/Abilities';
import { StatusLabels } from '../../assets/Charactors';

interface StatusLabel {
  key: string;
  label: string;
  color: string;
}

// 指定キャラクターが装備可能なアビリティ一覧を表示する
export default function AbilityList({ charactorId }: { charactorId: string }) {

  // キャラクターが装備可能なアビリティを取得
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