/** @jsx jsx */
import { jsx, Flex, Styled, Box } from "theme-ui"
import { PageLayout } from "../components/PageLayout"

const prices = () => (
  <PageLayout>
    <Flex
      sx={{
        flexDirection: "column",
        textAlign: "center",
        width: "100vw",
        backgroundColor: "#fdf8f7",
      }}
    >
      <Styled.h4 sx={{ marginBottom: 0 }}>Prices</Styled.h4>
      <Flex
        sx={{
          border: "2px solid red",
          flexDirection: "column",
          justifyContent: "flexStart",
          textAlign: "left",
          maxWidth: 700
        }}
      >
        <div>
          <Styled.h5>Terms &amp; Dates</Styled.h5>
          <p>Kids school terms – all terms are 10 weeks</p>
          <ul sx={{ textAlign: "left", padding: 0, listStyle: "inside" }}>
            <li><b>Term 1:</b> 4th February- 11th April</li>
            <li><b>Term 2:</b> 27th April – 4th July</li>
            <li><b>Term 3:</b> 20th July – 26th September</li>
            <li><b>Term 4:</b> 12th October – 19th December</li>
          </ul>
        </div>

        <div>
          <Styled.h5>Kids Packages</Styled.h5>
          <ul sx={{ textAlign: "left", padding: 0, listStyle: "inside" }}>
            <li><b>1 class per week:</b> $15 per class = $150 per term</li>
            <li><b>2 classes per week:</b> $12 per class = $240 per term</li>
            <li><b>3 classes per week:</b> $10 per class = $300 per term </li>
          </ul>
          <p>
            * If you have more than one child in your family attending the
            school please see pia for your discount{" "}
          </p>
        </div>

        <div>
          <Styled.h5>Adults Packages</Styled.h5>
          <ul sx={{ textAlign: "left", padding: 0, listStyle: "inside" }}>
            <li><b>One off class:</b> $20</li>
            <li><b>5 class pass:</b> $90 (makes $18 per class, 3 months to use)</li>
            <li><b>10 class pass:</b> $160 (makes $16 per class, 6 months to use)</li>
          </ul>
        </div>

        <div>
          <Styled.h5>How To Pay</Styled.h5>
          <ul sx={{ textAlign: "left", padding: 0, listStyle: "inside" }}>
            <li>
              Pay in cash or cheque: Please put in envelope and write on it name
              of child, class, date and package paying for.
            </li>
            <li>Tap with card</li>
            <li>Bank transfer</li>
          </ul>
        </div>

        <div>
          <Styled.h5>Bank Details</Styled.h5>
          <ul sx={{ textAlign: "left", padding: 0, listStyle: "inside" }}>
            <li><b>Name:</b> Pia Hofstetter</li>
            <li><b>BSB:</b> 012 227</li>
            <li><b>ACC:</b> 425 007 216</li>
            <li>In description please put name of child, class and package.</li>
          </ul>
        </div>
      </Flex>
    </Flex>
  </PageLayout>
)

export default prices
