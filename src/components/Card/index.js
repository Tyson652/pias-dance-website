/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import hero from "../../img/hero.jpg"

export const Card = () => {
  return (
    <Styled.a
      sx={{
        textDecoration: "none",
      }}
      href="#"
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: ["300px", "400px", "400px"],
          variant: "boxShadowStyles.darkShadow",
          margin: 40,
          "&:hover": {
            transform: "translateY(-3px)",
            transition: "0.3s",
            variant: "boxShadowStyles.hoverShadow",
          },
          "&:not(:hover)": { transform: "translateY(3px)", transition: "0.3s" },
        }}
      >
        <Styled.img
          src={hero}
          sx={{
            width: "100%",
            height: 256,
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box sx={{ padding: 16, textAlign: "left" }}>
          <Styled.p sx={{ marginY: 4, color: "text" }}>Dancing</Styled.p>
          <Styled.p
            sx={{ marginTop: 0, marginBottom: 4, fontSize: 16, color: "text" }}
          >
            I am a description
          </Styled.p>
          <Styled.p
            sx={{
              marginTop: 16,
              marginBottom: 4,
              fontSize: 16,
              fontWeight: "bold",
              color: "#7c5ffa",
            }}
          >
            Show More{" "}
            {/* <FontAwesomeIcon
              icon={["fas", "chevron-right"]}
              css={{ color: "#ff9900" }}
            /> */}
          </Styled.p>
        </Box>
      </Flex>
    </Styled.a>
  )
}
