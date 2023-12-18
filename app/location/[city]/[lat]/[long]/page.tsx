import getClient from "@/apollo-client"
import { CallOutCard } from "@/components/CallOutCard"
import Error from "@/components/Error"
import InformationPanel from "@/components/InformationPanel"
import StatCard from "@/components/StatCard"
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries"
import { Divider } from "@tremor/react"




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
    const decodeURI = decodeURIComponent(city)

    const client = getClient();
    try{
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
            <InformationPanel 
            results={results} 
            city={city} 
            lat={lat} 
            long={long}/>
              <div className="flex flex-col w-full">
    
                <div className="p-5">
                  <div className="pb-5">
                    <h2 className="py-2">Current weather</h2>
                    <p className="text-sm text-gray-400">
                      Last Updated at:{" "}
                      {new Date(results.current_weather.time).toLocaleString()} ({results.timezone})
                    </p>
                  </div>
            
                    <div className="m-2 mb-10">
                      {/* calloutcard */}
                      <CallOutCard message="Explore live city weather updates and learn through interactive graphs." />
                    </div>
            
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                    {/* statcard */}
                    <StatCard
                      title="Maximum Temperature"
                      metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                      color="yellow"
                      />
                    <StatCard
                      title="Minimum Temperature"
                      metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
                      color="green"
                    />
                    <div className="flex flex-col items-center w-full gap-3">
                      <StatCard
                        title="UV Index"
                        metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                        color="rose"
                        />
                      {Number(results.daily.uv_index_max[0].toFixed(1)) > 7 && (
                        <CallOutCard
                          warning
                          message={`UV index in ${decodeURI} is high today, make sure to wear Sun Protection Factor (SPF)`}
                          />)}
                    </div>
    
                    <div className="flex space-x-3">
                      <StatCard
                          title="Wind Speed"
                          metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                          color="cyan"
                          />
                      <StatCard
                          title="Wind Direction"
                          metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                          color="violet"
                          />
                    </div>
                    </div>
              </div>
              <Divider/>
              {/* charts */}
              <div className="space-y-3">
    
              </div>
            </div>
          </div>
        ) 
    }
    catch(error)
    {
      <Error/>
    }};
    

export default page;