"use client"

import Link from "next/link"
import { BookmarkIcon } from "lucide-react"

import { getFromPath } from "@/lib/get-from-path"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SaveRecipeProps {
  isAuthenticated?: boolean
}

export function SaveRecipe(props: SaveRecipeProps) {
  const { isAuthenticated } = props

  const fromPath = getFromPath()

  if (isAuthenticated) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={250}>
          <TooltipTrigger>
            <BookmarkIcon className="h-5 w-5" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Save to your cookbook</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={250}>
        <TooltipTrigger>
          <Link
            href={`/sign-in?from=${fromPath}`}
            className="transition-colors hover:text-foreground"
          >
            <BookmarkIcon className="h-5 w-5" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Sign in to save to your cookbook</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
