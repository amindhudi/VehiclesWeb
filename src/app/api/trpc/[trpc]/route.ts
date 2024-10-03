import { appRouter } from '@/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextResponse } from 'next/server';

const handler = async (req: Request) => {
  try {
    // Ensure that fetchRequestHandler returns a proper response
    const response = await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      // @ts-expect-error context already passed from express middleware
      createContext: () => ({}),
    });
    
    // Return the response correctly wrapped in NextResponse
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in POST handler:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
};

export { handler as GET, handler as POST };
