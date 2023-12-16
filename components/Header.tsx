import { Card, CardBody, Heading, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const list = [
  
  {text: 'Home', href: '/'},
  {text: 'About', href: '/about'}
  
]

function Header() {

  const router = useRouter()
  const push = () =>
  {
    router.push(`/`)
  }
  return (
    <Card className='px-20'>
      <CardBody className='flex items-center justify-between'>
        <div className='cursor-pointer' onClick={push}>
            <Heading>WeatherEdu</Heading>
            <Heading as={'h6'} size={'x5'}>Minimize Risks and Enhance Resilience</Heading>
        </div>
        <div>
          <ul className='flex items-center gap-5'>
            {list.map((item, i) => (<Link key={i} href={item.href}>{item.text}</Link>))}
          </ul>
        </div>
      </CardBody>
    </Card>
  )
}

export default Header