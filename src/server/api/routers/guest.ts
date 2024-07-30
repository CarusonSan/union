import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const guestRouter = createTRPCRouter({
  createGuest: publicProcedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(({ input }) => {
      return {
        guest: {
          name: input.name,
          email: input.email,
        },
      };
    }),
});
