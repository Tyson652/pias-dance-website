/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import { PageLayout } from "../components/PageLayout"
import { Hero } from "../components/Hero"
import { Mission } from "../components/Mission"
import { Classes } from "../components/Classes"
import { Banner } from "../components/Banner"

const IndexPage = () => (
  <div
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      fontFamily: "arial",
      maxWidth: "100vw",
    }}
  >
    <PageLayout>
      <Hero />
      <Mission />
      <Classes />
      <Banner />
    </PageLayout>
  </div>
)

export default IndexPage
