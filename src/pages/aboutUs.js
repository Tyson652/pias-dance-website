/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { PageLayout } from "../components/PageLayout"

const aboutUs = () => (
  <PageLayout>
    <Flex
      sx={{
        flexDirection: "column",
        textAlign: "center",
        width: "100vw",
        backgroundColor: "#fdf8f7",
      }}
    >
      <Styled.h4 sx={{ marginBottom: 0 }}>About Us</Styled.h4>
      <Flex sx={{ border: "2px solid red", justifyContent: "center" }}>
        <div />
      </Flex>
    </Flex>
  </PageLayout>
)

export default aboutUs
