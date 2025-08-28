// Fixed Garden Calculator - Direct integration with existing HTML

// Complete plant data
const plantMinWeights = {
    easteregg: 2.85, moonflower: 1.90, starfruit: 2.85, pepper: 4.75, grape: 2.85,
    nightshade: 0.48, mint: 0.95, glowshroom: 0.70, bloodbanana: 1.42, beanstalk: 9.5,
    coconut: 13.31, candyblossom: 2.85, carrot: 0.24, strawberry: 0.29, blueberry: 0.17,
    orangetulip: 0.0499, tomato: 0.44, daffodil: 0.16, watermelon: 7.3, pumpkin: 6.9,
    mushroom: 25.9, bamboo: 3.80, apple: 2.85, corn: 1.90, cactus: 6.65,
    cranberry: 0.95, moonmelon: 7.6, durian: 7.6, peach: 1.90, cacao: 7.6,
    moonglow: 6.65, dragonfruit: 11.38, mango: 14.28, moonblossom: 2.85, raspberry: 0.71,
    eggplant: 4.75, papaya: 2.86, celestiberry: 1.90, moonmango: 14.25, passionfruit: 2.867,
    soulfruit: 23.75, chocolatecarrot: 0.2616, redlolipop: 3.7988, candysunflower: 1.428, lotus: 18.99,
    pineapple: 2.85, hive: 7.59, lilac: 2.846, rose: 0.95, foxglove: 1.9,
    purpledahlia: 11.4, sunflower: 15.65, pinklily: 5.699, nectarine: 2.807, honeysuckle: 11.4,
    lavender: 0.25, venusflytrap: 9.5, nectarshade: 0.75, manuka: 0.289, emberlily: 11.40,
    dandelion: 3.79, lumira: 5.69, cocovine: 13.3, succulent: 4.75, beebalm: 0.94,
    nectarthorn: 5.76, violetcorn: 2.85, bendboo: 17.09, crocus: 0.285, sugarapple: 8.55,
    cursedfruit: 22.9, suncoil: 9.5, dragonpepper: 5.69, cauliflower: 4.74, avocado: 3.32,
    kiwi: 4.75, greenapple: 2.85, banana: 1.42, pricklypear: 6.65, feijoa: 9.5,
    loquat: 6.17, wildcarrot: 0.286, pear: 2.85, cantaloupe: 5.22, parasolflower: 5.7,
    rosydelight: 9.5, elephantears: 17.1, bellpepper: 7.61, aloevera: 5.22, peacelily: 0.5,
    travelersfruit: 11.4, delphinium: 0.285, lilyofthevalley: 5.69, guanabana: 3.80, pitcherplant: 11.4,
    rafflesia: 7.6, fireworkflower: 19, libertylily: 6.176, boneblossom: 2.85, horneddinoshroom: 4.94,
    fireflyfern: 4.77, stonebite: 0.94, boneboo: 14.5, paradisepetal: 2.85, burningbud: 11.40,
    fossilight: 3.79, amberspine: 5.7, grandvolcania: 6.65, lingonberry: 0.485, giantpinecone: 5.14,
    horsetail: 2.85, monoblooma: 0.477, spikedmango: 14.25, taroflower: 6.64, serenity: 0.24,
    zenflare: 1.34, zenrocks: 17.1, hinomai: 9.5, mapleapple: 2.85, softsunshine: 1.90,
    elderstrawberry: 5.37, tranquilbloom: 3.79, luckybamboo: 4.75, dezen: 1.90, sakurabush: 1.42,
    enkaku: 4.75, fruitball: 5.72, twistedtangle: 2.85, veinpetal: 7.8, grandtomato: 7.60,
    sugarglaze: 1.00, artichoke: 1.43, tallasparagus: 6.5, jalapeno: 3.81, crownmelon: 4.28,
    tacofern: 8.96, rhubarb: 1.90, springonion: 1.42, pricklefruit: 7.5, bittermelon: 2.85,
    badlandpepper: 3.33, butternutsquash: 4.5, kingcabbage: 7.5, onion: 1.42, mandrake: 2.85,
    mangosteen: 1.42, goldenegg: 7.6, poseidonplant: 2.85, gleamroot: 2.375, canarymelon: 7.60,
    duskpuff: 2.85, amberheart: 3.80, princessthorn: 11.40, romanesco: 7.60, flaredaisy: 1.43,
    flaremelon: 3.56, crownofthorn: 0.763, callalily: 7.04, glowpod: 2.80, willowberry: 3.80,
    cyclamen: 8.56
};

