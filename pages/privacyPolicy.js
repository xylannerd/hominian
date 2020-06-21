import Head from 'next/head'

import Center from '../utils/center'
import Colors from '../constants/colors'

import styled from 'styled-components'
import Layout from './components/layout'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy</title>
        <link rel="icon" href="/h.png" />
      </Head>
      <Center>
        <Wrapper>
          <Heading><p>FindMe Terms of Service & Privacy Policy</p></Heading>
          <Content>
            <p>
              As a condition of use, you promise not to use the Service for any
              purpose that is unlawful or prohibited by these Terms, or any
              other purpose not reasonably intended by FindMe. By way of
              example, and not as a limitation, you agree not to use the
              Service: ​
            </p>
            ​
            <p>
              • To abuse, harass, threaten, impersonate or intimidate any
              person;
            </p>
            <p>
              • To post or transmit, or cause to be posted or transmitted, any
              content that is libelous, defamatory, obscene, pornographic,
              abusive, offensive, profane, or that infringes any copyright or
              other right of any person;
            </p>
            <p>
              • To communicate FindMe representative or other users in an
              abusive or offensive manner;
            </p>
            <p>
              • For any purpose (including posting or viewing Content) that is
              not permitted under the laws of the jurisdiction where you use the
              Services;
            </p>
            <p>
              • To post or transmit, or cause to be posted or transmitted, any
              Communication designed or intended to obtain password, account, or
              private information from any FindMe user;
            </p>
            <p>
              • To create or transmit UNWANTED Spam to any person or any URL;
            </p>
            <p>• To create multiple accounts for the purpose of forgery;</p>
            <p>
              • Systematically retrieve data or other content from the Site to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us;
            </p>
            <p>
              • Make any unauthorized use of the Site, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses;
            </p>
            <p>
              •Use the Site to advertise or offer to sell goods and services;
            </p>
            <p>
              • Circumvent, disable, or otherwise interfere with
              security-related features of the Site, including features that
              prevent or restrict the use or copying of any Content or enforce
              limitations on the use of the Site and/or the Content contained
              therein;
            </p>
            <p>
              • Engage in unauthorized framing of or linking to the Site; Trick,
              defraud, or mislead us and other users, especially in any attempt
              to learn sensitive account information such as user passwords;
            </p>
            <p>
              • Make improper use of our support services or submit false
              reports of abuse or misconduct;
            </p>
            <p>
              • Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools;
            </p>
            <p>
              • Interfere with, disrupt, or create an undue burden on the App or
              the networks or services connected to the App;
            </p>
            <p>
              • Attempt to impersonate another user or person or use the
              username of another user; Use any information obtained from the
              Site in order to harass, abuse, or harm another person;
            </p>
            <p>
              • Use the App as part of any effort to compete with us or
              otherwise use the App and/or the Content for any
              revenue-generating endeavor or commercial enterprise;
            </p>
            <p>
              • Decipher, decompile, disassemble, or reverse engineer any of the
              software comprising or in any way making up a part of the App;
            </p>
            <p>
              • Attempt to bypass any measures of the App designed to prevent or
              restrict access to the App, or any portion of the Site;
            </p>
            <p>
              • Copy or adapt the App’s software, including but not limited to
              JAVA, HTML, XML, or other code and APIs;
            </p>
            <p>
              • Upload or transmit (or attempt to upload or to transmit)
              viruses, Trojan horses, or other material, including excessive use
              of capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party’s uninterrupted use and
              enjoyment of the Site or modifies, impairs, disrupts, alters, or
              interferes with the use, features, functions, operation, or
              maintenance of the App;
            </p>
            <p>
              • Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the App.
            </p>
            <p>
              • No personal data of user shall be shared with the third parties.
            </p>
            ​
          </Content>
        </Wrapper>
      </Center>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  /* background-color: grey; */
  flex-direction: column;
  margin-top: 64px;
  margin-left: 64px;
  margin-right: 64px;
  margin-bottom: 128px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 1em 1px ${Colors.fmBlueExtraTransparent};
  transition: box-shadow 1s;

  &:hover {
    box-shadow: 1px 1px 1em 1px ${Colors.fmBlueTransparent};
  }

  
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
`
const Heading = styled.div`
margin-top: 16px;
margin-left: 32px;
font-size: 24px;
`

const Content = styled.div`
margin: 32px;
color: gray;
`
