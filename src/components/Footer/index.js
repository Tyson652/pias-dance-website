/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import { Link } from "gatsby"
import insta from "../../img/icons/insta2.png"
import facebook from "../../img/icons/face2.png"
import twitter from "../../img/icons/twit2.png"

export const Footer = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "#9fedd7",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <Flex
        sx={{
          color: "#fff",
          justifyContent: "center",
          fontSize: 30,
          color: "#000",
        }}
      >
        <Styled.h4 sx={{ textAlign: "center" }}>Follow Us Today!</Styled.h4>
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          "&>*": {
            padding: "10px 30px",
          },
        }}
      >
        <img src={insta} />
        <img src={facebook} />
        <img src={twitter} />
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <ul
          sx={{
            color: "#000",
            listStyle: "none",
            display: "flex",
            width: "100vw",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: 0,
            "&>*": {
              padding: "10px 30px",
              fontSize: 20,
              textDecoration: "none",
              color: "#000",
            },
          }}
        >
          <Link to="/meetPia">Meet Pia</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/timetable">Timetable</Link>
          <Link to="/prices">Prices</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </Flex>
      <Flex sx={{ color: "#000", justifyContent: "center", paddingBottom: 40 }}>
        <p sx={{ margin: 0 }}>Copyright Pia’s Dance &amp; Acro School 2020</p>
      </Flex>
    </Flex>
  )
}
