# Grow a Garden Value & Weight Calculator (Fanmade)

A comprehensive, accuracy‑focused, fanmade web calculator for the Roblox game **Grow a Garden**. It helps players estimate crop/plant coin values, reverse‑estimate plant weight from coin value, evaluate mutation stacks, friend boost effects, and more— all through a fast, single‑page interface.

> Built and documented on **28 August 2025**.
>
> Not an official Grow a Garden product. All data gathered by in‑game testing (no game code used).

---
## ✨ Key Features
- **Plant Database**: Hundreds of plants with minimum (threshold) weights and piecewise quadratic base value formulas.
- **Accurate Value Formula**: Uses weight → base value mapping + (Rainbow / Gold / Silver / none) fruit rarity multiplier + (Sum of active modifiers − Count + 1) logic.
- **Mutation / Modifier System**:
  - One‑click activation buttons, live selected list & color coding.
  - Updated multipliers (e.g. Radioactive 55×, Spaghetti 15×, Friend Boost scalable to 100% → 2.0×).
  - Clear All & Max Mutations helpers.
- **Friend Boost Slider**: Displays 0–100% (internally 1.0× → 2.0× scaling) with progress bar.
- **Multi‑Plant Support**: Multiplies total value by plant count.
- **Reverse Calculator (Value → Weight)**: Estimates plausible plant weight from a known coin value + active modifiers & boosts, respecting flat vs quadratic regions.
- **Responsive Layout**: Desktop categories + mobile dropdown adaptation.
- **Performance**: Debounced recalculation; minimal DOM passes; short number formatting (K, M, B, etc.).
- **Safety & Clarity**: Clean separation of data (weights & piecewise logic) from UI handlers.

---
## 🧠 Core Formulae
### Forward (Weight → Value)
```
value = ceil( BaseValue(plant, weight) * FruitMultiplier * ( Σ(modifierMultipliers) − ActiveModifierCount + 1 ) * PlantAmount * FriendBoostMultiplier )
```
Where:
- `BaseValue` is piecewise: flat value up to min weight threshold, then `k * w^2` above it.
- FruitMultiplier ∈ {50, 20, 5, 1} for Rainbow, Gold, Silver, None.
- FriendBoostMultiplier steps: `[1.0, 1.2, 1.4, 1.6, 1.8, 2.0]` mapped from 0–100% slider.

### Reverse (Value → Weight)
Rearranges the formula and inverts the quadratic region to estimate weight; clamps to ≤ min threshold when still inside flat segment.

---
## 📁 Project Structure (Relevant Portions)
```
index.html                  # Main UI markup, mutation listing, sliders, modals
css/                         # Stylesheets (responsive: general, desktop, mobile)
images/                      # Plant & UI asset images (webp/png)
javascript/
  calculator_fixed.js        # Single authoritative logic file (weights, base value fn, calc & reverse, slider & modifiers)
README.md                    # This documentation
```
Deprecated files (`calculator.js`, `secret.js`) were removed after consolidation into `calculator_fixed.js`.

---
## 🚀 Running Locally
No build step required.
1. Clone the repository
2. Open `index.html` in any modern browser (Chrome / Edge / Firefox).

Optional lightweight static server (PowerShell example):
```powershell
# From project root
python -m http.server 8080
# Then visit http://localhost:8080
```

---
## 🔧 Updating Data / Multipliers
| Category | Where to Edit | Notes |
|----------|---------------|-------|
| Plant min weights | `calculator_fixed.js` (plantMinWeights) | Keep sorted logically for readability. |
| Base value piecewise logic | `calculateBaseValueForPlant()` | Each case: flat threshold vs quadratic region. |
| Mutation multipliers | `modifierValues` objects (two appearances: forward & reverse calc) | Ensure consistency in both places. |
| Friend boost scaling | `friendMultipliers` arrays | Forward + reverse sections. |
| UI mutation labels | `index.html` modifierDescriptions | Text shown in mutation tooltip/list. |

After edits, test:
1. Toggle several modifiers (incl. high multipliers) and confirm value scales as expected.
2. Use Value → Weight with known weights to verify near‑symmetry.

---
## 🧪 Sanity Test Scenarios
| Scenario | Steps | Expected |
|----------|-------|----------|
| Baseline | Select plant, weight=1, no modifiers | Value ~ Base flat segment value |
| Mutation stacking | Activate 3 modifiers (A,B,C) | Net factor uses (sum − count + 1) rule |
| Friend boost extremes | Slider 0% → 100% | Value ratio ≈ 2.0× increase |
| Reverse inside flat | Enter value equal to flat threshold | Output weight ≤ min weight |
| Reverse quadratic | Enter large value | Weight > min threshold, matches forward when reentered |

---
## 🛡️ Disclaimer
This is an unofficial fan project. All formulas derived empirically. Balancing changes in the game may require updates here.

---
## 🤝 Contributing
1. Fork & clone
2. Create a feature branch
3. Make focused changes (keep formatting consistent)
4. Open a Pull Request explaining data sources or reasoning

Please include testing evidence (before/after values) for formula edits.

---
## 📅 Project Date
This calculator build & documentation finalized on **28 August 2025**.

---
## 📫 Questions / Updates
If you believe values changed in‑game or find an inconsistency:
- Open an issue / PR, OR
- Contact us with your query (as noted on the site).

If you feel something should be updated, commit the change or contact us with your query.

---
## ✅ Roadmap Ideas
- Automated regression test harness (sample weights → expected outputs)
- JSON export/import of user sessions (selected plant + modifiers)
- PWA offline support
- Dark theme refinements / accessibility contrast audit
- Mutation search fuzzy matching improvements

---
## 📝 License
Fanmade utility; no redistribution of proprietary game assets beyond fair-use references. (Add a formal license here if desired.)

---
Enjoy optimizing your garden!
