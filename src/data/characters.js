const characters = [
  {
    "name": "マシュ・キリエライト",
    "rarity": 4,
    "class": "盾",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {
          "key": [
            "攻撃力アップ（味方全体）"
          ],
          "text": "味方全体の防御力アップ(3T/OC:30〜50%)&ダメージカットを付与(3T/775)+自身を除く味方全体の攻撃力アップ(3T/30%)"
        }
      ]
    },
    "skills": [
      {
        "key": [
          "その他"
        ],
        "text": "味方全体の防御力アップ(3T/15〜20%)&ダメージカットを付与(1回/2000)"
      },
      {
        "key": [
          "NPチャージ(20%)（味方単体）"
        ],
        "text": "味方単体に無敵を付与(1T)&NPチャージ(10〜20%)"
      },
      {
        "key": [
          "NP獲得量アップ（自身）"
        ],
        "text": "自身にターゲット集中を付与(1T)&NP獲得量アップ(1T/200〜400%)"
      }
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {
          "key": [
            "NPチャージ(20%)（自身）",
            "NPチャージ(30%)（自身）",
            "NPチャージ(50%)（自身）"
          ],
          "text": "自身のNPチャージ(OC:20〜50%)"
        }
      ]
    },
    "skills": [
      {
        "key": [
          "攻撃力アップ（味方全体）"
        ],
        "text": "味方全体の攻撃力アップ(3T/9〜18%)"
      },
      {
        "key": [
          "バスター性能アップ（自身）",
          "宝具威力アップ（自身）"
        ],
        "text": "自身のバスター性能アップ(1T/30〜50%)&宝具威力アップ(1T/20〜30%)&全コマンドカードをバスターに変化させる(1T)"
      },
      {
        "key": [
          "スター獲得",
          "NPチャージ(30%)（自身）"
        ],
        "text": "スター獲得(5〜15個)+自身のNPチャージ(20〜30%)"
      }
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（オルタ）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（リリィ）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ネロ・クラウディウス",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジークフリート",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ガイウス・ユリウス・カエサル",
    "rarity": 3,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルテラ",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジル・ド・レェ",
    "rarity": 3,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シュヴァリエ・デオン",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エミヤ",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ギルガメッシュ",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ロビンフッド",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アタランテ",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エウリュアレ",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アーラシュ",
    "rarity": 1,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "クー・フーリン",
    "rarity": 3,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エリザベート・バートリー",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "武蔵坊弁慶",
    "rarity": 2,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "クー・フーリン（プロトタイプ）",
    "rarity": 3,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "レオニダス一世",
    "rarity": 2,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ロムルス",
    "rarity": 3,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メドゥーサ",
    "rarity": 3,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ゲオルギウス",
    "rarity": 2,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エドワード・ティーチ",
    "rarity": 2,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ブーディカ",
    "rarity": 3,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "牛若丸",
    "rarity": 3,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アレキサンダー",
    "rarity": 3,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マリー・アントワネット",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マルタ",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メディア",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジル・ド・レェ（キャスター）",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ハンス・クリスチャン・アンデルセン",
    "rarity": 2,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ウィリアム・シェイクスピア",
    "rarity": 2,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メフィストフェレス",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヴォルフガング・アマデウス・モーツァルト",
    "rarity": 1,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "諸葛孔明",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "クー・フーリン（キャスター）",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "佐々木小次郎",
    "rarity": 1,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "呪腕のハサン",
    "rarity": 2,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ステンノ",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "荊軻",
    "rarity": 3,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シャルル＝アンリ・サンソン",
    "rarity": 2,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ファントム・オブ・ジ・オペラ",
    "rarity": 2,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マタ・ハリ",
    "rarity": 1,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カーミラ",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヘラクレス",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ランスロット",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "呂布奉先",
    "rarity": 3,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スパルタクス",
    "rarity": 1,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "坂田金時",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヴラド三世",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アステリオス",
    "rarity": 1,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カリギュラ",
    "rarity": 2,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ダレイオス三世",
    "rarity": 3,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "清姫",
    "rarity": 3,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エイリーク・ブラッドアクス",
    "rarity": 2,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "タマモキャット",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャンヌ・ダルク",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "オリオン",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エリザベート・バートリー（ハロウィン）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "玉藻の前",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ダビデ",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヘクトール",
    "rarity": 3,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "フランシス・ドレイク",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アン・ボニー＆メアリー・リード",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メディア（リリィ）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "沖田総司",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "織田信長",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スカサハ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ディルムッド・オディナ",
    "rarity": 3,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "フェルグス・マック・ロイ",
    "rarity": 3,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（サンタオルタ）",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ナーサリー・ライム",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャック・ザ・リッパー",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "モードレッド",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ニコラ・テスラ",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（槍オルタ）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヴァン・ホーエンハイム・パラケルスス",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "チャールズ・バベッジ",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヘンリー・ジキル＆ハイド",
    "rarity": 3,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "フランケンシュタイン",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルジュナ",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カルナ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "謎のヒロインX",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "フィン・マックール",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ブリュンヒルデ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ベオウルフ",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ネロ・クラウディウス（ブライド）",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "両儀式（セイバー）",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "両儀式（アサシン）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "天草四郎",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アストルフォ",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "子ギル",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "巌窟王エドモン・ダンテス",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ナイチンゲール",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "クー・フーリン（オルタ）",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メイヴ",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エレナ・ブラヴァツキー",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ラーマ",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "神槍李書文",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "トーマス・エジソン",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジェロニモ",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ビリー・ザ・キッド",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャンヌ・ダルク（オルタ）",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アンリマユ",
    "rarity": 0,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "イスカンダル",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エミヤ（アサシン）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "百貌のハサン",
    "rarity": 3,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アイリスフィール（天の衣）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "酒呑童子",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "玄奘三蔵",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "源頼光",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "坂田金時（ライダー）",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "茨木童子",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "風魔小太郎",
    "rarity": 3,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "オジマンディアス",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（ランサー）",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ニトクリス",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ランスロット（セイバー）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "トリスタン",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ガウェイン",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "静謐のハサン",
    "rarity": 3,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "俵藤太",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ベディヴィエール",
    "rarity": 3,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "レオナルド・ダ・ヴィンチ",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "玉藻の前（水着）",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（水着）",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マリー・アントワネット（水着）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アン・ボニー＆メアリー・リード（水着）",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "モードレッド（水着）",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スカサハ（アサシン）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "清姫（水着）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マルタ（水着）",
    "rarity": 4,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "イリヤスフィール・フォン・アインツベルン",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "クロエ・フォン・アインツベルン",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エリザベート・バートリー（ブレイブ）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "クレオパトラ",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヴラド三世（EXTRA）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャンヌ・ダルク・オルタ・サンタ・リリィ",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "イシュタル",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エルキドゥ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ケツァル・コアトル",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ギルガメッシュ（キャスター）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メドゥーサ（ランサー）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ゴルゴーン",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャガーマン",
    "rarity": 3,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マーリン",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "宮本武蔵",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "山の翁",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "謎のヒロインX（オルタ）",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "モリアーティ",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エミヤ（オルタ）",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヘシアン・ロボ",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "燕青",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アーサー・ペンドラゴン（プロトタイプ）",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "土方歳三",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "茶々",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メルトリリス",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "パッションリップ",
    "rarity": 4,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "鈴鹿御前",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "BB",
    "rarity": 4,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "殺生院キアラ",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シェヘラザード",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "武則天",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ペンテシレイア",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "コロンブス",
    "rarity": 3,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シャーロック・ホームズ",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ポール・バニヤン",
    "rarity": 1,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ネロ・クラウディウス（水着）",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "フランケンシュタイン（水着）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ニトクリス（水着）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "織田信長（水着）",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（オルタ・メイド）",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エレナ・ブラヴァツキー（水着）",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "源頼光（水着）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "イシュタル（水着）",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "パールヴァティー",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "巴御前",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "望月千代女",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "宝蔵院胤舜",
    "rarity": 3,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "柳生但馬守宗矩",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "加藤段蔵",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "刑部姫",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メカエリチャン",
    "rarity": 4,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メカエリチャン２号機",
    "rarity": 4,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "キルケー",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アビゲイル・ウィリアムズ",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シバの女王",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "哪吒",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エレシュキガル",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルテラ（サンタ）",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "葛飾北斎",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "セミラミス",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "浅上藤乃",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アナスタシア",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アタランテ（オルタ）",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アヴィケブロン",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アントニオ・サリエリ",
    "rarity": 3,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "イヴァン雷帝",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マシュ（オルテナウス）",
    "rarity": 4,
    "class": "盾",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アキレウス",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ケイローン",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジーク",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "沖田総司オルタ",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "岡田以蔵",
    "rarity": 3,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "坂本龍馬",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ナポレオン",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シグルド",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ワルキューレ",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スカサハ＝スカディ",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャンヌ・ダルク（水着）",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "茨木童子（水着）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "牛若丸（水着）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャンヌ・ダルク（オルタ・水着）",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "BB（水着）",
    "rarity": 5,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "女王メイヴ（水着）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "謎のヒロインX（水着）",
    "rarity": 4,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ディルムッド・オディナ（セイバー）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シトナイ",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "酒呑童子（キャスター）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "項羽",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "蘭陵王",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "秦良玉",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "始皇帝",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "虞美人",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "赤兎馬",
    "rarity": 3,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ブラダマンテ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ケツァルサンタ",
    "rarity": 4,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "紅閻魔",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "李書文（アサシン）",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "美遊・エーデルフェルト",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "紫式部",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "キングプロテア",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カーマ",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ライネス（司馬懿）",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アストライア",
    "rarity": 4,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "グレイ",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジナコ",
    "rarity": 5,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ラクシュミー・バーイー",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ウィリアム・テル",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルジュナオルタ",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アシュヴァッターマン",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アスクレピオス",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "魔王信長",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "森長可",
    "rarity": 3,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "長尾景虎",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ダヴィンチライダー",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "イアソン",
    "rarity": 1,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "パリス",
    "rarity": 2,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ガレス",
    "rarity": 2,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "バーソロミュー",
    "rarity": 1,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "陳宮",
    "rarity": 2,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シャルロット",
    "rarity": 1,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "サロメ",
    "rarity": 2,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着宮本武蔵",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着刑部姫",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着カーミラ",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着北斎",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリア・ペンドラゴン（ルーラー）",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着メルトリリス",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着沖田総司",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スペース・イシュタル",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カラミティ・ジェーン",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アストルフォ（セイバー）",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ナイチンゲール（サンタ）",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "超人オリオン",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マンドリカルド",
    "rarity": 3,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エウロペ",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "楊貴妃",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "清少納言",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "オデュッセウス",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ディオスクロイ",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カイニス",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ロムルスクィリヌス",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ボイジャー",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "鬼女紅葉",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "宇津見エリセ",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アルトリアキャスター",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "殺生院キアラ（水着）",
    "rarity": 5,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "イリヤスフィール・フォン・アインツベルン（水着）",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ブリュンヒルデ（水着）",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "虞美人（水着）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アビゲイル（水着）",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "巴御前（水着）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "紫式部（水着）",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "卑弥呼",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "斎藤一",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "織田信勝",
    "rarity": 1,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヴァン・ゴッホ",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ネモ",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "蘆屋道満",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "渡辺綱",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "伊吹童子",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヴリトラ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カルナ（サンタ）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "千子村正",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "平景清",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "鬼一法眼",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カレン・C・オルテンシア",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ガラテア",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ミス・クレーン",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "謎のアイドルX（オルタ）",
    "rarity": 4,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "モルガン",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "妖精騎士ガウェイン",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "妖精騎士トリスタン",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "妖精騎士ランスロット",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "パーシヴァル",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "光のコヤンスカヤ",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ハベトロット",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "オベロン",
    "rarity": 5,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "沖田オルタ（水着）",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アナスタシア（水着）",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "コルデー（水着）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ダヴィンチ（水着）",
    "rarity": 4,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カーマ（水着）",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カイニス（水着）",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "清少納言（水着）",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジャック・ド・モレー",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ゼノビア",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "エリザベート（シンデレラ）",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "出雲阿国",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "謎の蘭丸X",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "坂本龍馬（ランサー）",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マルタ（サンタ）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "太公望",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ドブルイニャ・ニキチッチ",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "闇のコヤンスカヤ",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヘファイスティオン",
    "rarity": 4,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "バゼット",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "徴姉妹",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "太歳星君",
    "rarity": 4,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スーパーバニヤン",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "大黒天",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メアリー・アニング",
    "rarity": 1,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "コンスタンティノス11世",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シャルルマーニュ",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ローラン",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "クリームヒルト",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "モリアーティ（ルーラー）",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ドン・キホーテ",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "張角",
    "rarity": 3,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "曲亭馬琴",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "源為朝",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アーキタイプアース",
    "rarity": 5,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "徐福",
    "rarity": 3,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "プロトタイプマーリン",
    "rarity": 5,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ガレス（水着）",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "伊吹童子（水着）",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "宇津見エリセ（水着）",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スルーズ（水着）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヒルド（水着）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "オルトリンデ（水着）",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スカサハスカディ（水着）",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "武則天（水着）",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "千利休",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "山南敬助",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "壱与",
    "rarity": 4,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "呼延灼",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "黄飛虎",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "九紋竜エリザ",
    "rarity": 4,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ブリトマート",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "グレゴリー・ラスプーチン",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ニトクリス（オルタ）",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "テスカトリポカ",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "トラロック",
    "rarity": 4,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ククルカン",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "女教皇ヨハンナ",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "高杉晋作",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ラーヴァティアマト",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ドラコー",
    "rarity": 5,
    "class": "獣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ロクスタ",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "セタンタ",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "果心居士",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ビーマ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ドゥリーヨダナ",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ドゥルガー",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メドゥーサ（セイバー）",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "救世主トネリコ",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着キャストリア",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着鈴鹿御前",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着クロエ",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ノクナレア",
    "rarity": 4,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着メリュジーヌ",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着バーゲスト",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着バーヴァンシー",
    "rarity": 4,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ワンジナ",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "プトレマイオス",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "杉谷善住坊",
    "rarity": 3,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "テセウス",
    "rarity": 3,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "武田信玄",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "永倉新八",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "雑賀孫一",
    "rarity": 4,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "上杉謙信",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ネモサンタ",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヤマトタケル",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "源頼光/丑御前",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "由井正雪",
    "rarity": 4,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "宮本伊織",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アンドロメダ",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マリー・アントワネット（オルタ）",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "耀星のハサン",
    "rarity": 4,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "モンテ・クリスト",
    "rarity": 5,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カリオストロ",
    "rarity": 4,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "蒼崎青子",
    "rarity": 5,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "静希草十郎",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "久遠寺有珠",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "阿曇磯良",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "スペースエレシュキガル",
    "rarity": 5,
    "class": "獣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "シエル",
    "rarity": 5,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着ニキチッチ",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着徐福",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "BBドバイ",
    "rarity": 5,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着テノチティトラン",
    "rarity": 4,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヒロインXXオルタ",
    "rarity": 4,
    "class": "降",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "岸波白野（男性）",
    "rarity": 4,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "岸波白野（女性）",
    "rarity": 4,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "カズラドロップ",
    "rarity": 5,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ツタンカーメン",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ヴァン・ゴッホ（ランサー）",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ロウヒ",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アビゲイルサンタ",
    "rarity": 4,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ファンタズムーン",
    "rarity": 5,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "リチャード1世",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ビショーネ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "黒姫",
    "rarity": 4,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "小野小町",
    "rarity": 5,
    "class": "術",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ダンテ",
    "rarity": 5,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "メタトロンジャンヌ",
    "rarity": 5,
    "class": "裁",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "アショカ王",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "リリス",
    "rarity": 5,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マシュパラディーン",
    "rarity": 5,
    "class": "盾",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "補助",
      "effects": [
        {
          "key": [
            "攻撃力アップ（味方全体）",
            "宝具威力アップ（味方全体）",
          ],
          "text": "味方全体の防御力アップ(3T/OC:30〜50%)&ダメージカットを付与(3T/1750)&弱体無効を付与(1回/3T)&攻撃力アップ(3T/30%)+フィールドに〔人類の脅威の敵〕がいる時、味方全体の宝具威力アップ(3T/50%)+自身に〔聖剣装填〕状態<宝具をB攻撃宝具に変化させる>を付与(3T)&スキル2のCT5短縮"
        }
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "マシュパラディーン〔聖剣装填〕",
    "rarity": 5,
    "class": "盾",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {
          "key": [
            "バスター性能アップ（自身）",
            "特攻攻撃",
          ],
          "text": "自身に無敵貫通を付与(1T)&防御無視を付与(1T)&バスター性能アップ(1T/OC:20〜40%)+敵全体に強力な人類の脅威特攻攻撃(200%)&強化解除"
        }
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "テュフォン",
    "rarity": 5,
    "class": "詐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "インドラ",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "オルガマリー",
    "rarity": 5,
    "class": "獣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着パッションリップ",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着クリームヒルト",
    "rarity": 4,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着呼延灼",
    "rarity": 4,
    "class": "狂",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着両儀式",
    "rarity": 5,
    "class": "月",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着美遊",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "水着ティアマト",
    "rarity": 5,
    "class": "弓",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ジュネスクレーン",
    "rarity": 4,
    "class": "分",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "ネモ／ノア",
    "rarity": 5,
    "class": "騎",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "河上彦斎",
    "rarity": 5,
    "class": "殺",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "藤堂平助",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Quick",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "原田左之助",
    "rarity": 4,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "単体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "近藤勇",
    "rarity": 5,
    "class": "剣",
    "noblePhantasm": {
      "attribute": "Arts",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "星5エリザベート",
    "rarity": 5,
    "class": "槍",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  },
  {
    "name": "終わりのエリザベート",
    "rarity": 4,
    "class": "讐",
    "noblePhantasm": {
      "attribute": "Buster",
      "target": "全体",
      "effects": [
        {}
      ]
    },
    "skills": [
      {}
    ]
  }
];

export default characters;