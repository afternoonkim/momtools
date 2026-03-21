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
    slug: 'infant-oatmeal-with-breast-milk',
    title: 'Infant Oatmeal with Breast Milk or Formula',
    stage: 'early',
    category: 'Iron-rich starters',
    ingredients: [
      'infant oatmeal cereal',
      'breast milk or formula'
    ],
    summary: 'A classic US first food that adds iron while keeping texture very smooth.',
    howToMake: [
      'Wash and prepare the infant oatmeal cereal, breast milk or formula using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'infant oatmeal with breast milk or formula',
      'iron-rich starters',
      'early',
      'infant oatmeal cereal',
      'breast milk or formula'
    ]
  },
  {
    slug: 'avocado-mash',
    title: 'Avocado Mash',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'ripe avocado'
    ],
    summary: 'Creamy avocado is easy to mash and works well as a first spoon-fed food.',
    howToMake: [
      'Wash and prepare the ripe avocado using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'avocado mash',
      'soft fruit and veggie starters',
      'early',
      'ripe avocado'
    ]
  },
  {
    slug: 'banana-oat-mash',
    title: 'Banana Oat Mash',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'ripe banana',
      'infant oatmeal cereal'
    ],
    summary: 'Banana mixed with infant oatmeal makes a thicker first meal with familiar flavor.',
    howToMake: [
      'Wash and prepare the ripe banana, infant oatmeal cereal using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'banana oat mash',
      'soft fruit and veggie starters',
      'early',
      'ripe banana',
      'infant oatmeal cereal'
    ]
  },
  {
    slug: 'sweet-potato-puree',
    title: 'Sweet Potato Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'sweet potato'
    ],
    summary: 'Sweet potato is naturally soft and easy to puree for early solids.',
    howToMake: [
      'Wash and prepare the sweet potato using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'sweet potato puree',
      'soft fruit and veggie starters',
      'early',
      'sweet potato'
    ]
  },
  {
    slug: 'pear-puree',
    title: 'Pear Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'ripe pear'
    ],
    summary: 'A gentle fruit puree that many families use after a few simple starter foods.',
    howToMake: [
      'Wash and prepare the ripe pear using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'pear puree',
      'soft fruit and veggie starters',
      'early',
      'ripe pear'
    ]
  },
  {
    slug: 'apple-puree',
    title: 'Apple Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'apple'
    ],
    summary: 'Cooked apple puree offers a smooth spoon texture and mild flavor.',
    howToMake: [
      'Wash and prepare the apple using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'apple puree',
      'soft fruit and veggie starters',
      'early',
      'apple'
    ]
  },
  {
    slug: 'butternut-squash-puree',
    title: 'Butternut Squash Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'butternut squash'
    ],
    summary: 'A smooth orange puree with a naturally sweet taste.',
    howToMake: [
      'Wash and prepare the butternut squash using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'butternut squash puree',
      'soft fruit and veggie starters',
      'early',
      'butternut squash'
    ]
  },
  {
    slug: 'pumpkin-puree',
    title: 'Pumpkin Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'pumpkin'
    ],
    summary: 'Pumpkin puree can be served smooth and thin for early practice.',
    howToMake: [
      'Wash and prepare the pumpkin using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'pumpkin puree',
      'soft fruit and veggie starters',
      'early',
      'pumpkin'
    ]
  },
  {
    slug: 'carrot-puree',
    title: 'Carrot Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'carrots'
    ],
    summary: 'Cooked carrots blend into a smooth puree with a mild sweetness.',
    howToMake: [
      'Wash and prepare the carrots using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'carrot puree',
      'soft fruit and veggie starters',
      'early',
      'carrots'
    ]
  },
  {
    slug: 'peas-puree',
    title: 'Pea Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'green peas'
    ],
    summary: 'Pea puree adds vegetable variety once your baby handles smooth textures well.',
    howToMake: [
      'Wash and prepare the green peas using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'pea puree',
      'soft fruit and veggie starters',
      'early',
      'green peas'
    ]
  },
  {
    slug: 'green-bean-puree',
    title: 'Green Bean Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'green beans'
    ],
    summary: 'Green beans can be blended smooth for an easy vegetable starter.',
    howToMake: [
      'Wash and prepare the green beans using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'green bean puree',
      'soft fruit and veggie starters',
      'early',
      'green beans'
    ]
  },
  {
    slug: 'zucchini-puree',
    title: 'Zucchini Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'zucchini'
    ],
    summary: 'Zucchini cooks quickly and blends into a mild early puree.',
    howToMake: [
      'Wash and prepare the zucchini using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'zucchini puree',
      'soft fruit and veggie starters',
      'early',
      'zucchini'
    ]
  },
  {
    slug: 'prune-puree',
    title: 'Prune Puree',
    stage: 'early',
    category: 'Fruit options',
    ingredients: [
      'pitted prunes'
    ],
    summary: 'Prune puree is often used in tiny amounts when parents want a fruit option with fiber.',
    howToMake: [
      'Wash and prepare the pitted prunes using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'prune puree',
      'fruit options',
      'early',
      'pitted prunes'
    ]
  },
  {
    slug: 'peach-puree',
    title: 'Peach Puree',
    stage: 'early',
    category: 'Fruit options',
    ingredients: [
      'ripe peach'
    ],
    summary: 'Cooked peach puree brings a soft texture and bright fruit flavor.',
    howToMake: [
      'Wash and prepare the ripe peach using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'peach puree',
      'fruit options',
      'early',
      'ripe peach'
    ]
  },
  {
    slug: 'mango-puree',
    title: 'Mango Puree',
    stage: 'early',
    category: 'Fruit options',
    ingredients: [
      'ripe mango'
    ],
    summary: 'Very ripe mango can be blended smooth for a simple fruit puree.',
    howToMake: [
      'Wash and prepare the ripe mango using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'mango puree',
      'fruit options',
      'early',
      'ripe mango'
    ]
  },
  {
    slug: 'blueberry-oat-puree',
    title: 'Blueberry Oat Puree',
    stage: 'early',
    category: 'Fruit options',
    ingredients: [
      'blueberries',
      'infant oatmeal cereal'
    ],
    summary: 'Blueberries mixed with oatmeal make a thicker spoon-fed breakfast.',
    howToMake: [
      'Wash and prepare the blueberries, infant oatmeal cereal using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'blueberry oat puree',
      'fruit options',
      'early',
      'blueberries',
      'infant oatmeal cereal'
    ]
  },
  {
    slug: 'plain-whole-milk-yogurt',
    title: 'Plain Whole Milk Yogurt',
    stage: 'early',
    category: 'Early allergen-friendly foods',
    ingredients: [
      'plain whole milk yogurt'
    ],
    summary: 'Unsweetened whole milk yogurt is a common US baby food for early variety.',
    howToMake: [
      'Wash and prepare the plain whole milk yogurt using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'plain whole milk yogurt',
      'early allergen-friendly foods',
      'early',
      'plain whole milk yogurt'
    ]
  },
  {
    slug: 'scrambled-egg-mash',
    title: 'Soft Scrambled Egg Mash',
    stage: 'early',
    category: 'Early allergen-friendly foods',
    ingredients: [
      'egg'
    ],
    summary: 'Soft cooked egg gives protein and fits current early-allergen guidance for many babies.',
    howToMake: [
      'Wash and prepare the egg using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'soft scrambled egg mash',
      'early allergen-friendly foods',
      'early',
      'egg'
    ]
  },
  {
    slug: 'thinned-peanut-butter-oatmeal',
    title: 'Thinned Peanut Butter Oatmeal',
    stage: 'early',
    category: 'Early allergen-friendly foods',
    ingredients: [
      'smooth peanut butter',
      'infant oatmeal cereal'
    ],
    summary: 'A small amount of smooth peanut butter thinned into oatmeal is an age-appropriate way many families introduce peanut.',
    howToMake: [
      'Wash and prepare the smooth peanut butter, infant oatmeal cereal using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'thinned peanut butter oatmeal',
      'early allergen-friendly foods',
      'early',
      'smooth peanut butter',
      'infant oatmeal cereal'
    ]
  },
  {
    slug: 'thinned-almond-butter-oatmeal',
    title: 'Thinned Almond Butter Oatmeal',
    stage: 'early',
    category: 'Early allergen-friendly foods',
    ingredients: [
      'smooth almond butter',
      'infant oatmeal cereal'
    ],
    summary: 'This offers a nut exposure option when your pediatrician says it is appropriate.',
    howToMake: [
      'Wash and prepare the smooth almond butter, infant oatmeal cereal using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'thinned almond butter oatmeal',
      'early allergen-friendly foods',
      'early',
      'smooth almond butter',
      'infant oatmeal cereal'
    ]
  },
  {
    slug: 'ricotta-and-pear-mash',
    title: 'Ricotta and Pear Mash',
    stage: 'early',
    category: 'Early allergen-friendly foods',
    ingredients: [
      'whole milk ricotta',
      'pear puree'
    ],
    summary: 'Ricotta and pear make a soft spoon-fed combo with dairy exposure.',
    howToMake: [
      'Wash and prepare the whole milk ricotta, pear puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'ricotta and pear mash',
      'early allergen-friendly foods',
      'early',
      'whole milk ricotta',
      'pear puree'
    ]
  },
  {
    slug: 'cottage-cheese-peach-mash',
    title: 'Cottage Cheese Peach Mash',
    stage: 'early',
    category: 'Early allergen-friendly foods',
    ingredients: [
      'small curd cottage cheese',
      'peach puree'
    ],
    summary: 'Smooth blended cottage cheese with peach works well for babies already trying dairy.',
    howToMake: [
      'Wash and prepare the small curd cottage cheese, peach puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'cottage cheese peach mash',
      'early allergen-friendly foods',
      'early',
      'small curd cottage cheese',
      'peach puree'
    ]
  },
  {
    slug: 'mashed-black-beans',
    title: 'Mashed Black Beans',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'black beans'
    ],
    summary: 'Mashed beans are an easy iron-rich option for early solids.',
    howToMake: [
      'Wash and prepare the black beans using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'mashed black beans',
      'iron-rich proteins',
      'early',
      'black beans'
    ]
  },
  {
    slug: 'mashed-lentils',
    title: 'Mashed Lentils',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'red lentils'
    ],
    summary: 'Soft cooked lentils mash easily and add iron and protein.',
    howToMake: [
      'Wash and prepare the red lentils using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'mashed lentils',
      'iron-rich proteins',
      'early',
      'red lentils'
    ]
  },
  {
    slug: 'chicken-puree',
    title: 'Chicken Puree',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'chicken thigh',
      'water or broth'
    ],
    summary: 'Pureed chicken is a practical meat option once you want to add iron-rich foods.',
    howToMake: [
      'Wash and prepare the chicken thigh, water or broth using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'chicken puree',
      'iron-rich proteins',
      'early',
      'chicken thigh',
      'water or broth'
    ]
  },
  {
    slug: 'turkey-puree',
    title: 'Turkey Puree',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'ground turkey',
      'water or broth'
    ],
    summary: 'Turkey can be blended smooth into an iron-rich puree.',
    howToMake: [
      'Wash and prepare the ground turkey, water or broth using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'turkey puree',
      'iron-rich proteins',
      'early',
      'ground turkey',
      'water or broth'
    ]
  },
  {
    slug: 'beef-puree',
    title: 'Beef Puree',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'ground beef',
      'water or broth'
    ],
    summary: 'Beef puree offers iron and zinc in a texture that works for early spoon feeding.',
    howToMake: [
      'Wash and prepare the ground beef, water or broth using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'beef puree',
      'iron-rich proteins',
      'early',
      'ground beef',
      'water or broth'
    ]
  },
  {
    slug: 'salmon-puree',
    title: 'Salmon Puree',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'salmon',
      'water'
    ],
    summary: 'Soft cooked salmon can be blended into a smooth puree for variety.',
    howToMake: [
      'Wash and prepare the salmon, water using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'salmon puree',
      'iron-rich proteins',
      'early',
      'salmon',
      'water'
    ]
  },
  {
    slug: 'tofu-avocado-blend',
    title: 'Tofu Avocado Blend',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'silken tofu',
      'avocado'
    ],
    summary: 'Silken tofu and avocado make a smooth plant-forward puree.',
    howToMake: [
      'Wash and prepare the silken tofu, avocado using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'tofu avocado blend',
      'iron-rich proteins',
      'early',
      'silken tofu',
      'avocado'
    ]
  },
  {
    slug: 'plain-greek-yogurt-with-banana',
    title: 'Plain Greek Yogurt with Banana',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'plain whole milk Greek yogurt',
      'banana'
    ],
    summary: 'Greek yogurt with banana gives a creamy texture and more protein.',
    howToMake: [
      'Wash and prepare the plain whole milk Greek yogurt, banana using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'plain greek yogurt with banana',
      'breakfast ideas',
      'early',
      'plain whole milk greek yogurt',
      'banana'
    ]
  },
  {
    slug: 'oatmeal-with-apple',
    title: 'Oatmeal with Apple',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'infant oatmeal cereal',
      'apple puree'
    ],
    summary: 'Apple oatmeal is a simple starter breakfast.',
    howToMake: [
      'Wash and prepare the infant oatmeal cereal, apple puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'oatmeal with apple',
      'breakfast ideas',
      'early',
      'infant oatmeal cereal',
      'apple puree'
    ]
  },
  {
    slug: 'oatmeal-with-prunes',
    title: 'Oatmeal with Prunes',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'infant oatmeal cereal',
      'prune puree'
    ],
    summary: 'A small prune mix can add variety to oatmeal.',
    howToMake: [
      'Wash and prepare the infant oatmeal cereal, prune puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'oatmeal with prunes',
      'breakfast ideas',
      'early',
      'infant oatmeal cereal',
      'prune puree'
    ]
  },
  {
    slug: 'oatmeal-with-pumpkin',
    title: 'Oatmeal with Pumpkin',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'infant oatmeal cereal',
      'pumpkin puree'
    ],
    summary: 'Pumpkin oatmeal is an easy seasonal baby food idea.',
    howToMake: [
      'Wash and prepare the infant oatmeal cereal, pumpkin puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'oatmeal with pumpkin',
      'breakfast ideas',
      'early',
      'infant oatmeal cereal',
      'pumpkin puree'
    ]
  },
  {
    slug: 'oatmeal-with-peach',
    title: 'Oatmeal with Peach',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'infant oatmeal cereal',
      'peach puree'
    ],
    summary: 'Peach oatmeal is a soft breakfast option with mild sweetness.',
    howToMake: [
      'Wash and prepare the infant oatmeal cereal, peach puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'oatmeal with peach',
      'breakfast ideas',
      'early',
      'infant oatmeal cereal',
      'peach puree'
    ]
  },
  {
    slug: 'cream-of-wheat-for-babies',
    title: 'Cream of Wheat for Babies',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'plain Cream of Wheat cereal',
      'breast milk or formula'
    ],
    summary: 'Smooth wheat cereal is used by some US families once wheat introduction fits their plan.',
    howToMake: [
      'Wash and prepare the plain Cream of Wheat cereal, breast milk or formula using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'cream of wheat for babies',
      'breakfast ideas',
      'early',
      'plain cream of wheat cereal',
      'breast milk or formula'
    ]
  },
  {
    slug: 'quinoa-cereal-mash',
    title: 'Quinoa Cereal Mash',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'plain cooked quinoa',
      'water'
    ],
    summary: 'Very soft quinoa blended smooth adds grain variety.',
    howToMake: [
      'Wash and prepare the plain cooked quinoa, water using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'quinoa cereal mash',
      'breakfast ideas',
      'early',
      'plain cooked quinoa',
      'water'
    ]
  },
  {
    slug: 'barley-cereal-mash',
    title: 'Barley Cereal Mash',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'baby barley cereal',
      'breast milk or formula'
    ],
    summary: 'Barley cereal can be served thin and smooth like oatmeal.',
    howToMake: [
      'Wash and prepare the baby barley cereal, breast milk or formula using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'barley cereal mash',
      'breakfast ideas',
      'early',
      'baby barley cereal',
      'breast milk or formula'
    ]
  },
  {
    slug: 'mashed-sardine-with-sweet-potato',
    title: 'Mashed Sardine with Sweet Potato',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'boneless sardines',
      'sweet potato'
    ],
    summary: 'For families comfortable with fish, sardines with sweet potato add fats and iron.',
    howToMake: [
      'Wash and prepare the boneless sardines, sweet potato using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'mashed sardine with sweet potato',
      'iron-rich proteins',
      'early',
      'boneless sardines',
      'sweet potato'
    ]
  },
  {
    slug: 'egg-yolk-and-avocado-mash',
    title: 'Egg Yolk and Avocado Mash',
    stage: 'early',
    category: 'Early allergen-friendly foods',
    ingredients: [
      'hard cooked egg yolk',
      'avocado'
    ],
    summary: 'Egg yolk mashed into avocado creates a rich spoon-fed blend.',
    howToMake: [
      'Wash and prepare the hard cooked egg yolk, avocado using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'egg yolk and avocado mash',
      'early allergen-friendly foods',
      'early',
      'hard cooked egg yolk',
      'avocado'
    ]
  },
  {
    slug: 'white-bean-puree',
    title: 'White Bean Puree',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'cannellini beans'
    ],
    summary: 'White beans blend into a smooth and mild puree.',
    howToMake: [
      'Wash and prepare the cannellini beans using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'white bean puree',
      'iron-rich proteins',
      'early',
      'cannellini beans'
    ]
  },
  {
    slug: 'broccoli-potato-puree',
    title: 'Broccoli Potato Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'broccoli',
      'potato'
    ],
    summary: 'Broccoli and potato make a thicker vegetable puree.',
    howToMake: [
      'Wash and prepare the broccoli, potato using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'broccoli potato puree',
      'soft fruit and veggie starters',
      'early',
      'broccoli',
      'potato'
    ]
  },
  {
    slug: 'cauliflower-puree',
    title: 'Cauliflower Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'cauliflower'
    ],
    summary: 'Soft cauliflower can be blended smooth for another vegetable option.',
    howToMake: [
      'Wash and prepare the cauliflower using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'cauliflower puree',
      'soft fruit and veggie starters',
      'early',
      'cauliflower'
    ]
  },
  {
    slug: 'spinach-potato-puree',
    title: 'Spinach Potato Puree',
    stage: 'early',
    category: 'Soft fruit and veggie starters',
    ingredients: [
      'spinach',
      'potato'
    ],
    summary: 'A spinach and potato blend adds more savory vegetable flavor.',
    howToMake: [
      'Wash and prepare the spinach, potato using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'spinach potato puree',
      'soft fruit and veggie starters',
      'early',
      'spinach',
      'potato'
    ]
  },
  {
    slug: 'beet-apple-puree',
    title: 'Beet Apple Puree',
    stage: 'early',
    category: 'Fruit options',
    ingredients: [
      'beets',
      'apple'
    ],
    summary: 'Beet and apple puree adds variety once basics are going well.',
    howToMake: [
      'Wash and prepare the beets, apple using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'beet apple puree',
      'fruit options',
      'early',
      'beets',
      'apple'
    ]
  },
  {
    slug: 'apricot-puree',
    title: 'Apricot Puree',
    stage: 'early',
    category: 'Fruit options',
    ingredients: [
      'ripe apricot'
    ],
    summary: 'Cooked apricot puree offers another fruit flavor for rotation.',
    howToMake: [
      'Wash and prepare the ripe apricot using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'apricot puree',
      'fruit options',
      'early',
      'ripe apricot'
    ]
  },
  {
    slug: 'mashed-chickpeas',
    title: 'Mashed Chickpeas',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'chickpeas'
    ],
    summary: 'Mashed chickpeas work well when blended very smooth.',
    howToMake: [
      'Wash and prepare the chickpeas using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'mashed chickpeas',
      'iron-rich proteins',
      'early',
      'chickpeas'
    ]
  },
  {
    slug: 'plain-yogurt-with-mango',
    title: 'Plain Yogurt with Mango',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'plain whole milk yogurt',
      'mango puree'
    ],
    summary: 'A creamy fruit-and-yogurt bowl for babies already trying dairy.',
    howToMake: [
      'Wash and prepare the plain whole milk yogurt, mango puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'plain yogurt with mango',
      'breakfast ideas',
      'early',
      'plain whole milk yogurt',
      'mango puree'
    ]
  },
  {
    slug: 'oatmeal-with-blueberries-and-yogurt',
    title: 'Oatmeal with Blueberries and Yogurt',
    stage: 'early',
    category: 'Breakfast ideas',
    ingredients: [
      'infant oatmeal cereal',
      'blueberry puree',
      'plain whole milk yogurt'
    ],
    summary: 'A thicker breakfast bowl with grain, fruit, and dairy.',
    howToMake: [
      'Wash and prepare the infant oatmeal cereal, blueberry puree, plain whole milk yogurt using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'oatmeal with blueberries and yogurt',
      'breakfast ideas',
      'early',
      'infant oatmeal cereal',
      'blueberry puree',
      'plain whole milk yogurt'
    ]
  },
  {
    slug: 'tofu-pear-puree',
    title: 'Tofu Pear Puree',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'silken tofu',
      'pear puree'
    ],
    summary: 'Silken tofu and pear make a smooth protein-forward puree.',
    howToMake: [
      'Wash and prepare the silken tofu, pear puree using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'tofu pear puree',
      'iron-rich proteins',
      'early',
      'silken tofu',
      'pear puree'
    ]
  },
  {
    slug: 'mashed-pinto-beans',
    title: 'Mashed Pinto Beans',
    stage: 'early',
    category: 'Iron-rich proteins',
    ingredients: [
      'pinto beans'
    ],
    summary: 'Pinto beans mash easily and fit many family meal patterns in the US.',
    howToMake: [
      'Wash and prepare the pinto beans using a simple method such as steaming, baking, or stirring until the food is very soft.',
      'Mash or blend until the texture is smooth enough for your baby’s current stage. Thin with breast milk, formula, water, or plain yogurt only as needed.',
      'Serve a small amount on a baby spoon and watch how your baby handles the texture before offering more.'
    ],
    textureGuide: 'Smooth puree or loose mash with no firm pieces. It should spread easily on a spoon and not feel sticky or chunky.',
    servingTip: 'Start with a small serving once a day and let breast milk or formula remain the main source of nutrition.',
    storageTip: 'Refrigerate leftovers in a sealed container and use quickly. Freeze only if the texture still reheats smoothly.',
    safetyTip: 'Introduce new foods in baby-safe textures. For peanut or tree nut exposure, thin smooth nut butter into cereal or yogurt rather than offering it straight from the spoon.',
    ageFit: 'Around 6 months, once your baby shows readiness signs',
    searchTerms: [
      'mashed pinto beans',
      'iron-rich proteins',
      'early',
      'pinto beans'
    ]
  },
  {
    slug: 'thick-oatmeal-with-banana',
    title: 'Thick Oatmeal with Banana',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'infant oatmeal cereal',
      'banana'
    ],
    summary: 'A thicker oatmeal bowl for babies moving beyond very thin purees.',
    howToMake: [
      'Cook the infant oatmeal cereal, banana until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'thick oatmeal with banana',
      'stage 2 breakfasts',
      'middle',
      'infant oatmeal cereal',
      'banana'
    ]
  },
  {
    slug: 'greek-yogurt-with-strawberry',
    title: 'Greek Yogurt with Strawberry',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'plain whole milk Greek yogurt',
      'strawberries'
    ],
    summary: 'A simple fruit-and-yogurt bowl with a thicker spoon texture.',
    howToMake: [
      'Cook the plain whole milk Greek yogurt, strawberries until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'greek yogurt with strawberry',
      'stage 2 breakfasts',
      'middle',
      'plain whole milk greek yogurt',
      'strawberries'
    ]
  },
  {
    slug: 'oatmeal-with-peanut-butter-and-banana',
    title: 'Oatmeal with Peanut Butter and Banana',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'infant oatmeal cereal',
      'smooth peanut butter',
      'banana'
    ],
    summary: 'This stage 2 breakfast combines iron-fortified cereal with peanut and banana.',
    howToMake: [
      'Cook the infant oatmeal cereal, smooth peanut butter, banana until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'oatmeal with peanut butter and banana',
      'stage 2 breakfasts',
      'middle',
      'infant oatmeal cereal',
      'smooth peanut butter',
      'banana'
    ]
  },
  {
    slug: 'egg-and-avocado-mash',
    title: 'Egg and Avocado Mash',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'soft scrambled egg',
      'avocado'
    ],
    summary: 'Soft egg and avocado make an easy protein-rich combo meal.',
    howToMake: [
      'Cook the soft scrambled egg, avocado until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'egg and avocado mash',
      'stage 2 breakfasts',
      'middle',
      'soft scrambled egg',
      'avocado'
    ]
  },
  {
    slug: 'ricotta-blueberry-bowl',
    title: 'Ricotta Blueberry Bowl',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'whole milk ricotta',
      'blueberries'
    ],
    summary: 'Ricotta with mashed blueberries creates a thick breakfast bowl.',
    howToMake: [
      'Cook the whole milk ricotta, blueberries until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'ricotta blueberry bowl',
      'stage 2 breakfasts',
      'middle',
      'whole milk ricotta',
      'blueberries'
    ]
  },
  {
    slug: 'yogurt-oat-and-peach-bowl',
    title: 'Yogurt Oat and Peach Bowl',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'plain whole milk yogurt',
      'oatmeal',
      'peach'
    ],
    summary: 'A filling breakfast that mixes dairy, fruit, and grain.',
    howToMake: [
      'Cook the plain whole milk yogurt, oatmeal, peach until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'yogurt oat and peach bowl',
      'stage 2 breakfasts',
      'middle',
      'plain whole milk yogurt',
      'oatmeal',
      'peach'
    ]
  },
  {
    slug: 'cottage-cheese-banana-bowl',
    title: 'Cottage Cheese Banana Bowl',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'small curd cottage cheese',
      'banana'
    ],
    summary: 'A soft breakfast option for babies already handling dairy.',
    howToMake: [
      'Cook the small curd cottage cheese, banana until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'cottage cheese banana bowl',
      'stage 2 breakfasts',
      'middle',
      'small curd cottage cheese',
      'banana'
    ]
  },
  {
    slug: 'pumpkin-oatmeal-bowl',
    title: 'Pumpkin Oatmeal Bowl',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'pumpkin puree',
      'oatmeal'
    ],
    summary: 'Pumpkin oatmeal is a thick spoon-fed meal with familiar fall flavors.',
    howToMake: [
      'Cook the pumpkin puree, oatmeal until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'pumpkin oatmeal bowl',
      'stage 2 breakfasts',
      'middle',
      'pumpkin puree',
      'oatmeal'
    ]
  },
  {
    slug: 'apple-cinnamon-oatmeal-bowl',
    title: 'Apple Cinnamon Oatmeal Bowl',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'apple puree',
      'oatmeal',
      'cinnamon'
    ],
    summary: 'A mild cinnamon note can add variety once your baby has handled the basics.',
    howToMake: [
      'Cook the apple puree, oatmeal, cinnamon until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'apple cinnamon oatmeal bowl',
      'stage 2 breakfasts',
      'middle',
      'apple puree',
      'oatmeal',
      'cinnamon'
    ]
  },
  {
    slug: 'chia-yogurt-mango-bowl',
    title: 'Chia Yogurt Mango Bowl',
    stage: 'middle',
    category: 'Stage 2 breakfasts',
    ingredients: [
      'plain whole milk yogurt',
      'mango',
      'soft soaked chia'
    ],
    summary: 'A thicker bowl with yogurt and fruit once textures are going well.',
    howToMake: [
      'Cook the plain whole milk yogurt, mango, soft soaked chia until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'chia yogurt mango bowl',
      'stage 2 breakfasts',
      'middle',
      'plain whole milk yogurt',
      'mango',
      'soft soaked chia'
    ]
  },
  {
    slug: 'sweet-potato-and-chicken-mash',
    title: 'Sweet Potato and Chicken Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'sweet potato',
      'chicken thigh'
    ],
    summary: 'A classic stage 2 combo with soft starch and tender chicken.',
    howToMake: [
      'Cook the sweet potato, chicken thigh until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'sweet potato and chicken mash',
      'stage 2 lunches and dinners',
      'middle',
      'sweet potato',
      'chicken thigh'
    ]
  },
  {
    slug: 'peas-and-chicken-mash',
    title: 'Peas and Chicken Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'peas',
      'chicken'
    ],
    summary: 'Chicken and peas make a simple savory combination.',
    howToMake: [
      'Cook the peas, chicken until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'peas and chicken mash',
      'stage 2 lunches and dinners',
      'middle',
      'peas',
      'chicken'
    ]
  },
  {
    slug: 'carrot-lentil-mash',
    title: 'Carrot Lentil Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'carrots',
      'red lentils'
    ],
    summary: 'Red lentils cook down quickly and blend well with carrots.',
    howToMake: [
      'Cook the carrots, red lentils until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'carrot lentil mash',
      'stage 2 lunches and dinners',
      'middle',
      'carrots',
      'red lentils'
    ]
  },
  {
    slug: 'butternut-squash-and-turkey-mash',
    title: 'Butternut Squash and Turkey Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'butternut squash',
      'ground turkey'
    ],
    summary: 'Turkey adds protein to a smooth squash base.',
    howToMake: [
      'Cook the butternut squash, ground turkey until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'butternut squash and turkey mash',
      'stage 2 lunches and dinners',
      'middle',
      'butternut squash',
      'ground turkey'
    ]
  },
  {
    slug: 'broccoli-potato-and-beef-mash',
    title: 'Broccoli Potato and Beef Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'broccoli',
      'potato',
      'ground beef'
    ],
    summary: 'A thicker savory mash with iron-rich beef.',
    howToMake: [
      'Cook the broccoli, potato, ground beef until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'broccoli potato and beef mash',
      'stage 2 lunches and dinners',
      'middle',
      'broccoli',
      'potato',
      'ground beef'
    ]
  },
  {
    slug: 'salmon-and-sweet-potato-mash',
    title: 'Salmon and Sweet Potato Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'salmon',
      'sweet potato'
    ],
    summary: 'Salmon and sweet potato make a soft combo with healthy fats.',
    howToMake: [
      'Cook the salmon, sweet potato until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'salmon and sweet potato mash',
      'stage 2 lunches and dinners',
      'middle',
      'salmon',
      'sweet potato'
    ]
  },
  {
    slug: 'zucchini-and-white-bean-mash',
    title: 'Zucchini and White Bean Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'zucchini',
      'white beans'
    ],
    summary: 'A gentle plant-based stage 2 meal.',
    howToMake: [
      'Cook the zucchini, white beans until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'zucchini and white bean mash',
      'stage 2 lunches and dinners',
      'middle',
      'zucchini',
      'white beans'
    ]
  },
  {
    slug: 'cauliflower-and-chickpea-mash',
    title: 'Cauliflower and Chickpea Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'cauliflower',
      'chickpeas'
    ],
    summary: 'Chickpeas and cauliflower make a thicker spoon-fed blend.',
    howToMake: [
      'Cook the cauliflower, chickpeas until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'cauliflower and chickpea mash',
      'stage 2 lunches and dinners',
      'middle',
      'cauliflower',
      'chickpeas'
    ]
  },
  {
    slug: 'spinach-potato-and-egg-mash',
    title: 'Spinach Potato and Egg Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'spinach',
      'potato',
      'egg'
    ],
    summary: 'A savory mash with greens, egg, and a soft potato base.',
    howToMake: [
      'Cook the spinach, potato, egg until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'spinach potato and egg mash',
      'stage 2 lunches and dinners',
      'middle',
      'spinach',
      'potato',
      'egg'
    ]
  },
  {
    slug: 'turkey-rice-and-pea-mash',
    title: 'Turkey Rice and Pea Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'ground turkey',
      'rice',
      'peas'
    ],
    summary: 'A spoon-fed version of a family-style meal.',
    howToMake: [
      'Cook the ground turkey, rice, peas until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'turkey rice and pea mash',
      'stage 2 lunches and dinners',
      'middle',
      'ground turkey',
      'rice',
      'peas'
    ]
  },
  {
    slug: 'lentil-vegetable-stew',
    title: 'Lentil Vegetable Stew',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'red lentils',
      'carrots',
      'tomato'
    ],
    summary: 'A very soft stew with lentils and vegetables.',
    howToMake: [
      'Cook the red lentils, carrots, tomato until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'lentil vegetable stew',
      'stage 2 lunches and dinners',
      'middle',
      'red lentils',
      'carrots',
      'tomato'
    ]
  },
  {
    slug: 'black-bean-sweet-potato-bowl',
    title: 'Black Bean Sweet Potato Bowl',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'black beans',
      'sweet potato'
    ],
    summary: 'This thick mash fits many US weeknight meal ingredients.',
    howToMake: [
      'Cook the black beans, sweet potato until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'black bean sweet potato bowl',
      'stage 2 lunches and dinners',
      'middle',
      'black beans',
      'sweet potato'
    ]
  },
  {
    slug: 'tofu-broccoli-rice-bowl',
    title: 'Tofu Broccoli Rice Bowl',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'tofu',
      'broccoli',
      'rice'
    ],
    summary: 'A soft bowl built from common family staples.',
    howToMake: [
      'Cook the tofu, broccoli, rice until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'tofu broccoli rice bowl',
      'stage 2 lunches and dinners',
      'middle',
      'tofu',
      'broccoli',
      'rice'
    ]
  },
  {
    slug: 'chicken-avocado-rice-bowl',
    title: 'Chicken Avocado Rice Bowl',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'chicken',
      'avocado',
      'rice'
    ],
    summary: 'A mild combo with protein, grain, and healthy fat.',
    howToMake: [
      'Cook the chicken, avocado, rice until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'chicken avocado rice bowl',
      'stage 2 lunches and dinners',
      'middle',
      'chicken',
      'avocado',
      'rice'
    ]
  },
  {
    slug: 'beef-quinoa-veggie-bowl',
    title: 'Beef Quinoa Veggie Bowl',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'ground beef',
      'quinoa',
      'carrots'
    ],
    summary: 'A thicker stage 2 bowl that brings in beef and grain.',
    howToMake: [
      'Cook the ground beef, quinoa, carrots until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'beef quinoa veggie bowl',
      'stage 2 lunches and dinners',
      'middle',
      'ground beef',
      'quinoa',
      'carrots'
    ]
  },
  {
    slug: 'pasta-with-ricotta-and-peas',
    title: 'Pasta with Ricotta and Peas',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'small pasta',
      'ricotta',
      'peas'
    ],
    summary: 'Well-cooked pasta can work once your baby handles thicker textures.',
    howToMake: [
      'Cook the small pasta, ricotta, peas until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'pasta with ricotta and peas',
      'stage 2 lunches and dinners',
      'middle',
      'small pasta',
      'ricotta',
      'peas'
    ]
  },
  {
    slug: 'turkey-pumpkin-pasta',
    title: 'Turkey Pumpkin Pasta',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'ground turkey',
      'pumpkin',
      'small pasta'
    ],
    summary: 'A smooth savory pasta bowl with turkey.',
    howToMake: [
      'Cook the ground turkey, pumpkin, small pasta until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'turkey pumpkin pasta',
      'stage 2 lunches and dinners',
      'middle',
      'ground turkey',
      'pumpkin',
      'small pasta'
    ]
  },
  {
    slug: 'egg-noodle-chicken-bowl',
    title: 'Egg Noodle Chicken Bowl',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'soft egg noodles',
      'chicken',
      'broth'
    ],
    summary: 'A baby version of simple noodle soup flavors.',
    howToMake: [
      'Cook the soft egg noodles, chicken, broth until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'egg noodle chicken bowl',
      'stage 2 lunches and dinners',
      'middle',
      'soft egg noodles',
      'chicken',
      'broth'
    ]
  },
  {
    slug: 'hummus-and-sweet-potato-bowl',
    title: 'Hummus and Sweet Potato Bowl',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'hummus',
      'sweet potato'
    ],
    summary: 'A thick spoon-fed bowl with chickpeas and sweet potato.',
    howToMake: [
      'Cook the hummus, sweet potato until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'hummus and sweet potato bowl',
      'stage 2 lunches and dinners',
      'middle',
      'hummus',
      'sweet potato'
    ]
  },
  {
    slug: 'mac-and-cauliflower-mash',
    title: 'Mac and Cauliflower Mash',
    stage: 'middle',
    category: 'Stage 2 lunches and dinners',
    ingredients: [
      'soft macaroni',
      'cauliflower',
      'cheese'
    ],
    summary: 'A very soft baby-friendly take on mac and cheese.',
    howToMake: [
      'Cook the soft macaroni, cauliflower, cheese until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'mac and cauliflower mash',
      'stage 2 lunches and dinners',
      'middle',
      'soft macaroni',
      'cauliflower',
      'cheese'
    ]
  },
  {
    slug: 'mashed-blueberries-and-ricotta',
    title: 'Mashed Blueberries and Ricotta',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'blueberries',
      'ricotta'
    ],
    summary: 'A quick snack bowl with fruit and dairy.',
    howToMake: [
      'Cook the blueberries, ricotta until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'mashed blueberries and ricotta',
      'stage 2 snacks',
      'middle',
      'blueberries',
      'ricotta'
    ]
  },
  {
    slug: 'soft-scrambled-eggs-with-cottage-cheese',
    title: 'Soft Scrambled Eggs with Cottage Cheese',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'egg',
      'small curd cottage cheese'
    ],
    summary: 'Extra-soft eggs with cottage cheese stay moist and easy to eat.',
    howToMake: [
      'Cook the egg, small curd cottage cheese until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'soft scrambled eggs with cottage cheese',
      'stage 2 snacks',
      'middle',
      'egg',
      'small curd cottage cheese'
    ]
  },
  {
    slug: 'mashed-avocado-with-lime',
    title: 'Mashed Avocado with Lime',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'avocado',
      'lime'
    ],
    summary: 'A simple avocado mash with a little brightness for older babies.',
    howToMake: [
      'Cook the avocado, lime until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'mashed avocado with lime',
      'stage 2 snacks',
      'middle',
      'avocado',
      'lime'
    ]
  },
  {
    slug: 'yogurt-with-prunes',
    title: 'Yogurt with Prunes',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'plain whole milk yogurt',
      'prune puree'
    ],
    summary: 'Prune yogurt is a simple snack idea many families keep in rotation.',
    howToMake: [
      'Cook the plain whole milk yogurt, prune puree until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'yogurt with prunes',
      'stage 2 snacks',
      'middle',
      'plain whole milk yogurt',
      'prune puree'
    ]
  },
  {
    slug: 'banana-ricotta-mash',
    title: 'Banana Ricotta Mash',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'banana',
      'ricotta'
    ],
    summary: 'Banana and ricotta create a thick and creamy snack.',
    howToMake: [
      'Cook the banana, ricotta until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'banana ricotta mash',
      'stage 2 snacks',
      'middle',
      'banana',
      'ricotta'
    ]
  },
  {
    slug: 'pear-and-cinnamon-cottage-cheese',
    title: 'Pear and Cinnamon Cottage Cheese',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'pear',
      'small curd cottage cheese',
      'cinnamon'
    ],
    summary: 'A simple dairy snack with soft fruit.',
    howToMake: [
      'Cook the pear, small curd cottage cheese, cinnamon until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'pear and cinnamon cottage cheese',
      'stage 2 snacks',
      'middle',
      'pear',
      'small curd cottage cheese',
      'cinnamon'
    ]
  },
  {
    slug: 'mashed-black-beans-with-avocado',
    title: 'Mashed Black Beans with Avocado',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'black beans',
      'avocado'
    ],
    summary: 'A soft high-fiber snack with healthy fat.',
    howToMake: [
      'Cook the black beans, avocado until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'mashed black beans with avocado',
      'stage 2 snacks',
      'middle',
      'black beans',
      'avocado'
    ]
  },
  {
    slug: 'peanut-butter-yogurt-dip',
    title: 'Peanut Butter Yogurt Dip',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'smooth peanut butter',
      'plain whole milk yogurt'
    ],
    summary: 'Thinned peanut butter mixed into yogurt is easy to serve by spoon.',
    howToMake: [
      'Cook the smooth peanut butter, plain whole milk yogurt until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'peanut butter yogurt dip',
      'stage 2 snacks',
      'middle',
      'smooth peanut butter',
      'plain whole milk yogurt'
    ]
  },
  {
    slug: 'sunflower-butter-oatmeal',
    title: 'Sunflower Butter Oatmeal',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'sunflower seed butter',
      'oatmeal'
    ],
    summary: 'A seed-butter oatmeal bowl for another allergen-friendly option.',
    howToMake: [
      'Cook the sunflower seed butter, oatmeal until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'sunflower butter oatmeal',
      'stage 2 snacks',
      'middle',
      'sunflower seed butter',
      'oatmeal'
    ]
  },
  {
    slug: 'apple-and-white-cheddar-oats',
    title: 'Apple and White Cheddar Oats',
    stage: 'middle',
    category: 'Stage 2 snacks',
    ingredients: [
      'apple puree',
      'oatmeal',
      'mild cheddar'
    ],
    summary: 'Soft oats with apple and a little cheese can work for babies already doing well with dairy.',
    howToMake: [
      'Cook the apple puree, oatmeal, mild cheddar until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'apple and white cheddar oats',
      'stage 2 snacks',
      'middle',
      'apple puree',
      'oatmeal',
      'mild cheddar'
    ]
  },
  {
    slug: 'banana-oat-pancake-strips',
    title: 'Banana Oat Pancake Strips',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'banana',
      'egg',
      'oats'
    ],
    summary: 'Very soft pancake strips help babies practice self-feeding.',
    howToMake: [
      'Cook the banana, egg, oats until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'banana oat pancake strips',
      'soft finger foods',
      'middle',
      'banana',
      'egg',
      'oats'
    ]
  },
  {
    slug: 'soft-avocado-spears',
    title: 'Soft Avocado Spears',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'ripe avocado'
    ],
    summary: 'Ripe avocado spears are one of the easiest first finger foods.',
    howToMake: [
      'Cook the ripe avocado until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'soft avocado spears',
      'soft finger foods',
      'middle',
      'ripe avocado'
    ]
  },
  {
    slug: 'steamed-broccoli-florets',
    title: 'Steamed Broccoli Florets',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'broccoli'
    ],
    summary: 'Very soft broccoli florets are a common baby-led weaning vegetable.',
    howToMake: [
      'Cook the broccoli until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'steamed broccoli florets',
      'soft finger foods',
      'middle',
      'broccoli'
    ]
  },
  {
    slug: 'roasted-sweet-potato-spears',
    title: 'Roasted Sweet Potato Spears',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'sweet potato'
    ],
    summary: 'Soft sweet potato spears are easy to grasp and gum.',
    howToMake: [
      'Cook the sweet potato until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'roasted sweet potato spears',
      'soft finger foods',
      'middle',
      'sweet potato'
    ]
  },
  {
    slug: 'scrambled-egg-pieces',
    title: 'Scrambled Egg Pieces',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'egg'
    ],
    summary: 'Small soft egg pieces work for babies ready to pick up food.',
    howToMake: [
      'Cook the egg until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'scrambled egg pieces',
      'soft finger foods',
      'middle',
      'egg'
    ]
  },
  {
    slug: 'soft-tofu-sticks',
    title: 'Soft Tofu Sticks',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'firm tofu'
    ],
    summary: 'Seared or steamed tofu cut into sticks stays soft and easy to chew.',
    howToMake: [
      'Cook the firm tofu until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'soft tofu sticks',
      'soft finger foods',
      'middle',
      'firm tofu'
    ]
  },
  {
    slug: 'soft-pear-spears',
    title: 'Soft Pear Spears',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'ripe pear'
    ],
    summary: 'Steamed pear spears can be served soft enough to mash between fingers.',
    howToMake: [
      'Cook the ripe pear until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'soft pear spears',
      'soft finger foods',
      'middle',
      'ripe pear'
    ]
  },
  {
    slug: 'ripe-banana-spears',
    title: 'Ripe Banana Spears',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'banana'
    ],
    summary: 'Banana spears are a low-prep self-feeding option.',
    howToMake: [
      'Cook the banana until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'ripe banana spears',
      'soft finger foods',
      'middle',
      'banana'
    ]
  },
  {
    slug: 'well-cooked-pasta-spirals',
    title: 'Well-Cooked Pasta Spirals',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'small pasta'
    ],
    summary: 'Soft pasta gives babies another texture to explore.',
    howToMake: [
      'Cook the small pasta until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'well-cooked pasta spirals',
      'soft finger foods',
      'middle',
      'small pasta'
    ]
  },
  {
    slug: 'soft-toast-with-avocado',
    title: 'Soft Toast with Avocado',
    stage: 'middle',
    category: 'Soft finger foods',
    ingredients: [
      'soft toast',
      'avocado'
    ],
    summary: 'Lightly toasted bread spread thinly with avocado can work once bread is going well.',
    howToMake: [
      'Cook the soft toast, avocado until everything is soft and easy to mash with the back of a fork.',
      'Leave the texture thicker than an early puree, or shape the food into very soft pieces that your baby can pick up safely.',
      'Serve by spoon, preloaded spoon, or as soft finger-food pieces depending on how your baby is eating at this stage.'
    ],
    textureGuide: 'Thick mash, soft lumpy spoon texture, or finger-food pieces that squash easily between two fingers.',
    servingTip: 'Offer one or two meals a day and keep familiar foods in rotation while adding new combinations.',
    storageTip: 'Store in small portions so you can reheat only what you need and keep the texture moist.',
    safetyTip: 'Make sure finger foods stay soft and large enough to grasp or small enough to swallow safely. Avoid dry chunks and hard raw foods.',
    ageFit: 'Usually about 7 to 9 months, depending on feeding progress',
    searchTerms: [
      'soft toast with avocado',
      'soft finger foods',
      'middle',
      'soft toast',
      'avocado'
    ]
  },
  {
    slug: 'banana-oat-waffle-strips',
    title: 'Banana Oat Waffle Strips',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'banana',
      'egg',
      'oats'
    ],
    summary: 'Soft waffle strips are easy to hold and fit self-feeding practice.',
    howToMake: [
      'Prepare the banana, egg, oats as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'banana oat waffle strips',
      'breakfast finger foods',
      'late',
      'banana',
      'egg',
      'oats'
    ]
  },
  {
    slug: 'mini-egg-muffins-with-spinach',
    title: 'Mini Egg Muffins with Spinach',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'egg',
      'spinach',
      'cheese'
    ],
    summary: 'Soft baked egg muffins cut into small pieces work well for older babies.',
    howToMake: [
      'Prepare the egg, spinach, cheese as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'mini egg muffins with spinach',
      'breakfast finger foods',
      'late',
      'egg',
      'spinach',
      'cheese'
    ]
  },
  {
    slug: 'greek-yogurt-with-berries-and-oats',
    title: 'Greek Yogurt with Berries and Oats',
    stage: 'late',
    category: 'Breakfast bowls',
    ingredients: [
      'plain whole milk Greek yogurt',
      'berries',
      'oats'
    ],
    summary: 'A thick breakfast bowl with dairy, fruit, and grain.',
    howToMake: [
      'Prepare the plain whole milk Greek yogurt, berries, oats as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'greek yogurt with berries and oats',
      'breakfast bowls',
      'late',
      'plain whole milk greek yogurt',
      'berries',
      'oats'
    ]
  },
  {
    slug: 'peanut-butter-banana-toast-strips',
    title: 'Peanut Butter Banana Toast Strips',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'soft toast',
      'smooth peanut butter',
      'banana'
    ],
    summary: 'Thinly spread peanut butter on soft toast strips is a common US breakfast-style baby meal.',
    howToMake: [
      'Prepare the soft toast, smooth peanut butter, banana as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'peanut butter banana toast strips',
      'breakfast finger foods',
      'late',
      'soft toast',
      'smooth peanut butter',
      'banana'
    ]
  },
  {
    slug: 'cottage-cheese-pancake-pieces',
    title: 'Cottage Cheese Pancake Pieces',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'cottage cheese',
      'egg',
      'oats'
    ],
    summary: 'Soft pancake pieces make a higher-protein finger food.',
    howToMake: [
      'Prepare the cottage cheese, egg, oats as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'cottage cheese pancake pieces',
      'breakfast finger foods',
      'late',
      'cottage cheese',
      'egg',
      'oats'
    ]
  },
  {
    slug: 'apple-cinnamon-french-toast-strips',
    title: 'Apple Cinnamon French Toast Strips',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'whole grain bread',
      'egg',
      'apple'
    ],
    summary: 'Soft French toast strips can be served in baby-size pieces.',
    howToMake: [
      'Prepare the whole grain bread, egg, apple as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'apple cinnamon french toast strips',
      'breakfast finger foods',
      'late',
      'whole grain bread',
      'egg',
      'apple'
    ]
  },
  {
    slug: 'ricotta-toast-with-peach',
    title: 'Ricotta Toast with Peach',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'soft toast',
      'ricotta',
      'peach'
    ],
    summary: 'A soft toast option with mild dairy and fruit.',
    howToMake: [
      'Prepare the soft toast, ricotta, peach as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'ricotta toast with peach',
      'breakfast finger foods',
      'late',
      'soft toast',
      'ricotta',
      'peach'
    ]
  },
  {
    slug: 'soft-breakfast-potatoes-with-egg',
    title: 'Soft Breakfast Potatoes with Egg',
    stage: 'late',
    category: 'Breakfast bowls',
    ingredients: [
      'potato',
      'egg'
    ],
    summary: 'Very soft breakfast potatoes with egg create a family-style baby meal.',
    howToMake: [
      'Prepare the potato, egg as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'soft breakfast potatoes with egg',
      'breakfast bowls',
      'late',
      'potato',
      'egg'
    ]
  },
  {
    slug: 'yogurt-chia-banana-bowl',
    title: 'Yogurt Chia Banana Bowl',
    stage: 'late',
    category: 'Breakfast bowls',
    ingredients: [
      'plain whole milk yogurt',
      'banana',
      'soft soaked chia'
    ],
    summary: 'A thick yogurt bowl with banana and soaked chia.',
    howToMake: [
      'Prepare the plain whole milk yogurt, banana, soft soaked chia as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'yogurt chia banana bowl',
      'breakfast bowls',
      'late',
      'plain whole milk yogurt',
      'banana',
      'soft soaked chia'
    ]
  },
  {
    slug: 'blueberry-ricotta-oat-bake',
    title: 'Blueberry Ricotta Oat Bake',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'ricotta',
      'blueberries',
      'oats'
    ],
    summary: 'A soft baked square that can be cut into baby-safe pieces.',
    howToMake: [
      'Prepare the ricotta, blueberries, oats as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'blueberry ricotta oat bake',
      'breakfast finger foods',
      'late',
      'ricotta',
      'blueberries',
      'oats'
    ]
  },
  {
    slug: 'turkey-meatball-pieces',
    title: 'Turkey Meatball Pieces',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'ground turkey',
      'oats',
      'egg'
    ],
    summary: 'Soft turkey meatballs in tiny pieces work well for older babies.',
    howToMake: [
      'Prepare the ground turkey, oats, egg as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'turkey meatball pieces',
      'protein-forward meals',
      'late',
      'ground turkey',
      'oats',
      'egg'
    ]
  },
  {
    slug: 'beef-meatball-pieces',
    title: 'Beef Meatball Pieces',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'ground beef',
      'breadcrumbs',
      'egg'
    ],
    summary: 'Moist beef meatballs can be broken into small pieces for self-feeding.',
    howToMake: [
      'Prepare the ground beef, breadcrumbs, egg as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'beef meatball pieces',
      'protein-forward meals',
      'late',
      'ground beef',
      'breadcrumbs',
      'egg'
    ]
  },
  {
    slug: 'salmon-cakes',
    title: 'Salmon Cakes',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'salmon',
      'potato',
      'egg'
    ],
    summary: 'Soft salmon cakes bring fish into a finger-food format.',
    howToMake: [
      'Prepare the salmon, potato, egg as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'salmon cakes',
      'protein-forward meals',
      'late',
      'salmon',
      'potato',
      'egg'
    ]
  },
  {
    slug: 'shredded-chicken-with-avocado',
    title: 'Shredded Chicken with Avocado',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'chicken thigh',
      'avocado'
    ],
    summary: 'Tender shredded chicken and avocado make a simple lunch.',
    howToMake: [
      'Prepare the chicken thigh, avocado as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'shredded chicken with avocado',
      'protein-forward meals',
      'late',
      'chicken thigh',
      'avocado'
    ]
  },
  {
    slug: 'black-bean-quesadilla-strips',
    title: 'Black Bean Quesadilla Strips',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'soft tortilla',
      'black beans',
      'cheese'
    ],
    summary: 'Quesadilla strips are a realistic family meal adaptation for older babies.',
    howToMake: [
      'Prepare the soft tortilla, black beans, cheese as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'black bean quesadilla strips',
      'family-style meals',
      'late',
      'soft tortilla',
      'black beans',
      'cheese'
    ]
  },
  {
    slug: 'cheesy-bean-rice-bowl',
    title: 'Cheesy Bean Rice Bowl',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'black beans',
      'rice',
      'mild cheddar'
    ],
    summary: 'A soft bowl built from pantry staples many US families already use.',
    howToMake: [
      'Prepare the black beans, rice, mild cheddar as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'cheesy bean rice bowl',
      'family-style meals',
      'late',
      'black beans',
      'rice',
      'mild cheddar'
    ]
  },
  {
    slug: 'chicken-and-rice-bowl',
    title: 'Chicken and Rice Bowl',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'chicken',
      'rice',
      'broccoli'
    ],
    summary: 'A soft version of a basic family dinner.',
    howToMake: [
      'Prepare the chicken, rice, broccoli as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'chicken and rice bowl',
      'family-style meals',
      'late',
      'chicken',
      'rice',
      'broccoli'
    ]
  },
  {
    slug: 'turkey-chili',
    title: 'Turkey Chili',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'ground turkey',
      'beans',
      'tomato'
    ],
    summary: 'Mild turkey chili can be served thick and soft for older babies.',
    howToMake: [
      'Prepare the ground turkey, beans, tomato as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'turkey chili',
      'family-style meals',
      'late',
      'ground turkey',
      'beans',
      'tomato'
    ]
  },
  {
    slug: 'beef-and-lentil-bolognese',
    title: 'Beef and Lentil Bolognese',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'ground beef',
      'lentils',
      'tomato sauce'
    ],
    summary: 'A soft meat sauce can be mixed with tiny pasta or served alone.',
    howToMake: [
      'Prepare the ground beef, lentils, tomato sauce as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'beef and lentil bolognese',
      'family-style meals',
      'late',
      'ground beef',
      'lentils',
      'tomato sauce'
    ]
  },
  {
    slug: 'mac-and-cheese-with-peas',
    title: 'Mac and Cheese with Peas',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'small pasta',
      'cheese',
      'peas'
    ],
    summary: 'A baby-friendly soft mac and cheese with peas.',
    howToMake: [
      'Prepare the small pasta, cheese, peas as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'mac and cheese with peas',
      'family-style meals',
      'late',
      'small pasta',
      'cheese',
      'peas'
    ]
  },
  {
    slug: 'broccoli-cheese-pasta',
    title: 'Broccoli Cheese Pasta',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'small pasta',
      'broccoli',
      'mild cheese'
    ],
    summary: 'Well-cooked pasta with broccoli and cheese is easy to adapt for babies.',
    howToMake: [
      'Prepare the small pasta, broccoli, mild cheese as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'broccoli cheese pasta',
      'family-style meals',
      'late',
      'small pasta',
      'broccoli',
      'mild cheese'
    ]
  },
  {
    slug: 'butter-noodles-with-chicken',
    title: 'Butter Noodles with Chicken',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'egg noodles',
      'chicken',
      'butter'
    ],
    summary: 'Soft buttered noodles with chicken fit many family dinners.',
    howToMake: [
      'Prepare the egg noodles, chicken, butter as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'butter noodles with chicken',
      'family-style meals',
      'late',
      'egg noodles',
      'chicken',
      'butter'
    ]
  },
  {
    slug: 'sweet-potato-black-bean-bowl',
    title: 'Sweet Potato Black Bean Bowl',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'sweet potato',
      'black beans',
      'avocado'
    ],
    summary: 'A soft bowl with fiber, fat, and flavor.',
    howToMake: [
      'Prepare the sweet potato, black beans, avocado as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'sweet potato black bean bowl',
      'family-style meals',
      'late',
      'sweet potato',
      'black beans',
      'avocado'
    ]
  },
  {
    slug: 'tofu-rice-veggie-bowl',
    title: 'Tofu Rice Veggie Bowl',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'tofu',
      'rice',
      'zucchini'
    ],
    summary: 'A gentle plant-based bowl for self-feeding or preloaded spoon use.',
    howToMake: [
      'Prepare the tofu, rice, zucchini as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'tofu rice veggie bowl',
      'family-style meals',
      'late',
      'tofu',
      'rice',
      'zucchini'
    ]
  },
  {
    slug: 'hummus-pita-strips-and-cucumber-yogurt',
    title: 'Hummus Pita Strips and Cucumber Yogurt',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'soft pita',
      'hummus',
      'plain yogurt'
    ],
    summary: 'A soft lunch-style meal inspired by common lunch foods.',
    howToMake: [
      'Prepare the soft pita, hummus, plain yogurt as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'hummus pita strips and cucumber yogurt',
      'family-style meals',
      'late',
      'soft pita',
      'hummus',
      'plain yogurt'
    ]
  },
  {
    slug: 'chicken-pot-pie-filling',
    title: 'Chicken Pot Pie Filling',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'chicken',
      'peas',
      'carrots'
    ],
    summary: 'Skip the crust and serve the soft filling for an older baby.',
    howToMake: [
      'Prepare the chicken, peas, carrots as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'chicken pot pie filling',
      'family-style meals',
      'late',
      'chicken',
      'peas',
      'carrots'
    ]
  },
  {
    slug: 'mini-turkey-burger-pieces',
    title: 'Mini Turkey Burger Pieces',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'ground turkey',
      'oats'
    ],
    summary: 'Moist burger pieces can work when cooked soft and served in small bits.',
    howToMake: [
      'Prepare the ground turkey, oats as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'mini turkey burger pieces',
      'protein-forward meals',
      'late',
      'ground turkey',
      'oats'
    ]
  },
  {
    slug: 'soft-beef-taco-bowl',
    title: 'Soft Beef Taco Bowl',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'ground beef',
      'rice',
      'avocado'
    ],
    summary: 'A taco-bowl style meal without crunchy toppings.',
    howToMake: [
      'Prepare the ground beef, rice, avocado as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'soft beef taco bowl',
      'family-style meals',
      'late',
      'ground beef',
      'rice',
      'avocado'
    ]
  },
  {
    slug: 'lentil-soup-thickened',
    title: 'Lentil Soup Thickened',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'lentils',
      'carrots',
      'tomato'
    ],
    summary: 'Thick lentil soup works well on a preloaded spoon.',
    howToMake: [
      'Prepare the lentils, carrots, tomato as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'lentil soup thickened',
      'family-style meals',
      'late',
      'lentils',
      'carrots',
      'tomato'
    ]
  },
  {
    slug: 'chicken-noodle-soup-solids',
    title: 'Chicken Noodle Soup Solids',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'chicken',
      'small noodles',
      'carrots'
    ],
    summary: 'Use the soft solids from soup as a baby meal.',
    howToMake: [
      'Prepare the chicken, small noodles, carrots as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'chicken noodle soup solids',
      'family-style meals',
      'late',
      'chicken',
      'small noodles',
      'carrots'
    ]
  },
  {
    slug: 'avocado-toast-cubes',
    title: 'Avocado Toast Cubes',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'soft toast',
      'avocado'
    ],
    summary: 'Soft toast cubes with avocado are easy to pick up.',
    howToMake: [
      'Prepare the soft toast, avocado as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'avocado toast cubes',
      'finger foods and snacks',
      'late',
      'soft toast',
      'avocado'
    ]
  },
  {
    slug: 'cheese-and-soft-pear-pieces',
    title: 'Cheese and Soft Pear Pieces',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'mild cheese',
      'soft pear'
    ],
    summary: 'A simple snack plate with soft fruit and cheese.',
    howToMake: [
      'Prepare the mild cheese, soft pear as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'cheese and soft pear pieces',
      'finger foods and snacks',
      'late',
      'mild cheese',
      'soft pear'
    ]
  },
  {
    slug: 'banana-peanut-butter-roll-ups',
    title: 'Banana Peanut Butter Roll-Ups',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'soft tortilla',
      'smooth peanut butter',
      'banana'
    ],
    summary: 'A thinly spread tortilla roll cut into soft pieces.',
    howToMake: [
      'Prepare the soft tortilla, smooth peanut butter, banana as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'banana peanut butter roll-ups',
      'finger foods and snacks',
      'late',
      'soft tortilla',
      'smooth peanut butter',
      'banana'
    ]
  },
  {
    slug: 'mini-pasta-with-pesto-yogurt',
    title: 'Mini Pasta with Pesto Yogurt',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'small pasta',
      'mild pesto',
      'plain yogurt'
    ],
    summary: 'Soft mini pasta with a mild sauce for older babies.',
    howToMake: [
      'Prepare the small pasta, mild pesto, plain yogurt as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'mini pasta with pesto yogurt',
      'finger foods and snacks',
      'late',
      'small pasta',
      'mild pesto',
      'plain yogurt'
    ]
  },
  {
    slug: 'soft-polenta-squares',
    title: 'Soft Polenta Squares',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'polenta',
      'parmesan'
    ],
    summary: 'Polenta can be chilled and cut into very soft squares.',
    howToMake: [
      'Prepare the polenta, parmesan as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'soft polenta squares',
      'finger foods and snacks',
      'late',
      'polenta',
      'parmesan'
    ]
  },
  {
    slug: 'soft-zucchini-fritters',
    title: 'Soft Zucchini Fritters',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'zucchini',
      'egg',
      'flour'
    ],
    summary: 'Very soft fritter pieces add variety to self-feeding.',
    howToMake: [
      'Prepare the zucchini, egg, flour as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'soft zucchini fritters',
      'finger foods and snacks',
      'late',
      'zucchini',
      'egg',
      'flour'
    ]
  },
  {
    slug: 'cottage-cheese-and-peach-bites',
    title: 'Cottage Cheese and Peach Bites',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'cottage cheese',
      'peach'
    ],
    summary: 'A spoonable snack that can also be scooped by the baby.',
    howToMake: [
      'Prepare the cottage cheese, peach as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'cottage cheese and peach bites',
      'finger foods and snacks',
      'late',
      'cottage cheese',
      'peach'
    ]
  },
  {
    slug: 'mashed-chickpea-salad-toast',
    title: 'Mashed Chickpea Salad Toast',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'chickpeas',
      'yogurt',
      'soft toast'
    ],
    summary: 'A soft sandwich-style lunch adapted for babies.',
    howToMake: [
      'Prepare the chickpeas, yogurt, soft toast as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'mashed chickpea salad toast',
      'finger foods and snacks',
      'late',
      'chickpeas',
      'yogurt',
      'soft toast'
    ]
  },
  {
    slug: 'mini-grilled-cheese-triangles',
    title: 'Mini Grilled Cheese Triangles',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'soft bread',
      'mild cheddar'
    ],
    summary: 'Very soft grilled cheese triangles can work in small pieces.',
    howToMake: [
      'Prepare the soft bread, mild cheddar as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'mini grilled cheese triangles',
      'finger foods and snacks',
      'late',
      'soft bread',
      'mild cheddar'
    ]
  },
  {
    slug: 'soft-baked-oat-bars',
    title: 'Soft Baked Oat Bars',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'oats',
      'banana',
      'egg'
    ],
    summary: 'Soft oat bars are easy to batch prep for snacks.',
    howToMake: [
      'Prepare the oats, banana, egg as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'soft baked oat bars',
      'finger foods and snacks',
      'late',
      'oats',
      'banana',
      'egg'
    ]
  },
  {
    slug: 'soft-broccoli-tots',
    title: 'Soft Broccoli Tots',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'broccoli',
      'egg',
      'cheese'
    ],
    summary: 'Soft baked tots are popular with babies learning to self-feed.',
    howToMake: [
      'Prepare the broccoli, egg, cheese as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'soft broccoli tots',
      'finger foods and snacks',
      'late',
      'broccoli',
      'egg',
      'cheese'
    ]
  },
  {
    slug: 'cauliflower-cheese-mash-bites',
    title: 'Cauliflower Cheese Mash Bites',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'cauliflower',
      'cheese',
      'egg'
    ],
    summary: 'Soft mash bites bring vegetable variety.',
    howToMake: [
      'Prepare the cauliflower, cheese, egg as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'cauliflower cheese mash bites',
      'finger foods and snacks',
      'late',
      'cauliflower',
      'cheese',
      'egg'
    ]
  },
  {
    slug: 'sweet-potato-pancake-bites',
    title: 'Sweet Potato Pancake Bites',
    stage: 'late',
    category: 'Finger foods and snacks',
    ingredients: [
      'sweet potato',
      'egg',
      'flour'
    ],
    summary: 'Small pancake bites made with sweet potato stay soft inside.',
    howToMake: [
      'Prepare the sweet potato, egg, flour as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'sweet potato pancake bites',
      'finger foods and snacks',
      'late',
      'sweet potato',
      'egg',
      'flour'
    ]
  },
  {
    slug: 'blueberry-yogurt-muffin-pieces',
    title: 'Blueberry Yogurt Muffin Pieces',
    stage: 'late',
    category: 'Breakfast finger foods',
    ingredients: [
      'blueberries',
      'yogurt',
      'flour'
    ],
    summary: 'Soft muffin pieces work well when sugar is kept low.',
    howToMake: [
      'Prepare the blueberries, yogurt, flour as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'blueberry yogurt muffin pieces',
      'breakfast finger foods',
      'late',
      'blueberries',
      'yogurt',
      'flour'
    ]
  },
  {
    slug: 'spinach-ricotta-pasta-shells',
    title: 'Spinach Ricotta Pasta Shells',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'small pasta shells',
      'ricotta',
      'spinach'
    ],
    summary: 'A soft pasta dinner adapted for older babies.',
    howToMake: [
      'Prepare the small pasta shells, ricotta, spinach as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'spinach ricotta pasta shells',
      'family-style meals',
      'late',
      'small pasta shells',
      'ricotta',
      'spinach'
    ]
  },
  {
    slug: 'turkey-and-cheese-roll-ups',
    title: 'Turkey and Cheese Roll-Ups',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'turkey',
      'mild cheese',
      'soft tortilla'
    ],
    summary: 'Soft roll-up pieces can work for lunch-style meals.',
    howToMake: [
      'Prepare the turkey, mild cheese, soft tortilla as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'turkey and cheese roll-ups',
      'protein-forward meals',
      'late',
      'turkey',
      'mild cheese',
      'soft tortilla'
    ]
  },
  {
    slug: 'soft-mini-pizza-squares',
    title: 'Soft Mini Pizza Squares',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'soft flatbread',
      'tomato sauce',
      'mild mozzarella'
    ],
    summary: 'A baby-friendly take on pizza when crust stays soft.',
    howToMake: [
      'Prepare the soft flatbread, tomato sauce, mild mozzarella as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'soft mini pizza squares',
      'family-style meals',
      'late',
      'soft flatbread',
      'tomato sauce',
      'mild mozzarella'
    ]
  },
  {
    slug: 'salmon-rice-avocado-bowl',
    title: 'Salmon Rice Avocado Bowl',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'salmon',
      'rice',
      'avocado'
    ],
    summary: 'A soft bowl that balances protein, grain, and healthy fat.',
    howToMake: [
      'Prepare the salmon, rice, avocado as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'salmon rice avocado bowl',
      'protein-forward meals',
      'late',
      'salmon',
      'rice',
      'avocado'
    ]
  },
  {
    slug: 'beans-and-cornbread-mash',
    title: 'Beans and Cornbread Mash',
    stage: 'late',
    category: 'Family-style meals',
    ingredients: [
      'beans',
      'soft cornbread'
    ],
    summary: 'Soft cornbread crumbled into beans makes a Southern-style family meal adaptation.',
    howToMake: [
      'Prepare the beans, soft cornbread as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'beans and cornbread mash',
      'family-style meals',
      'late',
      'beans',
      'soft cornbread'
    ]
  },
  {
    slug: 'chicken-broccoli-cheddar-bites',
    title: 'Chicken Broccoli Cheddar Bites',
    stage: 'late',
    category: 'Protein-forward meals',
    ingredients: [
      'chicken',
      'broccoli',
      'cheddar'
    ],
    summary: 'Soft bite-size pieces with chicken, broccoli, and cheese.',
    howToMake: [
      'Prepare the chicken, broccoli, cheddar as a softened family-style meal, keeping seasoning light and texture moist.',
      'Cut, shred, mash, or crumble the food into baby-safe pieces that are easy to gum and swallow.',
      'Serve on the tray, in a small bowl, or on a preloaded spoon so your baby can practice independent eating.'
    ],
    textureGuide: 'Soft finger foods and moist bite-size pieces that mash easily between two fingers.',
    servingTip: 'Pair with water in a cup at meals if your pediatrician has already discussed cup practice, and keep meals low pressure.',
    storageTip: 'Leftovers work best when reheated gently so meats stay moist and breads or pasta do not become chewy.',
    safetyTip: 'Skip hard, round, sticky, and chewy choking hazards. Modify family meals before serving rather than giving the adult version as-is.',
    ageFit: 'Usually about 9 to 12 months, once self-feeding is going better',
    searchTerms: [
      'chicken broccoli cheddar bites',
      'protein-forward meals',
      'late',
      'chicken',
      'broccoli',
      'cheddar'
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
