"use client"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useDebouncedCallback } from 'use-debounce';






const Search = () =>{  


  // const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")
  // return(
  //   <>
  //     <MaxWidthWrapper>
  //       <div className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">
  //         <div className="flex w-full max-w-lg relative text-gray-600 focus-within:text-gray-400">
  //           <Input type="search" name="q" className="w-full max-w-lg py-2 text-sm text-white rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." />
  //           <span className="absolute inset-y-0 right-0 flex items-center pl-2">
  //             <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
  //               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  //             </button>
  //           </span>
  //         </div>
  //       </div>
  //     </MaxWidthWrapper>
  //   </>
  // )
  const searchParams = useSearchParams();
  let pathname = usePathname();
  const { replace } = useRouter();
  // function handleSearch(term: string) {
  //   console.log('SearchParams:'+ searchParams)
  //   console.log('Path name:'+ pathname)
  //   console.log('Path name:'+ replace)
  //   debugger;
  //   if(pathname==='/'){
  //     console.log('tested');
  //     pathname ='/vehicles';
  //   }



  //   const params = new URLSearchParams(searchParams);
  //   if (term) {
  //     params.set('search', term);
  //   } else {
  //     params.set('search', '');
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }

  const handleSearch = useDebouncedCallback((term) => {
    if(pathname==='/'){
      pathname ='/vehicles';
    }
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.set('search', '');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

 var placeholder = 'Search here'
  return (
    <MaxWidthWrapper>
      <div className="mt-10 w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
        <input type="search" name="search" id="search" placeholder="Search"
          className="appearance-none w-full outline-none focus:outline-none active:outline-none"
          defaultValue={searchParams.get('search')?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <button className="ml-1 outline-none focus:outline-none active:outline-none">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </MaxWidthWrapper>
  );
}

export default Search