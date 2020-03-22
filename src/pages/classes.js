/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { PageLayout } from "../components/PageLayout"
import picOne from "../img/classes-one.jpg"

const classes = () => (
  <PageLayout>
    <Flex
      sx={{
        flexDirection: "column",
        textAlign: "center",
        width: "100vw",
        backgroundColor: "#fdf8f7",
      }}
    >
      <Styled.h4 sx={{ marginBottom: 0 }}>Classes</Styled.h4>
      <Flex
        sx={{
          width: "100%",
          // border: "2px solid green",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ClassWrapper direction="column">
          <ClassImage image={picOne} altText="Class one pia dancing" />
          <TextBox>
            <Styled.p>Adults </Styled.p>
            <Styled.p>Lyrical class: </Styled.p>
            <Styled.p>
              This class is great for people who have never danced before and
              want to give it ago or if you have been dancing for a few years
              and want to just have fun an enjoy yourself. This is a lyrical
              class it will also have some contemporary in it too.
            </Styled.p>
            <Styled.p>
              We will be learning to love and dance around the floor, learning
              to express our self through music and we will be doing activity’s
              to grow and trust our creative minds to give ourselves confidence
              and a positive head space.
            </Styled.p>
          </TextBox>
        </ClassWrapper>
        <ClassWrapper direction="column-reverse">
          <TextBox>
            <Styled.p>Adults </Styled.p>
            <Styled.p>Lyrical class: </Styled.p>
            <Styled.p>
              This class is great for people who have never danced before and
              want to give it ago or if you have been dancing for a few years
              and want to just have fun an enjoy yourself. This is a lyrical
              class it will also have some contemporary in it too.
            </Styled.p>
            <Styled.p>
              We will be learning to love and dance around the floor, learning
              to express our self through music and we will be doing activity’s
              to grow and trust our creative minds to give ourselves confidence
              and a positive head space.
            </Styled.p>
          </TextBox>
          <ClassImage image={picOne} altText="Class one pia dancing" />
        </ClassWrapper>
      </Flex>
    </Flex>
  </PageLayout>
)

const ClassWrapper = ({ children, direction }) => (
  <Flex
    sx={{
      // border: "2px solid red",
      textAlign: "left",
      marginTop: 60,
      maxWidth: 1000,
      width: ["100%", "100%", "80%"],
      justifyContent: ["space-between", "space-around", "space-between"],
      flexDirection: [direction, "row", "row"],

      "&:last-child": {
        marginBottom: 60,
      },
    }}
  >
    {children}
  </Flex>
)

const TextBox = ({ children }) => (
  <Box
    sx={{
      width: ["100%", "50%"],
      // border: "2px solid blue",
      paddingTop: [20, 0, 0],
      "& > *": {
        padding: "0 20px 0 20px",
      },
    }}
  >
    {children}
  </Box>
)

const ClassImage = ({ image, altText }) => (
  <img
    src={image}
    alt={altText}
    sx={{
      width: ["100%", 300, 400],
      height: ["auto", "auto", 400],
      objectFit: "cover",
    }}
  />
)

export default classes
