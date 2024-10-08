'use client'

import { Card } from "./ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const PaginationPage = ({
  total,
  perPage,
  page,
 
}: {
  total: any;
  perPage: any;
  page: any;
}) =>{
    const [currentPage, setCurrentPage]=useState(page)
    const [itemsPerPage, setItemsPerPage]=useState(perPage)
    
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    //const currentItems = data.slice(firstItemIndex, lastItemIndex)


return(

       <PaginationSection 
totalItems={total}
itemsPerPage={itemsPerPage}
currentPage ={currentPage}
setCurrentPage ={setCurrentPage}

/>
)
}
export default PaginationPage

function PaginationSection({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage,
  }: {
    totalItems: any;
    itemsPerPage: any;
    currentPage: any;
    setCurrentPage: any;
  }) {




    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const maxPageNum = 5; // Maximum page numbers to display at once
    const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible
  
    let activePages = pageNumbers.slice(
      Math.max(0, currentPage - 1 - pageNumLimit),
      Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
    );
  
    const handleNextPage = () => {
      if (currentPage < pageNumbers.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const searchParams = useSearchParams();
      let pathname = usePathname();
      const { replace } = useRouter();
    const handleRoute = (page:any) => {

      setCurrentPage(page)
      if(pathname==='/'){
        pathname ='/vehicles';
      }
      const params = new URLSearchParams(searchParams);
        params.set('page', page);
      replace(`${pathname}?${params.toString()}`);
    };
  
    
    // Function to render page numbers with ellipsis
    const renderPages = () => {
      

      const renderedPages = activePages.map((page, idx) => (
        <PaginationItem
          key={idx}
          className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
        >
          <PaginationLink onClick={() => handleRoute(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ));
  
      // Add ellipsis at the start if necessary
      if (activePages[0] > 1) {
        renderedPages.unshift(
          <PaginationEllipsis
            key="ellipsis-start"
            onClick={() => setCurrentPage(activePages[0] - 1)}
          />
        );
      }
  
      // Add ellipsis at the end if necessary
      if (activePages[activePages.length - 1] < pageNumbers.length) {
        renderedPages.push(
          <PaginationEllipsis
            key="ellipsis-end"
            onClick={() =>
              setCurrentPage(activePages[activePages.length - 1] + 1)
            }
          />
        );
      }
  
      return renderedPages;
    };
  
    return (
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>
  
            {renderPages()}
  
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  }