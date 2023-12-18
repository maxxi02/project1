"use client";
import { Card, Highlight } from '@chakra-ui/react'
import { Button } from '@tremor/react';
import Link from 'next/link'

function HomePage() {
  return (
    <div className='lg:flex p-20 lg:p-0 items-center grid place-items-center h-screen w-full max-w-[1400px] mx-auto lg:gap-[100px] '>
      <div className='flex-1 flex flex-col items-start'>
            Welcome to WeatherEdu
          <h2 className='text-4xl leading-10 py-4 my-2'>
            Exploring The{' '}
            <Highlight query={''} styles={{ bg: 'orange.100', rounded: 'md', py: '1', px: '2' }}>
              Fascinating World Of Weather Education
            </Highlight>
          </h2>
        <div className='flex flex-col item-start gap-3'>
          <h2>
            <Highlight query={'Powered by live Forecast Function'} styles={{ bg: 'orange.100', rounded: 'md', py: '1', px: '2' }}>
              Powered by live Forecast Function
            </Highlight>
          </h2>
          <Link href='/forecastpage' passHref>
            <Button >
              Try it now!
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex-1 lg:block hidden'>
        <Card className='w-full p-3' variant='unstyled'>
          <video className='w-full h-full bg-cover rounded-md' src='/bg.mp4' autoPlay muted loop />
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
