/** @jsx jsx */
import { useState, useEffect } from "react"
import { jsx, Box, Flex } from "theme-ui"
import logo from "../../img/pia-logo.svg"
import { Link } from "gatsby"

export const HeaderNav = ({ togglePageFix }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#9fedd7",
        transition: ".6s",
        paddingX: ["16px", "16px", "24px"],
        paddingY: "8px",
      }}
    >
      <BurgerNav togglePageFix={togglePageFix} />
      <Navbar />
    </Box>
  )
}

const Navbar = () => {
  return (
    <Box sx={{ display: ["none", "block", "block"] }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: "8px",
        }}
      >
        <Link to="/">
          <Flex sx={{ alignItems: "center", width: "100px", height: "100px" }}>
            <img src={logo} sx={{ width: "100px", height: "100px" }} />
          </Flex>
        </Link>
        <Flex
          sx={{ alignItems: "center", cursor: "pointer" }}
          // css={{
          //   a: {
          //     opacity: 0.8,
          //     transition: ".4s",
          //   },
          //   "&:hover > a": {
          //     opacity: 1,
          //   },
          //   "&:hover > a:not(:hover)": {
          //     opacity: ".5",
          //   },
          // }}
        >
          <ul>
            <HeaderLink path="/meetPia">Meet Pia</HeaderLink>
            <HeaderLink path="/classes">Classes</HeaderLink>
            <HeaderLink path="/timetable">Timetable</HeaderLink>
            <HeaderLink path="/prices">Prices</HeaderLink>
            <HeaderLink path="/aboutUs">About Us</HeaderLink>
            <HeaderLink path="/contact">Contact</HeaderLink>
          </ul>
        </Flex>
      </Flex>
    </Box>
  )
}

// const HeaderLogo = () => {
//   // const [smallHeadingOpacity, setHeadingOpacity] = useState(0);

//   // useEffect(() => {
//   //   window.addEventListener("scroll", function() {
//   //     let currentOffset = window.pageYOffset;
//   //     let windowWidth = window.innerWidth;
//   //     let breakPoint = windowWidth > 800 ? 500 : 100;
//   //     setHeadingOpacity(currentOffset > breakPoint ? 1 : 0);
//   //   });
//   // });

//   return (
//     <Flex sx={{ alignItems: "center" }}>
//       <Logo />
//     </Flex>
//   )
// }

const HeaderLink = ({ children, path }) => (
  <Link to={path} sx={{ textDecoration: "none" }}>
    <li
      sx={{
        display: "inline",
        color: "#000",
        fontSize: [16, 16, 20],
        padding: "0 3px",
        marginX: [5, 5, 10],
        letterSpacing: [0, 0, "1px"],
        fontWeight: "light",
        font: "modern",
      }}
    >
      {children}
    </li>
  </Link>
)

const BurgerLink = ({ children, path }) => (
  <Link to={path} sx={{ textDecoration: "none" }}>
    <Box
      sx={{
        variant: "borderStyles.veryLightBorderTop",
        width: "100%",
        padding: 26,
        borderBottom: "1px solid rgba(000, 000, 000, 0.2)",
        backgroundColor: "#ffefec",
        textAlign: "left",
        "&:hover": {
          backgroundColor: "#fff",
        },
      }}
    >
      <p
        sx={{
          display: "inline",
          color: "#3e3e3e",
          padding: 2,
          fontWeight: 2,
          fontSize: 16,
        }}
      >
        {children}
      </p>
    </Box>
  </Link>
)

const IconBar = () => (
  <Box
    sx={{
      width: "27px",
      height: "4px",
      marginY: "6px",
      backgroundColor: "#000",
      opacity: 0.8,
      borderRadius: 4,
    }}
  />
)

const BurgerIcon = ({ dropDownOnClick }) => (
  <Box onClick={dropDownOnClick} sx={{ cursor: "pointer", marginRight: 5 }}>
    <IconBar />
    <IconBar />
    <IconBar />
  </Box>
)

const BurgerNav = ({ togglePageFix }) => {
  const [value, setValue] = useState("none")

  const dropDownOnClick = () => {
    if (value === "none") {
      setValue("null")
      togglePageFix()
    } else {
      setValue("none")
      togglePageFix()
    }
    return value
  }

  return (
    <Box sx={{ width: "100%", display: ["block", "none", "none"], left: 0 }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 4,
        }}
      >
        <a href="/">
          <Flex sx={{ alignItems: "center" }}>
            <img src={logo} sx={{ width: 50, height: 50 }} />
          </Flex>
        </a>
        <BurgerIcon dropDownOnClick={dropDownOnClick} />
      </Flex>
      <Flex
        sx={{
          position: "fixed",
          width: "100%",
          display: value,
          backgroundColor: "background",
          justifyContent: "center",
          // variant: "textStyles.modern",
          fontSize: 16,
          zIndex: 25,
          left: 0,
        }}
      >
        <Flex
          sx={{
            width: "100%",
            flexDirection: "column",
            textAlign: "center",
            zIndex: 5,
            position: "absolute",
            top: 7,
            "&:first-child": {
              borderTop: "1px solid rgba(000, 000, 000, 0.2)",
            },
          }}
        >
          {/* {links.map((link, i) => (
            <a key={i} href="#" sx={{ textDecoration: "none" }}>
              <BurgerLink>{link.description}</BurgerLink>
            </a>
          ))} */}

          <BurgerLink path="/meetPia">Meet Pia</BurgerLink>
          <BurgerLink path="/classes">Classes</BurgerLink>
          <BurgerLink path="/timetable">Timetable</BurgerLink>
          <BurgerLink path="/prices">Prices</BurgerLink>
          <BurgerLink path="/aboutUs">About Us</BurgerLink>
          <BurgerLink path="/contact">Contact</BurgerLink>
        </Flex>
      </Flex>
      <Box sx={{ position: "absolute", top: 0, left: 0 }}>
        <Flex
          onClick={dropDownOnClick}
          sx={{
            display: value,
            position: "fixed",
            zIndex: 20,
            width: "100%",
            height: "100%",
            backgroundColor: "darkness",
            opacity: "0.2",
          }}
        />
      </Box>
    </Box>
  )
}
