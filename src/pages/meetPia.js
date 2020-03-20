/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { PageLayout } from "../components/PageLayout"
import Profile from "../img/profile.jpg"

const meetPia = () => (
  <div
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      fontFamily: "arial",
      maxWidth: "100vw",
      backgroundColor: "#fdf8f7",
    }}
  >
    <PageLayout>
      <Flex sx={{ justifyContent: "center" }}>
        <Flex
          sx={{
            width: ["100%", "100%", "70%"],
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: ["column", "column", "row"],
            marginTop: [10, 30, 50],
            marginBottom: [10, 30, 50],
          }}
        >
          <Box>
            <img
              src={Profile}
              alt="Pia profile"
              sx={{
                width: [200, 250, 300],
                borderRadius: "100%",
                marginTop: ["50px", "50px", 0],
              }}
            />
          </Box>
          <Box
            sx={{
              padding: 30,
              width: ["100%", "80%", "40vw"],
            }}
          >
            <p sx={{ fontSize: 16 }}>Hello, </p>
            <p sx={{ fontSize: 16 }}>
              I have been dancing my heart a way since I was 2 years old, as I
              was very fortunate I have a mother who owned her own a dance
              school called the Dance Barn right here in Rozelle. Before the
              dance Barn closed in 2014 I had been assisting and teaching my own
              classes there for about 3 years.
            </p>
            <p sx={{ fontSize: 16 }}>
              I love to dance, it is how I express myself. So it makes me very
              happy that I am starting my own school. I have been teaching all
              styles of dance, acrobatics, gymnastics and circus for about 6
              year and have loved every minute of it.
            </p>
          </Box>
        </Flex>
      </Flex>
    </PageLayout>
  </div>
)

export default meetPia