// Complete piecewise base value function (ported & cleaned from original secret.js)
function calculateBaseValueForPlant(plantId, weight) {
    switch (plantId) {
        case "easteregg": return (weight <= 2.85) ? 2256 : 277.825 * weight * weight;
        case "moonflower": return (weight <= 1.90) ? 8574 : 2381 * weight * weight;
        case "starfruit": return (weight <= 2.85) ? 13538 : 1666.6 * weight * weight;
        case "pepper": return (weight <= 4.75) ? 7220 : 320 * weight * weight;
        case "grape": return (weight <= 2.85) ? 7085 : 872 * weight * weight;
        case "nightshade": return (weight <= 0.48) ? 3159 : 13850 * weight * weight;
        case "mint": return (weight <= 0.95) ? 4738 : 5230 * weight * weight;
        case "glowshroom": return (weight <= 0.70) ? 271 : 532.5 * weight * weight;
        case "bloodbanana": return (weight <= 1.42) ? 5415 : 2670 * weight * weight;
        case "beanstalk": return (weight <= 9.5) ? 25270 : 280 * weight * weight;
        case "coconut": return (weight <= 13.31) ? 361 : 2.04 * weight * weight;
        case "candyblossom": return (weight <= 2.85) ? 90250 : 11111.11111 * weight * weight;
        case "carrot": return (weight <= 0.24) ? 18 : 275 * weight * weight;
        case "strawberry": return (weight <= 0.29) ? 14 : 165 * weight * weight;
        case "blueberry": return (weight <= 0.17) ? 18 : 500 * weight * weight;
        case "orangetulip": return (weight <= 0.0499) ? 767 : 300000 * weight * weight;
        case "tomato": return (weight <= 0.44) ? 27 : 120 * weight * weight;
        case "daffodil": return (weight <= 0.16) ? 903 : 25000 * weight * weight;
        case "watermelon": return (weight <= 7.3) ? 2708 : 61.25 * weight * weight;
        case "pumpkin": return (weight <= 6.90) ? 3069 : 64 * weight * weight;
        case "mushroom": return (weight <= 25.9) ? 136278 : 241.6 * weight * weight;
        case "bamboo": return (weight <= 3.80) ? 3610 : 250 * weight * weight;
        case "apple": return (weight <= 2.85) ? 248 : 30.53 * weight * weight;
        case "corn": return (weight <= 1.90) ? 36 : 10.00 * weight * weight;
        case "cactus": return (weight <= 6.65) ? 3069 : 69.4 * weight * weight;
        case "cranberry": return (weight <= 0.95) ? 1805 : 2000 * weight * weight;
        case "moonmelon": return (weight <= 7.6) ? 16245 : 281.2 * weight * weight;
        case "durian": return (weight <= 7.60) ? 6317 : 109.37 * weight * weight;
        case "peach": return (weight <= 1.90) ? 271 : 75 * weight * weight;
        case "cacao": return (weight <= 7.6) ? 10830 : 187.5 * weight * weight;
        case "moonglow": return (weight <= 6.65) ? 18050 : 408.45 * weight * weight;
        case "dragonfruit": return (weight <= 11.38) ? 4287 : 32.99 * weight * weight;
        case "mango": return (weight <= 14.28) ? 5866 : 28.89 * weight * weight;
        case "moonblossom": return (weight <= 2.85) ? 60166 : 7407.4 * weight * weight;
        case "raspberry": return (weight <= 0.71) ? 90 : 177.5 * weight * weight;
        case "eggplant": return (weight <= 4.75) ? 6769 : 300 * weight * weight;
        case "papaya": return (weight <= 2.86) ? 903 : 111.11 * weight * weight;
        case "celestiberry": return (weight <= 1.90) ? 9025 : 2500 * weight * weight;
        case "moonmango": return (weight <= 14.25) ? 45125 : 222.22 * weight * weight;
        case "passionfruit": return (weight <= 2.867) ? 3204 : 395 * weight * weight;
        case "soulfruit": return (weight <= 23.75) ? 6994 : 12.4 * weight * weight;
        case "chocolatecarrot": return (weight <= 0.2616) ? 9928 : 145096 * weight * weight;
        case "redlolipop": return (weight <= 3.7988) ? 45125 : 3125 * weight * weight;
        case "candysunflower": return (weight <= 1.428) ? 72200 : 35413 * weight * weight;
        case "lotus": return (weight <= 18.99) ? 15343 : 42.5 * weight * weight;
        case "pineapple": return (weight <= 2.85) ? 1805 : 222.5 * weight * weight;
        case "hive": return (weight <= 7.59) ? 55955 : 969 * weight * weight;
        case "lilac": return (weight <= 2.846) ? 31588 : 3899 * weight * weight;
        case "rose": return (weight <= 0.95) ? 4513 : 5000 * weight * weight;
        case "foxglove": return (weight <= 1.9) ? 18050 : 5000 * weight * weight;
        case "purpledahlia": return (weight <= 11.4) ? 67688 : 522 * weight * weight;
        case "sunflower": return (weight <= 15.65) ? 144000 : 587.78 * weight * weight;
        case "pinklily": return (weight <= 5.699) ? 58663 : 1806.5 * weight * weight;
        case "nectarine": return (weight <= 2.807) ? 35000 : 4440 * weight * weight;
        case "lavender": return (weight <= 0.25) ? 22563 : 361008 * weight * weight;
        case "honeysuckle": return (weight <= 11.4) ? 90250 : 694.3 * weight * weight;
        case "venusflytrap": return (weight <= 9.5) ? 76712 : 850 * weight * weight;
        case "nectarshade": return (weight <= 0.75) ? 45125 : 78500 * weight * weight;
        case "manuka": return (weight <= 0.289) ? 22563 : 270000 * weight * weight;
        case "emberlily": return (weight <= 11.40) ? 50138 : 385.6 * weight * weight;
        case "dandelion": return (weight <= 3.79) ? 45125 : 3130 * weight * weight;
        case "lumira": return (weight <= 5.69) ? 76713 : 2362.5 * weight * weight;
        case "crocus": return (weight <= 0.285) ? 27075 : 333333 * weight * weight;
        case "suncoil": return (weight <= 9.5) ? 72200 : 800 * weight * weight;
        case "beebalm": return (weight <= 0.94) ? 16245 : 18033.333 * weight * weight;
        case "nectarthorn": return (weight <= 5.76) ? 30083 : 906.36 * weight * weight;
        case "violetcorn": return (weight <= 2.85) ? 45125 : 5555.555 * weight * weight;
        case "bendboo": return (weight <= 17.09) ? 138988 : 478.5 * weight * weight;
        case "succulent": return (weight <= 4.75) ? 22563 : 1000 * weight * weight;
        case "sugarapple": return (weight <= 8.55) ? 43320 : 592.6 * weight * weight;
        case "cursedfruit": return (weight <= 22.9) ? 15000 : 28.6 * weight * weight;
        case "cocovine": return (weight <= 13.3) ? 60166 : 340 * weight * weight;
        case "dragonpepper": return (weight <= 5.69) ? 80000 : 2470 * weight * weight;
        case "cauliflower": return (weight <= 4.74) ? 36 : 1.6 * weight * weight;
        case "avocado": return (weight <= 3.32) ? 125 : 11.34 * weight * weight;
        case "greenapple": return (weight <= 2.85) ? 271 : 33.36 * weight * weight;
        case "kiwi": return (weight <= 4.75) ? 2482 : 110 * weight * weight;
        case "banana": return (weight <= 1.42) ? 1805 : 893.3 * weight * weight;
        case "pricklypear": return (weight <= 6.65) ? 6319 : 142.9 * weight * weight;
        case "feijoa": return (weight <= 9.50) ? 11733 : 130 * weight * weight;
        case "loquat": return (weight <= 6.17) ? 7220 : 189.65 * weight * weight;
        case "wildcarrot": return (weight <= 0.286) ? 22563 : 275000 * weight * weight;
        case "pear": return (weight <= 2.85) ? 18050 : 2217.5 * weight * weight;
        case "cantaloupe": return (weight <= 5.22) ? 30685 : 1124 * weight * weight;
        case "parasolflower": return (weight <= 5.7) ? 180500 : 5555.555 * weight * weight;
        case "rosydelight": return (weight <= 9.5) ? 62273 : 690 * weight * weight;
        case "elephantears": return (weight <= 17.1) ? 69492 : 237.6 * weight * weight;
        case "bellpepper": return (weight <= 7.61) ? 4964 : 85.6 * weight * weight;
        case "aloevera": return (weight <= 5.22) ? 56858 : 2085.25 * weight * weight;
        case "peacelily": return (weight <= 0.5) ? 16666 : 66666 * weight * weight;
        case "travelersfruit": return (weight <= 11.4) ? 48085 : 261 * weight * weight;
        case "delphinium": return (weight <= 0.285) ? 21660 : 266666 * weight * weight;
        case "lilyofthevalley": return (weight <= 5.69) ? 44331 : 1365 * weight * weight;
        case "guanabana": return (weight <= 3.80) ? 63626 : 4406.23 * weight * weight;
        case "pitcherplant": return (weight <= 11.4) ? 28800 : 222.222 * weight * weight;
        case "rafflesia": return (weight <= 7.6) ? 3159 : 54.65 * weight * weight;
        case "libertylily": return (weight <= 6.176) ? 27075 : 710 * weight * weight;
        case "fireworkflower": return (weight <= 19) ? 136278 : 377.5 * weight * weight;
        case "boneblossom": return (weight <= 2.85) ? 180500 : 22222.22222 * weight * weight;
        case "horneddinoshroom": return (weight <= 4.94) ? 67218 : 2760 * weight * weight;
        case "fireflyfern": return (weight <= 4.75) ? 64980 : 2880 * weight * weight;
        case "stonebite": return (weight <= 0.94) ? 31545 : 35175 * weight * weight;
        case "boneboo": return (weight <= 14.5) ? 131967 : 627.5 * weight * weight;
        case "paradisepetal": return (weight <= 2.61) ? 22563 : 3305 * weight * weight;
        case "burningbud": return (weight <= 11.40) ? 63175 : 486 * weight * weight;
        case "fossilight": return (weight <= 3.79) ? 79420 : 5505 * weight * weight;
        case "horsetail": return (weight <= 2.85) ? 27075 : 3333.33333 * weight * weight;
        case "giantpinecone": return (weight <= 5.14) ? 64980 : 2875 * weight * weight;
        case "lingonberry": return (weight <= 0.485) ? 31588 : 139000 * weight * weight;
        case "grandvolcania": return (weight <= 6.65) ? 63676 : 1440 * weight * weight;
        case "amberspine": return (weight <= 5.7) ? 49638 : 1527.5 * weight * weight;
        case "monoblooma": return (weight <= 0.477) ? 19855 : 88250 * weight * weight;
        case "serenity": return (weight <= 0.24) ? 31588 : 560000 * weight * weight;
        case "softsunshine": return (weight <= 1.90) ? 40613 : 11250 * weight * weight;
        case "taroflower": return (weight <= 6.64) ? 108300 : 2451 * weight * weight;
        case "spikedmango": return (weight <= 14.25) ? 60919 : 300 * weight * weight;
        case "zenrocks": return (weight <= 17.1) ? 135375 : 462.78 * weight * weight;
        case "hinomai": return (weight <= 9.5) ? 72200 : 800 * weight * weight;
        case "mapleapple": return (weight <= 2.85) ? 51521 : 6343 * weight * weight;
        case "zenflare": return (weight <= 1.34) ? 22563 : 12771 * weight * weight;
        case "dezen": return (weight <= 1.90) ? 26398 : 7325 * weight * weight;
        case "enkaku": return (weight <= 4.75) ? 55955 : 2475 * weight * weight;
        case "tranquilbloom": return (weight <= 3.79) ? 84223 : 5841 * weight * weight;
        case "sakurabush": return (weight <= 1.42) ? 25789 : 12742 * weight * weight;
        case "luckybamboo": return (weight <= 4.75) ? 58663 : 2600 * weight * weight;
        case "elderstrawberry": return (weight <= 5.37) ? 72092 : 2500 * weight * weight;
        case "fruitball": return (weight <= 5.72) ? 31588 : 972 * weight * weight;
        case "twistedtangle": return (weight <= 2.85) ? 18050 : 2222 * weight * weight;
        case "veinpetal": return (weight <= 7.8) ? 45125 : 741 * weight * weight;
        case "artichoke": return (weight <= 1.43) ? 27075 : 13365 * weight * weight;
        case "crownmelon": return (weight <= 4.28) ? 45125 : 2471 * weight * weight;
        case "sugarglaze": return (weight <= 1.00) ? 30000 : 2785 * weight * weight;
        case "jalapeno": return (weight <= 3.81) ? 27075 : 1871 * weight * weight;
        case "onion": return (weight <= 1.42) ? 9025 : 4474 * weight * weight;
        case "tallasparagus": return (weight <= 6.5) ? 65952 : 1563 * weight * weight;
        case "grandtomato": return (weight <= 7.6) ? 79420 : 1375 * weight * weight;
        case "tacofern": return (weight <= 8.96) ? 74252 : 926 * weight * weight;
        case "rhubarb": return (weight <= 1.90) ? 13538 : 3762 * weight * weight;
        case "badlandpepper": return (weight <= 3.33) ? 40613 : 3671 * weight * weight;
        case "pricklefruit": return (weight <= 7.5) ? 70312 : 1250 * weight * weight;
        case "springonion": return (weight <= 1.42) ? 27075 : 13370 * weight * weight;
        case "butternutsquash": return (weight <= 4.5) ? 28309 : 1398 * weight * weight;
        case "kingcabbage": return (weight <= 7.5) ? 83250 : 1480 * weight * weight;
        case "bittermelon": return (weight <= 2.85) ? 50960 : 6274 * weight * weight;
        case "mandrake": return (weight <= 2.85) ? 45125 : 5567 * weight * weight;
        case "mangosteen": return (weight <= 1.42) ? 45125 : 22300 * weight * weight;
        case "goldenegg": return (weight <= 7.60) ? 225625 : 3910 * weight * weight;
        case "poseidonplant": return (weight <= 2.85) ? 59163 : 7300 * weight * weight;
        case "canarymelon": return (weight <= 7.60) ? 58663 : 1016 * weight * weight;
        case "gleamroot": return (weight <= 2.375) ? 67688 : 12000 * weight * weight;
        case "duskpuff": return (weight <= 2.85) ? 31588 : 3888.888 * weight * weight;
        case "amberheart": return (weight <= 3.80) ? 157938 : 10920 * weight * weight;
        case "princessthorn": return (weight <= 11.4) ? 100278 : 771 * weight * weight;
        case "flaredaisy": return (weight <= 1.43) ? 22563 : 11085 * weight * weight;
        case "romanesco": return (weight <= 7.60) ? 149815 : 2591 * weight * weight;
        case "flaremelon": return (weight <= 3.56) ? 45125 : 3545.56 * weight * weight;
        case "crownofthorn": return (weight <= 0.763) ? 22563 : 38682 * weight * weight;
        case "callalily": return (weight <= 7.04) ? 61078 : 1232 * weight * weight;
        case "glowpod": return (weight <= 2.80) ? 27075 : 3435 * weight * weight;
        case "willowberry": return (weight <= 3.80) ? 66334 : 4596 * weight * weight;
        case "cyclamen": return (weight <= 8.56) ? 85738 : 1172 * weight * weight;
        default: return weight * weight;
    }
}

