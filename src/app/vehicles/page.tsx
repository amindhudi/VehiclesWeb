import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/VehicleReel'
import { PRODUCT_CATEGORIES } from '@/components/config'
import Search from '@/components/Search'
import { Suspense } from 'react'
import SkeletonCard from '@/components/SkeletonCard'
import PaginationPage from '@/components/Pagination'

type Param = string | string[] | undefined

interface VehiclesPageProps {
  searchParams: { [key: string]: Param }
}

const parse = (param: Param) => {
  return typeof param === 'string' ? param : undefined
}

const VehiclesPage = ({
  searchParams,
}: VehiclesPageProps) => {
  const sort = parse(searchParams.sort)
  const category = parse(searchParams.category)
  const search = parse(searchParams.search) || ''
  const page = parse(searchParams.page) || 1

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label

  console.log('label: ' + label)
  console.log('sort: ' + sort)
  console.log('category: ' + category)


  return (
    <MaxWidthWrapper>
      <Search />  
      <Suspense key={search + page} fallback={<SkeletonCard/>}>
      <ProductReel
        query={{
          category,
          limit: 40,
          search: search?? '',
          sort:
            sort === 'desc' || sort === 'asc'
              ? sort
              : 'asc',
        }}
      />
      </Suspense>

      <PaginationPage/>
     
    </MaxWidthWrapper>
  )
}

export default VehiclesPage
