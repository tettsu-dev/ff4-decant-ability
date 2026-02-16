'use client'

import { CharactorId } from '@/assets/Charactors';
import { getEquipableAbilities } from '../../assets/Abilities';

export default function AbilitySelector({charactorId}: {charactorId: CharactorId}) {
  // キャラクターが装備可能なアビリティを取得
  const equipableAbilities = getEquipableAbilities(charactorId);
  // デカントアビリティを種別ごとに取得
  const decantGroup = [
    { label: 'デカント', abilities: equipableAbilities.filter(ability => ability.type === 'デカント') },
    { label: '共通', abilities: equipableAbilities.filter(ability => ability.type === '共通') },
    { label: '専用', abilities: equipableAbilities.filter(ability => ability.type === '専用') },
  ];

  return (
    <div>
      <select>
        <option value="">── なし ──</option>
        {decantGroup.map(group => (
          <optgroup key={group.label} label={group.label}>
            {group.abilities.map(ability => (
              <option key={ability.name}>{ability.name}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}