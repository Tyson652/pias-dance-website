/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import { PageLayout } from "../components/PageLayout"
import { Hero } from "../components/Hero"
import { Mission } from "../components/Mission"
import { Classes } from "../components/Classes"
import { Banner } from "../components/Banner"

const IndexPage = () => (
  <PageLayout>
    <Hero />
    <Mission />
    <Classes />
    <Banner />
  </PageLayout>
)

export default IndexPage
