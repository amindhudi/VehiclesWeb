import { z } from "zod";

export const QueryValidator = z.object({
    category:z.string().optional(),
    company:z.string().optional(),
    vehicle:z.string().optional(),
    search:z.string().optional(),
    sort:z.enum(['asc', 'desc']),
    limit:z.number().optional()
})
export type TQueryValidator = z.infer<typeof QueryValidator>