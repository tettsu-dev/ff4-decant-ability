export type CharactorKey = 'cecil' | 'kain' | 'rosa' | 'rydia' | 'edge';
export type StatusKey = 'hp' | 'mp' | 'str' | 'spd' | 'sta' | 'int' | 'spr';

interface Charactor {
  id: CharactorKey;
  name: string;
  lv70: Record<StatusKey, number>;
  exclusiveAbilities: string[];
}

interface StatusLabel {
  key: StatusKey;
  label: string;
  color: string;
}

export const StatusLabels: StatusLabel[] = [
  { key: 'hp', label: 'HP', color: '#ff6b6b' },
  { key: 'mp', label: 'MP', color: '#7eb8ff' },
  { key: 'str', label: '力', color: '#ff9f43' },
  { key: 'spd', label: '素早さ', color: '#ffd32a' },
  { key: 'sta', label: '体力', color: '#44bd32' },
  { key: 'int', label: '知性', color: '#00d2d3' },
  { key: 'spr', label: '精神', color: '#e84393' },
];

export const Charactors: Charactor[] = [
  {
    id: 'cecil',
    name: 'セシル',
    lv70: { hp: 0, mp: 0, str: 73, spd: 41, sta: 70, int: 36, spr: 41 },
    exclusiveAbilities: ['かばう', 'しろまほう'],
  },
  {
    id: 'kain',
    name: 'カイン',
    lv70: { hp: 0, mp: 0, str: 71, spd: 54, sta: 56, int: 12, spr: 39 },
    exclusiveAbilities: ['ジャンプ'],
  },
  {
    id: 'rosa',
    name: 'ローザ',
    lv70: { hp: 0, mp: 0, str: 48, spd: 32, sta: 42, int: 22, spr: 73 },
    exclusiveAbilities: ['いのり', 'しろまほう', 'ねらう'],
  },
  {
    id: 'rydia',
    name: 'リディア',
    lv70: { hp: 0, mp: 0, str: 36, spd: 33, sta: 34, int: 72, spr: 54 },
    exclusiveAbilities: ['しょうかん', 'くろまほう'],
  },
  {
    id: 'edge',
    name: 'エッジ',
    lv70: { hp: 0, mp: 0, str: 61, spd: 72, sta: 48, int: 35, spr: 24 },
    exclusiveAbilities: ['なげる', 'にんじゅつ', 'ぬすむ'],
  },
];