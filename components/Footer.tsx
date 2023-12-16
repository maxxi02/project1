import { Box, Card, Link, Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Card as="footer" mt="auto" py="2" bg="white.500" color="black">
      <Text textAlign="center" fontSize="sm">
        © 2023 WeatherEdu. All rights reserved.
      </Text>
      <Text textAlign="center" mt="2" fontSize="sm">
        Stay weather-smart with WeatherEdu. Empowering you through education for safer communities.
      </Text>
      <Text textAlign="center" mt="2" fontSize="sm">
        <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
      </Text>
    </Card>
  )
}

export default Footer