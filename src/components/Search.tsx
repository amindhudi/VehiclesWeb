"use client"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import React from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"


const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]


const Search = () =>{  
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return(
    <>
      <MaxWidthWrapper>
        <div className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">
          <div className="flex w-full max-w-lg relative text-gray-600 focus-within:text-gray-400">
            <Input type="search" name="q" className="w-full max-w-lg py-2 text-sm text-white rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." />
            <span className="absolute inset-y-0 right-0 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Search