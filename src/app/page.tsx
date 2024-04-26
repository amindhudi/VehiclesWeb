import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/VehicleReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import ComboBoxResponsive from "@/components/ComboBoxResponsive";
import React from "react";
import Search from "@/components/Search";
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
  // const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")


  return (
    <>
    <MaxWidthWrapper>
      <Search />  
      <ProductReel query={{sort:'desc', limit: 4}} href="/vehicles" />
    </MaxWidthWrapper>
   
    </>
  )
}
