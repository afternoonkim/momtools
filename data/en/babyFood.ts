export type EnglishBabyFoodStage = 'early' | 'middle' | 'late';

export interface EnglishBabyFoodRecipe {
  slug: string;
  title: string;
  stage: EnglishBabyFoodStage;
  category: string;
  ingredients: string[];
  summary: string;
  howToMake: string[];
  textureGuide: string;
  servingTip: string;
  storageTip: string;
  safetyTip: string;
  ageFit: string;
  searchTerms: string[];
}

export const stageLabels: Record<EnglishBabyFoodStage, string> = {
  early: 'First foods',
  middle: 'Stage 2 foods',
  late: 'Stage 3 foods',
};

export const stageGuides: Record<
  EnglishBabyFoodStage,
  { intro: string; texture: string; focus: string; caution: string; age: string }
> = {
  early: {
    age: 'Around 6 months, once your baby shows readiness signs',
    intro: 'This first-food stage is built around how many US parents actually start solids: iron-fortified infant cereal, smooth vegetable and fruit purees, yogurt, egg, beans, avocado, and other baby-safe foods served by spoon. The focus is not on volume. It is on readiness, safe texture, and repeated exposure.',
    texture: 'Very smooth puree, thin mash, or a loose spoonable texture with no firm lumps. If your baby is starting with baby-led weaning, foods still need to be soft enough to mash easily between your fingers.',
    focus: 'Prioritize iron-rich foods, continue breast milk or formula, and introduce a variety of common foods in baby-safe textures. Peanut and egg can be offered in age-appropriate forms rather than delayed, unless your pediatrician gives different advice.',
    caution: 'Do not give honey before age 1. Avoid whole nuts, spoonfuls of nut butter, raw apple, popcorn, whole grapes, hot dog rounds, and any other choking hazards. Sit with your baby during every meal.'
  },
  middle: {
    age: 'Usually about 7 to 9 months, depending on feeding progress',
    intro: 'Stage 2 is where many babies move from single ingredients into thicker textures, combination meals, and early finger foods. In US kitchens that usually means yogurt bowls, oatmeal combos, beans, eggs, chicken, turkey, pasta, and vegetables served thicker and less uniform than early purees.',
    texture: 'Thicker mashes, soft lumpy purees, very soft diced foods, and finger foods that squash easily between two fingers. Preloaded spoons and graspable soft foods both work well here.',
    focus: 'Keep iron-rich foods in rotation, expand flavor variety, and build texture skills without rushing. This is also a practical time to keep allergen foods in the regular meal pattern after they have been introduced safely.',
    caution: 'Move up in texture only when your baby is handling the current one well. Watch for choking risks from hard raw produce, globs of sticky nut butter, large meat pieces, and foods that stay dry or crumbly in the mouth.'
  },
  late: {
    age: 'Usually about 9 to 12 months, once self-feeding is going better',
    intro: 'This stage is closer to real family meals. Many US parents start serving softened versions of breakfast foods, pasta, tacos, bowls, meatballs, quesadillas, soups, and snack plates. The goal is helping your baby join normal family eating while keeping texture and size safe.',
    texture: 'Soft finger foods, moist small pieces, shredded proteins, tender pasta, mashable fruit, and family meals cut into baby-safe bites. Foods should still be soft enough to mash with gentle pressure.',
    focus: 'Build self-feeding confidence, offer meals from the family table whenever possible, and keep meals balanced with protein, grain, produce, and healthy fat. Water in a cup can be offered with meals while breast milk or formula remains important.',
    caution: 'Avoid hard, round, sticky, or chewy choking hazards such as whole grapes, nuts, popcorn, spoonfuls of nut butter, crunchy chips, raw carrot coins, and tough bread crusts.'
  }
};

