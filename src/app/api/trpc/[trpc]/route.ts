import { appRouter } from '@/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

// Modify the handler to use fetchRequestHandler directly without NextResponse.json
const handler = async (req: Request) => {
  try {
    return fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter, 
      createContext: () => ({})
    });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
};

export { handler as GET, handler as POST };
