import { Spinner } from "@chakra-ui/react"

function loading() {
  return (
    <div className="h-screen grid place-items-center">
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </div>
  )
}

export default loading