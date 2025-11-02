import React, { useState, useMemo } from "react";
import characters from "./data/characters";

const effectCategories = {
  special: {
    label: "宝具限定",
    targets: ["敵単体", "敵全体"],
    effects: ["特攻攻撃"],
    targetless: ["特攻攻撃"], // ★ 対象なし指定
  },
  buffs: {
    label: "味方へのバフ",
    targets: ["自身", "味方全体", "自身を除く味方全体"],
    effects: [
      "攻撃力をアップ",
      "Busterカード性能をアップ",
      "Artsカード性能をアップ",
      "Quickカード性能をアップ",
      "宝具威力をアップ",
      "特攻状態を付与",
      "NPを増やす",
      "NP獲得量をアップ",
      "スターを獲得", // 対象を持たない
      "クリティカル威力をアップ",
      "毎ターンNP獲得状態を付与",
      "毎ターンスター獲得状態を付与",
    ],
    targetless: ["スターを獲得"], // ★ 対象なし指定
  },
  debuffs: {
    label: "敵へのデバフ",
    targets: ["敵単体", "敵全体"],
    effects: [
      "Buster耐性ダウンを付与",
      "Arts耐性ダウンを付与",
      "Quick耐性ダウンを付与",
      "防御力をダウン",
      "やけど状態を付与",
      "毒状態を付与",
      "呪い状態を付与",
      "魅了状態を付与",
      "弱体耐性をダウン",
    ],
  },
};

const rarities = [0, 1, 2, 3, 4, 5];
const classes = ["剣", "弓", "槍", "騎", "術", "殺", "狂", "裁", "讐", "分", "月", "降", "詐", "獣", "盾"];
const npAttributes = ["Buster", "Arts", "Quick"];
const npTargets = ["敵全体", "敵単体", "補助"];

function buildEffectGroups(forNoblePhantasm = false) {
  const groups = [];
  Object.values(effectCategories).forEach(cat => {
    cat.effects.forEach(effectName => {
      if (!forNoblePhantasm && effectName === "特攻攻撃") return;
      const isTargetless = cat.targetless?.includes(effectName); // ★ 対象なし効果か確認
      groups.push({
        name: effectName,
        targets: isTargetless ? [] : cat.targets.slice(), // ★ 対象なしなら空配列
      });
    });
  });
  return groups;
}

const effectGroups = buildEffectGroups();
const npEffectGroups = buildEffectGroups(true);

