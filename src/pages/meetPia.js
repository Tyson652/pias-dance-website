/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { PageLayout } from "../components/PageLayout"
import Profile from "../img/profile.jpg"

const meetPia = () => (

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
          <Flex sx={{ height: "100%" }}>
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
          </Flex>
          <Box
            sx={{
              padding: 30,
              width: ["100%", "80%", "40vw"],
            }}
          >
            <p sx={{ fontSize: 16 }}>Hello, </p>
            <p sx={{ fontSize: 16 }}>
              I have been dancing my heart a way since I was 2 years old, as I
              was very fortunate to have a mother who owned her own a dance
              school called the Dance Barn right here in Rozelle. Before the
              dance Barn closed in 2014 I had been assisting and teaching my own
              classes there for about 3 years.
            </p>
            <p sx={{ fontSize: 16 }}>
              I love to dance, it is how I express myself. So it makes me very
              happy that I am starting my own school. I have been teaching all
              styles of dance, acrobatics, gymnastics and circus for about 6
              years and I have loved every minute of it.
            </p>
            <p sx={{ fontSize: 16 }}>
              For the last 4 years I have been in early childhood education and
              care, working with 3 months to 6 year old’s. While I was there I
              obtained my personal training certificate and have been teaching
              Pilates and aerobics and personal training sessions to adults
              which has been a new challenge and fun.
            </p>
            <p sx={{ fontSize: 16 }}>
              I have now realized that dance and owning my own business is
              definitely what I am meant to do. I am very passionate about dance
              and fitness and making it challenging and fun for everyone. I
              think we can all have fun and grow as a person even if we are 3 or
              93 years old, we still deserve to love ourselves and find our own
              voice in this crowded world.
            </p>
          </Box>
        </Flex>
      </Flex>
    </PageLayout>
)

export default meetPia
