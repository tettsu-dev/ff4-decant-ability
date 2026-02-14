export type AbilityType = 'decant' | 'common' | 'exclusive';

interface Ability {
  name: string;
  type: AbilityType;
  hp: number;
  mp: number;
  str: number;
  spd: number;
  sta: number;
  int: number;
  spr: number;
  exclusiveFor?: string[]; // exclusiveの場合、どのキャラ専用か
}

export const Abilities: Ability[] = [
  // デカントアビリティ
  { name: 'HP+50%', type: 'decant', hp: 10, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'MP+50%', type: 'decant', hp: 0, mp: 10, str: 0, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'あんこく', type: 'decant', hp: 10, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'アイテムのちしき', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'うそなき', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 1 },
  { name: 'うたう', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'エンカウントなし', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'オートポーション', type: 'decant', hp: 10, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'おもいだす', type: 'decant', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'かいぞう', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'カウンター', type: 'decant', hp: 0, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'かえんりゅう', type: 'decant', hp: 0, mp: 5, str: 1, spd: 1, sta: 1, int: 0, spr: 0 },
  { name: 'かくれる', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'がまん', type: 'decant', hp: 10, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'ぎゃくてん', type: 'decant', hp: 0, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'ギルハント', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'くすり', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'けり', type: 'decant', hp: 0, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'げんかいとっぱ', type: 'decant', hp: 10, mp: 5, str: 1, spd: 1, sta: 1, int: 1, spr: 1 },
  { name: 'こうれつぎり', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'サミング', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'しらべる', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'せいしんは', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 1 },
  { name: 'たつまき', type: 'decant', hp: 0, mp: 5, str: 0, spd: 1, sta: 0, int: 1, spr: 1 },
  { name: 'ためる', type: 'decant', hp: 10, mp: 0, str: 2, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'つなみ', type: 'decant', hp: 0, mp: 5, str: 1, spd: 0, sta: 1, int: 1, spr: 0 },
  { name: 'つよがる', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'トレジャーハント', type: 'decant', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'のろい', type: 'decant', hp: 0, mp: 5, str: 1, spd: 0, sta: 1, int: 0, spr: 1 },
  { name: 'はやくち', type: 'decant', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'ひきつける', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'フェニックス', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 2 },
  { name: 'ふたりがけ', type: 'decant', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'ふんばる', type: 'decant', hp: 10, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'まほうぜんたいか', type: 'decant', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 1 },
  { name: 'リフレクかんつう', type: 'decant', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 1 },
  { name: 'レベルハント', type: 'decant', hp: 0, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'れんぞくま', type: 'decant', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 1 },
  { name: '○○へのおもい', type: 'decant', hp: 10, mp: 5, str: 1, spd: 1, sta: 1, int: 1, spr: 1 },

  // 共通アビリティ
  { name: 'アイテム', type: 'common', hp: 10, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 0, },
  { name: 'たたかう', type: 'common', hp: 10, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0, },

  // 専用アビリティ
  { name: 'ジャンプ', type: 'exclusive', hp: 10, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0, exclusiveFor: ['kain'] },
  { name: 'しょうかん', type: 'exclusive', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 1, exclusiveFor: ['rydia'] },
  { name: 'くろまほう', type: 'exclusive', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0, exclusiveFor: ['rydia'] },
  { name: 'しろまほう', type: 'exclusive', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 0, spr: 1, exclusiveFor: ['cecil', 'rosa'] },
  { name: 'いのり', type: 'exclusive', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 1, exclusiveFor: ['rosa'] },
  { name: 'かばう', type: 'exclusive', hp: 0, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0, exclusiveFor :['cecil'] },
  { name: 'にんじゅつ', type: 'exclusive', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0, exclusiveFor: ['edge'] },
  { name: 'ぬすむ', type: 'exclusive', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 1, exclusiveFor: ['edge'] },
  { name: 'ねらう', type: 'exclusive', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0, exclusiveFor: ['rosa'] },
];