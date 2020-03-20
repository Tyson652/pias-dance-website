/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
//import banner from "../../img/banner.jpg"

export const Banner = () => {
  return (
    <Flex
      sx={{
        border: "2px solid #000",
        minHeight: 400,
        backgroundColor: "#000",
        textAlign: "center",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://cms.qz.com/wp-content/uploads/2019/12/The-power-of-dance-e1575906582595.jpg?quality=75&strip=all&w=1900&h=1068)",
        //backgroundColor: rgba(0, 0, 0, 0.1),
        backgroundSize: "cover",
        objectFit: "cover",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        maxWidth: "100vw",
      }}
    >
      <Styled.h4 sx={{ color: "#fff", maxWidth: "95vw", }}>
        Try Your First Class For Free!
      </Styled.h4>
      <a
        href="#"
        sx={{
          border: "2px solid #fff",
          paddingY: 10,
          paddingX: 40,
          fontSize: 20,
          borderRadius: 6,
          textDecoration: "none",
          color: "#fff",
          backgroundColor: "#7c5ffa",
        }}
      >
        Sign Up
      </a>
    </Flex>
  )
}
