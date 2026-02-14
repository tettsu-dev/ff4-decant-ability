export type AbilityType = 'デカント' | '共通' | '専用';

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
  { name: 'HP+50%', type: 'デカント', hp: 10, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'MP+50%', type: 'デカント', hp: 0, mp: 10, str: 0, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'あんこく', type: 'デカント', hp: 10, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'アイテムのちしき', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'うそなき', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 1 },
  { name: 'うたう', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'エンカウントなし', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'オートポーション', type: 'デカント', hp: 10, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'おもいだす', type: 'デカント', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'かいぞう', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'カウンター', type: 'デカント', hp: 0, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'かえんりゅう', type: 'デカント', hp: 0, mp: 5, str: 1, spd: 1, sta: 1, int: 0, spr: 0 },
  { name: 'かくれる', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'がまん', type: 'デカント', hp: 10, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'ぎゃくてん', type: 'デカント', hp: 0, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'ギルハント', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'くすり', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'けり', type: 'デカント', hp: 0, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'げんかいとっぱ', type: 'デカント', hp: 10, mp: 5, str: 1, spd: 1, sta: 1, int: 1, spr: 1 },
  { name: 'こうれつぎり', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'サミング', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'しらべる', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'せいしんは', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 1 },
  { name: 'たつまき', type: 'デカント', hp: 0, mp: 5, str: 0, spd: 1, sta: 0, int: 1, spr: 1 },
  { name: 'ためる', type: 'デカント', hp: 10, mp: 0, str: 2, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'つなみ', type: 'デカント', hp: 0, mp: 5, str: 1, spd: 0, sta: 1, int: 1, spr: 0 },
  { name: 'つよがる', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'トレジャーハント', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0 },
  { name: 'のろい', type: 'デカント', hp: 0, mp: 5, str: 1, spd: 0, sta: 1, int: 0, spr: 1 },
  { name: 'はやくち', type: 'デカント', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'ひきつける', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'フェニックス', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 2 },
  { name: 'ふたりがけ', type: 'デカント', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0 },
  { name: 'ふんばる', type: 'デカント', hp: 10, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0 },
  { name: 'まほうぜんたいか', type: 'デカント', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 1 },
  { name: 'リフレクかんつう', type: 'デカント', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 1, spr: 1 },
  { name: 'レベルハント', type: 'デカント', hp: 0, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0 },
  { name: 'れんぞくま', type: 'デカント', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 1 },
  { name: '○○へのおもい', type: 'デカント', hp: 10, mp: 5, str: 1, spd: 1, sta: 1, int: 1, spr: 1 },

  // 共通アビリティ
  { name: 'アイテム', type: '共通', hp: 10, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 0, },
  { name: 'たたかう', type: '共通', hp: 10, mp: 0, str: 1, spd: 0, sta: 0, int: 0, spr: 0, },

  // 専用アビリティ
  { name: 'ジャンプ', type: '専用', hp: 10, mp: 0, str: 1, spd: 0, sta: 1, int: 0, spr: 0, exclusiveFor: ['kain'] },
  { name: 'しょうかん', type: '専用', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 1, exclusiveFor: ['rydia'] },
  { name: 'くろまほう', type: '専用', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0, exclusiveFor: ['rydia'] },
  { name: 'しろまほう', type: '専用', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 0, spr: 1, exclusiveFor: ['cecil', 'rosa'] },
  { name: 'いのり', type: '専用', hp: 0, mp: 0, str: 0, spd: 0, sta: 0, int: 0, spr: 1, exclusiveFor: ['rosa'] },
  { name: 'かばう', type: '専用', hp: 0, mp: 0, str: 0, spd: 0, sta: 1, int: 0, spr: 0, exclusiveFor :['cecil'] },
  { name: 'にんじゅつ', type: '専用', hp: 0, mp: 5, str: 0, spd: 0, sta: 0, int: 1, spr: 0, exclusiveFor: ['edge'] },
  { name: 'ぬすむ', type: '専用', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 1, exclusiveFor: ['edge'] },
  { name: 'ねらう', type: '専用', hp: 0, mp: 0, str: 0, spd: 1, sta: 0, int: 0, spr: 0, exclusiveFor: ['rosa'] },
];