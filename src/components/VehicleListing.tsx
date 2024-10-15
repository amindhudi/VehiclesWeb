'use client'
import { cn, formatPrice } from "@/lib/utils"
import { Product, Vehicle } from "../payload-types"
import Link from "next/link"
import { useEffect, useState } from "react"
import { PRODUCT_CATEGORIES, VEHICLE_CATEGORIES } from "./config"
import ImageSlider from "./ImageSlider"
import { Skeleton } from "./ui/skeleton"

interface VehicleListingProps{
vehicle: Vehicle | null,
index : number
}

const VehicleListing =({vehicle, index}: VehicleListingProps)=>{
    const [isVisible, setIsVisible] = useState<boolean>(false)
    useEffect(() =>{
        const timer = setTimeout(() =>{
            setIsVisible(true)
        }, index * 75)
        return ()=> clearTimeout(timer)
    }, [index])
    if(!vehicle || !isVisible) return <VehiclePlaceholder />
  
  const label = VEHICLE_CATEGORIES.find(
    ({value}) => value===vehicle.category
  )?.label

  const validUrls = vehicle.images.map(({image}) =>
   typeof image==="string" ? image : image.url
   ).filter(Boolean) as string[]
    if(isVisible && vehicle){
    return (<Link className={cn("invisible h-full w-full cursor-pointer group/main",{
        "visible animate-in fade-in-5":isVisible,
    } 
    )} 
    href={`/vehicle/${vehicle.id}`}>
        <div className="flex flex-col w-full">
        <ImageSlider urls={validUrls} />

         <h3 className="mt-4 font-medium text-sm text-gray-700">
            {vehicle.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
            {label}
            </p>
            <p className="mt-1 font-medium text-sm text-gray-900">{formatPrice(vehicle.price)}</p>
        </div>
    </Link>)
  }
  return <div></div>
}
const VehiclePlaceholder =()=>{
    return(
        <div className="flex flex-col w-full">
        <div 
        className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl"
        >
       <Skeleton className="h-full w-full" />
        </div>
        <Skeleton className="mt-4 w-2/3 h-4 rounded-lg"/>
        <Skeleton className="mt-2 w-16 h-4 rounded-lg"/>
        <Skeleton className="mt-2 w-12 h-4 rounded-lg"/>
        
        
        </div>
    )
}
export default VehicleListing