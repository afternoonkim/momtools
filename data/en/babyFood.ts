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
      "Gather infant oatmeal cereal, breast milk or formula. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Prepare infant cereal or other grains according to package instructions. Mix in properly stored breast milk or correctly prepared formula without unsafe reheating; offer immediately following milk-specific safety guidance.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Infant Oatmeal with Breast Milk or Formula works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Infant Oatmeal with Breast Milk or Formula while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "Prepare using safely stored breast milk or correctly prepared infant formula and serve promptly. Do not return leftovers from your baby's bowl to storage. Follow CDC breast-milk or formula handling instructions; never use a general homemade-food storage limit for mixed milk.",
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
      "Gather ripe avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Avocado Mash should feel soft and moist on the tongue; prepare ripe avocado so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve ripe avocado in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade avocado mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check ripe avocado for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather ripe banana, infant oatmeal cereal. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Banana Oat Mash should feel soft and moist on the tongue; prepare ripe banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair ripe banana with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade banana oat mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check ripe banana and infant oatmeal cereal for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather sweet potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Sweet Potato Puree should feel soft and moist on the tongue; prepare sweet potato so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of sweet potato alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade sweet potato puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather ripe pear. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Pear Puree should feel soft and moist on the tongue; prepare ripe pear so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve ripe pear in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade pear puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check ripe pear for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather apple. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Apple Puree should feel soft and moist on the tongue; prepare apple so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair apple with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade apple puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check apple for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather butternut squash. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Butternut Squash Puree should feel soft and moist on the tongue; prepare butternut squash so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of butternut squash alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade butternut squash puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather pumpkin. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Pumpkin Puree should feel soft and moist on the tongue; prepare pumpkin so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of pumpkin alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade pumpkin puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather carrots. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Carrot Puree should feel soft and moist on the tongue; prepare carrots so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve carrots in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade carrot puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check carrots for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather green peas. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Pea Puree should feel soft and moist on the tongue; prepare green peas so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair green peas with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade pea puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check green peas for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather green beans. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Green Bean Puree should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of green beans alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade green bean puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of green beans; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather zucchini. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Zucchini Puree should feel soft and moist on the tongue; prepare zucchini so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve zucchini in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade zucchini puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check zucchini for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather pitted prunes. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Prune Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Prune Puree, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "Refrigerate untouched homemade prune puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather ripe peach. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Peach Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of ripe peach first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Refrigerate untouched homemade peach puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather ripe mango. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mango Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of ripe mango first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Refrigerate untouched homemade mango puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather blueberries, infant oatmeal cereal. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Blueberry Oat Puree works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Blueberry Oat Puree small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade blueberry oat puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills.",
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
      "Gather plain whole milk yogurt. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Plain Whole Milk Yogurt should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair plain whole milk yogurt with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade plain whole milk yogurt promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check plain whole milk yogurt for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Scrambled Egg Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of egg alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade soft scrambled egg mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather smooth peanut butter, infant oatmeal cereal. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Stir the smooth nut butter thoroughly into the other soft ingredients until no thick, sticky clumps remain. Never serve a spoonful of nut butter on its own.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Thinned Peanut Butter Oatmeal works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Thinned Peanut Butter Oatmeal small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade thinned peanut butter oatmeal promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For pasta or rice dishes, cut long shapes and separate sticky pieces before serving. Thin smooth nut butter well into other soft food; never offer sticky spoonfuls or thick clumps. For severe eczema or egg allergy, seek your clinician's peanut-introduction plan.",
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
      "Gather smooth almond butter, infant oatmeal cereal. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Thinned Almond Butter Oatmeal works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Thinned Almond Butter Oatmeal with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "Refrigerate untouched homemade thinned almond butter oatmeal promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form. Thin smooth nut butter well into other soft food; never offer sticky spoonfuls or thick clumps. For severe eczema or egg allergy, seek your clinician's peanut-introduction plan.",
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
      "Gather whole milk ricotta, pear puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Ricotta and Pear Mash should feel soft and moist on the tongue; prepare whole milk ricotta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of whole milk ricotta alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade ricotta and pear mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of whole milk ricotta; every bite should flatten easily between your fingers. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather small curd cottage cheese, peach puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cottage Cheese Peach Mash should feel soft and moist on the tongue; prepare small curd cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small curd cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade cottage cheese peach mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of small curd cottage cheese; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather black beans. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Black Beans should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve black beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade mashed black beans promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather red lentils. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Lentils should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Pair red lentils with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade mashed lentils promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Mashed Lentils, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather chicken thigh, water or broth. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Chicken Puree should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken thigh alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade chicken puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken thigh; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground turkey, water or broth. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Turkey Puree should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Serve ground turkey in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade turkey puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground beef, water or broth. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Beef Puree should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Pair ground beef with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade beef puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "When serving Beef Puree, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather salmon, water. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook salmon, water as appropriate; fish must be fully cooked. Carefully check for and remove all bones, skin, and tough pieces before mashing.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Salmon Puree should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Start with a small spoonful of salmon alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade salmon puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of salmon; every bite should flatten easily between your fingers. Cook fish thoroughly and inspect every bite for bones before serving.",
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
      "Gather silken tofu, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Tofu Avocado Blend should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Start with a small spoonful of silken tofu alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade tofu avocado blend promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather plain whole milk Greek yogurt, banana. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Plain Greek Yogurt with Banana should feel soft and moist on the tongue; prepare plain whole milk Greek yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve plain whole milk Greek yogurt in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade plain greek yogurt with banana promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Tofu is soft but can break into uneven chunks, so keep pieces small and avoid firm cubes that could slip back whole. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather infant oatmeal cereal, apple puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Oatmeal with Apple works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Oatmeal with Apple with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "Refrigerate untouched homemade oatmeal with apple promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather infant oatmeal cereal, prune puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Oatmeal with Prunes works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Oatmeal with Prunes while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "Refrigerate untouched homemade oatmeal with prunes promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather infant oatmeal cereal, pumpkin puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Oatmeal with Pumpkin works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Oatmeal with Pumpkin small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade oatmeal with pumpkin promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather infant oatmeal cereal, peach puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Oatmeal with Peach works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Oatmeal with Peach with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "Refrigerate untouched homemade oatmeal with peach promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather plain Cream of Wheat cereal, breast milk or formula. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Prepare infant cereal or other grains according to package instructions. Mix in properly stored breast milk or correctly prepared formula without unsafe reheating; offer immediately following milk-specific safety guidance.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cream of Wheat for Babies works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Cream of Wheat for Babies while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "Prepare using safely stored breast milk or correctly prepared infant formula and serve promptly. Do not return leftovers from your baby's bowl to storage. Follow CDC breast-milk or formula handling instructions; never use a general homemade-food storage limit for mixed milk.",
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
      "Gather plain cooked quinoa, water. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Quinoa Cereal Mash works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Quinoa Cereal Mash while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "Refrigerate untouched homemade quinoa cereal mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather baby barley cereal, breast milk or formula. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Prepare infant cereal or other grains according to package instructions. Mix in properly stored breast milk or correctly prepared formula without unsafe reheating; offer immediately following milk-specific safety guidance.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Barley Cereal Mash works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Barley Cereal Mash small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Prepare using safely stored breast milk or correctly prepared infant formula and serve promptly. Do not return leftovers from your baby's bowl to storage. Follow CDC breast-milk or formula handling instructions; never use a general homemade-food storage limit for mixed milk.",
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
      "Gather boneless sardines, sweet potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook boneless sardines, sweet potato as appropriate; fish must be fully cooked. Carefully check for and remove all bones, skin, and tough pieces before mashing.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Sardine with Sweet Potato should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "Pair boneless sardines with a familiar food if the vegetable flavor is strong, but keep the texture soft and simple.",
    "storageTip": "Refrigerate untouched homemade mashed sardine with sweet potato promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check for skins, fibers, and dry edges that could make Mashed Sardine with Sweet Potato harder to swallow. Cook fish thoroughly and inspect every bite for bones before serving.",
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
      "Gather hard cooked egg yolk, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Egg Yolk and Avocado Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of hard cooked egg yolk alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade egg yolk and avocado mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather cannellini beans. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "White Bean Puree should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve cannellini beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade white bean puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check cannellini beans for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather broccoli, potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Broccoli Potato Puree should feel soft and moist on the tongue; prepare broccoli so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair broccoli with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade broccoli potato puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check broccoli and potato for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather cauliflower. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cauliflower Puree should feel soft and moist on the tongue; prepare cauliflower so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of cauliflower alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade cauliflower puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather spinach, potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Spinach Potato Puree should feel soft and moist on the tongue; prepare spinach so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of spinach alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade spinach potato puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather beets, apple. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Beet Apple Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Serve beets at a soft ripe stage and watch how your baby handles the natural acidity and slippery texture.",
    "storageTip": "Refrigerate untouched homemade beet apple puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid hard raw chunks of fruit and round pieces that can block the airway. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather ripe apricot. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Apricot Puree should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Apricot Puree, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "Refrigerate untouched homemade apricot puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather chickpeas. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Chickpeas should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "Serve chickpeas warm or room temperature and keep the first portion small while your baby gets used to the flavor.",
    "storageTip": "Refrigerate untouched homemade mashed chickpeas promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Steam or roast chickpeas until there is no hard center, and mash any stringy pieces before serving. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather plain whole milk yogurt, mango puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Plain Yogurt with Mango should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve plain whole milk yogurt in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade plain yogurt with mango promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid dry, chewy, round, or firm protein pieces that do not break down quickly with gentle pressure. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather infant oatmeal cereal, blueberry puree, plain whole milk yogurt. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Oatmeal with Blueberries and Yogurt should feel soft and moist on the tongue; prepare infant oatmeal cereal so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair infant oatmeal cereal with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade oatmeal with blueberries and yogurt promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Soy foods such as tofu can be allergens for some babies; serve a small soft portion and get medical advice for hives, swelling, repeated vomiting, or breathing symptoms. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather silken tofu, pear puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Tofu Pear Puree should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Start with a small spoonful of silken tofu alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade tofu pear puree promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of silken tofu; every bite should flatten easily between your fingers. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather pinto beans. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Pinto Beans should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of pinto beans alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade mashed pinto beans promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of pinto beans; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather infant oatmeal cereal, banana. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Thick Oatmeal with Banana works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Thick Oatmeal with Banana small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade thick oatmeal with banana promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather plain whole milk Greek yogurt, strawberries. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Greek Yogurt with Strawberry should feel soft and moist on the tongue; prepare plain whole milk Greek yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair plain whole milk Greek yogurt with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade greek yogurt with strawberry promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "With Greek Yogurt with Strawberry, use a soft texture first and stop for medical advice if breathing changes, swelling, or repeated vomiting appears. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather infant oatmeal cereal, smooth peanut butter, banana. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Stir the smooth nut butter thoroughly into the other soft ingredients until no thick, sticky clumps remain. Never serve a spoonful of nut butter on its own.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Oatmeal with Peanut Butter and Banana works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Oatmeal with Peanut Butter and Banana while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "Refrigerate untouched homemade oatmeal with peanut butter and banana promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid dense clumps of infant oatmeal cereal; spread or break the food apart so each bite is easy to swallow. Thin smooth nut butter well into other soft food; never offer sticky spoonfuls or thick clumps. For severe eczema or egg allergy, seek your clinician's peanut-introduction plan.",
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
      "Gather soft scrambled egg, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Egg and Avocado Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Serve soft scrambled egg in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade egg and avocado mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather whole milk ricotta, blueberries. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Ricotta Blueberry Bowl should feel soft and moist on the tongue; prepare whole milk ricotta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair whole milk ricotta with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade ricotta blueberry bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check whole milk ricotta and blueberries for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather plain whole milk yogurt, oatmeal, peach. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Yogurt Oat and Peach Bowl should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade yogurt oat and peach bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather small curd cottage cheese, banana. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cottage Cheese Banana Bowl should feel soft and moist on the tongue; prepare small curd cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small curd cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade cottage cheese banana bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of small curd cottage cheese; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather pumpkin puree, oatmeal. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Pumpkin Oatmeal Bowl works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Pumpkin Oatmeal Bowl small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade pumpkin oatmeal bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather apple puree, oatmeal, cinnamon. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Apple Cinnamon Oatmeal Bowl works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Apple Cinnamon Oatmeal Bowl with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "Refrigerate untouched homemade apple cinnamon oatmeal bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather plain whole milk yogurt, mango, soft soaked chia. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Chia Yogurt Mango Bowl should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade chia yogurt mango bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather sweet potato, chicken thigh. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Sweet Potato and Chicken Mash should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Serve sweet potato in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade sweet potato and chicken mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather peas, chicken. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Peas and Chicken Mash should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Pair peas with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade peas and chicken mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Peas and Chicken Mash, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather carrots, red lentils. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Carrot Lentil Mash should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Start with a small spoonful of carrots alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade carrot lentil mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of carrots; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather butternut squash, ground turkey. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Butternut Squash and Turkey Mash should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of butternut squash alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade butternut squash and turkey mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of butternut squash; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather broccoli, potato, ground beef. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Broccoli Potato and Beef Mash should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Serve broccoli in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade broccoli potato and beef mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Beef needs extra attention because chewy pieces linger in the mouth; trim gristle and blend or mince until very tender. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather salmon, sweet potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook salmon, sweet potato as appropriate; fish must be fully cooked. Carefully check for and remove all bones, skin, and tough pieces before mashing.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Salmon and Sweet Potato Mash should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Pair salmon with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade salmon and sweet potato mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Salmon and Sweet Potato Mash, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes. Cook fish thoroughly and inspect every bite for bones before serving.",
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
      "Gather zucchini, white beans. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Zucchini and White Bean Mash should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of zucchini alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade zucchini and white bean mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of zucchini; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather cauliflower, chickpeas. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cauliflower and Chickpea Mash should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "If Cauliflower and Chickpea Mash feels thick, loosen it gradually so the spoonful stays smooth without becoming watery.",
    "storageTip": "Refrigerate untouched homemade cauliflower and chickpea mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Do not serve firm raw vegetable coins or chunks; they should squash easily between two fingers. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather spinach, potato, egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Spinach Potato and Egg Mash should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Pair spinach with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade spinach potato and egg mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather ground turkey, rice, peas. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Turkey Rice and Pea Mash should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of ground turkey alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade turkey rice and pea mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground turkey; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather red lentils, carrots, tomato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Lentil Vegetable Stew should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Start with a small spoonful of red lentils alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade lentil vegetable stew promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of red lentils; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather black beans, sweet potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Black Bean Sweet Potato Bowl should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve black beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade black bean sweet potato bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Tofu is soft but can break into uneven chunks, so keep pieces small and avoid firm cubes that could slip back whole. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather tofu, broccoli, rice. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Tofu Broccoli Rice Bowl should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Pair tofu with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade tofu broccoli rice bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather chicken, avocado, rice. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Chicken Avocado Rice Bowl should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade chicken avocado rice bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground beef, quinoa, carrots. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Beef Quinoa Veggie Bowl should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Serve ground beef in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade beef quinoa veggie bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather small pasta, ricotta, peas. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Pasta with Ricotta and Peas should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair small pasta with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade pasta with ricotta and peas promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Pasta with Ricotta and Peas, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather ground turkey, pumpkin, small pasta. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Turkey Pumpkin Pasta should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of ground turkey alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade turkey pumpkin pasta promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground turkey; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather soft egg noodles, chicken, broth. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Egg Noodle Chicken Bowl should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of soft egg noodles alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade egg noodle chicken bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of soft egg noodles; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather hummus, sweet potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Hummus and Sweet Potato Bowl should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "If Hummus and Sweet Potato Bowl feels thick, loosen it gradually so the spoonful stays smooth without becoming watery.",
    "storageTip": "Refrigerate untouched homemade hummus and sweet potato bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather soft macaroni, cauliflower, cheese. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mac and Cauliflower Mash should feel soft and moist on the tongue; prepare soft macaroni so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair soft macaroni with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade mac and cauliflower mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Mac and Cauliflower Mash, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather blueberries, ricotta. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Blueberries and Ricotta should feel soft and moist on the tongue; prepare blueberries so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of blueberries alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade mashed blueberries and ricotta promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of blueberries; every bite should flatten easily between your fingers. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather egg, small curd cottage cheese. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Scrambled Eggs with Cottage Cheese should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Serve egg in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade soft scrambled eggs with cottage cheese promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather avocado, lime. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Avocado with Lime should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Mashed Avocado with Lime, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "Refrigerate untouched homemade mashed avocado with lime promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather plain whole milk yogurt, prune puree. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Yogurt with Prunes should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade yogurt with prunes promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather banana, ricotta. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Banana Ricotta Mash should feel soft and moist on the tongue; prepare banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of banana alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade banana ricotta mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of banana; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather pear, small curd cottage cheese, cinnamon. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Pear and Cinnamon Cottage Cheese should feel soft and moist on the tongue; prepare pear so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve pear in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade pear and cinnamon cottage cheese promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Tofu is soft but can break into uneven chunks, so keep pieces small and avoid firm cubes that could slip back whole. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather black beans, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Black Beans with Avocado should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Pair black beans with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade mashed black beans with avocado promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Soy foods such as tofu can be allergens for some babies; serve a small soft portion and get medical advice for hives, swelling, repeated vomiting, or breathing symptoms. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather smooth peanut butter, plain whole milk yogurt. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Stir the smooth nut butter thoroughly into the other soft ingredients until no thick, sticky clumps remain. Never serve a spoonful of nut butter on its own.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Peanut Butter Yogurt Dip should feel soft and moist on the tongue; prepare smooth peanut butter so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of smooth peanut butter alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade peanut butter yogurt dip promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of smooth peanut butter; every bite should flatten easily between your fingers. Thin smooth nut butter well into other soft food; never offer sticky spoonfuls or thick clumps. For severe eczema or egg allergy, seek your clinician's peanut-introduction plan. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather sunflower seed butter, oatmeal. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Sunflower Butter Oatmeal works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Sunflower Butter Oatmeal small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade sunflower butter oatmeal promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather apple puree, oatmeal, mild cheddar. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Apple and White Cheddar Oats works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Apple and White Cheddar Oats with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "Refrigerate untouched homemade apple and white cheddar oats promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather banana, egg, oats. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Banana Oat Pancake Strips should feel soft and moist on the tongue; prepare banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of banana alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade banana oat pancake strips promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather ripe avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Avocado Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of ripe avocado first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Refrigerate untouched homemade soft avocado spears promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather broccoli. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Steamed Broccoli Florets should be cooked until tender enough to mash smoothly, with fibrous skins or strings broken down for your baby’s stage.",
    "servingTip": "If Steamed Broccoli Florets feels thick, loosen it gradually so the spoonful stays smooth without becoming watery.",
    "storageTip": "Refrigerate untouched homemade steamed broccoli florets promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather sweet potato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Roasted Sweet Potato Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Roasted Sweet Potato Spears, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "Refrigerate untouched homemade roasted sweet potato spears promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Scrambled Egg Pieces should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of egg alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade scrambled egg pieces promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather firm tofu. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Tofu Sticks should feel soft and moist on the tongue; press lightly, crumble or cube it softly, and avoid firm slippery chunks that are hard to manage.",
    "servingTip": "Serve firm tofu in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade soft tofu sticks promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check firm tofu for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather ripe pear. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Pear Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Start with a few soft bites of Soft Pear Spears, then wait before offering more if the fruit is new to your baby.",
    "storageTip": "Refrigerate untouched homemade soft pear spears promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For berries or grapes, flatten or quarter appropriately and never serve firm round pieces whole. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather banana. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Ripe Banana Spears should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of banana first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Refrigerate untouched homemade ripe banana spears promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather small pasta. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Well-Cooked Pasta Spirals works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Well-Cooked Pasta Spirals while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "Refrigerate untouched homemade well-cooked pasta spirals promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather soft toast, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Toast with Avocado works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Soft Toast with Avocado small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade soft toast with avocado promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather banana, egg, oats. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Banana Oat Waffle Strips should feel soft and moist on the tongue; prepare banana so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair banana with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade banana oat waffle strips promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather egg, spinach, cheese. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mini Egg Muffins with Spinach should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Start with a small spoonful of egg alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade mini egg muffins with spinach promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of egg; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather plain whole milk Greek yogurt, berries, oats. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Greek Yogurt with Berries and Oats should feel soft and moist on the tongue; prepare plain whole milk Greek yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve plain whole milk Greek yogurt in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade greek yogurt with berries and oats promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check plain whole milk Greek yogurt and berries and oats for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather soft toast, smooth peanut butter, banana. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Stir the smooth nut butter thoroughly into the other soft ingredients until no thick, sticky clumps remain. Never serve a spoonful of nut butter on its own.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Peanut Butter Banana Toast Strips works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Serve Peanut Butter Banana Toast Strips with enough moisture to separate the grains or pieces easily on the spoon.",
    "storageTip": "Refrigerate untouched homemade peanut butter banana toast strips promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Skip dry crusty pieces and offer grains in a moist, spoonable, or soft finger-food form. Thin smooth nut butter well into other soft food; never offer sticky spoonfuls or thick clumps. For severe eczema or egg allergy, seek your clinician's peanut-introduction plan.",
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
      "Gather cottage cheese, egg, oats. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cottage Cheese Pancake Pieces should feel soft and moist on the tongue; prepare cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade cottage cheese pancake pieces promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of cottage cheese; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather whole grain bread, egg, apple. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Apple Cinnamon French Toast Strips should feel soft and moist on the tongue; prepare whole grain bread so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of whole grain bread alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade apple cinnamon french toast strips promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of whole grain bread; every bite should flatten easily between your fingers. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather soft toast, ricotta, peach. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Ricotta Toast with Peach should feel soft and moist on the tongue; prepare soft toast so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve soft toast in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade ricotta toast with peach promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check soft toast and ricotta and peach for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather potato, egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Breakfast Potatoes with Egg should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Pair potato with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade soft breakfast potatoes with egg promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather plain whole milk yogurt, banana, soft soaked chia. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Yogurt Chia Banana Bowl should feel soft and moist on the tongue; prepare plain whole milk yogurt so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of plain whole milk yogurt alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade yogurt chia banana bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of plain whole milk yogurt; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather ricotta, blueberries, oats. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Blueberry Ricotta Oat Bake should feel soft and moist on the tongue; prepare ricotta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve ricotta in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade blueberry ricotta oat bake promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Beef needs extra attention because chewy pieces linger in the mouth; trim gristle and blend or mince until very tender. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather ground turkey, oats, egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Turkey Meatball Pieces should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Pair ground turkey with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade turkey meatball pieces promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "When serving Turkey Meatball Pieces, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground beef, breadcrumbs, egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Beef Meatball Pieces should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Start with a small spoonful of ground beef alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade beef meatball pieces promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground beef; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather salmon, potato, egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Salmon Cakes should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Start with a small spoonful of salmon alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade salmon cakes promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of salmon; every bite should flatten easily between your fingers. Cook fish thoroughly and inspect every bite for bones before serving.",
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
      "Gather chicken thigh, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Shredded Chicken with Avocado should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Serve chicken thigh in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade shredded chicken with avocado promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather soft tortilla, black beans, cheese. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Black Bean Quesadilla Strips should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Pair soft tortilla with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade black bean quesadilla strips promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "With Black Bean Quesadilla Strips, use a soft texture first and stop for medical advice if breathing changes, swelling, or repeated vomiting appears. Mash whole beans or chickpeas until no firm round pieces remain. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather black beans, rice, mild cheddar. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cheesy Bean Rice Bowl should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of black beans alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade cheesy bean rice bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of black beans; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather chicken, rice, broccoli. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Chicken and Rice Bowl should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Serve chicken in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade chicken and rice bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground turkey, beans, tomato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Turkey Chili should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Pair ground turkey with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade turkey chili promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Turkey Chili, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms. Mash whole beans or chickpeas until no firm round pieces remain. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground beef, lentils, tomato sauce. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Beef and Lentil Bolognese should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Start with a small spoonful of ground beef alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade beef and lentil bolognese promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground beef; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather small pasta, cheese, peas. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mac and Cheese with Peas should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small pasta alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade mac and cheese with peas promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of small pasta; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather small pasta, broccoli, mild cheese. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Broccoli Cheese Pasta should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve small pasta in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade broccoli cheese pasta promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather egg noodles, chicken, butter. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Butter Noodles with Chicken should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Pair egg noodles with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade butter noodles with chicken promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Butter Noodles with Chicken, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather sweet potato, black beans, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Sweet Potato Black Bean Bowl should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Start with a small spoonful of sweet potato alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade sweet potato black bean bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of sweet potato; every bite should flatten easily between your fingers. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather tofu, rice, zucchini. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Tofu Rice Veggie Bowl should feel soft and moist on the tongue; cook it fully, offer a soft texture, and watch for rash, vomiting, or breathing changes after introduction.",
    "servingTip": "Serve tofu in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade tofu rice veggie bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check tofu and rice and zucchini for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather soft pita, hummus, plain yogurt. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Hummus Pita Strips and Cucumber Yogurt should feel soft and moist on the tongue; prepare soft pita so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair soft pita with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade hummus pita strips and cucumber yogurt promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "When serving Hummus Pita Strips and Cucumber Yogurt, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather chicken, peas, carrots. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Chicken Pot Pie Filling should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade chicken pot pie filling promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken; every bite should flatten easily between your fingers. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground turkey, oats. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mini Turkey Burger Pieces should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Start with a small spoonful of ground turkey alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade mini turkey burger pieces promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of ground turkey; every bite should flatten easily between your fingers. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather ground beef, rice, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Beef Taco Bowl should feel soft and moist on the tongue; cook until tender, mince finely, and keep each bite soft instead of dry or chewy.",
    "servingTip": "Serve ground beef in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade soft beef taco bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather lentils, carrots, tomato. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Lentil Soup Thickened should feel soft and moist on the tongue; cook until very soft and loosen the mash so it does not become pasty.",
    "servingTip": "Pair lentils with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade lentil soup thickened promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "With Lentil Soup Thickened, use a soft texture first and stop for medical advice if breathing changes, swelling, or repeated vomiting appears. Mash whole beans or chickpeas until no firm round pieces remain. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form.",
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
      "Gather chicken, small noodles, carrots. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Chicken Noodle Soup Solids should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Start with a small spoonful of chicken alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade chicken noodle soup solids promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of chicken; every bite should flatten easily between your fingers. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather soft toast, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Avocado Toast Cubes works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Keep the first serving of Avocado Toast Cubes small and slow, especially if the food contains pasta, rice, or oatmeal that can become sticky.",
    "storageTip": "Refrigerate untouched homemade avocado toast cubes promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather mild cheese, soft pear. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cheese and Soft Pear Pieces should feel soft and moist on the tongue; prepare mild cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair mild cheese with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade cheese and soft pear pieces promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Cheese and Soft Pear Pieces, offer a small first portion and watch closely for skin, stomach, cough, wheeze, or breathing symptoms. Avoid hard raw chunks; cook firm produce until mashable or prepare in a developmentally safe form. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather soft tortilla, smooth peanut butter, banana. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Peel and prepare the ripe fruit. Mash until smooth or soft enough for your baby's feeding skills; raw ripe avocado or banana does not need cooking.",
      "Stir the smooth nut butter thoroughly into the other soft ingredients until no thick, sticky clumps remain. Never serve a spoonful of nut butter on its own.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Banana Peanut Butter Roll-Ups should be ripe, peeled when needed, and mashed or cut so the fruit collapses with gentle pressure.",
    "servingTip": "Offer a small taste of soft tortilla first; tart fruits can surprise babies, so mix with yogurt or cereal if needed.",
    "storageTip": "Refrigerate untouched homemade banana peanut butter roll-ups promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Remove peels, pits, seeds, and firm edges from soft tortilla; slippery pieces should be sized so they are easy to control. Thin smooth nut butter well into other soft food; never offer sticky spoonfuls or thick clumps. For severe eczema or egg allergy, seek your clinician's peanut-introduction plan.",
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
      "Gather small pasta, mild pesto, plain yogurt. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mini Pasta with Pesto Yogurt should feel soft and moist on the tongue; prepare small pasta so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of small pasta alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade mini pasta with pesto yogurt promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of small pasta; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather polenta, parmesan. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Polenta Squares should match your baby’s current chewing skills: soft, moist, and easy to mash with gentle finger pressure.",
    "servingTip": "Begin with a small amount of Soft Polenta Squares and adjust the size or thickness based on how your baby manages it.",
    "storageTip": "Refrigerate untouched homemade soft polenta squares promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather zucchini, egg, flour. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Zucchini Fritters should feel soft and moist on the tongue; prepare zucchini so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair zucchini with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade soft zucchini fritters promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather cottage cheese, peach. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cottage Cheese and Peach Bites should feel soft and moist on the tongue; prepare cottage cheese so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of cottage cheese alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade cottage cheese and peach bites promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of cottage cheese; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather chickpeas, yogurt, soft toast. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Use pasteurized dairy products. Prepare any fruit, grains, or other ingredients separately as needed; soften firm pieces before combining. Keep perishable ingredients cold until serving.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mashed Chickpea Salad Toast should feel soft and moist on the tongue; prepare chickpeas so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve chickpeas in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade mashed chickpea salad toast promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid dry, chewy, round, or firm protein pieces that do not break down quickly with gentle pressure. Mash whole beans or chickpeas until no firm round pieces remain. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather soft bread, mild cheddar. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Mini Grilled Cheese Triangles should feel soft and moist on the tongue; prepare soft bread so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair soft bread with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade mini grilled cheese triangles promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Check soft bread and mild cheddar for firm, slippery, round, or sticky pieces. Prepare a soft, moist texture that matches your baby's current chewing and swallowing skills; stay with your baby throughout the meal.",
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
      "Gather oats, banana, egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Baked Oat Bars should feel soft and moist on the tongue; prepare oats so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of oats alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade soft baked oat bars promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather broccoli, egg, cheese. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Broccoli Tots should feel soft and moist on the tongue; prepare broccoli so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of broccoli alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade soft broccoli tots promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of broccoli; every bite should flatten easily between your fingers. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather cauliflower, cheese, egg. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Cauliflower Cheese Mash Bites should feel soft and moist on the tongue; prepare cauliflower so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve cauliflower in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade cauliflower cheese mash bites promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For egg, avoid rubbery chunks and large slippery pieces; keep it soft, fully cooked, and easy to mash. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather sweet potato, egg, flour. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook the egg fully; if other ingredients also require cooking, prepare them safely until soft. Do not serve runny or undercooked egg.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Sweet Potato Pancake Bites should feel soft and moist on the tongue; prepare sweet potato so it stays tender, moist, and easy to break apart.",
    "servingTip": "Pair sweet potato with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade sweet potato pancake bites promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
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
      "Gather blueberries, yogurt, flour. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Blueberry Yogurt Muffin Pieces should feel soft and moist on the tongue; prepare blueberries so it stays tender, moist, and easy to break apart.",
    "servingTip": "Start with a small spoonful of blueberries alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade blueberry yogurt muffin pieces promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of blueberries; every bite should flatten easily between your fingers. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather small pasta shells, ricotta, spinach. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Spinach Ricotta Pasta Shells should feel soft and moist on the tongue; prepare small pasta shells so it stays tender, moist, and easy to break apart.",
    "servingTip": "Serve small pasta shells in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade spinach ricotta pasta shells promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Beef needs extra attention because chewy pieces linger in the mouth; trim gristle and blend or mince until very tender. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months.",
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
      "Gather turkey, mild cheese, soft tortilla. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Turkey and Cheese Roll-Ups should feel soft and moist on the tongue; break it into tiny moist pieces so it does not clump in the mouth.",
    "servingTip": "Pair turkey with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade turkey and cheese roll-ups promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "For Turkey and Cheese Roll-Ups, keep the texture baby-safe and watch for hives, swelling, repeated vomiting, coughing, wheezing, or breathing changes. Use pasteurized dairy products without added sugar where practical; cow's milk as a drink is not recommended before 12 months. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
      "Gather soft flatbread, tomato sauce, mild mozzarella. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Soft Mini Pizza Squares works best when the grain is soft, hydrated, and loose enough that it does not form a sticky ball.",
    "servingTip": "Offer Soft Mini Pizza Squares while it is freshly softened; grains thicken as they stand, so check the spoonful before giving more.",
    "storageTip": "Refrigerate untouched homemade soft mini pizza squares promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid dense clumps of soft flatbread; spread or break the food apart so each bite is easy to swallow. Do not serve firm round berries or whole grapes; mash or cut appropriately for your baby's feeding skills.",
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
      "Gather salmon, rice, avocado. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook salmon, rice, avocado as appropriate; fish must be fully cooked. Carefully check for and remove all bones, skin, and tough pieces before mashing.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Salmon Rice Avocado Bowl should feel soft and moist on the tongue; flake carefully, remove bones, and keep the fish moist so pieces separate easily.",
    "servingTip": "Start with a small spoonful of salmon alongside a familiar food, then pause so your baby can manage the richer texture.",
    "storageTip": "Refrigerate untouched homemade salmon rice avocado bowl promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Avoid large, dry, or springy pieces of salmon; every bite should flatten easily between your fingers. Cook fish thoroughly and inspect every bite for bones before serving.",
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
      "Gather beans, soft cornbread. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook any raw meat, fish, eggs, grains, beans, or firm produce as needed until fully cooked and soft; do not assume every ingredient requires heating. Remove bones, tough skins, seeds, and hard pieces where applicable.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Beans and Cornbread Mash should feel soft and moist on the tongue; mash until skins are broken down and add liquid until the texture is easy to swallow.",
    "servingTip": "Serve beans in a calm meal window and offer water in a cup for older babies if the texture feels dense.",
    "storageTip": "Refrigerate untouched homemade beans and cornbread mash promptly in a clean, sealed container at 40°F (4°C) or below; use within 1–2 days or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "Chicken can become stringy when dry, so remove tough edges and keep every piece soft, moist, and finely shredded. Mash whole beans or chickpeas until no firm round pieces remain.",
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
      "Gather chicken, broccoli, cheddar. Wash fresh produce under running water and prepare each ingredient according to its package instructions and food-safety requirements.",
      "Cook all meat thoroughly to a safe internal temperature according to USDA guidance. Remove bones, skin, and gristle, then shred finely and moisten.",
      "Mash, blend, shred, or cut the prepared ingredients into a moist texture appropriate for your baby's current feeding skills. Check for sticky, hard, round, or chewy pieces before serving.",
      "Serve a small portion with your baby seated upright and supervised throughout. Stop and seek emergency help for choking or breathing difficulty."
    ],
    "textureGuide": "Chicken Broccoli Cheddar Bites should feel soft and moist on the tongue; shred it very small and keep it moist with cooking liquid, breast milk, formula, or a mild sauce.",
    "servingTip": "Pair chicken with a soft vegetable or grain to make the bite less dry and easier to move around the mouth.",
    "storageTip": "Refrigerate untouched homemade chicken broccoli cheddar bites promptly in a clean, sealed container at 40°F (4°C) or below; use within 24 hours or freeze promptly following FDA baby-food guidance. Discard any portion that your baby's spoon or mouth contacted, and never leave perishable food out for more than 2 hours. Reheat only the serving you need until steaming hot, then cool to a safe feeding temperature.",
    "safetyTip": "When serving Chicken Broccoli Cheddar Bites, introduce it in a calm window and monitor for rash, facial swelling, vomiting, cough, wheeze, or breathing changes. Cook meat thoroughly; remove bones and tough or chewy pieces, and keep portions moist.",
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
