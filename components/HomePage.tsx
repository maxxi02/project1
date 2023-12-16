
import { Button, Card, Heading, Highlight, Text } from '@chakra-ui/react'
import Link from 'next/link'

function HomePage() {


  return (
    <div className='flex items-center h-screen w-full max-w-[1600px] mx-auto gap-[100px]'>
      <div className='flex-1 flex flex-col items-start'>
        <Heading lineHeight='tall'>
          <Heading className='py-2' as='h4' size='md'>
            Welcome to WeatherEdu
          </Heading>
          <Text  fontSize={'6xl'}>Exploring the <Highlight query={'World of Weather'} styles={{bg:'orange.100', rounded: 'md', py: '1', px: '2'}}>Fascinating World of Weather Education</Highlight></Text>
        </Heading>
        <Link href={'/page2'}>
        <Button colorScheme='black.500' variant='outline'>
          Button
        </Button>
        </Link>
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