export default function App() {
  const [filters, setFilters] = useState({
    rarity: [],
    class: [],
    npAttribute: [],
    npTarget: [],
    skillEffects: [],
    npEffects: [],
  });

  const [filterMode, setFilterMode] = useState("OR");
  const [expanded, setExpanded] = useState([]);
  const [filterOpen, setFilterOpen] = useState({ skills: false, np: false });

  const toggleArrayValue = (arr, value) =>
    arr.includes(value) ? arr.filter(x => x !== value) : [...arr, value];

  const toggleFilter = (category, value) =>
    setFilters(prev => ({ ...prev, [category]: toggleArrayValue(prev[category], value) }));

  const toggleWholeEffectRow = (forCategory, effectName, isNp = false) => {
    const group = (isNp ? npEffectGroups : effectGroups).find(g => g.name === effectName);
    if (!group) return;
    const combos =
      group.targets.length > 0
        ? group.targets.map(t => `${effectName}（${t}）`)
        : [effectName]; // ★ 対象なしは効果名そのもの
    setFilters(prev => {
      const current = prev[forCategory];
      const allSelected = combos.every(c => current.includes(c));
      const next = allSelected
        ? current.filter(c => !combos.includes(c))
        : Array.from(new Set([...current, ...combos]));
      return { ...prev, [forCategory]: next };
    });
  };

  const toggleEffectTarget = (forCategory, effectName, target) => {
    const key = target ? `${effectName}（${target}）` : effectName; // ★ 対象なしはkey＝effectName
    toggleFilter(forCategory, key);
  };

  const resetFilters = () => {
    setFilters({
      rarity: [],
      class: [],
      npAttribute: [],
      npTarget: [],
      skillEffects: [],
      npEffects: [],
    });
    setFilterMode("OR");
    setExpanded([]);
    setFilterOpen({ skills: false, np: false });
  };

  const toggleExpand = name => setExpanded(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  const closeAll = () => setExpanded([]);
  const toggleFilterSection = section => setFilterOpen(prev => ({ ...prev, [section]: !prev[section] }));

  const effectsMatch = (entityEffects, selectedEffects) => {
    if (!selectedEffects.length) return true;
    const effectKeys = entityEffects.flatMap(e => {
      if (typeof e === "string") return [e];
      if (Array.isArray(e.key)) return e.key;
      return [e.key];
    });
    if (filterMode === "AND") {
      return selectedEffects.every(sel => effectKeys.includes(sel));
    } else {
      return selectedEffects.some(sel => effectKeys.includes(sel));
    }
  };

  const results = useMemo(() => {
    return characters.filter(char => {
      if (filters.rarity.length && !filters.rarity.includes(char.rarity)) return false;
      if (filters.class.length && !filters.class.includes(char.class)) return false;
      if (filters.npAttribute.length && !filters.npAttribute.includes(char.noblePhantasm.attribute)) return false;
      if (filters.npTarget.length && !filters.npTarget.includes(char.noblePhantasm.target)) return false;
      if (!effectsMatch(char.skills || [], filters.skillEffects)) return false;
      if (!effectsMatch(char.noblePhantasm?.effects || [], filters.npEffects)) return false;
      return true;
    });
  }, [filters, filterMode]);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 16, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 12 }}>サーヴァント検索フィルター</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={resetFilters} style={{ padding: "8px 12px", background: "#2563eb", color: "white", borderRadius: 6, border: "none" }}>検索条件をリセット</button>
      </div>
      
      {/* 基本フィルター */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
        {/* レアリティ */}
        <div style={{ background: "#fff", color: "#000", padding: 12, borderRadius: 8 }}>
          <h3 style={{ margin: "0 0 8px 0" }}>レアリティ</h3>
          {rarities.map(r => (
            <label key={r} style={{ display: "block", marginBottom: 6 }}>
              <input type="checkbox" checked={filters.rarity.includes(r)} onChange={() => toggleFilter("rarity", r)} style={{ marginRight: 8 }} />☆{r}
            </label>
          ))}
        </div>

        {/* クラス */}
        <div style={{ background: "#fff", color: "#000", padding: 12, borderRadius: 8, width: 225 }}>
          <h3 style={{ margin: "0 0 8px 0" }}>クラス</h3>
            {classes.map(c => (
              <label key={c} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <input type="checkbox" checked={filters.class.includes(c)} onChange={() => toggleFilter("class", c)} />{c}
              </label>
            ))}
        </div>

        {/* 宝具属性＋宝具対象の縦コンテナ */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {/* 宝具属性 */}
          <div style={{ background: "#fff", color: "#000", padding: 12, borderRadius: 8, height: 80, width: 250 }}>
            <h3 style={{ margin: "0 0 8px 0" }}>宝具属性</h3>
            <div style={{ display: "flex", gap: 8 }}>
              {npAttributes.map(a => (
                <label key={a} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <input type="checkbox" checked={filters.npAttribute.includes(a)} onChange={() => toggleFilter("npAttribute", a)} />{a}
                </label>
              ))}
            </div>
          </div>

          {/* 宝具対象 */}
          <div style={{ background: "#fff", color: "#000", padding: 12, borderRadius: 8, height: 80, width: 250 }}>
            <h3 style={{ margin: "0 0 8px 0" }}>宝具対象</h3>
            <div style={{ display: "flex", gap: 8 }}>
              {npTargets.map(t => (
                <label key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <input type="checkbox" checked={filters.npTarget.includes(t)} onChange={() => toggleFilter("npTarget", t)} />{t}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 効果フィルターモード */}
      <div style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
        <div><strong>スキル・宝具効果のフィルター方法：</strong></div>
        <label><input type="radio" name="mode" value="OR" checked={filterMode === "OR"} onChange={() => setFilterMode("OR")} /> OR</label>
        <label><input type="radio" name="mode" value="AND" checked={filterMode === "AND"} onChange={() => setFilterMode("AND")} /> AND</label>
      </div>

      {/* スキル効果フィルター */}
      <section style={{ marginBottom: 18, background: "#fff", color: "#000", padding: 12, borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, cursor: "pointer" }} onClick={() => toggleFilterSection("skills")}>
          スキル効果 {filterOpen.skills ? "▲" : "▼"}
        </h3>
        {filterOpen.skills && effectGroups.map(group => (
          <div key={group.name} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <button onClick={() => toggleWholeEffectRow("skillEffects", group.name, false)} style={{ border: "none", background: "transparent", fontWeight: 600, cursor: "pointer", minWidth: 220, textAlign: "left", color: "#000" }}>
              {group.name}
            </button>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {group.targets.length > 0 ? (
                group.targets.map(target => {
                  const key = `${group.name}（${target}）`;
                  return (
                    <label key={key} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <input type="checkbox" checked={filters.skillEffects.includes(key)} onChange={() => toggleEffectTarget("skillEffects", group.name, target)} />
                      <span style={{ fontSize: 13 }}>{target}</span>
                    </label>
                  );
                })
              ) : (
                (() => {
                  const key = group.name;
                  return (
                    <label key={key} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <input type="checkbox" checked={filters.skillEffects.includes(key)} onChange={() => toggleEffectTarget("skillEffects", group.name)} />
                      <span style={{ fontSize: 13 }}></span>
                    </label>
                  );
                })()
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 宝具効果フィルター */}
      <section style={{ marginBottom: 18, background: "#fff", color: "#000", padding: 12, borderRadius: 8 }}>
        <h3 style={{ marginTop: 0, cursor: "pointer" }} onClick={() => toggleFilterSection("np")}>
          宝具効果 {filterOpen.np ? "▲" : "▼"}
        </h3>
        {filterOpen.np && npEffectGroups.map(group => (
          <div key={"np-" + group.name} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <button onClick={() => toggleWholeEffectRow("npEffects", group.name, true)} style={{ border: "none", background: "transparent", fontWeight: 600, cursor: "pointer", minWidth: 220, textAlign: "left", color: "#000" }}>
              {group.name}
            </button>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {group.targets.length > 0 ? (
                group.targets.map(target => {
                  const key = `${group.name}（${target}）`;
                  return (
                    <label key={"np-" + key} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <input type="checkbox" checked={filters.npEffects.includes(key)} onChange={() => toggleEffectTarget("npEffects", group.name, target)} />
                      <span style={{ fontSize: 13 }}>{target}</span>
                    </label>
                  );
                })
              ) : (
                (() => {
                  const key = group.name;
                  return (
                    <label key={key} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <input type="checkbox" checked={filters.npEffects.includes(key)} onChange={() => toggleEffectTarget("npEffects", group.name)} />
                      <span style={{ fontSize: 13 }}></span>
                    </label>
                  );
                })()
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 検索結果ヘッダ */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>検索結果 ({results.length}件)</h3>
        <div>
          <button onClick={closeAll} style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #ddd", background: "#fff", color: "#000" }}>一括閉じる</button>
        </div>
      </div>

      {/* 結果一覧 */}
      <div>
        {results.map(char => (
          <div key={char.name} style={{ border: "1px solid #e6e6e6", borderRadius: 8, padding: 12, marginBottom: 8, background: "#fff", color: "#000" }}>
            <div onClick={() => toggleExpand(char.name)} style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
              <div style={{ fontWeight: 700 }}>{char.name}</div>
              <div style={{ color: "#555" }}>☆{char.rarity}　[{char.class}]</div>
            </div>
            {expanded.includes(char.name) && (
              <div style={{ marginTop: 8, paddingLeft: 6 }}>
                <div>宝具属性：{char.noblePhantasm.attribute}</div>
                <div>宝具対象：{char.noblePhantasm.target}</div>
                <div style={{ marginTop: 6 }}>
                  <strong>スキル効果：</strong>
                  <ul style={{ marginTop: 4 }}>
                    {(char.skills || []).map((s, idx) => (
                      <li key={idx}>{typeof s === "string" ? s : s.text}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: 6 }}>
                  <strong>宝具効果：</strong>
                  <ul style={{ marginTop: 4 }}>
                    {(char.noblePhantasm?.effects || []).map((e, idx) => (
                      <li key={idx}>{typeof e === "string" ? e : e.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}