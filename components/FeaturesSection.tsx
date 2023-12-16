import { Box, Card, Divider,  Heading } from "@chakra-ui/react"
import { useRouter } from "next/navigation"





function FeaturesSection() {

  const router = useRouter();
  
  const pushToForecast = () =>
  {
    router.push(`/forecastpage`)
  }
  const pushToQuizPage = () =>
  {
    router.push(`/quizpage`)
  }
  const pushToLearningPage = () =>
  {
    router.push(`learningpage`)
  }

  return (
    <div className="w-full h-full flex flex-col items-center py-6">
        <Divider orientation="horizontal" />
        <Heading py={10}>
          Features
        </Heading>
        <div className="flex items-center justify-center gap-5">
          <Box p={6} bg={''}>
            <Card>
              <div className="card" onClick={pushToForecast}>
                <div className="card-content">
                  <p className="card-title">VIEW FORECAST🌤️</p>
                  <p className="card-para">
                    Explore live city weather updates and learn through interactive graphs.
                  </p>
                </div>
              </div>
            </Card>
          </Box>
          <Box p={6} bg={''}>
            <Card>
              <div className="card2" onClick={pushToQuizPage}>
                <div className="card-content">
                  <p className="card-title">QUIZLET🧩</p>
                  <p className="card-para">Expand Your Knowledge with Engaging Quizzes.</p>
                </div>
              </div>
            </Card>
          </Box>
          <Box p={6} bg={''}>
            <Card>
            <div className="card3" onClick={pushToLearningPage}>
              <div className="card-content">
                <p className="card-title">EXPLORE TACTICS & GUIDES TO MINIMIZE RISKS 🧑‍🚒</p>
                <p className="card-para">Equip Yourself with Strategic Insights for Effective Risk Mitigation</p>
              </div>
            </div>
            </Card>
          </Box>
        </div>

    </div>
  )
}

export default FeaturesSection