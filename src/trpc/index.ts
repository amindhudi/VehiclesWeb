import { getPayloadClient } from "../get-payload";
import { QueryValidator } from "../lib/validators/query-validator";
import {z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { paymentRouter } from "./payment-router";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { TRPCError } from "@trpc/server";
import { exampleRouter } from "./example-routher";

export const appRouter =router({
  getTodos: publicProcedure.query( async () =>{
    return "test"
}),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) =>{
  return opts + 'is added'
  }),
  setDone: publicProcedure.input(z.object({
     id:z.number(),
     done:z.number() 
  })).mutation(async (opts) =>{
  return true
  }),

//   createPayloadUser:publicProcedure
//   .input(AuthCredentialsValidator)
//   .mutation(async ({input})=>{
//       debugger
//       const {email, password} = input
//       const payload = await getPayloadClient()
//       //check if user already exists
//       const {docs: users} = await payload.find({
//           collection:'users',
//           where:{
//               email:{
//                   equals:email,
//               }
//           }
//       })
//       if(users.length !==0)
//       throw new TRPCError({code:'CONFLICT'})
// debugger
//       await payload.create({
//           collection:'users',
//           data:{
//               email,
//               password,
//               role:'user'
//           }
//       })
//       return {success:true, sentToEmail: email}
//   }),
 auth: authRouter,
 payment:paymentRouter,
 example:exampleRouter,
 getInfiniteProducts: publicProcedure.input(z.object({
    limit:z.number().min(1).max(100),
    cursor:z.number().nullish(),
    query:QueryValidator
 })).query(async ({input})=>{
    const {query, cursor}= input
    const {sort, limit, ...queryOpts}= query

    const payload = await getPayloadClient()

const parsedQueryOpts:Record<string, {equals:string}> ={}

   Object.entries(queryOpts).forEach(([key, value])=>{
  parsedQueryOpts[key]={
    equals:value,
  }
   })

   const page= cursor || 1

const {docs:items, hasNextPage, nextPage} = await payload.find({
        collection:'products',
        where:{
            approvedForSale:{
                equals:'approved'
            },
            ...parsedQueryOpts
        },
        sort,
        depth:1,
        limit,
        page,
    })
  return {
    items,
    nextPage: hasNextPage? nextPage:null
  }

 }),
 getInfiniteVehicles: publicProcedure.input(z.object({
  limit:z.number().min(1).max(100),
  cursor:z.number().nullish(),
  query:QueryValidator
})).query(async ({input})=>{
  const {query, cursor}= input
  const {sort, limit, search, ...queryOpts}= query

  const payload = await getPayloadClient()

const parsedQueryOpts:Record<string, {equals:string}> ={}

 Object.entries(queryOpts).forEach(([key, value])=>{
parsedQueryOpts[key]={
  equals:value,
}
 })

 const page= cursor || 1

const {docs:items, hasNextPage, nextPage} = await payload.find({
      collection:'vehicles',
      where:{
          approvedForSale:{
              equals:'approved'
          },
          or: [
            // array of OR conditions
            {
              name: {
                contains: search,
              },
            },
            {
              maker: {
                contains: search,
              },
            },
            
          ],
          ...parsedQueryOpts
      },
      sort,
      depth:1,
      limit,
      page,
  })
return {
  items,
  nextPage: hasNextPage? nextPage:null
}

})
})

export type AppRouter = typeof appRouter