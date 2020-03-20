/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { Link } from "gatsby"

export const Mission = () => {
  return (
    <Flex
      sx={{
        width: "100vw",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#fdf8f7",
      }}
    >
      <Styled.h4>Our Mission</Styled.h4>
      <Styled.p>
        Is to make a safe and friendly community, where everyone can be
        creative,
        <br />
        confident and healthy, in a fun and artistic way.
      </Styled.p>
      <Box sx={{ width: "100%", height: "auto", marginY: 40 }}>
          <Link to="/meetPia"
            sx={{
              border: "2px solid #fff",
              paddingY: 10,
              paddingX: 40,
              fontSize: 20,
              borderRadius: 6,
              textDecoration: "none",
              backgroundColor: "#7c5ffa",
              color: "#fff",
            }}
          >
            Meet Pia
        </Link>
      </Box>
    </Flex>
  )
}
