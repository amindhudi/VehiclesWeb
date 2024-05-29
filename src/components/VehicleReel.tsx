'use client'
import { TQueryValidator } from "@/lib/validators/query-validator"
import { Product, Vehicle } from "@/payload-types"
import { trpc } from "@/trpc/client"
import Link from "next/link"
import PaginationPage from "./Pagination"
import VehicleListing from "./VehicleListing"

interface VehicleReelProps{
    href?:string,
    query:TQueryValidator

}

const FALLBACK_LIMIT = 4
const VehicleReel =(props: VehicleReelProps)=>{
    const {href, query} = props
    const {data:queryResults, isLoading} = trpc.getInfiniteVehicles.useInfiniteQuery({
        limit: query.limit?? FALLBACK_LIMIT,  query
    },
    {
        getNextPageParam:(lastPage)=> lastPage.nextPage
    }
    )


    const vehicles = queryResults?.pages.flatMap(
        (page)=> page.items
    )

    


    let map:(Vehicle | null)[]=[]
    if(vehicles && vehicles.length){
        map=vehicles
    } else if(isLoading){
        map= new Array<null>(query.limit?? FALLBACK_LIMIT).fill(null)
    }
return (
    <>
        <section className="py-12">

            <div className="relative">
                <div className="mt-6 flex items-center w-full">
                    <div
                        className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                        {map.map((vehicle, i) => (
                            <VehicleListing key={`vehicle-${i}`} vehicle={vehicle} index={i} />
                        )
                        )}
                    </div>
                </div>

            </div>
        </section>

        {/* <section className="py-12">
            <PaginationPage total={query.limit} perPage={4} page={1} />
        </section> */}
</>
)
}

export default VehicleReel