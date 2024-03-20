import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/VehicleReel'
import { PRODUCT_CATEGORIES } from '@/components/config'

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

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label

  console.log('label: ' + label)
  console.log('sort: ' + sort)
  console.log('category: ' + category)


  return (
    <MaxWidthWrapper>
      <ProductReel
        title={label ?? 'Browse high-quality assets'}
        query={{
          category,
          limit: 40,
          sort:
            sort === 'desc' || sort === 'asc'
              ? sort
              : 'asc',
        }}
      />
    </MaxWidthWrapper>
  )
}

export default VehiclesPage
