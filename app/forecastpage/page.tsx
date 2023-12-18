import CityPicker from "@/components/CityPicker"

import { Card, Divider } from "@tremor/react"



function ForecastPage() {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center">
      <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2  className="text-[whitesmoke] lg:text-6xl text-4xl font-bold">Choose a city!</h2>
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

