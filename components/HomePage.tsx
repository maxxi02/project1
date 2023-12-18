
import { Button, Card, Heading, Highlight, Text } from '@chakra-ui/react'
import Link from 'next/link'

function HomePage() {


  return (
    <div className='flex items-center h-screen w-full max-w-[1600px] mx-auto gap-[100px]'>
      <div className='flex-1 flex flex-col items-start'>
        <Heading lineHeight='normal'>
          <Heading className='py-2' as='h4' size='md'>
            Welcome to WeatherEdu
          </Heading>
          <Text  fontSize={'6xl'}>Exploring The{" "}  
          <Highlight query={''} styles={{bg:'orange.100', rounded: 'md', py: '1', px: '2'}}>
            Fascinating World Of Weather Education
          </Highlight>
          </Text>
        </Heading>
        <div className='flex flex-col item-start gap-3'>
          <Text fontSize='md' className=''>
            <Highlight query={'Powered by live Forecast Function'} styles={{bg:'orange.100', rounded: 'md', py: '1', px: '2'}}>
            Powered by live Forecast Function
            </Highlight>
          </Text>
          <Link href={'/forecastpage'} className='py-2'>
          <Button colorScheme='black.500' variant='outline'>
            Try it now!
          </Button>
          </Link>
        </div>
      </div>
      <div className='flex-1'>
        <Card className='w-full p-3' colorScheme={'red'} variant={'unstyled'}>
          <video
          className='w-[100%] h-[100%] bg-cover rounded-md' 
          src="/bg.mp4" 
          autoPlay
          muted
          loop
          />
        </Card>
      </div>
    </div>
  )
}

export default HomePage