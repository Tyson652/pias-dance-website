/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import { Card } from "../Card"

export const Classes = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        textAlign: "center",
        width: "100vw",
        backgroundColor: "#fdf8f7",
      }}
    >
      <Styled.h4>Classes</Styled.h4>
      <Flex
        sx={{
          justifyContent: "center",
          flexDirection: ["column", "column", "row"],
          alignItems: "center",
          backgroundColor: "#fdf8f7",
        }}
      >
        <Card />
        <Card />
      </Flex>
    </Flex>
  )
}