export const babyFoodRecipes: EnglishBabyFoodRecipe[] = [
  {
    "slug": "infant-oatmeal-with-breast-milk",
    "title": "Infant Oatmeal with Breast Milk or Formula",
    "stage": "early",
    "category": "Iron-rich starters",
    "ingredients": [
      "infant oatmeal cereal",
      "breast milk or formula"
    ],
    "summary": "A classic US first food that adds iron while keeping texture very smooth.",
    "howToMake": [
      "Stir the infant oatmeal cereal, breast milk or formula together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Infant Oatmeal with Breast Milk or Formula works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Infant Oatmeal with Breast Milk or Formula while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "When saving Infant Oatmeal with Breast Milk or Formula, add moisture during reheating and stop using it if the texture turns gummy.",
    "safetyTip": "Avoid dense clumps of infant oatmeal cereal; spread or break the food apart so each bite is easy to swallow.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "infant oatmeal with breast milk or formula",
      "iron-rich starters",
      "early",
      "infant oatmeal cereal",
      "breast milk or formula"
    ]
  },
  {
    "slug": "avocado-mash",
    "title": "Avocado Mash",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "ripe avocado"
    ],
    "summary": "Creamy avocado is easy to mash and works well as a first spoon-fed food.",
    "howToMake": [
      "Peel the ripe avocado and mash it with a fork until no firm pieces remain.",
      "For Avocado Mash, add liquid slowly until the mash slides from the spoon without forming a sticky clump.",
      "Offer one small spoonful of Avocado Mash, then pause to watch swallowing, interest, and comfort."
    ],
    "textureGuide": "Avocado Mash should feel soft and moist on the tongue; prepare ripe avocado so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve ripe avocado in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved ripe avocado covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "avocado mash",
      "soft fruit and veggie starters",
      "early",
      "ripe avocado"
    ]
  },
  {
    "slug": "banana-oat-mash",
    "title": "Banana Oat Mash",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "ripe banana",
      "infant oatmeal cereal"
    ],
    "summary": "Banana mixed with infant oatmeal makes a thicker first meal with familiar flavor.",
    "howToMake": [
      "Stir the ripe banana, infant oatmeal cereal together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Banana Oat Mash should feel soft and moist on the tongue; prepare ripe banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair ripe banana with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Banana Oat Mash until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "banana oat mash",
      "soft fruit and veggie starters",
      "early",
      "ripe banana",
      "infant oatmeal cereal"
    ]
  },
  {
    "slug": "sweet-potato-puree",
    "title": "Sweet Potato Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "sweet potato"
    ],
    "summary": "Sweet potato is naturally soft and easy to puree for early solids.",
    "howToMake": [
      "Steam or bake the sweet potato until it is soft enough to squash easily between your fingers.",
      "Shred, mash, or blend the protein with enough moisture to keep every bite tender.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Sweet Potato Puree should feel soft and moist on the tongue; prepare sweet potato so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of sweet potato alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Sweet Potato Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of sweet potato; every bite should flatten easily between your fingers.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "sweet potato puree",
      "soft fruit and veggie starters",
      "early",
      "sweet potato"
    ]
  },
  {
    "slug": "pear-puree",
    "title": "Pear Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "ripe pear"
    ],
    "summary": "A gentle fruit puree that many families use after a few simple starter foods.",
    "howToMake": [
      "Steam or bake the ripe pear until it is soft enough to squash easily between your fingers.",
      "For Pear Puree, break the protein into very small pieces and add moisture so it does not feel dry in the mouth.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Pear Puree should feel soft and moist on the tongue; prepare ripe pear so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve ripe pear in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved ripe pear covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "pear puree",
      "soft fruit and veggie starters",
      "early",
      "ripe pear"
    ]
  },
  {
    "slug": "apple-puree",
    "title": "Apple Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "apple"
    ],
    "summary": "Cooked apple puree offers a smooth spoon texture and mild flavor.",
    "howToMake": [
      "Steam or bake the apple until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Apple Puree should feel soft and moist on the tongue; prepare apple so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair apple with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Apple Puree until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "apple puree",
      "soft fruit and veggie starters",
      "early",
      "apple"
    ]
  },
  {
    "slug": "butternut-squash-puree",
    "title": "Butternut Squash Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "butternut squash"
    ],
    "summary": "A smooth orange puree with a naturally sweet taste.",
    "howToMake": [
      "Steam or bake the butternut squash until it is soft enough to squash easily between your fingers.",
      "With Butternut Squash Puree, mix the protein into puree, broth, or yogurt until each bite stays soft and cohesive.",
      "Serve in small amounts with a familiar food if that helps your baby manage the texture."
    ],
    "textureGuide": "Butternut Squash Puree should feel soft and moist on the tongue; prepare butternut squash so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of butternut squash alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Butternut Squash Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of butternut squash; every bite should flatten easily between your fingers.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "butternut squash puree",
      "soft fruit and veggie starters",
      "early",
      "butternut squash"
    ]
  },
  {
    "slug": "pumpkin-puree",
    "title": "Pumpkin Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "pumpkin"
    ],
    "summary": "Pumpkin puree can be served smooth and thin for early practice.",
    "howToMake": [
      "Steam or bake the pumpkin until it is soft enough to squash easily between your fingers.",
      "Serve Pumpkin Puree with enough moisture to prevent crumbly bits, especially for babies still learning to chew.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Pumpkin Puree should feel soft and moist on the tongue; prepare pumpkin so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of pumpkin alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Pumpkin Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of pumpkin; every bite should flatten easily between your fingers.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "pumpkin puree",
      "soft fruit and veggie starters",
      "early",
      "pumpkin"
    ]
  },
  {
    "slug": "carrot-puree",
    "title": "Carrot Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "carrots"
    ],
    "summary": "Cooked carrots blend into a smooth puree with a mild sweetness.",
    "howToMake": [
      "Steam or bake the carrots until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Carrot Puree should feel soft and moist on the tongue; prepare carrots so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve carrots in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved carrots covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "carrot puree",
      "soft fruit and veggie starters",
      "early",
      "carrots"
    ]
  },
  {
    "slug": "peas-puree",
    "title": "Pea Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "green peas"
    ],
    "summary": "Pea puree adds vegetable variety once your baby handles smooth textures well.",
    "howToMake": [
      "Steam or bake the green peas until it is soft enough to squash easily between your fingers.",
      "Shred, mash, or blend the protein with enough moisture to keep every bite tender.",
      "Serve in small amounts with a familiar food if that helps your baby manage the texture."
    ],
    "textureGuide": "Pea Puree should feel soft and moist on the tongue; prepare green peas so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair green peas with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Pea Puree until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "pea puree",
      "soft fruit and veggie starters",
      "early",
      "green peas"
    ]
  },
  {
    "slug": "green-bean-puree",
    "title": "Green Bean Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "green beans"
    ],
    "summary": "Green beans can be blended smooth for an easy vegetable starter.",
    "howToMake": [
      "Cook the green beans completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "Green Bean Puree should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of green beans alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Green Bean Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of green beans; every bite should flatten easily between your fingers.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "green bean puree",
      "soft fruit and veggie starters",
      "early",
      "green beans"
    ]
  },
  {
    "slug": "zucchini-puree",
    "title": "Zucchini Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "zucchini"
    ],
    "summary": "Zucchini cooks quickly and blends into a mild early puree.",
    "howToMake": [
      "Steam or bake the zucchini until it is soft enough to squash easily between your fingers.",
      "For Zucchini Puree, check the protein texture with your fingers and soften it more if it feels firm or grainy.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Zucchini Puree should feel soft and moist on the tongue; prepare zucchini so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve zucchini in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved zucchini covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "zucchini puree",
      "soft fruit and veggie starters",
      "early",
      "zucchini"
    ]
  },
  {
    "slug": "prune-puree",
    "title": "Prune Puree",
    "stage": "early",
    "category": "Fruit options",
    "ingredients": [
      "pitted prunes"
    ],
    "summary": "Prune puree is often used in tiny amounts when parents want a fruit option with fiber.",
    "howToMake": [
      "Prepare the pitted prunes until every ingredient is soft, mild, and easy for your baby to manage.",
      "Prepare Prune Puree for your baby's current skill level: smooth, mashed, shredded, or soft pieces as needed.",
      "For Prune Puree, begin with a small serving and thin the food if it clings to the spoon or feels heavy."
    ],
    "textureGuide": "Prune Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Prune Puree, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "If saving pitted prunes, cover it tightly and expect the texture to soften further by the next meal.",
    "safetyTip": "For berries or grapes, flatten or quarter appropriately and never serve firm round pieces whole.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "prune puree",
      "fruit options",
      "early",
      "pitted prunes"
    ]
  },
  {
    "slug": "peach-puree",
    "title": "Peach Puree",
    "stage": "early",
    "category": "Fruit options",
    "ingredients": [
      "ripe peach"
    ],
    "summary": "Cooked peach puree brings a soft texture and bright fruit flavor.",
    "howToMake": [
      "Steam or bake the ripe peach until it is soft enough to squash easily between your fingers.",
      "Mash the ripe fruit with a fork, leaving only tiny soft bits if your baby is ready for texture.",
      "Start with a small portion and stop if the texture or tart flavor seems uncomfortable."
    ],
    "textureGuide": "Peach Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of ripe peach first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Fruit like ripe peach can brown or release juice, so store a small covered portion and check smell and texture before reusing.",
    "safetyTip": "Remove peels, pits, seeds, and firm edges from ripe peach; slippery pieces should be sized so they are easy to control.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "peach puree",
      "fruit options",
      "early",
      "ripe peach"
    ]
  },
  {
    "slug": "mango-puree",
    "title": "Mango Puree",
    "stage": "early",
    "category": "Fruit options",
    "ingredients": [
      "ripe mango"
    ],
    "summary": "Very ripe mango can be blended smooth for a simple fruit puree.",
    "howToMake": [
      "Prepare the ripe mango until every ingredient is soft, mild, and easy for your baby to manage.",
      "For Mango Puree, use the recipe as a guide but adjust thickness and piece size to how your baby eats this week.",
      "Serve Mango Puree in a modest portion first, then add moisture if the texture feels dense, sticky, or tiring."
    ],
    "textureGuide": "Mango Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of ripe mango first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Fruit like ripe mango can brown or release juice, so store a small covered portion and check smell and texture before reusing.",
    "safetyTip": "Remove peels, pits, seeds, and firm edges from ripe mango; slippery pieces should be sized so they are easy to control.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "mango puree",
      "fruit options",
      "early",
      "ripe mango"
    ]
  },
  {
    "slug": "blueberry-oat-puree",
    "title": "Blueberry Oat Puree",
    "stage": "early",
    "category": "Fruit options",
    "ingredients": [
      "blueberries",
      "infant oatmeal cereal"
    ],
    "summary": "Blueberries mixed with oatmeal make a thicker spoon-fed breakfast.",
    "howToMake": [
      "Stir the blueberries, infant oatmeal cereal together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Blueberry Oat Puree works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Blueberry Oat Puree small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Blueberry Oat Puree in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "blueberry oat puree",
      "fruit options",
      "early",
      "blueberries",
      "infant oatmeal cereal"
    ]
  },
  {
    "slug": "plain-whole-milk-yogurt",
    "title": "Plain Whole Milk Yogurt",
    "stage": "early",
    "category": "Early allergen-friendly foods",
    "ingredients": [
      "plain whole milk yogurt"
    ],
    "summary": "Unsweetened whole milk yogurt is a common US baby food for early variety.",
    "howToMake": [
      "Prepare the plain whole milk yogurt until every ingredient is soft, mild, and easy for your baby to manage.",
      "Before serving Plain Whole Milk Yogurt, test whether the food mashes easily between your fingers and resize it if needed.",
      "With Plain Whole Milk Yogurt, stay close during the first bites and soften the texture further if chewing looks difficult."
    ],
    "textureGuide": "Plain Whole Milk Yogurt should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair plain whole milk yogurt with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Plain Whole Milk Yogurt until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "plain whole milk yogurt",
      "early allergen-friendly foods",
      "early",
      "plain whole milk yogurt"
    ]
  },
  {
    "slug": "scrambled-egg-mash",
    "title": "Soft Scrambled Egg Mash",
    "stage": "early",
    "category": "Early allergen-friendly foods",
    "ingredients": [
      "egg"
    ],
    "summary": "Soft cooked egg gives protein and fits current early-allergen guidance for many babies.",
    "howToMake": [
      "Cook the egg completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "Soft Scrambled Egg Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of egg alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Soft Scrambled Egg Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of egg; every bite should flatten easily between your fingers.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "soft scrambled egg mash",
      "early allergen-friendly foods",
      "early",
      "egg"
    ]
  },
  {
    "slug": "thinned-peanut-butter-oatmeal",
    "title": "Thinned Peanut Butter Oatmeal",
    "stage": "early",
    "category": "Early allergen-friendly foods",
    "ingredients": [
      "smooth peanut butter",
      "infant oatmeal cereal"
    ],
    "summary": "A small amount of smooth peanut butter thinned into oatmeal is an age-appropriate way many families introduce peanut.",
    "howToMake": [
      "Stir the smooth peanut butter, infant oatmeal cereal together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Thinned Peanut Butter Oatmeal works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Thinned Peanut Butter Oatmeal small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Thinned Peanut Butter Oatmeal in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "thinned peanut butter oatmeal",
      "early allergen-friendly foods",
      "early",
      "smooth peanut butter",
      "infant oatmeal cereal"
    ]
  },
  {
    "slug": "thinned-almond-butter-oatmeal",
    "title": "Thinned Almond Butter Oatmeal",
    "stage": "early",
    "category": "Early allergen-friendly foods",
    "ingredients": [
      "smooth almond butter",
      "infant oatmeal cereal"
    ],
    "summary": "This offers a nut exposure option when your pediatrician says it is appropriate.",
    "howToMake": [
      "Stir the smooth almond butter, infant oatmeal cereal together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Thinned Almond Butter Oatmeal works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Thinned Almond Butter Oatmeal with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "For leftovers, loosen Thinned Almond Butter Oatmeal with water, breast milk, formula, or sauce and test that it is soft all the way through.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "thinned almond butter oatmeal",
      "early allergen-friendly foods",
      "early",
      "smooth almond butter",
      "infant oatmeal cereal"
    ]
  },
  {
    "slug": "ricotta-and-pear-mash",
    "title": "Ricotta and Pear Mash",
    "stage": "early",
    "category": "Early allergen-friendly foods",
    "ingredients": [
      "whole milk ricotta",
      "pear puree"
    ],
    "summary": "Ricotta and pear make a soft spoon-fed combo with dairy exposure.",
    "howToMake": [
      "Steam or bake the whole milk ricotta, pear puree until it is soft enough to squash easily between your fingers.",
      "Blend briefly or mash by hand so the fruit stays moist rather than watery or stringy.",
      "Start with a small portion and stop if the texture or tart flavor seems uncomfortable."
    ],
    "textureGuide": "Ricotta and Pear Mash should feel soft and moist on the tongue; prepare whole milk ricotta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of whole milk ricotta alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Ricotta and Pear Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of whole milk ricotta; every bite should flatten easily between your fingers.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "ricotta and pear mash",
      "early allergen-friendly foods",
      "early",
      "whole milk ricotta",
      "pear puree"
    ]
  },
  {
    "slug": "cottage-cheese-peach-mash",
    "title": "Cottage Cheese Peach Mash",
    "stage": "early",
    "category": "Early allergen-friendly foods",
    "ingredients": [
      "small curd cottage cheese",
      "peach puree"
    ],
    "summary": "Smooth blended cottage cheese with peach works well for babies already trying dairy.",
    "howToMake": [
      "Steam or bake the small curd cottage cheese, peach puree until it is soft enough to squash easily between your fingers.",
      "For Cottage Cheese Peach Mash, break the protein into very small pieces and add moisture so it does not feel dry in the mouth.",
      "Serve in small amounts with a familiar food if that helps your baby manage the texture."
    ],
    "textureGuide": "Cottage Cheese Peach Mash should feel soft and moist on the tongue; prepare small curd cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small curd cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Cottage Cheese Peach Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of small curd cottage cheese; every bite should flatten easily between your fingers.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "cottage cheese peach mash",
      "early allergen-friendly foods",
      "early",
      "small curd cottage cheese",
      "peach puree"
    ]
  },
  {
    "slug": "mashed-black-beans",
    "title": "Mashed Black Beans",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "black beans"
    ],
    "summary": "Mashed beans are an easy iron-rich option for early solids.",
    "howToMake": [
      "Cook the black beans completely and keep the texture moist so it is not dry or crumbly.",
      "For tofu, crumble soft tofu into very small pieces or mash it into vegetables so the texture stays smooth and easy to move around the mouth.",
      "Begin with a few soft tofu crumbles or a small spoonful of tofu mash, then increase only if the texture is managed well."
    ],
    "textureGuide": "Mashed Black Beans should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve black beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved black beans covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "mashed black beans",
      "iron-rich proteins",
      "early",
      "black beans"
    ]
  },
  {
    "slug": "mashed-lentils",
    "title": "Mashed Lentils",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "red lentils"
    ],
    "summary": "Soft cooked lentils mash easily and add iron and protein.",
    "howToMake": [
      "Cook the red lentils completely and keep the texture moist so it is not dry or crumbly.",
      "For tofu, crumble soft tofu into very small pieces or mash it into vegetables so the texture stays smooth and easy to move around the mouth.",
      "For Mashed Lentils, offer a pea-size taste first and make sure the chicken stays moist before adding more."
    ],
    "textureGuide": "Mashed Lentils should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Pair red lentils with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Mashed Lentils until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Mashed Lentils, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "mashed lentils",
      "iron-rich proteins",
      "early",
      "red lentils"
    ]
  },
  {
    "slug": "chicken-puree",
    "title": "Chicken Puree",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "chicken thigh",
      "water or broth"
    ],
    "summary": "Pureed chicken is a practical meat option once you want to add iron-rich foods.",
    "howToMake": [
      "Cook the chicken thigh, water or broth completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "With Chicken Puree, pause after the first few shreds so you can see whether your baby moves the meat comfortably."
    ],
    "textureGuide": "Chicken Puree should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken thigh alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Chicken Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken thigh; every bite should flatten easily between your fingers.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "chicken puree",
      "iron-rich proteins",
      "early",
      "chicken thigh",
      "water or broth"
    ]
  },
  {
    "slug": "turkey-puree",
    "title": "Turkey Puree",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "ground turkey",
      "water or broth"
    ],
    "summary": "Turkey can be blended smooth into an iron-rich puree.",
    "howToMake": [
      "Cook the ground turkey, water or broth completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "Serve Turkey Puree in tiny soft pieces and add cooking liquid if the chicken starts to feel dry."
    ],
    "textureGuide": "Turkey Puree should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Serve ground turkey in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved ground turkey covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "turkey puree",
      "iron-rich proteins",
      "early",
      "ground turkey",
      "water or broth"
    ]
  },
  {
    "slug": "beef-puree",
    "title": "Beef Puree",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "ground beef",
      "water or broth"
    ],
    "summary": "Beef puree offers iron and zinc in a texture that works for early spoon feeding.",
    "howToMake": [
      "Cook the ground beef, water or broth completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "For Beef Puree, use tender inner meat, shred across the grain, and keep the first portion small."
    ],
    "textureGuide": "Beef Puree should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Pair ground beef with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Beef Puree until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "When serving Beef Puree, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "beef puree",
      "iron-rich proteins",
      "early",
      "ground beef",
      "water or broth"
    ]
  },
  {
    "slug": "salmon-puree",
    "title": "Salmon Puree",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "salmon",
      "water"
    ],
    "summary": "Soft cooked salmon can be blended into a smooth puree for variety.",
    "howToMake": [
      "Cook the salmon, water completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "For Salmon Puree, offer a pea-size taste first and make sure the chicken stays moist before adding more."
    ],
    "textureGuide": "Salmon Puree should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Start with a small spoonful of salmon alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Salmon Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of salmon; every bite should flatten easily between your fingers.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "salmon puree",
      "iron-rich proteins",
      "early",
      "salmon",
      "water"
    ]
  },
  {
    "slug": "tofu-avocado-blend",
    "title": "Tofu Avocado Blend",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "silken tofu",
      "avocado"
    ],
    "summary": "Silken tofu and avocado make a smooth plant-forward puree.",
    "howToMake": [
      "Peel the silken tofu, avocado and mash it with a fork until no firm pieces remain.",
      "With Tofu Avocado Blend, keep the texture thinner for new eaters and leave more body only when your baby handles lumps well.",
      "Serve Tofu Avocado Blend slowly; turning away, coughing, or losing energy means it is time to stop or thin the texture."
    ],
    "textureGuide": "Tofu Avocado Blend should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Start with a small spoonful of silken tofu alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Tofu Avocado Blend quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of silken tofu; every bite should flatten easily between your fingers.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "tofu avocado blend",
      "iron-rich proteins",
      "early",
      "silken tofu",
      "avocado"
    ]
  },
  {
    "slug": "plain-greek-yogurt-with-banana",
    "title": "Plain Greek Yogurt with Banana",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "plain whole milk Greek yogurt",
      "banana"
    ],
    "summary": "Greek yogurt with banana gives a creamy texture and more protein.",
    "howToMake": [
      "Peel the plain whole milk Greek yogurt, banana and mash it with a fork until no firm pieces remain.",
      "Adjust Plain Greek Yogurt with Banana with breast milk, formula, water, or yogurt based on whether the food feels dry, dense, or chalky.",
      "Keep the first serving of Plain Greek Yogurt with Banana brief so your baby can practice without getting tired."
    ],
    "textureGuide": "Plain Greek Yogurt with Banana should feel soft and moist on the tongue; prepare plain whole milk Greek yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve plain whole milk Greek yogurt in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved plain whole milk Greek yogurt covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Tofu is soft but can break into uneven chunks, so keep pieces small and avoid firm cubes that could slip back whole.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "plain greek yogurt with banana",
      "breakfast ideas",
      "early",
      "plain whole milk greek yogurt",
      "banana"
    ]
  },
  {
    "slug": "oatmeal-with-apple",
    "title": "Oatmeal with Apple",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "infant oatmeal cereal",
      "apple puree"
    ],
    "summary": "Apple oatmeal is a simple starter breakfast.",
    "howToMake": [
      "Stir the infant oatmeal cereal, apple puree together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Oatmeal with Apple works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Oatmeal with Apple with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "For leftovers, loosen Oatmeal with Apple with water, breast milk, formula, or sauce and test that it is soft all the way through.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "oatmeal with apple",
      "breakfast ideas",
      "early",
      "infant oatmeal cereal",
      "apple puree"
    ]
  },
  {
    "slug": "oatmeal-with-prunes",
    "title": "Oatmeal with Prunes",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "infant oatmeal cereal",
      "prune puree"
    ],
    "summary": "A small prune mix can add variety to oatmeal.",
    "howToMake": [
      "Stir the infant oatmeal cereal, prune puree together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Oatmeal with Prunes works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Oatmeal with Prunes while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "When saving Oatmeal with Prunes, add moisture during reheating and stop using it if the texture turns gummy.",
    "safetyTip": "Avoid dense clumps of infant oatmeal cereal; spread or break the food apart so each bite is easy to swallow.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "oatmeal with prunes",
      "breakfast ideas",
      "early",
      "infant oatmeal cereal",
      "prune puree"
    ]
  },
  {
    "slug": "oatmeal-with-pumpkin",
    "title": "Oatmeal with Pumpkin",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "infant oatmeal cereal",
      "pumpkin puree"
    ],
    "summary": "Pumpkin oatmeal is an easy seasonal baby food idea.",
    "howToMake": [
      "Stir the infant oatmeal cereal, pumpkin puree together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Oatmeal with Pumpkin works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Oatmeal with Pumpkin small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Oatmeal with Pumpkin in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "oatmeal with pumpkin",
      "breakfast ideas",
      "early",
      "infant oatmeal cereal",
      "pumpkin puree"
    ]
  },
  {
    "slug": "oatmeal-with-peach",
    "title": "Oatmeal with Peach",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "infant oatmeal cereal",
      "peach puree"
    ],
    "summary": "Peach oatmeal is a soft breakfast option with mild sweetness.",
    "howToMake": [
      "Stir the infant oatmeal cereal, peach puree together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Oatmeal with Peach works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Oatmeal with Peach with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "For leftovers, loosen Oatmeal with Peach with water, breast milk, formula, or sauce and test that it is soft all the way through.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "oatmeal with peach",
      "breakfast ideas",
      "early",
      "infant oatmeal cereal",
      "peach puree"
    ]
  },
  {
    "slug": "cream-of-wheat-for-babies",
    "title": "Cream of Wheat for Babies",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "plain Cream of Wheat cereal",
      "breast milk or formula"
    ],
    "summary": "Smooth wheat cereal is used by some US families once wheat introduction fits their plan.",
    "howToMake": [
      "Prepare the plain Cream of Wheat cereal, breast milk or formula until every ingredient is soft, mild, and easy for your baby to manage.",
      "Move Cream of Wheat for Babies from puree to soft pieces gradually instead of changing thickness and size at the same time.",
      "Keep Cream of Wheat for Babies flexible at serving time because some foods thicken, dry out, or get sticky as they cool."
    ],
    "textureGuide": "Cream of Wheat for Babies works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Cream of Wheat for Babies while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "When saving Cream of Wheat for Babies, add moisture during reheating and stop using it if the texture turns gummy.",
    "safetyTip": "Avoid dense clumps of plain Cream of Wheat cereal; spread or break the food apart so each bite is easy to swallow.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "cream of wheat for babies",
      "breakfast ideas",
      "early",
      "plain cream of wheat cereal",
      "breast milk or formula"
    ]
  },
  {
    "slug": "quinoa-cereal-mash",
    "title": "Quinoa Cereal Mash",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "plain cooked quinoa",
      "water"
    ],
    "summary": "Very soft quinoa blended smooth adds grain variety.",
    "howToMake": [
      "Stir the plain cooked quinoa, water together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Quinoa Cereal Mash works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Quinoa Cereal Mash while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "When saving Quinoa Cereal Mash, add moisture during reheating and stop using it if the texture turns gummy.",
    "safetyTip": "Avoid dense clumps of plain cooked quinoa; spread or break the food apart so each bite is easy to swallow.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "quinoa cereal mash",
      "breakfast ideas",
      "early",
      "plain cooked quinoa",
      "water"
    ]
  },
  {
    "slug": "barley-cereal-mash",
    "title": "Barley Cereal Mash",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "baby barley cereal",
      "breast milk or formula"
    ],
    "summary": "Barley cereal can be served thin and smooth like oatmeal.",
    "howToMake": [
      "Stir the baby barley cereal, breast milk or formula together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Barley Cereal Mash works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Barley Cereal Mash small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Barley Cereal Mash in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "barley cereal mash",
      "breakfast ideas",
      "early",
      "baby barley cereal",
      "breast milk or formula"
    ]
  },
  {
    "slug": "mashed-sardine-with-sweet-potato",
    "title": "Mashed Sardine with Sweet Potato",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "boneless sardines",
      "sweet potato"
    ],
    "summary": "For families comfortable with fish, sardines with sweet potato add fats and iron.",
    "howToMake": [
      "Steam or bake the boneless sardines, sweet potato until it is soft enough to squash easily between your fingers.",
      "Steam the vegetables until very tender, then mash with a little cooking liquid if the mixture feels thick.",
      "Cool completely enough for feeding and watch how your baby handles the fiber and mouthfeel."
    ],
    "textureGuide": "Mashed Sardine with Sweet Potato should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "Pair boneless sardines with a familiar food if the vegetable flavor is strong, but keep the texture soft and simple.",
    "storageTip": "Store Mashed Sardine with Sweet Potato in a clean covered container and discard leftovers that were handled during feeding.",
    "safetyTip": "Check for skins, fibers, and dry edges that could make Mashed Sardine with Sweet Potato harder to swallow.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "mashed sardine with sweet potato",
      "iron-rich proteins",
      "early",
      "boneless sardines",
      "sweet potato"
    ]
  },
  {
    "slug": "egg-yolk-and-avocado-mash",
    "title": "Egg Yolk and Avocado Mash",
    "stage": "early",
    "category": "Early allergen-friendly foods",
    "ingredients": [
      "hard cooked egg yolk",
      "avocado"
    ],
    "summary": "Egg yolk mashed into avocado creates a rich spoon-fed blend.",
    "howToMake": [
      "Peel the hard cooked egg yolk, avocado and mash it with a fork until no firm pieces remain.",
      "For Egg Yolk and Avocado Mash, thickness should match your baby's current stage rather than the recipe label.",
      "With Egg Yolk and Avocado Mash, wait between bites and adjust the next spoonful if the texture seems hard to manage."
    ],
    "textureGuide": "Egg Yolk and Avocado Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of hard cooked egg yolk alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Egg Yolk and Avocado Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of hard cooked egg yolk; every bite should flatten easily between your fingers.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "egg yolk and avocado mash",
      "early allergen-friendly foods",
      "early",
      "hard cooked egg yolk",
      "avocado"
    ]
  },
  {
    "slug": "white-bean-puree",
    "title": "White Bean Puree",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "cannellini beans"
    ],
    "summary": "White beans blend into a smooth and mild puree.",
    "howToMake": [
      "Cook the cannellini beans completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "White Bean Puree should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve cannellini beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved cannellini beans covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "white bean puree",
      "iron-rich proteins",
      "early",
      "cannellini beans"
    ]
  },
  {
    "slug": "broccoli-potato-puree",
    "title": "Broccoli Potato Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "broccoli",
      "potato"
    ],
    "summary": "Broccoli and potato make a thicker vegetable puree.",
    "howToMake": [
      "Steam or bake the broccoli, potato until it is soft enough to squash easily between your fingers.",
      "With Broccoli Potato Puree, mix the protein into puree, broth, or yogurt until each bite stays soft and cohesive.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Broccoli Potato Puree should feel soft and moist on the tongue; prepare broccoli so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair broccoli with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Broccoli Potato Puree until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "broccoli potato puree",
      "soft fruit and veggie starters",
      "early",
      "broccoli",
      "potato"
    ]
  },
  {
    "slug": "cauliflower-puree",
    "title": "Cauliflower Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "cauliflower"
    ],
    "summary": "Soft cauliflower can be blended smooth for another vegetable option.",
    "howToMake": [
      "Prepare the cauliflower until every ingredient is soft, mild, and easy for your baby to manage.",
      "Prepare Cauliflower Puree for your baby's current skill level: smooth, mashed, shredded, or soft pieces as needed.",
      "For Cauliflower Puree, begin with a small serving and thin the food if it clings to the spoon or feels heavy."
    ],
    "textureGuide": "Cauliflower Puree should feel soft and moist on the tongue; prepare cauliflower so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of cauliflower alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Cauliflower Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of cauliflower; every bite should flatten easily between your fingers.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "cauliflower puree",
      "soft fruit and veggie starters",
      "early",
      "cauliflower"
    ]
  },
  {
    "slug": "spinach-potato-puree",
    "title": "Spinach Potato Puree",
    "stage": "early",
    "category": "Soft fruit and veggie starters",
    "ingredients": [
      "spinach",
      "potato"
    ],
    "summary": "A spinach and potato blend adds more savory vegetable flavor.",
    "howToMake": [
      "Steam or bake the spinach, potato until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Spinach Potato Puree should feel soft and moist on the tongue; prepare spinach so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of spinach alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Spinach Potato Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of spinach; every bite should flatten easily between your fingers.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "spinach potato puree",
      "soft fruit and veggie starters",
      "early",
      "spinach",
      "potato"
    ]
  },
  {
    "slug": "beet-apple-puree",
    "title": "Beet Apple Puree",
    "stage": "early",
    "category": "Fruit options",
    "ingredients": [
      "beets",
      "apple"
    ],
    "summary": "Beet and apple puree adds variety once basics are going well.",
    "howToMake": [
      "Steam or bake the beets, apple until it is soft enough to squash easily between your fingers.",
      "Blend briefly or mash by hand so the fruit stays moist rather than watery or stringy.",
      "Start with a small portion and stop if the texture or tart flavor seems uncomfortable."
    ],
    "textureGuide": "Beet Apple Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Serve beets at a soft ripe stage and watch how your baby handles the natural acidity and slippery texture.",
    "storageTip": "Keep leftover Beet Apple Puree cold and use the smoothest portion first, discarding anything that became watery or touched the spoon.",
    "safetyTip": "Avoid hard raw chunks of fruit and round pieces that can block the airway.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "beet apple puree",
      "fruit options",
      "early",
      "beets",
      "apple"
    ]
  },
  {
    "slug": "apricot-puree",
    "title": "Apricot Puree",
    "stage": "early",
    "category": "Fruit options",
    "ingredients": [
      "ripe apricot"
    ],
    "summary": "Cooked apricot puree offers another fruit flavor for rotation.",
    "howToMake": [
      "Prepare the ripe apricot until every ingredient is soft, mild, and easy for your baby to manage.",
      "For Apricot Puree, use the recipe as a guide but adjust thickness and piece size to how your baby eats this week.",
      "Serve Apricot Puree in a modest portion first, then add moisture if the texture feels dense, sticky, or tiring."
    ],
    "textureGuide": "Apricot Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Apricot Puree, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "If saving ripe apricot, cover it tightly and expect the texture to soften further by the next meal.",
    "safetyTip": "For berries or grapes, flatten or quarter appropriately and never serve firm round pieces whole.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "apricot puree",
      "fruit options",
      "early",
      "ripe apricot"
    ]
  },
  {
    "slug": "mashed-chickpeas",
    "title": "Mashed Chickpeas",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "chickpeas"
    ],
    "summary": "Mashed chickpeas work well when blended very smooth.",
    "howToMake": [
      "Steam or bake the chickpeas until it is soft enough to squash easily between your fingers.",
      "Steam the vegetables until very tender, then mash with a little cooking liquid if the mixture feels thick.",
      "Cool completely enough for feeding and watch how your baby handles the fiber and mouthfeel."
    ],
    "textureGuide": "Mashed Chickpeas should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "Serve chickpeas warm or room temperature and keep the first portion small while your baby gets used to the flavor.",
    "storageTip": "Cool cooked chickpeas before storing and reheat only the portion you plan to serve.",
    "safetyTip": "Steam or roast chickpeas until there is no hard center, and mash any stringy pieces before serving.",
    "ageFit": "Best around 6 months, after your baby can sit with support and shows clear readiness for solids.",
    "searchTerms": [
      "mashed chickpeas",
      "iron-rich proteins",
      "early",
      "chickpeas"
    ]
  },
  {
    "slug": "plain-yogurt-with-mango",
    "title": "Plain Yogurt with Mango",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "plain whole milk yogurt",
      "mango puree"
    ],
    "summary": "A creamy fruit-and-yogurt bowl for babies already trying dairy.",
    "howToMake": [
      "Prepare the plain whole milk yogurt, mango puree until every ingredient is soft, mild, and easy for your baby to manage.",
      "Before serving Plain Yogurt with Mango, test whether the food mashes easily between your fingers and resize it if needed.",
      "With Plain Yogurt with Mango, stay close during the first bites and soften the texture further if chewing looks difficult."
    ],
    "textureGuide": "Plain Yogurt with Mango should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve plain whole milk yogurt in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved plain whole milk yogurt covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Avoid dry, chewy, round, or firm protein pieces that do not break down quickly with gentle pressure.",
    "ageFit": "A good first-food option for many 6-month-old babies who are ready for spoon-fed textures.",
    "searchTerms": [
      "plain yogurt with mango",
      "breakfast ideas",
      "early",
      "plain whole milk yogurt",
      "mango puree"
    ]
  },
  {
    "slug": "oatmeal-with-blueberries-and-yogurt",
    "title": "Oatmeal with Blueberries and Yogurt",
    "stage": "early",
    "category": "Breakfast ideas",
    "ingredients": [
      "infant oatmeal cereal",
      "blueberry puree",
      "plain whole milk yogurt"
    ],
    "summary": "A thicker breakfast bowl with grain, fruit, and dairy.",
    "howToMake": [
      "Stir the infant oatmeal cereal, blueberry puree, plain whole milk yogurt together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Oatmeal with Blueberries and Yogurt should feel soft and moist on the tongue; prepare infant oatmeal cereal so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair infant oatmeal cereal with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Oatmeal with Blueberries and Yogurt until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Soy foods such as tofu can be allergens for some babies; serve a small soft portion and get medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Offer near the start of solids, usually around 6 months, while breast milk or formula remains the main nutrition source.",
    "searchTerms": [
      "oatmeal with blueberries and yogurt",
      "breakfast ideas",
      "early",
      "infant oatmeal cereal",
      "blueberry puree",
      "plain whole milk yogurt"
    ]
  },
  {
    "slug": "tofu-pear-puree",
    "title": "Tofu Pear Puree",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "silken tofu",
      "pear puree"
    ],
    "summary": "Silken tofu and pear make a smooth protein-forward puree.",
    "howToMake": [
      "Steam or bake the silken tofu, pear puree until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Tofu Pear Puree should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Start with a small spoonful of silken tofu alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Tofu Pear Puree quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of silken tofu; every bite should flatten easily between your fingers.",
    "ageFit": "Appropriate for the first weeks of solids when your baby is practicing small tastes and smooth textures.",
    "searchTerms": [
      "tofu pear puree",
      "iron-rich proteins",
      "early",
      "silken tofu",
      "pear puree"
    ]
  },
  {
    "slug": "mashed-pinto-beans",
    "title": "Mashed Pinto Beans",
    "stage": "early",
    "category": "Iron-rich proteins",
    "ingredients": [
      "pinto beans"
    ],
    "summary": "Pinto beans mash easily and fit many family meal patterns in the US.",
    "howToMake": [
      "Cook the pinto beans completely and keep the texture moist so it is not dry or crumbly.",
      "For tofu, crumble soft tofu into very small pieces or mash it into vegetables so the texture stays smooth and easy to move around the mouth.",
      "Begin with a few soft tofu crumbles or a small spoonful of tofu mash, then increase only if the texture is managed well."
    ],
    "textureGuide": "Mashed Pinto Beans should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of pinto beans alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Mashed Pinto Beans quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of pinto beans; every bite should flatten easily between your fingers.",
    "ageFit": "Use once readiness signs are present, such as steady head control, interest in food, and ability to sit with support.",
    "searchTerms": [
      "mashed pinto beans",
      "iron-rich proteins",
      "early",
      "pinto beans"
    ]
  },
  {
    "slug": "thick-oatmeal-with-banana",
    "title": "Thick Oatmeal with Banana",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "infant oatmeal cereal",
      "banana"
    ],
    "summary": "A thicker oatmeal bowl for babies moving beyond very thin purees.",
    "howToMake": [
      "Stir the infant oatmeal cereal, banana together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Thick Oatmeal with Banana works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Thick Oatmeal with Banana small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Thick Oatmeal with Banana in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "thick oatmeal with banana",
      "stage 2 breakfasts",
      "middle",
      "infant oatmeal cereal",
      "banana"
    ]
  },
  {
    "slug": "greek-yogurt-with-strawberry",
    "title": "Greek Yogurt with Strawberry",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "plain whole milk Greek yogurt",
      "strawberries"
    ],
    "summary": "A simple fruit-and-yogurt bowl with a thicker spoon texture.",
    "howToMake": [
      "Prepare the plain whole milk Greek yogurt, strawberries until every ingredient is soft, mild, and easy for your baby to manage.",
      "Move Greek Yogurt with Strawberry from puree to soft pieces gradually instead of changing thickness and size at the same time.",
      "Keep Greek Yogurt with Strawberry flexible at serving time because some foods thicken, dry out, or get sticky as they cool."
    ],
    "textureGuide": "Greek Yogurt with Strawberry should feel soft and moist on the tongue; prepare plain whole milk Greek yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair plain whole milk Greek yogurt with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Greek Yogurt with Strawberry until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "With Greek Yogurt with Strawberry, use a soft texture first and stop for medical advice if breathing changes, swelling, or repeated vomiting appears.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "greek yogurt with strawberry",
      "stage 2 breakfasts",
      "middle",
      "plain whole milk greek yogurt",
      "strawberries"
    ]
  },
  {
    "slug": "oatmeal-with-peanut-butter-and-banana",
    "title": "Oatmeal with Peanut Butter and Banana",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "infant oatmeal cereal",
      "smooth peanut butter",
      "banana"
    ],
    "summary": "This stage 2 breakfast combines iron-fortified cereal with peanut and banana.",
    "howToMake": [
      "Stir the infant oatmeal cereal, smooth peanut butter, banana together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Oatmeal with Peanut Butter and Banana works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Oatmeal with Peanut Butter and Banana while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "When saving Oatmeal with Peanut Butter and Banana, add moisture during reheating and stop using it if the texture turns gummy.",
    "safetyTip": "Avoid dense clumps of infant oatmeal cereal; spread or break the food apart so each bite is easy to swallow.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "oatmeal with peanut butter and banana",
      "stage 2 breakfasts",
      "middle",
      "infant oatmeal cereal",
      "smooth peanut butter",
      "banana"
    ]
  },
  {
    "slug": "egg-and-avocado-mash",
    "title": "Egg and Avocado Mash",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "soft scrambled egg",
      "avocado"
    ],
    "summary": "Soft egg and avocado make an easy protein-rich combo meal.",
    "howToMake": [
      "Peel the soft scrambled egg, avocado and mash it with a fork until no firm pieces remain.",
      "For Egg and Avocado Mash, add liquid slowly until the mash slides from the spoon without forming a sticky clump.",
      "Offer one small spoonful of Egg and Avocado Mash, then pause to watch swallowing, interest, and comfort."
    ],
    "textureGuide": "Egg and Avocado Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Serve soft scrambled egg in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved soft scrambled egg covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "egg and avocado mash",
      "stage 2 breakfasts",
      "middle",
      "soft scrambled egg",
      "avocado"
    ]
  },
  {
    "slug": "ricotta-blueberry-bowl",
    "title": "Ricotta Blueberry Bowl",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "whole milk ricotta",
      "blueberries"
    ],
    "summary": "Ricotta with mashed blueberries creates a thick breakfast bowl.",
    "howToMake": [
      "Prepare the whole milk ricotta, blueberries until every ingredient is soft, mild, and easy for your baby to manage.",
      "Prepare Ricotta Blueberry Bowl for your baby's current skill level: smooth, mashed, shredded, or soft pieces as needed.",
      "For Ricotta Blueberry Bowl, begin with a small serving and thin the food if it clings to the spoon or feels heavy."
    ],
    "textureGuide": "Ricotta Blueberry Bowl should feel soft and moist on the tongue; prepare whole milk ricotta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair whole milk ricotta with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Ricotta Blueberry Bowl until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "ricotta blueberry bowl",
      "stage 2 breakfasts",
      "middle",
      "whole milk ricotta",
      "blueberries"
    ]
  },
  {
    "slug": "yogurt-oat-and-peach-bowl",
    "title": "Yogurt Oat and Peach Bowl",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "plain whole milk yogurt",
      "oatmeal",
      "peach"
    ],
    "summary": "A filling breakfast that mixes dairy, fruit, and grain.",
    "howToMake": [
      "Stir the plain whole milk yogurt, oatmeal, peach together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Yogurt Oat and Peach Bowl should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Yogurt Oat and Peach Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "yogurt oat and peach bowl",
      "stage 2 breakfasts",
      "middle",
      "plain whole milk yogurt",
      "oatmeal",
      "peach"
    ]
  },
  {
    "slug": "cottage-cheese-banana-bowl",
    "title": "Cottage Cheese Banana Bowl",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "small curd cottage cheese",
      "banana"
    ],
    "summary": "A soft breakfast option for babies already handling dairy.",
    "howToMake": [
      "Peel the small curd cottage cheese, banana and mash it with a fork until no firm pieces remain.",
      "With Cottage Cheese Banana Bowl, keep the texture thinner for new eaters and leave more body only when your baby handles lumps well.",
      "Serve Cottage Cheese Banana Bowl slowly; turning away, coughing, or losing energy means it is time to stop or thin the texture."
    ],
    "textureGuide": "Cottage Cheese Banana Bowl should feel soft and moist on the tongue; prepare small curd cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small curd cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Cottage Cheese Banana Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of small curd cottage cheese; every bite should flatten easily between your fingers.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "cottage cheese banana bowl",
      "stage 2 breakfasts",
      "middle",
      "small curd cottage cheese",
      "banana"
    ]
  },
  {
    "slug": "pumpkin-oatmeal-bowl",
    "title": "Pumpkin Oatmeal Bowl",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "pumpkin puree",
      "oatmeal"
    ],
    "summary": "Pumpkin oatmeal is a thick spoon-fed meal with familiar fall flavors.",
    "howToMake": [
      "Stir the pumpkin puree, oatmeal together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Pumpkin Oatmeal Bowl works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Pumpkin Oatmeal Bowl small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Pumpkin Oatmeal Bowl in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "pumpkin oatmeal bowl",
      "stage 2 breakfasts",
      "middle",
      "pumpkin puree",
      "oatmeal"
    ]
  },
  {
    "slug": "apple-cinnamon-oatmeal-bowl",
    "title": "Apple Cinnamon Oatmeal Bowl",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "apple puree",
      "oatmeal",
      "cinnamon"
    ],
    "summary": "A mild cinnamon note can add variety once your baby has handled the basics.",
    "howToMake": [
      "Stir the apple puree, oatmeal, cinnamon together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Apple Cinnamon Oatmeal Bowl works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Apple Cinnamon Oatmeal Bowl with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "For leftovers, loosen Apple Cinnamon Oatmeal Bowl with water, breast milk, formula, or sauce and test that it is soft all the way through.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "apple cinnamon oatmeal bowl",
      "stage 2 breakfasts",
      "middle",
      "apple puree",
      "oatmeal",
      "cinnamon"
    ]
  },
  {
    "slug": "chia-yogurt-mango-bowl",
    "title": "Chia Yogurt Mango Bowl",
    "stage": "middle",
    "category": "Stage 2 breakfasts",
    "ingredients": [
      "plain whole milk yogurt",
      "mango",
      "soft soaked chia"
    ],
    "summary": "A thicker bowl with yogurt and fruit once textures are going well.",
    "howToMake": [
      "Prepare the plain whole milk yogurt, mango, soft soaked chia until every ingredient is soft, mild, and easy for your baby to manage.",
      "For Chia Yogurt Mango Bowl, use the recipe as a guide but adjust thickness and piece size to how your baby eats this week.",
      "Serve Chia Yogurt Mango Bowl in a modest portion first, then add moisture if the texture feels dense, sticky, or tiring."
    ],
    "textureGuide": "Chia Yogurt Mango Bowl should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Chia Yogurt Mango Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "chia yogurt mango bowl",
      "stage 2 breakfasts",
      "middle",
      "plain whole milk yogurt",
      "mango",
      "soft soaked chia"
    ]
  },
  {
    "slug": "sweet-potato-and-chicken-mash",
    "title": "Sweet Potato and Chicken Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "sweet potato",
      "chicken thigh"
    ],
    "summary": "A classic stage 2 combo with soft starch and tender chicken.",
    "howToMake": [
      "Steam or bake the sweet potato, chicken thigh until it is soft enough to squash easily between your fingers.",
      "Shred, mash, or blend the protein with enough moisture to keep every bite tender.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Sweet Potato and Chicken Mash should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Serve sweet potato in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved sweet potato covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "sweet potato and chicken mash",
      "stage 2 lunches and dinners",
      "middle",
      "sweet potato",
      "chicken thigh"
    ]
  },
  {
    "slug": "peas-and-chicken-mash",
    "title": "Peas and Chicken Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "peas",
      "chicken"
    ],
    "summary": "Chicken and peas make a simple savory combination.",
    "howToMake": [
      "Steam or bake the peas, chicken until it is soft enough to squash easily between your fingers.",
      "Serve Peas and Chicken Mash with enough moisture to prevent crumbly bits, especially for babies still learning to chew.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Peas and Chicken Mash should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Pair peas with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Peas and Chicken Mash until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Peas and Chicken Mash, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "peas and chicken mash",
      "stage 2 lunches and dinners",
      "middle",
      "peas",
      "chicken"
    ]
  },
  {
    "slug": "carrot-lentil-mash",
    "title": "Carrot Lentil Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "carrots",
      "red lentils"
    ],
    "summary": "Red lentils cook down quickly and blend well with carrots.",
    "howToMake": [
      "Steam or bake the carrots, red lentils until it is soft enough to squash easily between your fingers.",
      "For Carrot Lentil Mash, check the protein texture with your fingers and soften it more if it feels firm or grainy.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Carrot Lentil Mash should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Start with a small spoonful of carrots alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Carrot Lentil Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of carrots; every bite should flatten easily between your fingers.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "carrot lentil mash",
      "stage 2 lunches and dinners",
      "middle",
      "carrots",
      "red lentils"
    ]
  },
  {
    "slug": "butternut-squash-and-turkey-mash",
    "title": "Butternut Squash and Turkey Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "butternut squash",
      "ground turkey"
    ],
    "summary": "Turkey adds protein to a smooth squash base.",
    "howToMake": [
      "Steam or bake the butternut squash, ground turkey until it is soft enough to squash easily between your fingers.",
      "Shred, mash, or blend the protein with enough moisture to keep every bite tender.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Butternut Squash and Turkey Mash should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of butternut squash alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Butternut Squash and Turkey Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of butternut squash; every bite should flatten easily between your fingers.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "butternut squash and turkey mash",
      "stage 2 lunches and dinners",
      "middle",
      "butternut squash",
      "ground turkey"
    ]
  },
  {
    "slug": "broccoli-potato-and-beef-mash",
    "title": "Broccoli Potato and Beef Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "broccoli",
      "potato",
      "ground beef"
    ],
    "summary": "A thicker savory mash with iron-rich beef.",
    "howToMake": [
      "Steam or bake the broccoli, potato, ground beef until it is soft enough to squash easily between your fingers.",
      "Shred, mash, or blend the protein with enough moisture to keep every bite tender.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Broccoli Potato and Beef Mash should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Serve broccoli in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved broccoli covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Beef needs extra attention because chewy pieces linger in the mouth; trim gristle and blend or mince until very tender.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "broccoli potato and beef mash",
      "stage 2 lunches and dinners",
      "middle",
      "broccoli",
      "potato",
      "ground beef"
    ]
  },
  {
    "slug": "salmon-and-sweet-potato-mash",
    "title": "Salmon and Sweet Potato Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "salmon",
      "sweet potato"
    ],
    "summary": "Salmon and sweet potato make a soft combo with healthy fats.",
    "howToMake": [
      "Steam or bake the salmon, sweet potato until it is soft enough to squash easily between your fingers.",
      "For Salmon and Sweet Potato Mash, break the protein into very small pieces and add moisture so it does not feel dry in the mouth.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Salmon and Sweet Potato Mash should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Pair salmon with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Salmon and Sweet Potato Mash until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Salmon and Sweet Potato Mash, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "salmon and sweet potato mash",
      "stage 2 lunches and dinners",
      "middle",
      "salmon",
      "sweet potato"
    ]
  },
  {
    "slug": "zucchini-and-white-bean-mash",
    "title": "Zucchini and White Bean Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "zucchini",
      "white beans"
    ],
    "summary": "A gentle plant-based stage 2 meal.",
    "howToMake": [
      "Steam or bake the zucchini, white beans until it is soft enough to squash easily between your fingers.",
      "With Zucchini and White Bean Mash, mix the protein into puree, broth, or yogurt until each bite stays soft and cohesive.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Zucchini and White Bean Mash should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of zucchini alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Zucchini and White Bean Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of zucchini; every bite should flatten easily between your fingers.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "zucchini and white bean mash",
      "stage 2 lunches and dinners",
      "middle",
      "zucchini",
      "white beans"
    ]
  },
  {
    "slug": "cauliflower-and-chickpea-mash",
    "title": "Cauliflower and Chickpea Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "cauliflower",
      "chickpeas"
    ],
    "summary": "Chickpeas and cauliflower make a thicker spoon-fed blend.",
    "howToMake": [
      "Steam or bake the cauliflower, chickpeas until it is soft enough to squash easily between your fingers.",
      "Press the vegetable with a fork first; if it does not squash easily, cook it longer before serving.",
      "Let it cool to a warm, baby-safe temperature, then offer a small spoonful before increasing the portion."
    ],
    "textureGuide": "Cauliflower and Chickpea Mash should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "If Cauliflower and Chickpea Mash feels thick, loosen it gradually so the spoonful stays smooth without becoming watery.",
    "storageTip": "Vegetable purees can thicken in the refrigerator, so stir well and check for smoothness after warming.",
    "safetyTip": "Do not serve firm raw vegetable coins or chunks; they should squash easily between two fingers.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "cauliflower and chickpea mash",
      "stage 2 lunches and dinners",
      "middle",
      "cauliflower",
      "chickpeas"
    ]
  },
  {
    "slug": "spinach-potato-and-egg-mash",
    "title": "Spinach Potato and Egg Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "spinach",
      "potato",
      "egg"
    ],
    "summary": "A savory mash with greens, egg, and a soft potato base.",
    "howToMake": [
      "Steam or bake the spinach, potato, egg until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Spinach Potato and Egg Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Pair spinach with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Spinach Potato and Egg Mash until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "When serving Spinach Potato and Egg Mash, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "spinach potato and egg mash",
      "stage 2 lunches and dinners",
      "middle",
      "spinach",
      "potato",
      "egg"
    ]
  },
  {
    "slug": "turkey-rice-and-pea-mash",
    "title": "Turkey Rice and Pea Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "ground turkey",
      "rice",
      "peas"
    ],
    "summary": "A spoon-fed version of a family-style meal.",
    "howToMake": [
      "Steam or bake the ground turkey, rice, peas until it is soft enough to squash easily between your fingers.",
      "Serve Turkey Rice and Pea Mash with enough moisture to prevent crumbly bits, especially for babies still learning to chew.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Turkey Rice and Pea Mash should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of ground turkey alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Turkey Rice and Pea Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground turkey; every bite should flatten easily between your fingers.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "turkey rice and pea mash",
      "stage 2 lunches and dinners",
      "middle",
      "ground turkey",
      "rice",
      "peas"
    ]
  },
  {
    "slug": "lentil-vegetable-stew",
    "title": "Lentil Vegetable Stew",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "red lentils",
      "carrots",
      "tomato"
    ],
    "summary": "A very soft stew with lentils and vegetables.",
    "howToMake": [
      "Cook the red lentils, carrots, tomato completely and keep the texture moist so it is not dry or crumbly.",
      "For beef, choose a tender slow-cooked piece and blend or mince it finely with cooking liquid so no chewy strands remain.",
      "Offer beef in a very small serving first because the texture can feel dense, and stay nearby while your baby practices chewing."
    ],
    "textureGuide": "Lentil Vegetable Stew should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Start with a small spoonful of red lentils alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Lentil Vegetable Stew quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of red lentils; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "lentil vegetable stew",
      "stage 2 lunches and dinners",
      "middle",
      "red lentils",
      "carrots",
      "tomato"
    ]
  },
  {
    "slug": "black-bean-sweet-potato-bowl",
    "title": "Black Bean Sweet Potato Bowl",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "black beans",
      "sweet potato"
    ],
    "summary": "This thick mash fits many US weeknight meal ingredients.",
    "howToMake": [
      "Steam or bake the black beans, sweet potato until it is soft enough to squash easily between your fingers.",
      "For Black Bean Sweet Potato Bowl, check the protein texture with your fingers and soften it more if it feels firm or grainy.",
      "Serve in small amounts with a familiar food if that helps your baby manage the texture."
    ],
    "textureGuide": "Black Bean Sweet Potato Bowl should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve black beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved black beans covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Tofu is soft but can break into uneven chunks, so keep pieces small and avoid firm cubes that could slip back whole.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "black bean sweet potato bowl",
      "stage 2 lunches and dinners",
      "middle",
      "black beans",
      "sweet potato"
    ]
  },
  {
    "slug": "tofu-broccoli-rice-bowl",
    "title": "Tofu Broccoli Rice Bowl",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "tofu",
      "broccoli",
      "rice"
    ],
    "summary": "A soft bowl built from common family staples.",
    "howToMake": [
      "Steam or bake the tofu, broccoli, rice until it is soft enough to squash easily between your fingers.",
      "For Tofu Broccoli Rice Bowl, break the protein into very small pieces and add moisture so it does not feel dry in the mouth.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Tofu Broccoli Rice Bowl should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Pair tofu with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Tofu Broccoli Rice Bowl until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "With Tofu Broccoli Rice Bowl, use a soft texture first and stop for medical advice if breathing changes, swelling, or repeated vomiting appears.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "tofu broccoli rice bowl",
      "stage 2 lunches and dinners",
      "middle",
      "tofu",
      "broccoli",
      "rice"
    ]
  },
  {
    "slug": "chicken-avocado-rice-bowl",
    "title": "Chicken Avocado Rice Bowl",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "chicken",
      "avocado",
      "rice"
    ],
    "summary": "A mild combo with protein, grain, and healthy fat.",
    "howToMake": [
      "Peel the chicken, avocado, rice and mash it with a fork until no firm pieces remain.",
      "Adjust Chicken Avocado Rice Bowl with breast milk, formula, water, or yogurt based on whether the food feels dry, dense, or chalky.",
      "Keep the first serving of Chicken Avocado Rice Bowl brief so your baby can practice without getting tired."
    ],
    "textureGuide": "Chicken Avocado Rice Bowl should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Chicken Avocado Rice Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken; every bite should flatten easily between your fingers.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "chicken avocado rice bowl",
      "stage 2 lunches and dinners",
      "middle",
      "chicken",
      "avocado",
      "rice"
    ]
  },
  {
    "slug": "beef-quinoa-veggie-bowl",
    "title": "Beef Quinoa Veggie Bowl",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "ground beef",
      "quinoa",
      "carrots"
    ],
    "summary": "A thicker stage 2 bowl that brings in beef and grain.",
    "howToMake": [
      "Cook the ground beef, quinoa, carrots completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "With Beef Quinoa Veggie Bowl, pause after the first few shreds so you can see whether your baby moves the meat comfortably."
    ],
    "textureGuide": "Beef Quinoa Veggie Bowl should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Serve ground beef in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved ground beef covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "beef quinoa veggie bowl",
      "stage 2 lunches and dinners",
      "middle",
      "ground beef",
      "quinoa",
      "carrots"
    ]
  },
  {
    "slug": "pasta-with-ricotta-and-peas",
    "title": "Pasta with Ricotta and Peas",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "small pasta",
      "ricotta",
      "peas"
    ],
    "summary": "Well-cooked pasta can work once your baby handles thicker textures.",
    "howToMake": [
      "Steam or bake the small pasta, ricotta, peas until it is soft enough to squash easily between your fingers.",
      "Adjust the grain texture so it stays moist and spoonable rather than gluey.",
      "Offer a small warm portion first and thin it if it becomes too sticky after sitting."
    ],
    "textureGuide": "Pasta with Ricotta and Peas should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair small pasta with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Pasta with Ricotta and Peas until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Pasta with Ricotta and Peas, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "pasta with ricotta and peas",
      "stage 2 lunches and dinners",
      "middle",
      "small pasta",
      "ricotta",
      "peas"
    ]
  },
  {
    "slug": "turkey-pumpkin-pasta",
    "title": "Turkey Pumpkin Pasta",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "ground turkey",
      "pumpkin",
      "small pasta"
    ],
    "summary": "A smooth savory pasta bowl with turkey.",
    "howToMake": [
      "Steam or bake the ground turkey, pumpkin, small pasta until it is soft enough to squash easily between your fingers.",
      "With Turkey Pumpkin Pasta, mix the protein into puree, broth, or yogurt until each bite stays soft and cohesive.",
      "Serve in small amounts with a familiar food if that helps your baby manage the texture."
    ],
    "textureGuide": "Turkey Pumpkin Pasta should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of ground turkey alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Turkey Pumpkin Pasta quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground turkey; every bite should flatten easily between your fingers.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "turkey pumpkin pasta",
      "stage 2 lunches and dinners",
      "middle",
      "ground turkey",
      "pumpkin",
      "small pasta"
    ]
  },
  {
    "slug": "egg-noodle-chicken-bowl",
    "title": "Egg Noodle Chicken Bowl",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "soft egg noodles",
      "chicken",
      "broth"
    ],
    "summary": "A baby version of simple noodle soup flavors.",
    "howToMake": [
      "Cook the soft egg noodles, chicken, broth completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "Serve Egg Noodle Chicken Bowl in tiny soft pieces and add cooking liquid if the chicken starts to feel dry."
    ],
    "textureGuide": "Egg Noodle Chicken Bowl should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of soft egg noodles alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Egg Noodle Chicken Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of soft egg noodles; every bite should flatten easily between your fingers.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "egg noodle chicken bowl",
      "stage 2 lunches and dinners",
      "middle",
      "soft egg noodles",
      "chicken",
      "broth"
    ]
  },
  {
    "slug": "hummus-and-sweet-potato-bowl",
    "title": "Hummus and Sweet Potato Bowl",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "hummus",
      "sweet potato"
    ],
    "summary": "A thick spoon-fed bowl with chickpeas and sweet potato.",
    "howToMake": [
      "Steam or bake the hummus, sweet potato until it is soft enough to squash easily between your fingers.",
      "Blend or mash the cooked vegetable until fibers are smooth enough for your baby’s current stage.",
      "Cool completely enough for feeding and watch how your baby handles the fiber and mouthfeel."
    ],
    "textureGuide": "Hummus and Sweet Potato Bowl should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "If Hummus and Sweet Potato Bowl feels thick, loosen it gradually so the spoonful stays smooth without becoming watery.",
    "storageTip": "Vegetable purees can thicken in the refrigerator, so stir well and check for smoothness after warming.",
    "safetyTip": "Do not serve firm raw vegetable coins or chunks; they should squash easily between two fingers.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "hummus and sweet potato bowl",
      "stage 2 lunches and dinners",
      "middle",
      "hummus",
      "sweet potato"
    ]
  },
  {
    "slug": "mac-and-cauliflower-mash",
    "title": "Mac and Cauliflower Mash",
    "stage": "middle",
    "category": "Stage 2 lunches and dinners",
    "ingredients": [
      "soft macaroni",
      "cauliflower",
      "cheese"
    ],
    "summary": "A very soft baby-friendly take on mac and cheese.",
    "howToMake": [
      "Prepare the soft macaroni, cauliflower, cheese until every ingredient is soft, mild, and easy for your baby to manage.",
      "Before serving Mac and Cauliflower Mash, test whether the food mashes easily between your fingers and resize it if needed.",
      "With Mac and Cauliflower Mash, stay close during the first bites and soften the texture further if chewing looks difficult."
    ],
    "textureGuide": "Mac and Cauliflower Mash should feel soft and moist on the tongue; prepare soft macaroni so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair soft macaroni with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Mac and Cauliflower Mash until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Mac and Cauliflower Mash, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "mac and cauliflower mash",
      "stage 2 lunches and dinners",
      "middle",
      "soft macaroni",
      "cauliflower",
      "cheese"
    ]
  },
  {
    "slug": "mashed-blueberries-and-ricotta",
    "title": "Mashed Blueberries and Ricotta",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "blueberries",
      "ricotta"
    ],
    "summary": "A quick snack bowl with fruit and dairy.",
    "howToMake": [
      "Prepare the blueberries, ricotta until every ingredient is soft, mild, and easy for your baby to manage.",
      "Move Mashed Blueberries and Ricotta from puree to soft pieces gradually instead of changing thickness and size at the same time.",
      "Keep Mashed Blueberries and Ricotta flexible at serving time because some foods thicken, dry out, or get sticky as they cool."
    ],
    "textureGuide": "Mashed Blueberries and Ricotta should feel soft and moist on the tongue; prepare blueberries so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of blueberries alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Mashed Blueberries and Ricotta quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of blueberries; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "mashed blueberries and ricotta",
      "stage 2 snacks",
      "middle",
      "blueberries",
      "ricotta"
    ]
  },
  {
    "slug": "soft-scrambled-eggs-with-cottage-cheese",
    "title": "Soft Scrambled Eggs with Cottage Cheese",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "egg",
      "small curd cottage cheese"
    ],
    "summary": "Extra-soft eggs with cottage cheese stay moist and easy to eat.",
    "howToMake": [
      "Cook the egg, small curd cottage cheese completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "Soft Scrambled Eggs with Cottage Cheese should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Serve egg in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved egg covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "soft scrambled eggs with cottage cheese",
      "stage 2 snacks",
      "middle",
      "egg",
      "small curd cottage cheese"
    ]
  },
  {
    "slug": "mashed-avocado-with-lime",
    "title": "Mashed Avocado with Lime",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "avocado",
      "lime"
    ],
    "summary": "A simple avocado mash with a little brightness for older babies.",
    "howToMake": [
      "Peel the avocado, lime and mash it with a fork until no firm pieces remain.",
      "For Mashed Avocado with Lime, thickness should match your baby's current stage rather than the recipe label.",
      "With Mashed Avocado with Lime, wait between bites and adjust the next spoonful if the texture seems hard to manage."
    ],
    "textureGuide": "Mashed Avocado with Lime should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Mashed Avocado with Lime, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "If saving avocado, cover it tightly and expect the texture to soften further by the next meal.",
    "safetyTip": "For berries or grapes, flatten or quarter appropriately and never serve firm round pieces whole.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "mashed avocado with lime",
      "stage 2 snacks",
      "middle",
      "avocado",
      "lime"
    ]
  },
  {
    "slug": "yogurt-with-prunes",
    "title": "Yogurt with Prunes",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "plain whole milk yogurt",
      "prune puree"
    ],
    "summary": "Prune yogurt is a simple snack idea many families keep in rotation.",
    "howToMake": [
      "Prepare the plain whole milk yogurt, prune puree until every ingredient is soft, mild, and easy for your baby to manage.",
      "Prepare Yogurt with Prunes for your baby's current skill level: smooth, mashed, shredded, or soft pieces as needed.",
      "For Yogurt with Prunes, begin with a small serving and thin the food if it clings to the spoon or feels heavy."
    ],
    "textureGuide": "Yogurt with Prunes should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Yogurt with Prunes quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "yogurt with prunes",
      "stage 2 snacks",
      "middle",
      "plain whole milk yogurt",
      "prune puree"
    ]
  },
  {
    "slug": "banana-ricotta-mash",
    "title": "Banana Ricotta Mash",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "banana",
      "ricotta"
    ],
    "summary": "Banana and ricotta create a thick and creamy snack.",
    "howToMake": [
      "Peel the banana, ricotta and mash it with a fork until no firm pieces remain.",
      "For Banana Ricotta Mash, add liquid slowly until the mash slides from the spoon without forming a sticky clump.",
      "Offer one small spoonful of Banana Ricotta Mash, then pause to watch swallowing, interest, and comfort."
    ],
    "textureGuide": "Banana Ricotta Mash should feel soft and moist on the tongue; prepare banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of banana alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Banana Ricotta Mash quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of banana; every bite should flatten easily between your fingers.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "banana ricotta mash",
      "stage 2 snacks",
      "middle",
      "banana",
      "ricotta"
    ]
  },
  {
    "slug": "pear-and-cinnamon-cottage-cheese",
    "title": "Pear and Cinnamon Cottage Cheese",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "pear",
      "small curd cottage cheese",
      "cinnamon"
    ],
    "summary": "A simple dairy snack with soft fruit.",
    "howToMake": [
      "Steam or bake the pear, small curd cottage cheese, cinnamon until it is soft enough to squash easily between your fingers.",
      "Serve Pear and Cinnamon Cottage Cheese with enough moisture to prevent crumbly bits, especially for babies still learning to chew.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Pear and Cinnamon Cottage Cheese should feel soft and moist on the tongue; prepare pear so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve pear in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved pear covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Tofu is soft but can break into uneven chunks, so keep pieces small and avoid firm cubes that could slip back whole.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "pear and cinnamon cottage cheese",
      "stage 2 snacks",
      "middle",
      "pear",
      "small curd cottage cheese",
      "cinnamon"
    ]
  },
  {
    "slug": "mashed-black-beans-with-avocado",
    "title": "Mashed Black Beans with Avocado",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "black beans",
      "avocado"
    ],
    "summary": "A soft high-fiber snack with healthy fat.",
    "howToMake": [
      "Peel the black beans, avocado and mash it with a fork until no firm pieces remain.",
      "With Mashed Black Beans with Avocado, keep the texture thinner for new eaters and leave more body only when your baby handles lumps well.",
      "Serve Mashed Black Beans with Avocado slowly; turning away, coughing, or losing energy means it is time to stop or thin the texture."
    ],
    "textureGuide": "Mashed Black Beans with Avocado should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Pair black beans with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Mashed Black Beans with Avocado until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Soy foods such as tofu can be allergens for some babies; serve a small soft portion and get medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "mashed black beans with avocado",
      "stage 2 snacks",
      "middle",
      "black beans",
      "avocado"
    ]
  },
  {
    "slug": "peanut-butter-yogurt-dip",
    "title": "Peanut Butter Yogurt Dip",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "smooth peanut butter",
      "plain whole milk yogurt"
    ],
    "summary": "Thinned peanut butter mixed into yogurt is easy to serve by spoon.",
    "howToMake": [
      "Steam or bake the smooth peanut butter, plain whole milk yogurt until it is soft enough to squash easily between your fingers.",
      "Shred, mash, or blend the protein with enough moisture to keep every bite tender.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Peanut Butter Yogurt Dip should feel soft and moist on the tongue; prepare smooth peanut butter so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of smooth peanut butter alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Peanut Butter Yogurt Dip quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of smooth peanut butter; every bite should flatten easily between your fingers.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "peanut butter yogurt dip",
      "stage 2 snacks",
      "middle",
      "smooth peanut butter",
      "plain whole milk yogurt"
    ]
  },
  {
    "slug": "sunflower-butter-oatmeal",
    "title": "Sunflower Butter Oatmeal",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "sunflower seed butter",
      "oatmeal"
    ],
    "summary": "A seed-butter oatmeal bowl for another allergen-friendly option.",
    "howToMake": [
      "Stir the sunflower seed butter, oatmeal together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Sunflower Butter Oatmeal works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Sunflower Butter Oatmeal small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Sunflower Butter Oatmeal in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "sunflower butter oatmeal",
      "stage 2 snacks",
      "middle",
      "sunflower seed butter",
      "oatmeal"
    ]
  },
  {
    "slug": "apple-and-white-cheddar-oats",
    "title": "Apple and White Cheddar Oats",
    "stage": "middle",
    "category": "Stage 2 snacks",
    "ingredients": [
      "apple puree",
      "oatmeal",
      "mild cheddar"
    ],
    "summary": "Soft oats with apple and a little cheese can work for babies already doing well with dairy.",
    "howToMake": [
      "Stir the apple puree, oatmeal, mild cheddar together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Let oatmeal stand briefly, then thin it again if it tightens into a paste as it cools.",
      "Offer one spoonful of oatmeal first, then pause because cereal can feel thicker after a few bites."
    ],
    "textureGuide": "Apple and White Cheddar Oats works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Apple and White Cheddar Oats with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "For leftovers, loosen Apple and White Cheddar Oats with water, breast milk, formula, or sauce and test that it is soft all the way through.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "apple and white cheddar oats",
      "stage 2 snacks",
      "middle",
      "apple puree",
      "oatmeal",
      "mild cheddar"
    ]
  },
  {
    "slug": "banana-oat-pancake-strips",
    "title": "Banana Oat Pancake Strips",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "banana",
      "egg",
      "oats"
    ],
    "summary": "Very soft pancake strips help babies practice self-feeding.",
    "howToMake": [
      "Stir the banana, egg, oats together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Banana Oat Pancake Strips should feel soft and moist on the tongue; prepare banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of banana alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Banana Oat Pancake Strips quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of banana; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "banana oat pancake strips",
      "soft finger foods",
      "middle",
      "banana",
      "egg",
      "oats"
    ]
  },
  {
    "slug": "soft-avocado-spears",
    "title": "Soft Avocado Spears",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "ripe avocado"
    ],
    "summary": "Ripe avocado spears are one of the easiest first finger foods.",
    "howToMake": [
      "Peel the ripe avocado and mash it with a fork until no firm pieces remain.",
      "Adjust Soft Avocado Spears with breast milk, formula, water, or yogurt based on whether the food feels dry, dense, or chalky.",
      "Keep the first serving of Soft Avocado Spears brief so your baby can practice without getting tired."
    ],
    "textureGuide": "Soft Avocado Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of ripe avocado first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Fruit like ripe avocado can brown or release juice, so store a small covered portion and check smell and texture before reusing.",
    "safetyTip": "Remove peels, pits, seeds, and firm edges from ripe avocado; slippery pieces should be sized so they are easy to control.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "soft avocado spears",
      "soft finger foods",
      "middle",
      "ripe avocado"
    ]
  },
  {
    "slug": "steamed-broccoli-florets",
    "title": "Steamed Broccoli Florets",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "broccoli"
    ],
    "summary": "Very soft broccoli florets are a common baby-led weaning vegetable.",
    "howToMake": [
      "Steam or bake the broccoli until it is soft enough to squash easily between your fingers.",
      "Cut or shape the food into soft, grabbable pieces that squash easily between your fingers.",
      "Place just a few pieces on the tray and stay close while your baby practices picking them up."
    ],
    "textureGuide": "Steamed Broccoli Florets should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "If Steamed Broccoli Florets feels thick, loosen it gradually so the spoonful stays smooth without becoming watery.",
    "storageTip": "Vegetable purees can thicken in the refrigerator, so stir well and check for smoothness after warming.",
    "safetyTip": "Do not serve firm raw vegetable coins or chunks; they should squash easily between two fingers.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "steamed broccoli florets",
      "soft finger foods",
      "middle",
      "broccoli"
    ]
  },
  {
    "slug": "roasted-sweet-potato-spears",
    "title": "Roasted Sweet Potato Spears",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "sweet potato"
    ],
    "summary": "Soft sweet potato spears are easy to grasp and gum.",
    "howToMake": [
      "Steam or bake the sweet potato until it is soft enough to squash easily between your fingers.",
      "Prepare pieces in a size your baby can manage, keeping every edge soft and tender.",
      "Offer one or two pieces at a time so your baby can pace the meal safely."
    ],
    "textureGuide": "Roasted Sweet Potato Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Roasted Sweet Potato Spears, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "If saving sweet potato, cover it tightly and expect the texture to soften further by the next meal.",
    "safetyTip": "For berries or grapes, flatten or quarter appropriately and never serve firm round pieces whole.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "roasted sweet potato spears",
      "soft finger foods",
      "middle",
      "sweet potato"
    ]
  },
  {
    "slug": "scrambled-egg-pieces",
    "title": "Scrambled Egg Pieces",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "egg"
    ],
    "summary": "Small soft egg pieces work for babies ready to pick up food.",
    "howToMake": [
      "Cook the egg completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "Scrambled Egg Pieces should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of egg alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Scrambled Egg Pieces quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of egg; every bite should flatten easily between your fingers.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "scrambled egg pieces",
      "soft finger foods",
      "middle",
      "egg"
    ]
  },
  {
    "slug": "soft-tofu-sticks",
    "title": "Soft Tofu Sticks",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "firm tofu"
    ],
    "summary": "Seared or steamed tofu cut into sticks stays soft and easy to chew.",
    "howToMake": [
      "Cook the firm tofu completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "Soft Tofu Sticks should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Serve firm tofu in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved firm tofu covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Often fits the 7 to 9 month stage, when babies are ready for thicker mashes and simple combinations.",
    "searchTerms": [
      "soft tofu sticks",
      "soft finger foods",
      "middle",
      "firm tofu"
    ]
  },
  {
    "slug": "soft-pear-spears",
    "title": "Soft Pear Spears",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "ripe pear"
    ],
    "summary": "Steamed pear spears can be served soft enough to mash between fingers.",
    "howToMake": [
      "Steam or bake the ripe pear until it is soft enough to squash easily between your fingers.",
      "Prepare pieces in a size your baby can manage, keeping every edge soft and tender.",
      "Place just a few pieces on the tray and stay close while your baby practices picking them up."
    ],
    "textureGuide": "Soft Pear Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Soft Pear Spears, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "If saving ripe pear, cover it tightly and expect the texture to soften further by the next meal.",
    "safetyTip": "For berries or grapes, flatten or quarter appropriately and never serve firm round pieces whole.",
    "ageFit": "Use after your baby has handled a few single foods and is starting to manage more texture.",
    "searchTerms": [
      "soft pear spears",
      "soft finger foods",
      "middle",
      "ripe pear"
    ]
  },
  {
    "slug": "ripe-banana-spears",
    "title": "Ripe Banana Spears",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "banana"
    ],
    "summary": "Banana spears are a low-prep self-feeding option.",
    "howToMake": [
      "Peel the banana and mash it with a fork until no firm pieces remain.",
      "For Ripe Banana Spears, thickness should match your baby's current stage rather than the recipe label.",
      "With Ripe Banana Spears, wait between bites and adjust the next spoonful if the texture seems hard to manage."
    ],
    "textureGuide": "Ripe Banana Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of banana first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Fruit like banana can brown or release juice, so store a small covered portion and check smell and texture before reusing.",
    "safetyTip": "Remove peels, pits, seeds, and firm edges from banana; slippery pieces should be sized so they are easy to control.",
    "ageFit": "Usually works in the middle stage of solids, when spoon skills and texture tolerance are improving.",
    "searchTerms": [
      "ripe banana spears",
      "soft finger foods",
      "middle",
      "banana"
    ]
  },
  {
    "slug": "well-cooked-pasta-spirals",
    "title": "Well-Cooked Pasta Spirals",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "small pasta"
    ],
    "summary": "Soft pasta gives babies another texture to explore.",
    "howToMake": [
      "Cook the small pasta until very soft, then cut or mash it into pieces that match your baby’s chewing stage.",
      "Mix with a moist ingredient such as vegetable puree, yogurt, or sauce so the food is easier to swallow.",
      "Serve a small portion and check that each piece squashes easily before offering more."
    ],
    "textureGuide": "Well-Cooked Pasta Spirals works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Well-Cooked Pasta Spirals while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "When saving Well-Cooked Pasta Spirals, add moisture during reheating and stop using it if the texture turns gummy.",
    "safetyTip": "Avoid dense clumps of small pasta; spread or break the food apart so each bite is easy to swallow.",
    "ageFit": "A practical stage 2 meal for babies who are comfortable with soft mashed foods and mixed flavors.",
    "searchTerms": [
      "well-cooked pasta spirals",
      "soft finger foods",
      "middle",
      "small pasta"
    ]
  },
  {
    "slug": "soft-toast-with-avocado",
    "title": "Soft Toast with Avocado",
    "stage": "middle",
    "category": "Soft finger foods",
    "ingredients": [
      "soft toast",
      "avocado"
    ],
    "summary": "Lightly toasted bread spread thinly with avocado can work once bread is going well.",
    "howToMake": [
      "Peel the soft toast, avocado and mash it with a fork until no firm pieces remain.",
      "For Soft Toast with Avocado, add liquid slowly until the mash slides from the spoon without forming a sticky clump.",
      "Offer one small spoonful of Soft Toast with Avocado, then pause to watch swallowing, interest, and comfort."
    ],
    "textureGuide": "Soft Toast with Avocado works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Soft Toast with Avocado small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Soft Toast with Avocado in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "Best once your baby can move food around the mouth a little better and is ready for gentle variety.",
    "searchTerms": [
      "soft toast with avocado",
      "soft finger foods",
      "middle",
      "soft toast",
      "avocado"
    ]
  },
  {
    "slug": "banana-oat-waffle-strips",
    "title": "Banana Oat Waffle Strips",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "banana",
      "egg",
      "oats"
    ],
    "summary": "Soft waffle strips are easy to hold and fit self-feeding practice.",
    "howToMake": [
      "Stir the banana, egg, oats together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Banana Oat Waffle Strips should feel soft and moist on the tongue; prepare banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair banana with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Banana Oat Waffle Strips until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "banana oat waffle strips",
      "breakfast finger foods",
      "late",
      "banana",
      "egg",
      "oats"
    ]
  },
  {
    "slug": "mini-egg-muffins-with-spinach",
    "title": "Mini Egg Muffins with Spinach",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "egg",
      "spinach",
      "cheese"
    ],
    "summary": "Soft baked egg muffins cut into small pieces work well for older babies.",
    "howToMake": [
      "Cook the egg, spinach, cheese completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "Mini Egg Muffins with Spinach should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of egg alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Mini Egg Muffins with Spinach quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of egg; every bite should flatten easily between your fingers.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "mini egg muffins with spinach",
      "breakfast finger foods",
      "late",
      "egg",
      "spinach",
      "cheese"
    ]
  },
  {
    "slug": "greek-yogurt-with-berries-and-oats",
    "title": "Greek Yogurt with Berries and Oats",
    "stage": "late",
    "category": "Breakfast bowls",
    "ingredients": [
      "plain whole milk Greek yogurt",
      "berries",
      "oats"
    ],
    "summary": "A thick breakfast bowl with dairy, fruit, and grain.",
    "howToMake": [
      "Stir the plain whole milk Greek yogurt, berries, oats together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Greek Yogurt with Berries and Oats should feel soft and moist on the tongue; prepare plain whole milk Greek yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve plain whole milk Greek yogurt in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved plain whole milk Greek yogurt covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "greek yogurt with berries and oats",
      "breakfast bowls",
      "late",
      "plain whole milk greek yogurt",
      "berries",
      "oats"
    ]
  },
  {
    "slug": "peanut-butter-banana-toast-strips",
    "title": "Peanut Butter Banana Toast Strips",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "soft toast",
      "smooth peanut butter",
      "banana"
    ],
    "summary": "Thinly spread peanut butter on soft toast strips is a common US breakfast-style baby meal.",
    "howToMake": [
      "Peel the soft toast, smooth peanut butter, banana and mash it with a fork until no firm pieces remain.",
      "With Peanut Butter Banana Toast Strips, keep the texture thinner for new eaters and leave more body only when your baby handles lumps well.",
      "Serve Peanut Butter Banana Toast Strips slowly; turning away, coughing, or losing energy means it is time to stop or thin the texture."
    ],
    "textureGuide": "Peanut Butter Banana Toast Strips works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Peanut Butter Banana Toast Strips with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "For leftovers, loosen Peanut Butter Banana Toast Strips with water, breast milk, formula, or sauce and test that it is soft all the way through.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "peanut butter banana toast strips",
      "breakfast finger foods",
      "late",
      "soft toast",
      "smooth peanut butter",
      "banana"
    ]
  },
  {
    "slug": "cottage-cheese-pancake-pieces",
    "title": "Cottage Cheese Pancake Pieces",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "cottage cheese",
      "egg",
      "oats"
    ],
    "summary": "Soft pancake pieces make a higher-protein finger food.",
    "howToMake": [
      "Cook the cottage cheese, egg, oats until very soft, then cut or mash it into pieces that match your baby’s chewing stage.",
      "Mix with a moist ingredient such as vegetable puree, yogurt, or sauce so the food is easier to swallow.",
      "Serve a small portion and check that each piece squashes easily before offering more."
    ],
    "textureGuide": "Cottage Cheese Pancake Pieces should feel soft and moist on the tongue; prepare cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Cottage Cheese Pancake Pieces quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of cottage cheese; every bite should flatten easily between your fingers.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "cottage cheese pancake pieces",
      "breakfast finger foods",
      "late",
      "cottage cheese",
      "egg",
      "oats"
    ]
  },
  {
    "slug": "apple-cinnamon-french-toast-strips",
    "title": "Apple Cinnamon French Toast Strips",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "whole grain bread",
      "egg",
      "apple"
    ],
    "summary": "Soft French toast strips can be served in baby-size pieces.",
    "howToMake": [
      "Steam or bake the whole grain bread, egg, apple until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Apple Cinnamon French Toast Strips should feel soft and moist on the tongue; prepare whole grain bread so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of whole grain bread alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Apple Cinnamon French Toast Strips quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of whole grain bread; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "apple cinnamon french toast strips",
      "breakfast finger foods",
      "late",
      "whole grain bread",
      "egg",
      "apple"
    ]
  },
  {
    "slug": "ricotta-toast-with-peach",
    "title": "Ricotta Toast with Peach",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "soft toast",
      "ricotta",
      "peach"
    ],
    "summary": "A soft toast option with mild dairy and fruit.",
    "howToMake": [
      "Steam or bake the soft toast, ricotta, peach until it is soft enough to squash easily between your fingers.",
      "Adjust the grain texture so it stays moist and spoonable rather than gluey.",
      "Serve a few bites and check whether the grain texture stays easy to swallow."
    ],
    "textureGuide": "Ricotta Toast with Peach should feel soft and moist on the tongue; prepare soft toast so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve soft toast in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved soft toast covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "ricotta toast with peach",
      "breakfast finger foods",
      "late",
      "soft toast",
      "ricotta",
      "peach"
    ]
  },
  {
    "slug": "soft-breakfast-potatoes-with-egg",
    "title": "Soft Breakfast Potatoes with Egg",
    "stage": "late",
    "category": "Breakfast bowls",
    "ingredients": [
      "potato",
      "egg"
    ],
    "summary": "Very soft breakfast potatoes with egg create a family-style baby meal.",
    "howToMake": [
      "Steam or bake the potato, egg until it is soft enough to squash easily between your fingers.",
      "For Soft Breakfast Potatoes with Egg, check the protein texture with your fingers and soften it more if it feels firm or grainy.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Soft Breakfast Potatoes with Egg should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Pair potato with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Soft Breakfast Potatoes with Egg until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "soft breakfast potatoes with egg",
      "breakfast bowls",
      "late",
      "potato",
      "egg"
    ]
  },
  {
    "slug": "yogurt-chia-banana-bowl",
    "title": "Yogurt Chia Banana Bowl",
    "stage": "late",
    "category": "Breakfast bowls",
    "ingredients": [
      "plain whole milk yogurt",
      "banana",
      "soft soaked chia"
    ],
    "summary": "A thick yogurt bowl with banana and soaked chia.",
    "howToMake": [
      "Peel the plain whole milk yogurt, banana, soft soaked chia and mash it with a fork until no firm pieces remain.",
      "Adjust Yogurt Chia Banana Bowl with breast milk, formula, water, or yogurt based on whether the food feels dry, dense, or chalky.",
      "Keep the first serving of Yogurt Chia Banana Bowl brief so your baby can practice without getting tired."
    ],
    "textureGuide": "Yogurt Chia Banana Bowl should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Yogurt Chia Banana Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "yogurt chia banana bowl",
      "breakfast bowls",
      "late",
      "plain whole milk yogurt",
      "banana",
      "soft soaked chia"
    ]
  },
  {
    "slug": "blueberry-ricotta-oat-bake",
    "title": "Blueberry Ricotta Oat Bake",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "ricotta",
      "blueberries",
      "oats"
    ],
    "summary": "A soft baked square that can be cut into baby-safe pieces.",
    "howToMake": [
      "Stir the ricotta, blueberries, oats together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Blueberry Ricotta Oat Bake should feel soft and moist on the tongue; prepare ricotta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve ricotta in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved ricotta covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Beef needs extra attention because chewy pieces linger in the mouth; trim gristle and blend or mince until very tender.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "blueberry ricotta oat bake",
      "breakfast finger foods",
      "late",
      "ricotta",
      "blueberries",
      "oats"
    ]
  },
  {
    "slug": "turkey-meatball-pieces",
    "title": "Turkey Meatball Pieces",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "ground turkey",
      "oats",
      "egg"
    ],
    "summary": "Soft turkey meatballs in tiny pieces work well for older babies.",
    "howToMake": [
      "Cook the ground turkey, oats, egg completely and keep the texture moist so it is not dry or crumbly.",
      "For beef, choose a tender slow-cooked piece and blend or mince it finely with cooking liquid so no chewy strands remain.",
      "Offer beef in a very small serving first because the texture can feel dense, and stay nearby while your baby practices chewing."
    ],
    "textureGuide": "Turkey Meatball Pieces should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Pair ground turkey with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Turkey Meatball Pieces until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "When serving Turkey Meatball Pieces, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "turkey meatball pieces",
      "protein-forward meals",
      "late",
      "ground turkey",
      "oats",
      "egg"
    ]
  },
  {
    "slug": "beef-meatball-pieces",
    "title": "Beef Meatball Pieces",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "ground beef",
      "breadcrumbs",
      "egg"
    ],
    "summary": "Moist beef meatballs can be broken into small pieces for self-feeding.",
    "howToMake": [
      "Cook the ground beef, breadcrumbs, egg completely and keep the texture moist so it is not dry or crumbly.",
      "For beef, choose a tender slow-cooked piece and blend or mince it finely with cooking liquid so no chewy strands remain.",
      "Offer beef in a very small serving first because the texture can feel dense, and stay nearby while your baby practices chewing."
    ],
    "textureGuide": "Beef Meatball Pieces should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Start with a small spoonful of ground beef alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Beef Meatball Pieces quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground beef; every bite should flatten easily between your fingers.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "beef meatball pieces",
      "protein-forward meals",
      "late",
      "ground beef",
      "breadcrumbs",
      "egg"
    ]
  },
  {
    "slug": "salmon-cakes",
    "title": "Salmon Cakes",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "salmon",
      "potato",
      "egg"
    ],
    "summary": "Soft salmon cakes bring fish into a finger-food format.",
    "howToMake": [
      "Cook the salmon, potato, egg completely and keep the texture moist so it is not dry or crumbly.",
      "For beef, choose a tender slow-cooked piece and blend or mince it finely with cooking liquid so no chewy strands remain.",
      "For Salmon Cakes, use tender inner meat, shred across the grain, and keep the first portion small."
    ],
    "textureGuide": "Salmon Cakes should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Start with a small spoonful of salmon alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Salmon Cakes quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of salmon; every bite should flatten easily between your fingers.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "salmon cakes",
      "protein-forward meals",
      "late",
      "salmon",
      "potato",
      "egg"
    ]
  },
  {
    "slug": "shredded-chicken-with-avocado",
    "title": "Shredded Chicken with Avocado",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "chicken thigh",
      "avocado"
    ],
    "summary": "Tender shredded chicken and avocado make a simple lunch.",
    "howToMake": [
      "Peel the chicken thigh, avocado and mash it with a fork until no firm pieces remain.",
      "For Shredded Chicken with Avocado, thickness should match your baby's current stage rather than the recipe label.",
      "With Shredded Chicken with Avocado, wait between bites and adjust the next spoonful if the texture seems hard to manage."
    ],
    "textureGuide": "Shredded Chicken with Avocado should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Serve chicken thigh in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved chicken thigh covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "shredded chicken with avocado",
      "protein-forward meals",
      "late",
      "chicken thigh",
      "avocado"
    ]
  },
  {
    "slug": "black-bean-quesadilla-strips",
    "title": "Black Bean Quesadilla Strips",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "soft tortilla",
      "black beans",
      "cheese"
    ],
    "summary": "Quesadilla strips are a realistic family meal adaptation for older babies.",
    "howToMake": [
      "Cook the soft tortilla, black beans, cheese completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "For Black Bean Quesadilla Strips, offer a pea-size taste first and make sure the chicken stays moist before adding more."
    ],
    "textureGuide": "Black Bean Quesadilla Strips should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Pair soft tortilla with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Black Bean Quesadilla Strips until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "With Black Bean Quesadilla Strips, use a soft texture first and stop for medical advice if breathing changes, swelling, or repeated vomiting appears.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "black bean quesadilla strips",
      "family-style meals",
      "late",
      "soft tortilla",
      "black beans",
      "cheese"
    ]
  },
  {
    "slug": "cheesy-bean-rice-bowl",
    "title": "Cheesy Bean Rice Bowl",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "black beans",
      "rice",
      "mild cheddar"
    ],
    "summary": "A soft bowl built from pantry staples many US families already use.",
    "howToMake": [
      "Cook the black beans, rice, mild cheddar completely and keep the texture moist so it is not dry or crumbly.",
      "For tofu, crumble soft tofu into very small pieces or mash it into vegetables so the texture stays smooth and easy to move around the mouth.",
      "With Cheesy Bean Rice Bowl, pause after the first few shreds so you can see whether your baby moves the meat comfortably."
    ],
    "textureGuide": "Cheesy Bean Rice Bowl should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of black beans alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Cheesy Bean Rice Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of black beans; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "cheesy bean rice bowl",
      "family-style meals",
      "late",
      "black beans",
      "rice",
      "mild cheddar"
    ]
  },
  {
    "slug": "chicken-and-rice-bowl",
    "title": "Chicken and Rice Bowl",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "chicken",
      "rice",
      "broccoli"
    ],
    "summary": "A soft version of a basic family dinner.",
    "howToMake": [
      "Cook the chicken, rice, broccoli completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "Serve Chicken and Rice Bowl in tiny soft pieces and add cooking liquid if the chicken starts to feel dry."
    ],
    "textureGuide": "Chicken and Rice Bowl should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Serve chicken in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved chicken covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "chicken and rice bowl",
      "family-style meals",
      "late",
      "chicken",
      "rice",
      "broccoli"
    ]
  },
  {
    "slug": "turkey-chili",
    "title": "Turkey Chili",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "ground turkey",
      "beans",
      "tomato"
    ],
    "summary": "Mild turkey chili can be served thick and soft for older babies.",
    "howToMake": [
      "Cook the ground turkey, beans, tomato completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "For Turkey Chili, use tender inner meat, shred across the grain, and keep the first portion small."
    ],
    "textureGuide": "Turkey Chili should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Pair ground turkey with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Turkey Chili until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Turkey Chili, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "turkey chili",
      "family-style meals",
      "late",
      "ground turkey",
      "beans",
      "tomato"
    ]
  },
  {
    "slug": "beef-and-lentil-bolognese",
    "title": "Beef and Lentil Bolognese",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "ground beef",
      "lentils",
      "tomato sauce"
    ],
    "summary": "A soft meat sauce can be mixed with tiny pasta or served alone.",
    "howToMake": [
      "Cook the ground beef, lentils, tomato sauce completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "For Beef and Lentil Bolognese, offer a pea-size taste first and make sure the chicken stays moist before adding more."
    ],
    "textureGuide": "Beef and Lentil Bolognese should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Start with a small spoonful of ground beef alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Beef and Lentil Bolognese quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground beef; every bite should flatten easily between your fingers.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "beef and lentil bolognese",
      "family-style meals",
      "late",
      "ground beef",
      "lentils",
      "tomato sauce"
    ]
  },
  {
    "slug": "mac-and-cheese-with-peas",
    "title": "Mac and Cheese with Peas",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "small pasta",
      "cheese",
      "peas"
    ],
    "summary": "A baby-friendly soft mac and cheese with peas.",
    "howToMake": [
      "Steam or bake the small pasta, cheese, peas until it is soft enough to squash easily between your fingers.",
      "Adjust the grain texture so it stays moist and spoonable rather than gluey.",
      "Serve a few bites and check whether the grain texture stays easy to swallow."
    ],
    "textureGuide": "Mac and Cheese with Peas should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small pasta alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Mac and Cheese with Peas quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of small pasta; every bite should flatten easily between your fingers.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "mac and cheese with peas",
      "family-style meals",
      "late",
      "small pasta",
      "cheese",
      "peas"
    ]
  },
  {
    "slug": "broccoli-cheese-pasta",
    "title": "Broccoli Cheese Pasta",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "small pasta",
      "broccoli",
      "mild cheese"
    ],
    "summary": "Well-cooked pasta with broccoli and cheese is easy to adapt for babies.",
    "howToMake": [
      "Steam or bake the small pasta, broccoli, mild cheese until it is soft enough to squash easily between your fingers.",
      "Cook the grain until tender, then mash or chop any dense pieces so they do not clump.",
      "Let it cool and stir well so there are no hot spots or thick clumps before feeding."
    ],
    "textureGuide": "Broccoli Cheese Pasta should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve small pasta in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved small pasta covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "broccoli cheese pasta",
      "family-style meals",
      "late",
      "small pasta",
      "broccoli",
      "mild cheese"
    ]
  },
  {
    "slug": "butter-noodles-with-chicken",
    "title": "Butter Noodles with Chicken",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "egg noodles",
      "chicken",
      "butter"
    ],
    "summary": "Soft buttered noodles with chicken fit many family dinners.",
    "howToMake": [
      "Cook the egg noodles, chicken, butter completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "With Butter Noodles with Chicken, pause after the first few shreds so you can see whether your baby moves the meat comfortably."
    ],
    "textureGuide": "Butter Noodles with Chicken should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Pair egg noodles with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Butter Noodles with Chicken until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Butter Noodles with Chicken, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "butter noodles with chicken",
      "family-style meals",
      "late",
      "egg noodles",
      "chicken",
      "butter"
    ]
  },
  {
    "slug": "sweet-potato-black-bean-bowl",
    "title": "Sweet Potato Black Bean Bowl",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "sweet potato",
      "black beans",
      "avocado"
    ],
    "summary": "A soft bowl with fiber, fat, and flavor.",
    "howToMake": [
      "Steam or bake the sweet potato, black beans, avocado until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Serve in small amounts with a familiar food if that helps your baby manage the texture."
    ],
    "textureGuide": "Sweet Potato Black Bean Bowl should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of sweet potato alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Sweet Potato Black Bean Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of sweet potato; every bite should flatten easily between your fingers.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "sweet potato black bean bowl",
      "family-style meals",
      "late",
      "sweet potato",
      "black beans",
      "avocado"
    ]
  },
  {
    "slug": "tofu-rice-veggie-bowl",
    "title": "Tofu Rice Veggie Bowl",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "tofu",
      "rice",
      "zucchini"
    ],
    "summary": "A gentle plant-based bowl for self-feeding or preloaded spoon use.",
    "howToMake": [
      "Cook the tofu, rice, zucchini completely and keep the texture moist so it is not dry or crumbly.",
      "For egg, serve it fully cooked and soft, such as finely mashed yolk or small tender pieces mixed into another moist food.",
      "Give egg in a small baby-safe amount at first and watch for any reaction during and after the meal."
    ],
    "textureGuide": "Tofu Rice Veggie Bowl should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Serve tofu in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved tofu covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "tofu rice veggie bowl",
      "family-style meals",
      "late",
      "tofu",
      "rice",
      "zucchini"
    ]
  },
  {
    "slug": "hummus-pita-strips-and-cucumber-yogurt",
    "title": "Hummus Pita Strips and Cucumber Yogurt",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "soft pita",
      "hummus",
      "plain yogurt"
    ],
    "summary": "A soft lunch-style meal inspired by common lunch foods.",
    "howToMake": [
      "Prepare the soft pita, hummus, plain yogurt until every ingredient is soft, mild, and easy for your baby to manage.",
      "For Hummus Pita Strips and Cucumber Yogurt, use the recipe as a guide but adjust thickness and piece size to how your baby eats this week.",
      "Serve Hummus Pita Strips and Cucumber Yogurt in a modest portion first, then add moisture if the texture feels dense, sticky, or tiring."
    ],
    "textureGuide": "Hummus Pita Strips and Cucumber Yogurt should feel soft and moist on the tongue; prepare soft pita so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair soft pita with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Hummus Pita Strips and Cucumber Yogurt until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "When serving Hummus Pita Strips and Cucumber Yogurt, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "hummus pita strips and cucumber yogurt",
      "family-style meals",
      "late",
      "soft pita",
      "hummus",
      "plain yogurt"
    ]
  },
  {
    "slug": "chicken-pot-pie-filling",
    "title": "Chicken Pot Pie Filling",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "chicken",
      "peas",
      "carrots"
    ],
    "summary": "Skip the crust and serve the soft filling for an older baby.",
    "howToMake": [
      "Cook the chicken, peas, carrots completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "Serve Chicken Pot Pie Filling in tiny soft pieces and add cooking liquid if the chicken starts to feel dry."
    ],
    "textureGuide": "Chicken Pot Pie Filling should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Chicken Pot Pie Filling quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "chicken pot pie filling",
      "family-style meals",
      "late",
      "chicken",
      "peas",
      "carrots"
    ]
  },
  {
    "slug": "mini-turkey-burger-pieces",
    "title": "Mini Turkey Burger Pieces",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "ground turkey",
      "oats"
    ],
    "summary": "Moist burger pieces can work when cooked soft and served in small bits.",
    "howToMake": [
      "Cook the ground turkey, oats completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "For Mini Turkey Burger Pieces, use tender inner meat, shred across the grain, and keep the first portion small."
    ],
    "textureGuide": "Mini Turkey Burger Pieces should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of ground turkey alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Mini Turkey Burger Pieces quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground turkey; every bite should flatten easily between your fingers.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "mini turkey burger pieces",
      "protein-forward meals",
      "late",
      "ground turkey",
      "oats"
    ]
  },
  {
    "slug": "soft-beef-taco-bowl",
    "title": "Soft Beef Taco Bowl",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "ground beef",
      "rice",
      "avocado"
    ],
    "summary": "A taco-bowl style meal without crunchy toppings.",
    "howToMake": [
      "Cook the ground beef, rice, avocado completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "For Soft Beef Taco Bowl, offer a pea-size taste first and make sure the chicken stays moist before adding more."
    ],
    "textureGuide": "Soft Beef Taco Bowl should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Serve ground beef in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved ground beef covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "soft beef taco bowl",
      "family-style meals",
      "late",
      "ground beef",
      "rice",
      "avocado"
    ]
  },
  {
    "slug": "lentil-soup-thickened",
    "title": "Lentil Soup Thickened",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "lentils",
      "carrots",
      "tomato"
    ],
    "summary": "Thick lentil soup works well on a preloaded spoon.",
    "howToMake": [
      "Cook the lentils, carrots, tomato completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "With Lentil Soup Thickened, pause after the first few shreds so you can see whether your baby moves the meat comfortably."
    ],
    "textureGuide": "Lentil Soup Thickened should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Pair lentils with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Lentil Soup Thickened until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "With Lentil Soup Thickened, use a soft texture first and stop for medical advice if breathing changes, swelling, or repeated vomiting appears.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "lentil soup thickened",
      "family-style meals",
      "late",
      "lentils",
      "carrots",
      "tomato"
    ]
  },
  {
    "slug": "chicken-noodle-soup-solids",
    "title": "Chicken Noodle Soup Solids",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "chicken",
      "small noodles",
      "carrots"
    ],
    "summary": "Use the soft solids from soup as a baby meal.",
    "howToMake": [
      "Cook the chicken, small noodles, carrots completely and keep the texture moist so it is not dry or crumbly.",
      "For chicken, keep the meat very moist and pull it into tiny soft shreds, or fold it into a puree so it does not feel dry in the mouth.",
      "Serve Chicken Noodle Soup Solids in tiny soft pieces and add cooking liquid if the chicken starts to feel dry."
    ],
    "textureGuide": "Chicken Noodle Soup Solids should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Chicken Noodle Soup Solids quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken; every bite should flatten easily between your fingers.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "chicken noodle soup solids",
      "family-style meals",
      "late",
      "chicken",
      "small noodles",
      "carrots"
    ]
  },
  {
    "slug": "avocado-toast-cubes",
    "title": "Avocado Toast Cubes",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "soft toast",
      "avocado"
    ],
    "summary": "Soft toast cubes with avocado are easy to pick up.",
    "howToMake": [
      "Peel the soft toast, avocado and mash it with a fork until no firm pieces remain.",
      "For Avocado Toast Cubes, add liquid slowly until the mash slides from the spoon without forming a sticky clump.",
      "Offer one small spoonful of Avocado Toast Cubes, then pause to watch swallowing, interest, and comfort."
    ],
    "textureGuide": "Avocado Toast Cubes works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Avocado Toast Cubes small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Store Avocado Toast Cubes in a shallow covered container and recheck thickness after warming, since grains often absorb liquid.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "avocado toast cubes",
      "finger foods and snacks",
      "late",
      "soft toast",
      "avocado"
    ]
  },
  {
    "slug": "cheese-and-soft-pear-pieces",
    "title": "Cheese and Soft Pear Pieces",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "mild cheese",
      "soft pear"
    ],
    "summary": "A simple snack plate with soft fruit and cheese.",
    "howToMake": [
      "Steam or bake the mild cheese, soft pear until it is soft enough to squash easily between your fingers.",
      "Make the pieces soft enough for practice chewing, then remove any hard or chewy parts.",
      "Place just a few pieces on the tray and stay close while your baby practices picking them up."
    ],
    "textureGuide": "Cheese and Soft Pear Pieces should feel soft and moist on the tongue; prepare mild cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair mild cheese with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Cheese and Soft Pear Pieces until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Cheese and Soft Pear Pieces, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "cheese and soft pear pieces",
      "finger foods and snacks",
      "late",
      "mild cheese",
      "soft pear"
    ]
  },
  {
    "slug": "banana-peanut-butter-roll-ups",
    "title": "Banana Peanut Butter Roll-Ups",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "soft tortilla",
      "smooth peanut butter",
      "banana"
    ],
    "summary": "A thinly spread tortilla roll cut into soft pieces.",
    "howToMake": [
      "Peel the soft tortilla, smooth peanut butter, banana and mash it with a fork until no firm pieces remain.",
      "With Banana Peanut Butter Roll-Ups, keep the texture thinner for new eaters and leave more body only when your baby handles lumps well.",
      "Serve Banana Peanut Butter Roll-Ups slowly; turning away, coughing, or losing energy means it is time to stop or thin the texture."
    ],
    "textureGuide": "Banana Peanut Butter Roll-Ups should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of soft tortilla first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Fruit like soft tortilla can brown or release juice, so store a small covered portion and check smell and texture before reusing.",
    "safetyTip": "Remove peels, pits, seeds, and firm edges from soft tortilla; slippery pieces should be sized so they are easy to control.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "banana peanut butter roll-ups",
      "finger foods and snacks",
      "late",
      "soft tortilla",
      "smooth peanut butter",
      "banana"
    ]
  },
  {
    "slug": "mini-pasta-with-pesto-yogurt",
    "title": "Mini Pasta with Pesto Yogurt",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "small pasta",
      "mild pesto",
      "plain yogurt"
    ],
    "summary": "Soft mini pasta with a mild sauce for older babies.",
    "howToMake": [
      "Cook the small pasta, mild pesto, plain yogurt until very soft, then cut or mash it into pieces that match your baby’s chewing stage.",
      "Mix with a moist ingredient such as vegetable puree, yogurt, or sauce so the food is easier to swallow.",
      "Serve a small portion and check that each piece squashes easily before offering more."
    ],
    "textureGuide": "Mini Pasta with Pesto Yogurt should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small pasta alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Mini Pasta with Pesto Yogurt quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of small pasta; every bite should flatten easily between your fingers.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "mini pasta with pesto yogurt",
      "finger foods and snacks",
      "late",
      "small pasta",
      "mild pesto",
      "plain yogurt"
    ]
  },
  {
    "slug": "soft-polenta-squares",
    "title": "Soft Polenta Squares",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "polenta",
      "parmesan"
    ],
    "summary": "Polenta can be chilled and cut into very soft squares.",
    "howToMake": [
      "Prepare the polenta, parmesan until every ingredient is soft, mild, and easy for your baby to manage.",
      "Before serving Soft Polenta Squares, test whether the food mashes easily between your fingers and resize it if needed.",
      "With Soft Polenta Squares, stay close during the first bites and soften the texture further if chewing looks difficult."
    ],
    "textureGuide": "Soft Polenta Squares should match your baby’s current chewing skills: soft, moist, and easy to mash with gentle finger pressure.",
    "servingTip": "Begin with a small amount of Soft Polenta Squares and adjust the size or thickness based on how your baby manages it.",
    "storageTip": "Keep leftovers of Soft Polenta Squares covered and cold, and do not reuse food that has been mouthed or handled during feeding.",
    "safetyTip": "Size, softness, and supervision matter most; adjust Soft Polenta Squares before serving if any piece feels firm or slippery.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "soft polenta squares",
      "finger foods and snacks",
      "late",
      "polenta",
      "parmesan"
    ]
  },
  {
    "slug": "soft-zucchini-fritters",
    "title": "Soft Zucchini Fritters",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "zucchini",
      "egg",
      "flour"
    ],
    "summary": "Very soft fritter pieces add variety to self-feeding.",
    "howToMake": [
      "Steam or bake the zucchini, egg, flour until it is soft enough to squash easily between your fingers.",
      "Shred, mash, or blend the protein with enough moisture to keep every bite tender.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Soft Zucchini Fritters should feel soft and moist on the tongue; prepare zucchini so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair zucchini with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Soft Zucchini Fritters until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "soft zucchini fritters",
      "finger foods and snacks",
      "late",
      "zucchini",
      "egg",
      "flour"
    ]
  },
  {
    "slug": "cottage-cheese-and-peach-bites",
    "title": "Cottage Cheese and Peach Bites",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "cottage cheese",
      "peach"
    ],
    "summary": "A spoonable snack that can also be scooped by the baby.",
    "howToMake": [
      "Steam or bake the cottage cheese, peach until it is soft enough to squash easily between your fingers.",
      "For Cottage Cheese and Peach Bites, break the protein into very small pieces and add moisture so it does not feel dry in the mouth.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Cottage Cheese and Peach Bites should feel soft and moist on the tongue; prepare cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Cottage Cheese and Peach Bites quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of cottage cheese; every bite should flatten easily between your fingers.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "cottage cheese and peach bites",
      "finger foods and snacks",
      "late",
      "cottage cheese",
      "peach"
    ]
  },
  {
    "slug": "mashed-chickpea-salad-toast",
    "title": "Mashed Chickpea Salad Toast",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "chickpeas",
      "yogurt",
      "soft toast"
    ],
    "summary": "A soft sandwich-style lunch adapted for babies.",
    "howToMake": [
      "Steam or bake the chickpeas, yogurt, soft toast until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Mashed Chickpea Salad Toast should feel soft and moist on the tongue; prepare chickpeas so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve chickpeas in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved chickpeas covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Avoid dry, chewy, round, or firm protein pieces that do not break down quickly with gentle pressure.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "mashed chickpea salad toast",
      "finger foods and snacks",
      "late",
      "chickpeas",
      "yogurt",
      "soft toast"
    ]
  },
  {
    "slug": "mini-grilled-cheese-triangles",
    "title": "Mini Grilled Cheese Triangles",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "soft bread",
      "mild cheddar"
    ],
    "summary": "Very soft grilled cheese triangles can work in small pieces.",
    "howToMake": [
      "Prepare the soft bread, mild cheddar until every ingredient is soft, mild, and easy for your baby to manage.",
      "Move Mini Grilled Cheese Triangles from puree to soft pieces gradually instead of changing thickness and size at the same time.",
      "Keep Mini Grilled Cheese Triangles flexible at serving time because some foods thicken, dry out, or get sticky as they cool."
    ],
    "textureGuide": "Mini Grilled Cheese Triangles should feel soft and moist on the tongue; prepare soft bread so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair soft bread with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Mini Grilled Cheese Triangles until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "mini grilled cheese triangles",
      "finger foods and snacks",
      "late",
      "soft bread",
      "mild cheddar"
    ]
  },
  {
    "slug": "soft-baked-oat-bars",
    "title": "Soft Baked Oat Bars",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "oats",
      "banana",
      "egg"
    ],
    "summary": "Soft oat bars are easy to batch prep for snacks.",
    "howToMake": [
      "Stir the oats, banana, egg together until the cereal is fully hydrated and loose enough to slide from a baby spoon.",
      "Check the texture after it cools slightly, then loosen it with breast milk, formula, or water if it becomes too thick.",
      "Begin with a small taste and pause between bites so your baby can show comfort with the texture."
    ],
    "textureGuide": "Soft Baked Oat Bars should feel soft and moist on the tongue; prepare oats so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of oats alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Soft Baked Oat Bars quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of oats; every bite should flatten easily between your fingers.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "soft baked oat bars",
      "finger foods and snacks",
      "late",
      "oats",
      "banana",
      "egg"
    ]
  },
  {
    "slug": "soft-broccoli-tots",
    "title": "Soft Broccoli Tots",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "broccoli",
      "egg",
      "cheese"
    ],
    "summary": "Soft baked tots are popular with babies learning to self-feed.",
    "howToMake": [
      "Steam or bake the broccoli, egg, cheese until it is soft enough to squash easily between your fingers.",
      "Remove any firm bits, then mince or blend until the texture is safe for your baby’s stage.",
      "Start with a small protein portion and pause often because these foods can feel dense to new eaters."
    ],
    "textureGuide": "Soft Broccoli Tots should feel soft and moist on the tongue; prepare broccoli so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of broccoli alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Soft Broccoli Tots quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of broccoli; every bite should flatten easily between your fingers.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "soft broccoli tots",
      "finger foods and snacks",
      "late",
      "broccoli",
      "egg",
      "cheese"
    ]
  },
  {
    "slug": "cauliflower-cheese-mash-bites",
    "title": "Cauliflower Cheese Mash Bites",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "cauliflower",
      "cheese",
      "egg"
    ],
    "summary": "Soft mash bites bring vegetable variety.",
    "howToMake": [
      "Prepare the cauliflower, cheese, egg until every ingredient is soft, mild, and easy for your baby to manage.",
      "Prepare Cauliflower Cheese Mash Bites for your baby's current skill level: smooth, mashed, shredded, or soft pieces as needed.",
      "For Cauliflower Cheese Mash Bites, begin with a small serving and thin the food if it clings to the spoon or feels heavy."
    ],
    "textureGuide": "Cauliflower Cheese Mash Bites should feel soft and moist on the tongue; prepare cauliflower so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve cauliflower in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved cauliflower covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "cauliflower cheese mash bites",
      "finger foods and snacks",
      "late",
      "cauliflower",
      "cheese",
      "egg"
    ]
  },
  {
    "slug": "sweet-potato-pancake-bites",
    "title": "Sweet Potato Pancake Bites",
    "stage": "late",
    "category": "Finger foods and snacks",
    "ingredients": [
      "sweet potato",
      "egg",
      "flour"
    ],
    "summary": "Small pancake bites made with sweet potato stay soft inside.",
    "howToMake": [
      "Steam or bake the sweet potato, egg, flour until it is soft enough to squash easily between your fingers.",
      "With Sweet Potato Pancake Bites, mix the protein into puree, broth, or yogurt until each bite stays soft and cohesive.",
      "Cool until warm, then offer a few moist bites and watch chewing and swallowing closely."
    ],
    "textureGuide": "Sweet Potato Pancake Bites should feel soft and moist on the tongue; prepare sweet potato so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair sweet potato with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Sweet Potato Pancake Bites until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "Egg is a common allergen, so offer it fully cooked in a baby-safe texture and seek medical advice for hives, swelling, repeated vomiting, or breathing symptoms.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "sweet potato pancake bites",
      "finger foods and snacks",
      "late",
      "sweet potato",
      "egg",
      "flour"
    ]
  },
  {
    "slug": "blueberry-yogurt-muffin-pieces",
    "title": "Blueberry Yogurt Muffin Pieces",
    "stage": "late",
    "category": "Breakfast finger foods",
    "ingredients": [
      "blueberries",
      "yogurt",
      "flour"
    ],
    "summary": "Soft muffin pieces work well when sugar is kept low.",
    "howToMake": [
      "Prepare the blueberries, yogurt, flour until every ingredient is soft, mild, and easy for your baby to manage.",
      "For Blueberry Yogurt Muffin Pieces, use the recipe as a guide but adjust thickness and piece size to how your baby eats this week.",
      "Serve Blueberry Yogurt Muffin Pieces in a modest portion first, then add moisture if the texture feels dense, sticky, or tiring."
    ],
    "textureGuide": "Blueberry Yogurt Muffin Pieces should feel soft and moist on the tongue; prepare blueberries so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of blueberries alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Blueberry Yogurt Muffin Pieces quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of blueberries; every bite should flatten easily between your fingers.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "blueberry yogurt muffin pieces",
      "breakfast finger foods",
      "late",
      "blueberries",
      "yogurt",
      "flour"
    ]
  },
  {
    "slug": "spinach-ricotta-pasta-shells",
    "title": "Spinach Ricotta Pasta Shells",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "small pasta shells",
      "ricotta",
      "spinach"
    ],
    "summary": "A soft pasta dinner adapted for older babies.",
    "howToMake": [
      "Cook the small pasta shells, ricotta, spinach until very soft, then cut or mash it into pieces that match your baby’s chewing stage.",
      "Mix with a moist ingredient such as vegetable puree, yogurt, or sauce so the food is easier to swallow.",
      "Serve a small portion and check that each piece squashes easily before offering more."
    ],
    "textureGuide": "Spinach Ricotta Pasta Shells should feel soft and moist on the tongue; prepare small pasta shells so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve small pasta shells in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved small pasta shells covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Beef needs extra attention because chewy pieces linger in the mouth; trim gristle and blend or mince until very tender.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "spinach ricotta pasta shells",
      "family-style meals",
      "late",
      "small pasta shells",
      "ricotta",
      "spinach"
    ]
  },
  {
    "slug": "turkey-and-cheese-roll-ups",
    "title": "Turkey and Cheese Roll-Ups",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "turkey",
      "mild cheese",
      "soft tortilla"
    ],
    "summary": "Soft roll-up pieces can work for lunch-style meals.",
    "howToMake": [
      "Cook the turkey, mild cheese, soft tortilla completely and keep the texture moist so it is not dry or crumbly.",
      "For beef, choose a tender slow-cooked piece and blend or mince it finely with cooking liquid so no chewy strands remain.",
      "Offer beef in a very small serving first because the texture can feel dense, and stay nearby while your baby practices chewing."
    ],
    "textureGuide": "Turkey and Cheese Roll-Ups should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Pair turkey with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Turkey and Cheese Roll-Ups until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "For Turkey and Cheese Roll-Ups, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes.",
    "ageFit": "Often fits 9 to 12 months, when soft finger foods and small family-style meals become more realistic.",
    "searchTerms": [
      "turkey and cheese roll-ups",
      "protein-forward meals",
      "late",
      "turkey",
      "mild cheese",
      "soft tortilla"
    ]
  },
  {
    "slug": "soft-mini-pizza-squares",
    "title": "Soft Mini Pizza Squares",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "soft flatbread",
      "tomato sauce",
      "mild mozzarella"
    ],
    "summary": "A baby-friendly take on pizza when crust stays soft.",
    "howToMake": [
      "Prepare the soft flatbread, tomato sauce, mild mozzarella until every ingredient is soft, mild, and easy for your baby to manage.",
      "Before serving Soft Mini Pizza Squares, test whether the food mashes easily between your fingers and resize it if needed.",
      "With Soft Mini Pizza Squares, stay close during the first bites and soften the texture further if chewing looks difficult."
    ],
    "textureGuide": "Soft Mini Pizza Squares works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Soft Mini Pizza Squares while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "When saving Soft Mini Pizza Squares, add moisture during reheating and stop using it if the texture turns gummy.",
    "safetyTip": "Avoid dense clumps of soft flatbread; spread or break the food apart so each bite is easy to swallow.",
    "ageFit": "Use in the later baby-food stage once your baby is practicing self-feeding with safe, soft pieces.",
    "searchTerms": [
      "soft mini pizza squares",
      "family-style meals",
      "late",
      "soft flatbread",
      "tomato sauce",
      "mild mozzarella"
    ]
  },
  {
    "slug": "salmon-rice-avocado-bowl",
    "title": "Salmon Rice Avocado Bowl",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "salmon",
      "rice",
      "avocado"
    ],
    "summary": "A soft bowl that balances protein, grain, and healthy fat.",
    "howToMake": [
      "Peel the salmon, rice, avocado and mash it with a fork until no firm pieces remain.",
      "Adjust Salmon Rice Avocado Bowl with breast milk, formula, water, or yogurt based on whether the food feels dry, dense, or chalky.",
      "Keep the first serving of Salmon Rice Avocado Bowl brief so your baby can practice without getting tired."
    ],
    "textureGuide": "Salmon Rice Avocado Bowl should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Start with a small spoonful of salmon alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Cool Salmon Rice Avocado Bowl quickly, store only the untouched portion, and warm it with a splash of liquid if it firms up.",
    "safetyTip": "Avoid large, dry, or springy pieces of salmon; every bite should flatten easily between your fingers.",
    "ageFit": "A good option for older babies who can handle thicker textures and very soft bite-size foods.",
    "searchTerms": [
      "salmon rice avocado bowl",
      "protein-forward meals",
      "late",
      "salmon",
      "rice",
      "avocado"
    ]
  },
  {
    "slug": "beans-and-cornbread-mash",
    "title": "Beans and Cornbread Mash",
    "stage": "late",
    "category": "Family-style meals",
    "ingredients": [
      "beans",
      "soft cornbread"
    ],
    "summary": "Soft cornbread crumbled into beans makes a Southern-style family meal adaptation.",
    "howToMake": [
      "Cook the beans, soft cornbread completely and keep the texture moist so it is not dry or crumbly.",
      "For tofu, crumble soft tofu into very small pieces or mash it into vegetables so the texture stays smooth and easy to move around the mouth.",
      "For Beans and Cornbread Mash, use tender inner meat, shred across the grain, and keep the first portion small."
    ],
    "textureGuide": "Beans and Cornbread Mash should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Keep saved beans covered in the refrigerator and discard any portion that touched the serving spoon.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded.",
    "ageFit": "Works well as your baby moves toward table foods while still needing soft, easy-to-mash textures.",
    "searchTerms": [
      "beans and cornbread mash",
      "family-style meals",
      "late",
      "beans",
      "soft cornbread"
    ]
  },
  {
    "slug": "chicken-broccoli-cheddar-bites",
    "title": "Chicken Broccoli Cheddar Bites",
    "stage": "late",
    "category": "Protein-forward meals",
    "ingredients": [
      "chicken",
      "broccoli",
      "cheddar"
    ],
    "summary": "Soft bite-size pieces with chicken, broccoli, and cheese.",
    "howToMake": [
      "Steam or bake the chicken, broccoli, cheddar until it is soft enough to squash easily between your fingers.",
      "Serve Chicken Broccoli Cheddar Bites with enough moisture to prevent crumbly bits, especially for babies still learning to chew.",
      "Serve in small amounts with a familiar food if that helps your baby manage the texture."
    ],
    "textureGuide": "Chicken Broccoli Cheddar Bites should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Pair chicken with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "For the next meal, reheat Chicken Broccoli Cheddar Bites until warm throughout and check that it has not become dry or rubbery.",
    "safetyTip": "When serving Chicken Broccoli Cheddar Bites, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes.",
    "ageFit": "Best for babies who are building pincer grasp and chewing practice with closely supervised meals.",
    "searchTerms": [
      "chicken broccoli cheddar bites",
      "protein-forward meals",
      "late",
      "chicken",
      "broccoli",
      "cheddar"
    ]
  }
];

export function getRecipe(slug: string) {
  return babyFoodRecipes.find((item) => item.slug === slug);
}

export function getRecipesByStage(stage: EnglishBabyFoodStage) {
  return babyFoodRecipes.filter((item) => item.stage === stage);
}

export function getRecipeCategories(stage: EnglishBabyFoodStage) {
  return Array.from(new Set(getRecipesByStage(stage).map((item) => item.category)));
}
