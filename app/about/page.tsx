"use client"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button, Card, CardBody, CardHeader, Heading, Highlight, ListItem, Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

function About() {
  const router = useRouter();

  const push = ()=>
  {
    router.push('/')
  }

  return (
    <div className="flex flex-col items-center p-10 gap-10">
      <Card >
        <CardHeader>
          <Heading>About WeatherEdu</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading as='h2' size={'lg'} textTransform='uppercase'>Our Mission</Heading>
              <Text pt='2' fontSize='sm'>
              Welcome to WeatherEdu, where our mission is to minimize risks and enhance resilience through comprehensive weather education. We understand the critical role that weather plays in various aspects of our lives, from personal safety to community well-being and beyond. Our platform is dedicated to providing accessible and insightful information that empowers individuals and communities to make informed decisions in the face of changing weather conditions.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box className="flex flex-col items-start gap-5">
              <Heading as='h2' size={'lg'} textTransform='uppercase'>What Sets Us Apart</Heading>
              <UnorderedList>
                <ListItem>
                  <Highlight query='Educational Focus:' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
                    Educational Focus: WeatherEdu is committed to delivering high-quality educational content that is accessible to everyone. We break down complex meteorological concepts into easy-to-understand lessons, ensuring that you can grasp the essentials of weather science.
                  </Highlight>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Highlight query='Community Engagement:' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
                  Community Engagement: We believe in the power of community resilience. WeatherEdu fosters a sense of community by providing forums, discussion boards, and interactive sessions where individuals can share experiences, ask questions, and collaborate on weather-related challenges.
                  </Highlight>
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </CardBody>
        </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box className="flex flex-col items-start gap-5">
              <Heading as='h2' size={'lg'} textTransform='uppercase'>Key Features</Heading>
              <UnorderedList>
                <ListItem>
                  <Highlight query='Quizlet for Risk Reduction:' styles={{ px: '1', py: '1', bg: 'pink.100' }}>
                  Quizlet for Risk Reduction:
Engage in interactive and informative quizzes that focus on risk reduction strategies. Test your knowledge on various weather-related topics and enhance your understanding of practical measures to mitigate risks in different scenarios.
                  </Highlight>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Highlight query='Forecast Viewing with Graphs:' styles={{ px: '1', py: '1', bg: 'pink.100' }}>
                  Forecast Viewing with Graphs:
Stay ahead of the weather curve with our intuitive forecast interface. Access real-time weather forecasts enriched with insightful graphs, providing you with a visual representation of upcoming weather patterns, trends, and potential risks.
                  </Highlight>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Highlight query='Learning Tactics:' styles={{ px: '1', py: '1', bg: 'pink.100' }}>
                  Learning Tactics:

Dive into our learning tactics section, where we provide tailored strategies and tactics to equip you with the skills needed to navigate and respond effectively to changing weather conditions. From emergency response techniques to proactive risk reduction methods, WeatherEdu is your guide to practical knowledge.
                  </Highlight>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Highlight query='Guides to Lessen Risks:' styles={{ px: '1', py: '1', bg: 'pink.100' }}>
                  Guides to Lessen Risks:

Explore in-depth guides dedicated to lessening risks associated with various weather phenomena. Whether it&apos;s preparing for extreme weather events, understanding the impact of climate change, or implementing safety measures, our guides are designed to empower you with actionable insights.
                  </Highlight>
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </CardBody>
       </Card>
       <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' onClick={push}>
          Home
      </Button>
    </div>

  )
}

export default About