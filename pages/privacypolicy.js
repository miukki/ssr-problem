import Head from 'next/head'
import React from 'react'
// import {Fonts} from '../utils/fontsLoader.js'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {mediaGrid} from '../utils/mediaGrid.js'
import ButtonBase from '@material-ui/core/ButtonBase'

import FooterSmall from '../components/FooterSmall.js'
import Layout from '../components/MyLayout.js'
import HeaderBlock from '../components/HeaderBlock.js'

const ButtonCustom = styled(ButtonBase)`
  && {
    padding-left: 20px;
    padding-right: 20px;
    min-width: 200px;
    height: 50px;
    border: solid 2px ${({bcolor}) => bcolor || '#1f231f'};
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: 0.33px;
    text-align: center;
    color: ${({color}) => color || '#1f231f'};
  }
`

const Paragraph = styled(Typography)`
  && {
    font-weight: 300;
    font-size: 1.2em;
    letter-spacing: normal;
    color: ${({colortext}) => colortext || '#1f231f'};
    line-height: 2;
    padding: 0;
  }
`
const TakeMeHome = styled(ButtonCustom)`
  && {
    a {
      text-decoration: none;
      color: #1f231f;
    }
  }
`

const Title = styled(Typography)`
  && {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: 0.33px;
    color: #1f231f;
    padding-bottom: 30px;
  }
`

const Description = styled(Paragraph)`
  && {
    font-size: 11px;
    line-height: 2.09;
    letter-spacing: 0.33px;
    color: #1f231f;
    padding: 5px 0 10px 0;
    margin: 0;
    a {
      color: #003d59;
      &:hover {
        text-decoration: none;
      }
    }
  }
`

const SubTitle = styled(Typography)`
  && {
    font-weight: 300;
    font-size: 1.125em;
    line-height: 1.44;
    letter-spacing: 0.33px;
    padding-top: 20px;
    padding-bottom: 0px;
  }
`

const Root = styled.div``

