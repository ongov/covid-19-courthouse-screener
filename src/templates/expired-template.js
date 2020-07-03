import React from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import ContentBlock from "../components/outcome-content-block-with-icon"
import Footer from "../components/outcome-footer"
import Button from "../components/button"

import Expired from "../images/inline-svgs/ontario-icon-expired.inline.svg"
import ExpiredSmall from "../images/inline-svgs/ontario-icon-expired-small.inline.svg"
import Calendar from "../images/inline-svgs/ontario-icon-calendar-grey.inline.svg"
import Information from "../images/inline-svgs/ontario-icon-information-grey.inline.svg"

import { general, results } from "../localized_content"

const lang = "en"

const Grey = "#666666"

const HeadingExpired = styled(Expired)`
  display: inline-block;
  margin: 2rem calc(50% - (143px / 2));
  background-color: ${Grey};
`

const RetakeButtonWrapper = styled.div`
  margin: 3rem 0 0.25rem 0;
  display: block;
  text-align: center;
`

const RetakeButton = styled(Button)`
  @media screen and (max-width: 40em) {
    margin: 0 1.5rem;
    max-width: calc(100% - 3rem);
  }
`

const ExpiredTemplate = () => (
  <Layout lang={lang} hideFooter>
    <SkipNavContent>
      <Header
        title={<>Windsor Courthouse {general[lang].outcome}</>}
        heading={general[lang].expired}
        icon={<HeadingExpired />}
        color={Grey}
        titleColor={"#F2F2F2"}
      />
      <ContentBlock lang={lang} icon={<Calendar />} heading={results[lang].noEnter} />
      <ContentBlock lang={lang} icon={<Information />} heading={results[lang].nextSteps}>
        {results[lang].nextStepsInstruction}
      </ContentBlock>
      <RetakeButtonWrapper>
        <RetakeButton text={results[lang].retakeButtonText} clickHandler={() => console.log("clicked!")} />
      </RetakeButtonWrapper>
      <Footer icon={<ExpiredSmall />} color={Grey} />
    </SkipNavContent>
  </Layout>
)

export default ExpiredTemplate
