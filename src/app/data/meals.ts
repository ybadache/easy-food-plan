import { Meal } from '.././meal';
import { MealTime } from '.././mealTime';

export const MEALS: Meal[] = [
    { name: 'Riz cantonnais', cat: MealTime.Mixte, ingredients: [
        'Riz', 'Lardons', 'Petits pois', 'Maïs', 'Huile de sésame', 'Soja salé'
        ]
    },
    { name: 'Risotto', cat: MealTime.Midi, ingredients: [
        'Riz (risotto)', 'Champignons', 'Parmesan'
        ]
    },
    { name: 'Tartines salade', cat: MealTime.Soir, ingredients: [
        'Pain', 'Beurre', 'Salade', 'Huile (olive)', 'Fromages'
        ]
    },
    { name: 'Soupe', cat: MealTime.Soir, ingredients: [
        'Pain', 'Soupe', 'Beurre', 'Fromages'
        ]
    },
    { name: 'Spaghetti bolognaise', cat: MealTime.Midi, ingredients: [
        'Spaghetti', 'Sauce tomate', 'Viande hachée', 'Miel'
        ]
    },
    { name: 'Soupe de saumon', cat: MealTime.Mixte, ingredients: [
        'Nanami Togarashi', 'Pavés de saumon', 'Udon noodles', 'Coriandre', 'Oignons nouveaux', 'Chou chinois', 'Crème de coco'
        ]
    },
    { name: 'Purée, steak, petits pois', cat: MealTime.Midi, ingredients: [
        'Patates', 'Steak haché', 'Petits pois'
        ]
    }
]