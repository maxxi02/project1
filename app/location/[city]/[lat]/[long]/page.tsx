import getClient from "@/apollo-client"
import { CallOutCard } from "@/components/CallOutCard"
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries"
import { Heading } from "@chakra-ui/react"

type Props =
{
    params:
    {
        city: string,
        lat: string,
        long: string,
    }
}

async function page( {params:{city, long, lat}}: Props) {

    const client = getClient()
    const {data} = await client.query(
      {
        query: fetchWeatherQuery,
        variables:
        {
          current_weather: "true",
          longitude: long,
          latitude: lat,
          timezone: "auto",
          temperature_unit: 'fahrenheit',
        }
      }
    )

    const results: Root = data.myQuery;
    console.log(results);

  return (
    <div>
      <div>
        <div className="p-5">
          <div className="pb-5">
            <Heading className="py-2">Current weather</Heading>
            <p className="text-sm text-gray-400">
              Last Updated at:{""}
              {new Date(results.current_weather.time).toLocaleString()} 
              ({results.timezone})
            </p>
          </div>
          <div>
              <CallOutCard warning message="Hello!"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page