import { getPayloadClient } from "../get-payload";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { getBinaryMetadata } from "next/dist/build/swc";
export const exampleRouter = router({
// example:publicProcedure.query({
//     input: z.object({
//       cursor: z.string().nullish(),
//       limit: z.number().min(1).max(100).default(10),
//     }),
//     async resolve({ input }) {
//       const { cursor, limit } = input;
//       const items = await prisma.example.findMany({
//         take: limit + 1, // Fetch one more than the limit to check if there are more items
//         cursor: cursor ? { id: cursor } : undefined,
//         skip: cursor ? 1 : 0, // Skip the cursor item itself
//         orderBy: { id: 'asc' },
//       });

//       let nextCursor: string | null = null;
//       if (items.length > limit) {
//         const nextItem = items.pop();
//         nextCursor = nextItem.id;
//       }

//       return {
//         items,
//         nextCursor,
//       };
//     },
//   })

test: publicProcedure.input(z.object({
          cursor: z.string().nullish(),
          limit: z.number().min(1).max(100).default(10),
        })).query(async ({input})=>{
          const { cursor, limit } = input;
    //   const items = await prisma.example.findMany({
    //     take: limit + 1, // Fetch one more than the limit to check if there are more items
    //     cursor: cursor ? { id: cursor } : undefined,
    //     skip: cursor ? 1 : 0, // Skip the cursor item itself
    //     orderBy: { id: 'asc' },
    //   });
  debugger
    const payload = await getPayloadClient()

       const vehicles = await payload.db
       console.log(vehicles);

const items = payload.find({collection:'vehicles'})
             
       // Build the query and
    const query = cursor ? { _id: { $gt: cursor } } : {};
    const options = {
      limit: limit + 1, // Fetch one more than the limit to check if there are more items
      sort: { _id: 1 } // Order by _id ascending
    };

    // // Execute the query
    // const items = await vehicles.find(query, options);

    // // Skip the cursor item itself
    // // if (cursor) {
    // //   items.shift();
    // // }
    
  

  
         let nextCursor: string | null = null;
    //   if (items.length > limit) {
    //     const nextItem = items.pop();
    //     nextCursor = nextItem.id;
    //   }

      return {
        items,
        nextCursor,
      };
  
  })



})
