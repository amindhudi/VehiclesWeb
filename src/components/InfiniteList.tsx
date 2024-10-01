// src/components/InfiniteList.tsx
import { trpc } from "@/trpc/client"
import React from "react";
import { useInView } from 'react-intersection-observer';

const InfiniteList = () => {
  const { ref, inView } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = trpc.example.test.useInfiniteQuery(
  { limit: 4 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const items = data?.pages.flatMap((page) => page.items) ?? [];

  // Fetch next page when in view
  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div>
      <ul>
        {/* {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </ul>
      <div ref={ref} />
      {isFetchingNextPage && <p>Loading more...</p>}
      {!hasNextPage && <p>No more items to load.</p>}
    </div>
  );
};

export default InfiniteList;
