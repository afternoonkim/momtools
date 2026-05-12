import fs from 'fs';
import path from 'path';
const file = path.join(process.cwd(), 'data/en/babyFood.ts');
const src = fs.readFileSync(file, 'utf8');
const match = src.match(/export const babyFoodRecipes: EnglishBabyFoodRecipe\[] = ([\s\S]*?);\n\nexport function/);
if (!match) throw new Error('recipes not found');
const recipes = Function(`return (${match[1]});`)();
const lc = (s)=>String(s).toLowerCase();
function typeOf(r){
  const text = lc(`${r.title} ${r.category} ${r.ingredients.join(' ')}`);
  if (/chicken|beef|turkey|egg|tofu|bean|lentil|salmon|fish|meat|yogurt|cheese|ricotta/.test(text)) return 'protein';
  if (/oat|rice|pasta|quinoa|toast|bread|pancake|waffle|cereal|barley|grain|noodle/.test(text)) return 'grain';
  if (/banana|pear|apple|peach|mango|berry|blueberry|strawberry|avocado|fruit|plum|melon/.test(text)) return 'fruit';
  if (/carrot|sweet potato|potato|pea|broccoli|zucchini|squash|spinach|vegetable|pumpkin|cauliflower|green bean/.test(text)) return 'vegetable';
  if (/stick|finger|strip|bite|toast|puff|snack|piece|fries|spears/.test(text) || r.stage === 'late') return 'finger';
  return 'mixed';
}
function mainIngredient(r){ return r.ingredients?.[0] || r.title.toLowerCase(); }
function rewrite(r, i){
  const t = typeOf(r); const ing = mainIngredient(r); const title = r.title;
  const mod = i % 7;
  if (t === 'protein') {
    const proteinNotes = {
      chicken: 'shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce',
      beef: 'cook until tender, mince finely, and keep each bite soft instead of dry or chewy',
      turkey: 'break it into tiny moist pieces so it does not clump in the mouth',
      egg: 'cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction',
      tofu: 'press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage',
      bean: 'mash until skins are broken down and add liquid until the texture is easy to swallow',
      lentil: 'cook until very soft and loosen the mash so it does not become pasty',
      salmon: 'flake carefully, remove bones, and keep the fish moist so pieces separate easily'
    };
    const key = Object.keys(proteinNotes).find(k => lc(title+' '+ing).includes(k));
    const note = proteinNotes[key] || `prepare ${ing} so it stays tender, moist, and easy to break apart`;
    r.textureGuide = `${title} should feel soft and moist on the tongue; ${note}.`;
    r.servingTip = [`Start with a small spoonful of ${ing} alongside a familiar food, then pause so your baby can manage the richer texture.`,`Serve ${ing} in a calm meal window and offer water in a cup for older babies if the texture feels dense.`,`Pair ${ing} with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.`][mod%3];
    r.storageTip = [`Cool ${title} quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.`,`Keep saved ${ing} covered in the refrigerator and discard any portion that touched the serving spoon.`,`For the next meal, reheat ${title} until warm throughout and check that it has not become dry or rubbery.`][mod%3];
    r.safetyTip = [`Avoid large, dry, or springy pieces of ${ing}; every bite should flatten easily between your fingers.`,`With protein foods, size and moisture matter: skip tough edges, chewy bits, and round pieces that do not break down quickly.`,`Introduce allergen-containing proteins in a baby-safe form and seek medical advice for swelling, hives, repeated vomiting, or breathing symptoms.`][mod%3];
  } else if (t === 'grain') {
    r.textureGuide = `${title} works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.`;
    r.servingTip = [`Offer ${title} while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.`,`Keep the first serving of ${title} small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.`,`Serve ${title} with enough moisture to separate the grains or pieces easily on the spoon.`][mod%3];
    r.storageTip = [`When saving ${title}, add moisture during reheating and stop using it if the texture turns gummy.`,`Store ${title} in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.`,`For leftovers, loosen ${title} with water, breast milk, formula, or sauce and test that it is soft all the way through.`][mod%3];
    r.safetyTip = [`Avoid dense clumps of ${ing}; spread or break the food apart so each bite is easy to swallow.`,`For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.`,`Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form.`][mod%3];
  } else if (t === 'fruit') {
    r.textureGuide = `${title} should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.`;
    r.servingTip = [`Offer a small taste of ${ing} first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.`,`Serve ${ing} at a soft ripe stage and watch how your baby handles the natural acidity and slippery texture.`,`Start with a few soft bites of ${title}, then wait before offering more if the fruit is new to your baby.`][mod%3];
    r.storageTip = [`Fruit like ${ing} can brown or release juice, so store a small covered portion and check smell and texture before reusing.`,`Keep leftover ${title} cold and use the smoothest portion first, discarding anything that became watery or touched the spoon.`,`If saving ${ing}, cover it tightly and expect the texture to soften further by the next meal.`][mod%3];
    r.safetyTip = [`Remove peels, pits, seeds, and firm edges from ${ing}; slippery pieces should be sized so they are easy to control.`,`Avoid hard raw chunks of fruit and round pieces that can block the airway.`,`For berries or grapes, flatten or quarter appropriately and never serve firm round pieces whole.`][mod%3];
  } else if (t === 'vegetable') {
    r.textureGuide = `${title} should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.`;
    r.servingTip = [`Serve ${ing} warm or room temperature and keep the first portion small while your baby gets used to the flavor.`,`If ${title} feels thick, loosen it gradually so the spoonful stays smooth without becoming watery.`,`Pair ${ing} with a familiar food if the vegetable flavor is strong, but keep the texture soft and simple.`][mod%3];
    r.storageTip = [`Cool cooked ${ing} before storing and reheat only the portion you plan to serve.`,`Vegetable purees can thicken in the refrigerator, so stir well and check for smoothness after warming.`,`Store ${title} in a clean covered container and discard leftovers that were handled during feeding.`][mod%3];
    r.safetyTip = [`Steam or roast ${ing} until there is no hard center, and mash any stringy pieces before serving.`,`Do not serve firm raw vegetable coins or chunks; they should squash easily between two fingers.`,`Check for skins, fibers, and dry edges that could make ${title} harder to swallow.`][mod%3];
  } else {
    r.textureGuide = `${title} should match your baby’s current chewing skills: soft, moist, and easy to mash with gentle finger pressure.`;
    r.servingTip = [`Offer ${title} in a relaxed meal and stop when your baby turns away or loses interest.`,`Begin with a small amount of ${title} and adjust the size or thickness based on how your baby manages it.`,`Serve ${title} in a shape your baby can control, whether by spoon, preloaded spoon, or soft finger-food piece.`][mod%3];
    r.storageTip = [`Save only the untouched portion of ${title}, then recheck smell, texture, and temperature before the next serving.`,`Keep leftovers of ${title} covered and cold, and do not reuse food that has been mouthed or handled during feeding.`,`If reheating ${title}, make sure the texture remains soft rather than dry, sticky, or rubbery.`][mod%3];
    r.safetyTip = [`Skip hard, round, sticky, or chewy pieces and stay seated with your baby during the whole meal.`,`Size, softness, and supervision matter most; adjust ${title} before serving if any piece feels firm or slippery.`,`Gagging can happen while babies learn textures, but silent choking, color change, or breathing trouble needs urgent help.`][mod%3];
  }

  // Refresh a generic how-to step if it contains old repeated language.
  r.howToMake = (r.howToMake || []).map((step, idx) => {
    if (/Blend, mash, or finely chop|Cool before serving|Mash or shred finely|Offer a few bites at a time|For iron-rich foods/i.test(step)) {
      if (idx === 0) return `Prepare ${ing} until it is soft enough for your baby's stage, then adjust the moisture so ${title} is easy to move around the mouth.`;
      if (idx === 1) return `Check the texture with your fingers or a spoon; it should break down quickly without firm, dry, or slippery pieces.`;
      return `Serve a small portion of ${title} first and watch your baby's pace before offering another bite.`;
    }
    return step;
  });
}
recipes.forEach(rewrite);
const arr = JSON.stringify(recipes, null, 2);
const out = src.slice(0, match.index) + `export const babyFoodRecipes: EnglishBabyFoodRecipe[] = ${arr};\n\nexport function` + src.slice(match.index + match[0].length);
fs.writeFileSync(file, out);
