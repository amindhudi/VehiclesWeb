import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/VehicleReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import ComboBoxResponsive from "@/components/ComboBoxResponsive";
const perks=[
  {
  name:'Instant Delivery',
  Icon:ArrowDownToLine,
  description:'Get your assets delivered to your email in seconds and download them right away.'

},
  {
  name:'Guaranted Quality',
  Icon:CheckCircle,
  description:'Every asset on our platform is verified by our team to ensure our highest quality. Not happy? we offer a 30-day refund guarantee.'

},

  {
  name:'For the Planet',
  Icon:Leaf,
  description:'We have pledged 1% of sales to the preservation and restoration of the natural enviroment. '

},

]
export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">

      <div>
        <ComboBoxResponsive />
      </div>
  
    <div className="flex w-full max-w-lg relative text-gray-600 focus-within:text-gray-400">
      
      <Input type="search" name="q" className="w-full max-w-lg py-2 text-sm text-white rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." />
      <span className="absolute inset-y-0 right-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
    </div>




      {/* <div className="flex w-full max-w-lg items-center space-x-2">
      <Input type="text" placeholder="Search here" />
      <Button variant='outline' type="submit">Search</Button>
    </div> */}
      {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
       
      </h1> */}
      {/* <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigitalHippo. Every asset on our
         platform is verified by our team to ensure our
         highest quality standards.
      </p> */}
      {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
       <Link href='/products' className={buttonVariants()} >Browse Trending</Link>
       <Button variant='ghost'>Our quality promise &rarr;</Button>
      </div> */}
      </div>
      <ProductReel query={{sort:'desc', limit: 4}} title="Brand new" href="/vehicles" />
    </MaxWidthWrapper>
    {/* <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
           {perks.map((perk)=> (
            <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'> 
            <div className="md:flex-shrink-0 flex justify-center"> 
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
              {<perk.Icon className="w-1/3 h-1/3" />}
            </div>
            </div>
            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
              <h3 className="text-base font-medium text-gray-900">
                {perk.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {perk.description}
              </p>
            </div>
            </div>
           ))}
        </div>

      </MaxWidthWrapper>
    </section> */}
    </>
  )
}
