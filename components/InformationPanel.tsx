import { Card, Divider, Heading } from "@chakra-ui/react"
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/WeatherCodeToString";
import Image from "next/image";

type Props = 
{
    city: string,
    lat: string,
    long: string,
    results: Root,
}

function InformationPanel({city, long, lat, results}: Props) {
    const decodeURI = decodeURIComponent(city);
  return (
    <div className="p-10 bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="pb-5 flex flex-col items-start gap-4">
            <h1 className="text-[whitesmoke]">
                <Heading  size={"3xl"} >{decodeURI}</Heading>
            </h1>
            <p className="text-xs text-[whitesmoke] hover:text-black duration-150 ease-in-out">Long/Lat: {long}, {lat}</p>
        </div>
        <Card>
            <CityPicker/>
        </Card>
        <Divider className="my-10"/>
        <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
            <div>
                <p className="text-xl  text-[whitesmoke]">
                    {new Date().toLocaleDateString("en-GB",
                    {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>

                <p className="font-extralight text-[whitesmoke]">
                    Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </p>
            </div>

            <p className="text-xl font-bold uppercase text-[whitesmoke]">
                {
                    new Date().toLocaleTimeString("en-GB",
                    {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })
                }
            </p>
        </div>
        <Divider className="mt-10 mb-5"/>
        <div>
            <Image
            width={75} 
            height={75} 
            alt="" 
            src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[results.current_weather.weathercode].icon}.png`}/>
            <div>
                <div>
                    <p className="text-[whitesmoke]">{results.current_weather.temperature.toFixed(1)}°C</p>
                    <p className="text-[whitesmoke]">
                        {/* weather code */}
                        {weatherCodeToString[results.current_weather.weathercode].label}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InformationPanel