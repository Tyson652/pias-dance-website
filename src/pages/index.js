/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { PageLayout } from "../components/PageLayout"
import { Hero } from "../components/Hero"
import { Mission } from "../components/Mission"
import { Classes } from "../components/Classes"
import { Banner } from "../components/Banner"
import MapContainer from "../components/Map"

const IndexPage = () => (
  <PageLayout>
    <Hero />
    <Mission />
    <Classes />
    <Banner />
    <Box
      sx={{ width: "100%", height: 315, position: "relative", display: "grid" }}
    >
      <MapContainer width="100%" height="315px" />
    </Box>
  </PageLayout>
)

export default IndexPage