function formatShortNumber(num) {
    const units = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "De"]; // short labels
    let u = 0;
    while (num >= 1000 && u < units.length - 1) { num /= 1000; u++; }
    return `${num.toFixed(2)}${units[u]}`;
}

// Optimised calculateValue using original formula
function calculateValue() {
    try {
        const weightEl = document.getElementById('weight');
        const amountEl = document.getElementById('plantAmount');
        const sliderEl = document.getElementById('weightSlider');
        const weight = weightEl ? parseFloat(weightEl.value) || 0 : 0;
        const plantAmount = amountEl ? Math.max(1, parseInt(amountEl.value) || 1) : 1;
        const sliderValue = sliderEl ? Math.max(0, Math.min(5, parseInt(sliderEl.value) || 0)) : 0;

        // Determine active plant
        let activePlantId = null;
        for (const id of Object.keys(plantMinWeights)) {
            const el = document.getElementById(id);
            if (el && el.classList.contains('active')) { activePlantId = id; break; }
        }

        // Base value
        const baseValue = activePlantId ? calculateBaseValueForPlant(activePlantId, weight) : weight * weight;

        // Modifier weights
        const modifierValues = {
            shocked:100,frozen:10,wet:2,chilled:2,choc:2,moonlit:2,bloodlit:4,celestial:120,disco:125,zombified:25,plasma:5,voidtouched:135,pollinated:3,honeyglazed:5,dawnbound:150,heavenly:5,cooked:10,burnt:4,molten:25,meteoric:125,verdant:4,sundried:85,windstruck:2,alienlike:100,paradisal:100,twisted:5,galactic:120,aurora:90,drenched:5,cloudtouched:5,fried:8,sandy:3,amber:10,clay:5,ceramic:30,ancientamber:50,oldamber:20,friendbound:70,tempestous:12,infected:75,tranquil:20,chakra:15,toxic:12,radioactive:55,foxfire:90,corrupt:20,subzero:40,jackpot:15,blitzshock:50,touchdown:105,static:8,harmonisedfoxfire:190,harmonisedchakra:35,sliced:50,sauce:3,pasta:3,meatball:3,acidic:15,spaghetti:15,aromatic:15,oil:15,boil:15,junkshock:45,bloom:8,eclipsed:20,fortune:50,lightcycle:50,cyclonic:50,brainrot:100,rot:8,warped:75,gnomed:15,beanbound:100,gloom:30,maelstrom:100
        };

        let modifierSum = 0;
        let modifierCount = 0;
        Object.keys(modifierValues).forEach(id => {
            const btn = document.getElementById(id);
            if (btn && btn.classList.contains('active')) { modifierSum += modifierValues[id]; modifierCount++; }
        });

        const rainbowEl = document.getElementById('rainbow');
        const goldEl = document.getElementById('gold');
        const silverEl = document.getElementById('silver');
        const fruitMultiplier = rainbowEl && rainbowEl.classList.contains('active') ? 50 :
            goldEl && goldEl.classList.contains('active') ? 20 :
            silverEl && silverEl.classList.contains('active') ? 5 : 1;

    // Friend boost multipliers map 0%,10%,20%,30%,40%,50% -> 1.0x..1.5x
    const friendMultipliers = [1,1.1,1.2,1.3,1.4,1.5];
        const friendMultiplier = friendMultipliers[sliderValue];

        // Original formula
        let result = Math.ceil(baseValue * fruitMultiplier * (modifierSum - modifierCount + 1));
        result *= plantAmount;
        result *= friendMultiplier;

        // Output
        const shortForm = formatShortNumber(result);
        // Show in green existing #value element (above the add button)
        const mainDisplay = document.getElementById('value');
        if (mainDisplay) {
            mainDisplay.innerText = `≈$${result.toLocaleString()} (${shortForm})`;
        }
    // Legacy display removed in cleanup; no-op
    } catch (e) {
        console.error('Calc error', e);
    }
}

