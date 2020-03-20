/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import hero from "../../img/hero.jpg"

export const Hero = () => {
  return (
    <Flex sx={{ width: "100vw" }}>
      <img
        src={hero}
        sx={{
          width: "100vw",
          height: ["calc(100vh - 77px)", "calc(100vh - 132px)"],
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: ["calc(100vh - 77px)", "calc(100vh - 132px)"],
          position: "absolute",
          top: [75, 131],
          left: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      />
      <Flex
        sx={{
          width: "100%",
          height: ["calc(100vh - 77px)", "calc(100vh - 132px)"],
          position: "absolute",
          top: [75, 131],
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Styled.h1
          sx={{
            display: "absolute",
            color: "#9fedd7",
          }}
        >
          Pia's <br />
          Dance &amp; Acro <br />
          School
        </Styled.h1>
      </Flex>
    </Flex>
  )
}
