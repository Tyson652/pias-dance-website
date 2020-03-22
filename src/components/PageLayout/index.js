/** @jsx jsx */
import { useState, ReactNode } from "react"
import { jsx, Container, Box, Flex } from "theme-ui"
import { Global, css } from "@emotion/core"
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { HeaderNav } from "../HeaderNav"
import { Footer } from "../Footer"

// library.add(faCheckSquare, faCoffee);

export const PageLayout = ({ children }) => {
  const [position, setPosition] = useState("null")

  const togglePageFix = () => {
    position === "null" ? setPosition("fixed") : setPosition("null")

    return position
  }
  return (
    <root
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        backgroundColor: "#fdf8f7",
        fontFamily: "arial",
      }}
    >
      <Box
        sx={{
          position,
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <Container
          sx={{
            position: "relative",
            width: "100%",
            height: [77, 132],
            display: "block",
          }}
        >
          <Container
            sx={{
              position: "static",
              maxWidth: "100%",
              padding: "0px",
              zIndex: "100",
              top: 0,
            }}
          >
            <HeaderNav togglePageFix={togglePageFix} />
          </Container>
        </Container>
        {children}
        <Box sx={{ flexGrow: "1" }} />
        <Footer />
      </Box>
    </root>
  )
}
