// src/data/characters.js
const characters = [
  {
    name: "アルトリア・ペンドラゴン",
    rarity: 5,
    class: "剣",
    noblePhantasm: {
      attribute: "Buster",
      target: "敵全体",
      effects: [
        { key: ["NPを増やす(20%)（自身）", "NPを増やす(30%)（自身）", "NPを増やす(50%)（自身）"], text: "自身のNPチャージ(OC:20〜50%)" },
      ]
    },
    skills: [
      { key: "攻撃力をアップ（味方全体）", text: "味方全体の攻撃力アップ(3T/9〜18%)" },
      { key: ["Busterカード性能をアップ（自身）", "宝具威力をアップ（自身）"], text: "自身のバスター性能アップ(1T/30〜50%)&宝具威力アップ(1T/20〜30%)&全コマンドカードをバスターに変化させる(1T)" },
      { key: ["スターを獲得", "NPを増やす(30%)（自身）"], text: "スター獲得(5〜15個)+自身のNPチャージ(20〜30%)" },
    ]
  },
  {
    name: "諸葛孔明",
    rarity: 5,
    class: "術",
    noblePhantasm: {
      attribute: "Arts",
      target: "敵全体",
      effects: [
        { key: "防御力をダウン（敵全体）", text: "敵全体の防御力をダウン（3ターン）" },
        { key: "攻撃力をアップ（味方全体）", text: "味方全体の攻撃力をアップ（3ターン）" }
      ]
    },
    skills: [
      { key: "NPを増やす（味方全体）", text: "味方全体のNPを増やす（10〜20%）" },
      { key: "攻撃力をアップ（味方全体）", text: "味方全体の攻撃力をアップ（3ターン）" },
      { key: "クリティカル威力をアップ（味方全体）", text: "味方全体のクリティカル威力をアップ（3ターン）" }
    ]
  }
];

export default characters;
