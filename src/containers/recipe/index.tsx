"use client"

import { useState } from "react"

import { RecipeDetails } from "@/types/Recipe"
import { User } from "@/db/schemas"

import { EditRecipe } from "./edit-recipe"
import { ViewRecipe } from "./view-recipe"

interface RecipeContainerProps {
  importedRecipe?: boolean
  user?: User
  recipe?: RecipeDetails
  availableTags: { name: string }[]
  recipeIsSaved?: boolean
}

export function RecipeContainer(props: RecipeContainerProps) {
  const {
    importedRecipe,
    user,
    recipe,
    availableTags,
    recipeIsSaved = false,
  } = props

  const [enableEditView, setEnableEditView] = useState<boolean>(false)

  // no recipe -> new recipe - edit recipe with blank details
  if (!recipe) {
    return (
      <EditRecipe
        newRecipe
        isRecipeOwner={false}
        startRecipe={{
          recipe: {
            title: "",
            description: null,
            prepTime: 0,
            cookTime: 0,
            difficulty: null,
            servings: "",
            private: false,
            tags: [],
            photo: null,
          },
          ingredients: [],
          directions: [],
        }}
        availableTags={availableTags}
      />
    )
  }

  if (enableEditView) {
    if (importedRecipe) {
      return (
        <EditRecipe
          isRecipeOwner={false}
          startRecipe={recipe}
          availableTags={availableTags}
          onDisableEditView={() => setEnableEditView(false)}
        />
      )
    }
    return (
      <EditRecipe
        isRecipeOwner={!!user && recipe.author?.id === user?.id}
        startRecipe={recipe}
        availableTags={availableTags}
        onDisableEditView={() => setEnableEditView(false)}
      />
    )
  }

  return (
    <ViewRecipe
      isRecipeOwner={!!user && recipe.author?.id === user?.id}
      recipeIsSaved={recipeIsSaved}
      user={user}
      recipe={recipe}
      onEditRecipeClicked={() => setEnableEditView(true)}
    />
  )
}
