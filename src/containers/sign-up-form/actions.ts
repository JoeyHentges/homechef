"use server"

import { redirect } from "next/navigation"
import { z } from "zod"

import { afterSignInUrl } from "@/config"
import { rateLimitByIp } from "@/lib/limiter"
import { unauthenticatedAction } from "@/lib/safe-action"
import { setSession } from "@/lib/session"
import { signUpUseCase } from "@/use-cases/auth"

export const signUpAction = unauthenticatedAction
  .createServerAction()
  .input(
    z.object({
      email: z.string().email(),
      password: z.string().min(8),
      from: z.string().min(1).optional(),
    })
  )
  .handler(async ({ input }) => {
    await rateLimitByIp({
      key: "sign-up",
      limit: 3,
      window: 10000,
    })
    const user = await signUpUseCase(input.email, input.password)
    await setSession(user.id)
    redirect(input.from ? input.from : afterSignInUrl)
  })
