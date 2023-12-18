"use client"
import { Select, Stack } from "@chakra-ui/react";
import { City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";


type cityOption =
{
    value:
    {
        name: string;
        countryCode: string;
        stateCode: string;
        latitude: string ;
        longitude: string ;
    }, 
    label: string,
} | null;




function CityPicker() {

    const [selectedCity, setSelectedCity] = useState<cityOption>(null);
    const router = useRouter();
    const cityOptions = City.getCitiesOfCountry('PH')?.map(c =>({
        value:{
            name: c.name,
            countryCode: c.countryCode,
            stateCode: c.stateCode,
            latitude: c.latitude!,
            longitude: c.longitude!,
        },
        label: c.name,
        
    }))

    const handleSelectedCity = (option: cityOption) => {
     
        router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`);
    };
  return (
    <div>
        <Stack spacing={3}>
            <Select 
            placeholder="Select city" 
            size={'lg'}  
            value={selectedCity?.label}
            onChange={handleSelectedCity}
            >
                {cityOptions!.map(o =>(
                <option key={o.label} value={o.label}>
                    {o.label}
                </option>
                ))}
            </Select>
        </Stack>
    </div>
  );
}

export default CityPicker;

