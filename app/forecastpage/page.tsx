import CityPicker from "@/components/CityPicker"
import { Divider, Heading } from "@chakra-ui/react"
import { Card } from "@tremor/react"



function ForecastPage() {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center">
      <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <Heading as={'h1'} size={'4xl'} className="text-[whitesmoke]">Choose a city!</Heading>
        <Divider className="my-10"/>
        <Card className="p-0">
          {/* city picker */}
          <CityPicker/>
        </Card>
      </Card>
    </div>
  )
}

export default ForecastPage

