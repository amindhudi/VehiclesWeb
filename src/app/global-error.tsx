// app/error.tsx
'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry or LogRocket
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}
