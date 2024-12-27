import { CompleteRecipeSeed } from "./recipes.types"

const recipeId = 1

export const theBestChocolateChipCookieRecipeEver: CompleteRecipeSeed = {
  recipe: {
    id: recipeId,
    userId: 1,
    title: "The Best Chocolate Chip Cookie Recipe Ever",
    description:
      "This is the best chocolate chip cookie recipe ever. No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!",
    prepTime: 10,
    cookTime: 8,
    difficulty: "easy",
    servings: 36,
    servingsUnit: "cookies",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg",
  },
  recipeIngredients: [
    {
      id: 1,
      recipeId,
      ingredientId: 1,
      description: "softened",
      quantity: 1,
      unit: "cup",
    },
    {
      id: 2,
      recipeId,
      ingredientId: 2,
      description: null,
      quantity: 1,
      unit: "cup",
    },
    {
      id: 3,
      recipeId,
      ingredientId: 3,
      description: "packed",
      quantity: 1,
      unit: "cup",
    },
    {
      id: 4,
      recipeId,
      ingredientId: 4,
      description: null,
      quantity: 2,
      unit: "teaspoon",
    },
    {
      id: 5,
      recipeId,
      ingredientId: 5,
      description: null,
      quantity: 2,
      unit: null,
    },
    {
      id: 6,
      recipeId,
      ingredientId: 6,
      description: null,
      quantity: 3,
      unit: "cup",
    },
    {
      id: 7,
      recipeId,
      ingredientId: 7,
      description: null,
      quantity: 1,
      unit: "teaspoon",
    },
    {
      id: 8,
      recipeId,
      ingredientId: 8,
      description: null,
      quantity: 0.5,
      unit: "teaspoon",
    },
    {
      id: 9,
      recipeId,
      ingredientId: 9,
      description: null,
      quantity: 1,
      unit: "teaspoon",
    },
    {
      id: 10,
      recipeId,
      ingredientId: 10,
      description: "(12 oz)",
      quantity: 2,
      unit: "cup",
    },
  ],
  recipeSteps: [
    {
      id: 1,
      recipeId,
      stepNumber: 1,
      description:
        "Preheat oven to 375 degrees F. Line three baking sheets with parchment paper and set aside.",
    },
    {
      id: 2,
      recipeId,
      stepNumber: 2,
      description:
        "In a medium bowl mix flour, baking soda, baking powder and salt. Set aside.",
    },
    {
      id: 3,
      recipeId,
      stepNumber: 3,
      description: "Cream together butter and sugars until combined.",
    },
    {
      id: 4,
      recipeId,
      stepNumber: 4,
      description: "Beat in eggs and vanilla until light (about 1 minute).",
    },
    {
      id: 5,
      recipeId,
      stepNumber: 5,
      description: "Mix in the dry ingredients until combined.",
    },
    {
      id: 6,
      recipeId,
      stepNumber: 6,
      description: "Add chocolate chips and mix well.",
    },
    {
      id: 7,
      recipeId,
      stepNumber: 7,
      description:
        "Roll 2-3 Tablespoons (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets.",
    },
    {
      id: 8,
      recipeId,
      stepNumber: 8,
      description:
        "Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just barely starting to turn brown.",
    },
    {
      id: 9,
      recipeId,
      stepNumber: 9,
      description:
        "Let them sit on the baking pan for 5 minutes before removing to cooling rack.",
    },
  ],
  recipeTags: [
    {
      id: 1,
      recipeId,
      tagId: 1,
    },
    {
      id: 2,
      recipeId,
      tagId: 2,
    },
    {
      id: 3,
      recipeId,
      tagId: 3,
    },
  ],
  recipePhotos: [
    {
      id: 1,
      recipeId,
      photoUrl:
        "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-5.jpg",
    },
    {
      id: 2,
      recipeId,
      photoUrl:
        "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-3.jpg",
    },
    {
      id: 3,
      recipeId,
      photoUrl:
        "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookie-recipe-cooling.jpg",
    },
    {
      id: 4,
      recipeId,
      photoUrl:
        "https://joyfoodsunshine.com/wp-content/uploads/2018/02/how-to-make-chocolate-chip-cookies-7.jpg",
    },
    {
      id: 5,
      recipeId,
      photoUrl:
        "https://joyfoodsunshine.com/wp-content/uploads/2018/02/how-to-freeze-chocolate-chip-cookie-dough.jpg",
    },
    {
      id: 6,
      recipeId,
      photoUrl:
        "https://joyfoodsunshine.com/wp-content/uploads/2018/02/how-to-make-chocolate-chip-cookies-6-1.jpg",
    },
    {
      id: 7,
      recipeId,
      photoUrl:
        "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-6.jpg",
    },
  ],
  recipeUserRatings: [
    {
      id: 1,
      userId: 1,
      recipeId,
      rating: 5,
      review: "Amazing cookies. I make them all the time. Great recipe.",
    },
  ],
}