const Content = styled(Grid)`
  && {
    padding-bottom: 40px;
  }
`

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <Root>
        <Head>
          <title>Simplimate</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Paytone+One&display=swap"
            rel="stylesheet"
          />

          <style global jsx>{`
            @font-face {
              font-family: 'Gotham Light';
              src: url('/static/fonts/Gotham-Light.eot');
              src: url('/static/fonts/Gotham-Light.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Gotham-Light.woff') format('woff'),
                url('/static/fonts/Gotham-Light.ttf') format('truetype'),
                url('/static/fonts/Gotham-Light.svg#/static/fonts/Gotham-Light')
                  format('svg');
              font-weight: normal;
              font-style: normal;
            }
            @font-face {
              font-family: 'Gotham Medium';
              src: url('/static/fonts/Gotham-Medium.eot');
              src: url('/static/fonts/Gotham-Medium.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Gotham-Medium.woff') format('woff'),
                url('/static/fonts/Gotham-Medium.ttf') format('truetype'),
                url('/static/fonts/Gotham-Medium.svg#gotham-medium')
                  format('svg');
              font-weight: normal;
              font-style: normal;
            }
            body {
              font-family: 'Gotham Light', sans-serif;
            }
          `}</style>
        </Head>

        <Layout>
          <HeaderBlock {...this.props} />

          <Grid container justify="center">
            <Grid item xs={10} sm={8} md={8}>
              <Content
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <Title gutterBottom variant="h1" component="h1">
                    PRIVACY POLICY
                  </Title>

                  <Description gutterBottom variant="h2" component="h2">
                    (As effective from 1 May 2019)
                    <br />
                  </Description>
                  {/* (ACN ___________)  */}
                  <Description gutterBottom variant="h2" component="h2">
                    This web site and/or mobile apps are licensed and operated
                    by&nbsp;SIMPLIMATE Pty Ptd trading as &lsquo;Simplimate
                    Project&rsquo; and will be&nbsp;referred
                    to&nbsp;as&nbsp;&laquo;Simplimate&raquo;, &laquo;We&raquo;,
                    &laquo;our&raquo; and&nbsp;&laquo;us&raquo; in&nbsp;this
                    Website Privacy Policy. By&nbsp;using this site, you agree
                    to&nbsp;the Website Privacy Policy of&nbsp;this web site
                    and/or mobile apps (&laquo;the web site&raquo;), which
                    is&nbsp;set out on&nbsp;this web site page. The Website
                    Privacy Policy relates to&nbsp;the collection and use
                    of&nbsp;personal information you may supply to&nbsp;us
                    through your conduct on&nbsp;the web site.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    We&nbsp;reserve the right, at&nbsp;our discretion,
                    to&nbsp;modify or&nbsp;remove portions of&nbsp;this Website
                    Privacy Policy at&nbsp;any time. This Website Privacy Policy
                    is&nbsp;in&nbsp;addition to&nbsp;any other terms and
                    conditions applicable to&nbsp;the web site.
                    We&nbsp;do&nbsp;not make any representations about third
                    party web sites that may be&nbsp;linked to&nbsp;the web
                    site.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    We&nbsp;recognise the importance of&nbsp;protecting the
                    privacy of&nbsp;information collected about visitors
                    to&nbsp;our web site, in&nbsp;particular information that
                    is&nbsp;capable of&nbsp;identifying an&nbsp;individual
                    (&laquo;personal information&raquo;). This Website Privacy
                    Policy governs the manner in&nbsp;which your personal
                    information, obtained through the web site, will
                    be&nbsp;dealt with. This Website Privacy Policy should
                    be&nbsp;reviewed periodically so&nbsp;that you are updated
                    on&nbsp;any changes. We&nbsp;welcome your comments and
                    feedback.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Personal information
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    Personal information about visitors to&nbsp;our site
                    is&nbsp;collected only when knowingly and voluntarily
                    submitted. For example, we&nbsp;may need to&nbsp;collect
                    such information to&nbsp;provide you with further services
                    or&nbsp;to&nbsp;answer or&nbsp;forward any requests
                    or&nbsp;enquiries. It&nbsp;is&nbsp;our intention that this
                    policy will protect your personal information from being
                    dealt with in&nbsp;any way that is&nbsp;inconsistent with
                    applicable privacy laws in&nbsp;Australia.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Use of information
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    Personal information that visitors submit to&nbsp;our site
                    is&nbsp;used only for the purpose for which
                    it&nbsp;is&nbsp;submitted or&nbsp;for such other secondary
                    purposes that are related to&nbsp;the primary purpose,
                    unless we&nbsp;disclose other uses in&nbsp;this Website
                    Privacy Policy or&nbsp;at&nbsp;the time of&nbsp;collection.
                    Copies of&nbsp;correspondence sent from the web site, that
                    may contain personal information, are stored
                    as&nbsp;archives for record-keeping and back-up purposes
                    only.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    You agree for&nbsp;us to&nbsp;use personal information for
                    purposes of&nbsp;advertising, marketing or&nbsp;general
                    contact and communication.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Collection information on registered members
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    As&nbsp;part of&nbsp;registering with&nbsp;us,
                    we&nbsp;collect personal information about you in&nbsp;order
                    for you to&nbsp;take full advantage of&nbsp;our services.
                    To&nbsp;do&nbsp;this it&nbsp;may be&nbsp;necessary for you
                    to&nbsp;provide additional information to&nbsp;us
                    as&nbsp;detailed below.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Registration
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    Registration is&nbsp;completely optional. Registration may
                    include submitting your name, email address, address, option
                    on&nbsp;receiving updates and promotional material and other
                    information. You may access this information at&nbsp;any
                    time by&nbsp;logging in&nbsp;and going to&nbsp;your account.
                    Your use of&nbsp;our website will be&nbsp;limited and
                    restricted without registration.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Disclosure
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    Apart from where you have consented or&nbsp;disclosure
                    is&nbsp;necessary to&nbsp;achieve the purpose for which
                    it&nbsp;was submitted, personal information may
                    be&nbsp;disclosed in&nbsp;special situations where
                    we&nbsp;have reason to&nbsp;believe that doing
                    so&nbsp;is&nbsp;necessary to&nbsp;identify, contact
                    or&nbsp;bring legal action against anyone damaging,
                    injuring, or&nbsp;interfering (intentionally
                    or&nbsp;unintentionally) with our rights or&nbsp;property,
                    users, or&nbsp;anyone else who could be&nbsp;harmed
                    by&nbsp;such activities. Also, we&nbsp;may disclose personal
                    information when we&nbsp;believe in&nbsp;good faith that the
                    law requires disclosure.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    We&nbsp;may engage third parties to&nbsp;provide you with
                    goods or&nbsp;services on&nbsp;our behalf. In&nbsp;that
                    circumstance, we&nbsp;may disclose your personal information
                    to&nbsp;those third parties in&nbsp;order to&nbsp;meet your
                    request for goods or&nbsp;services.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    We&nbsp;may have to&nbsp;import and export your personal
                    information into and out of&nbsp;various jurisdictions
                    to&nbsp;allow for the interoperability and hosting
                    of&nbsp;our website.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Security
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    We&nbsp;strive to&nbsp;ensure the security, integrity and
                    privacy of&nbsp;personal information submitted to&nbsp;our
                    sites, and we&nbsp;review and update our security measures
                    in&nbsp;light of&nbsp;current technologies. Unfortunately,
                    no&nbsp;data transmission over the Internet can
                    be&nbsp;guaranteed to&nbsp;be&nbsp;totally secure.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    However, we&nbsp;will endeavour to&nbsp;take all reasonable
                    steps to&nbsp;protect the personal information you may
                    transmit to&nbsp;us or&nbsp;from our online products and
                    services. Once we&nbsp;do&nbsp;receive your transmission,
                    we&nbsp;will also make our best efforts to&nbsp;ensure its
                    security on&nbsp;our systems.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    In&nbsp;addition, our employees and the contractors who
                    provide services related to&nbsp;our information systems are
                    obliged to&nbsp;respect the confidentiality of&nbsp;any
                    personal information held by&nbsp;us. However, we&nbsp;will
                    not be&nbsp;held responsible for events arising from
                    unauthorised access to&nbsp;your personal information.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Collecting information from users and access to information
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    We&nbsp;will endeavour to&nbsp;take all reasonable steps
                    to&nbsp;keep secure any information which we&nbsp;hold about
                    you, and to&nbsp;keep this information accurate and
                    up&nbsp;to&nbsp;date. If, at&nbsp;any time, you discover
                    that information held about you is&nbsp;incorrect, you may
                    contact&nbsp;us to&nbsp;have the information corrected.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    In&nbsp;addition, our employees and the contractors who
                    provide services related to&nbsp;our information systems are
                    obliged to&nbsp;respect the confidentiality of&nbsp;any
                    personal information held by&nbsp;us.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Links to other sites
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    We&nbsp;provide links to&nbsp;Web sites outside of&nbsp;our
                    web sites, as&nbsp;well as&nbsp;to&nbsp;third party Web
                    sites. These linked sites are not under our control, and
                    we&nbsp;cannot accept responsibility for the conduct
                    of&nbsp;companies linked to&nbsp;our website. Before
                    disclosing your personal information on&nbsp;any other
                    website, we&nbsp;advise you to&nbsp;examine the terms and
                    conditions of&nbsp;using that Web site and its privacy
                    statement.
                  </Description>

                  <SubTitle gutterBottom variant="h2" component="h2">
                    Problems or questions
                  </SubTitle>
                  <Description gutterBottom variant="h2" component="h2">
                    If&nbsp;we&nbsp;become aware of&nbsp;any ongoing concerns
                    or&nbsp;problems with our web site, we&nbsp;will take these
                    issues seriously and work to&nbsp;address these concerns.
                    If&nbsp;you have any further queries relating to&nbsp;our
                    Privacy Policy, or&nbsp;you have a&nbsp;problem
                    or&nbsp;complaint, please contact&nbsp;us on&nbsp;
                    <a href="mailto:hello@Simplimate.shop">email</a>.
                  </Description>
                  <Description gutterBottom variant="h2" component="h2">
                    For more information about privacy issues in&nbsp;Australia
                    and protecting your privacy, visit the Australian Federal
                    Privacy Commissioner&rsquo;s web site;&nbsp;
                    <a href="http://www.privacy.gov.au/" target="_blank">
                      http://www.privacy.gov.au/
                    </a>
                    .
                  </Description>
                </Grid>
              </Content>
            </Grid>
          </Grid>

          <style jsx>{``}</style>

          <FooterSmall />
        </Layout>
      </Root>
    )
  }
}

PrivacyPolicy.getInitialProps = async function() {
  const API = process.env.API
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })

  let data = {...(await privacypolicy.json())}

  return {
    ...data,
  }
}

export default PrivacyPolicy
