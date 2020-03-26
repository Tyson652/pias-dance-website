/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { PageLayout } from "../components/PageLayout"
import timetableImg from "../img/timetable.png"
import SimpleMap from "../components/Map"

const timetable = () => (
  <PageLayout>
    <Flex
      sx={{
        flexDirection: "column",
        textAlign: "center",
        width: "100vw",
        backgroundColor: "#fdf8f7",
      }}
    >
      <Styled.h4 sx={{ marginBottom: 0 }}>Timetable</Styled.h4>
      <Flex sx={{ border: "2px solid red", justifyContent: "center" }}>
        <img
          src={timetableImg}
          sx={{
            width: "100%",
            height: "auto",
            margin: ["30px 150px", "70px 150px"],
            maxWidth: 1200,
          }}
        />
      </Flex>
      <Box sx={{ height: 400, width: 400 }}>
        <SimpleMap />
      </Box>
    </Flex>
  </PageLayout>
)

export default timetable