// Debounced version
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const debouncedCalculateValue = debounce(calculateValue, 300);

// Update Friend Boost slider label & progress bar
function updateSliderLabel() {
    const slider = document.getElementById('weightSlider');
    const label = document.getElementById('sliderValueLabel');
    const bar = document.getElementById('friendBoostBar');
    if (!slider || !label) return;
    const percentages = [0,10,20,30,40,50];
    const idx = Math.max(0, Math.min(5, parseInt(slider.value) || 0));
    const pct = percentages[idx];
    label.textContent = pct + '%';
    if (bar) {
        const fill = (idx / 5) * 100; // full bar at 50%
        bar.style.width = fill + '%';
    }
}
window.updateSliderLabel = updateSliderLabel;

// Initialize and export globally
window.plantMinWeights = plantMinWeights;
window.calculateValue = calculateValue;
window.debouncedCalculateValue = debouncedCalculateValue;
window.calculateBaseValueForPlant = calculateBaseValueForPlant;

// Reverse: value -> weight estimator (from original logic)
function calculateWeightFromValue() {
    try {
        const rawInputEl = document.getElementById('valueInput');
        if (!rawInputEl) return;
        const raw = (rawInputEl.value || '').replace(/,/g, '');
        const targetValue = parseFloat(raw);
        if (!isFinite(targetValue) || targetValue <= 0) {
            const out = document.getElementById('weightFromValue');
            if (out) out.textContent = 'Enter a valid value';
            return;
        }
        // Active plant
        let activePlantId = null;
        for (const id of Object.keys(plantMinWeights)) {
            const el = document.getElementById(id);
            if (el && el.classList.contains('active')) { activePlantId = id; break; }
        }
        if (!activePlantId) {
            const out = document.getElementById('weightFromValue');
            if (out) out.textContent = 'Select a plant first';
            return;
        }
        // Fruit multiplier
        const rainbowEl = document.getElementById('rainbow');
        const goldEl = document.getElementById('gold');
        const silverEl = document.getElementById('silver');
        const fruitMultiplier = rainbowEl && rainbowEl.classList.contains('active') ? 50 :
            goldEl && goldEl.classList.contains('active') ? 20 :
            silverEl && silverEl.classList.contains('active') ? 5 : 1;
        // Friend multiplier
        const sliderEl = document.getElementById('weightSlider');
        const sliderValue = sliderEl ? Math.max(0, Math.min(5, parseInt(sliderEl.value) || 0)) : 0;
    const friendMultipliers = [1,1.1,1.2,1.3,1.4,1.5];
        const friendMultiplier = friendMultipliers[sliderValue];
        // Plant amount
        const amountEl = document.getElementById('plantAmount');
        const plantAmount = amountEl ? Math.max(1, parseInt(amountEl.value) || 1) : 1;
        // Modifiers
        const modifierValues = {
            shocked:100,frozen:10,wet:2,chilled:2,choc:2,moonlit:2,bloodlit:4,celestial:120,disco:125,zombified:25,plasma:5,voidtouched:135,pollinated:3,honeyglazed:5,dawnbound:150,heavenly:5,cooked:10,burnt:4,molten:25,meteoric:125,verdant:4,sundried:85,windstruck:2,alienlike:100,paradisal:100,twisted:5,galactic:120,aurora:90,drenched:5,cloudtouched:5,fried:8,sandy:3,amber:10,clay:5,ceramic:30,ancientamber:50,oldamber:20,friendbound:70,tempestous:12,infected:75,tranquil:20,chakra:15,toxic:12,radioactive:55,foxfire:90,corrupt:20,subzero:40,jackpot:15,blitzshock:50,touchdown:105,static:8,harmonisedfoxfire:190,harmonisedchakra:35,sliced:50,sauce:3,pasta:3,meatball:3,acidic:15,spaghetti:15,aromatic:15,oil:15,boil:15,junkshock:45,bloom:8,eclipsed:20,fortune:50,lightcycle:50,cyclonic:50,brainrot:100,rot:8,warped:75,gnomed:15,beanbound:100,gloom:30,maelstrom:100
        };
        let modifierSum = 0; let modifierCount = 0;
        Object.keys(modifierValues).forEach(id => {
            const btn = document.getElementById(id);
            if (btn && btn.classList.contains('active')) { modifierSum += modifierValues[id]; modifierCount++; }
        });
        const effectiveMultiplier = fruitMultiplier * (modifierSum - modifierCount + 1) * plantAmount * friendMultiplier;
        if (effectiveMultiplier <= 0) {
            const out = document.getElementById('weightFromValue');
            if (out) out.textContent = 'Cannot compute';
            return;
        }
        const baseValue = targetValue / effectiveMultiplier;
        // Need to invert piecewise: if weight <= minWeight case uses a flat value -> just compare.
        const minWeight = plantMinWeights[activePlantId];
        const baseAtMin = calculateBaseValueForPlant(activePlantId, minWeight);
        if (baseValue <= baseAtMin) {
            const out = document.getElementById('weightFromValue');
            if (out) out.textContent = `Estimated weight: ≤${minWeight.toFixed(3)} kg`;
            return;
        }
        // For quadratic region: baseValue = k * w^2 => w = sqrt(baseValue / k)
        const wPlus = minWeight + 1; // sample to derive k
        const sample = calculateBaseValueForPlant(activePlantId, wPlus);
        const k = sample / (wPlus * wPlus);
        const estimatedWeight = Math.sqrt(baseValue / k);
        const out = document.getElementById('weightFromValue');
        if (out) out.textContent = `Estimated weight: ≈${estimatedWeight.toFixed(3)} kg`;
    } catch (err) {
        const out = document.getElementById('weightFromValue');
        if (out) out.textContent = 'Error estimating weight';
        console.error('Value->Weight error', err);
    }
}
window.calculateWeightFromValue = calculateWeightFromValue;

// Auto-initialize
function init() {
    console.log('Calculator initializing...');
    
    // Add event listeners
    const weightInput = document.getElementById('weight');
    if (weightInput) {
        weightInput.addEventListener('input', debouncedCalculateValue);
    }
    
    const plantAmountInput = document.getElementById('plantAmount');
    if (plantAmountInput) {
        plantAmountInput.addEventListener('input', debouncedCalculateValue);
    }
    
    const sliderInput = document.getElementById('weightSlider');
    if (sliderInput) {
        sliderInput.addEventListener('input', () => {
            updateSliderLabel();
            debouncedCalculateValue();
        });
        // Initial label update
        updateSliderLabel();
    }
    
    // Initial calculation
    setTimeout(calculateValue, 1000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

console.log('Fixed Garden Calculator loaded!');
