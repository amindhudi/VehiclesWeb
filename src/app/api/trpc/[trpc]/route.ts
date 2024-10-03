import { appRouter } from '@/trpc'
import {fetchRequestHandler} from '@trpc/server/adapters/fetch'
import { NextResponse } from 'next/server';
const handler =(req:Request)=>{
    try {
    fetchRequestHandler({
        endpoint:'/api/trpc',
        req,
        router : appRouter,
        //@ts-expect-error context already passed from express middleware
        createContext:()=>({}),
    })
} catch (error) {
    console.error('Error in POST handler:', error); // This will help log errors on Vercel
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export {handler as GET, handler as POST}