import Link from 'next/link'
import Head from 'next/head'

import Colors from '../constants/colors'
import styled from 'styled-components'
import Layout from './components/layout'

import earthImg from '../assets/images/dot.png'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../store/reducer'

const store = createStore(reducer)

export default class index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMore: false,
    }
  }

  static async getInitialProps() {
    return {}
  }

  readMore = () => {
    this.setState({
      showMore: true,
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Head>
            <title>Hominian</title>
            <link rel="icon" href="/h.png" />
          </Head>

          <MainContainer>
            <MainContent>
              <LeftPart>
                <Quote>
                  <Paragraphs>
                    <p>
                      {/* <FirstPara>“We succeeded in taking that picture, and, if you look at it, you see a dot.</FirstPara> */}
                      Look again at that dot. That's here. That's home. That's
                      us. On it everyone you love, everyone you know, everyone
                      you ever heard of, every human being who ever was, lived
                      out their lives. The aggregate of our joy and suffering,
                      thousands of confident religions, ideologies, and economic
                      doctrines, every hunter and forager, every hero and
                      coward, every creator and destroyer of civilization, every
                      king and peasant, every young couple in love, every mother
                      and father, hopeful child, inventor and explorer, every
                      teacher of morals, every corrupt politician, every
                      "superstar," every "supreme leader," every saint and
                      sinner in the history of our species lived there-on a mote
                      of dust suspended in a sunbeam.
                      {!this.state.showMore ? (
                        <Toggle onClick={this.readMore}>more</Toggle>
                      ) : undefined}
                    </p>

                    {this.state.showMore ? (
                      <div>
                        <p>
                          The Earth is a very small stage in a vast cosmic
                          arena. Think of the endless cruelties visited by the
                          inhabitants of one corner of this pixel on the
                          scarcely distinguishable inhabitants of some other
                          corner, how frequent their misunderstandings, how
                          eager they are to kill one another, how fervent their
                          hatreds. Think of the rivers of blood spilled by all
                          those generals and emperors so that, in glory and
                          triumph, they could become the momentary masters of a
                          fraction of a dot.
                        </p>
                        <p>
                          Our posturings, our imagined self-importance, the
                          delusion that we have some privileged position in the
                          Universe, are challenged by this point of pale light.
                          Our planet is a lonely speck in the great enveloping
                          cosmic dark. In our obscurity, in all this vastness,
                          there is no hint that help will come from elsewhere to
                          save us from ourselves.
                        </p>

                        <p>
                          The Earth is the only world known so far to harbor
                          life. There is nowhere else, at least in the near
                          future, to which our species could migrate. Visit,
                          yes. Settle, not yet. Like it or not, for the moment
                          the Earth is where we make our stand.
                        </p>

                        <p>
                          It has been said that astronomy is a humbling and
                          character-building experience. There is perhaps no
                          better demonstration of the folly of human conceits
                          than this distant image of our tiny world. To me, it
                          underscores our responsibility to deal more kindly
                          with one another, and to preserve and cherish the pale
                          blue dot, the only home we've ever known.”
                        </p>
                      </div>
                    ) : undefined}
                  </Paragraphs>
                  <Author>
                    ― Carl Sagan, Pale Blue Dot: A Vision of the Human Future in
                    Space
                  </Author>
                </Quote>
              </LeftPart>
              <RightPart>
                <ImageContainer>
                  <EarthImage
                    src={earthImg}
                    alt="Planet Earth via Voyager 1 at roughly 4 billion miles away from home."
                  />
                  <ImageDescription>
                    <DescTitle>Date: 14 February 1990</DescTitle>
                    <Desc>
                      Taken by Voyager 1 at roughly 4 billion miles (6.4 billion
                      km) away from home.
                    </Desc>
                  </ImageDescription>
                </ImageContainer>
              </RightPart>
            </MainContent>
          </MainContainer>

          <style global jsx>
            {`
              body {
                margin: 0;
                padding: 0;
                border: 0;
              }
            `}
          </style>
        </Layout>
      </Provider>
    )
  }
}

//Styled-Components

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100%;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

const LeftPart = styled.div`
  width: 60%;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
const RightPart = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
  margin-top: 164px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 64px;
    align-items: center;
    justify-content: center;
  }
`

const Quote = styled.div`
  margin-top: 420px;
  margin-right: 54px;
  margin-left: 72px;
  margin-bottom: 128px;
  line-height: 1.275;
  font-size: 20px;

  @media (max-width: 900px) {
    margin-bottom: 164px;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 64px;
  }
`
const Paragraphs = styled.div`
  color: grey;
`

const Toggle = styled.a`
  color: ${Colors.blueShade};
  margin-left: 8px;
  transition: color 0.6s;

  &:hover {
    cursor: pointer;
    color: ${Colors.lightBlueShade};
  }
`

const Author = styled.p`
  color: black;
`

const FirstPara = styled.p`
  margin-bottom: 1px;
`

const EarthImage = styled.img`
  height: 500px;
  width: 500px;
  position: absolute;

  @media (max-width: 900px) {
    height: 400px;
    width: 400px;
  }

  @media (max-width: 1200px) {
    height: 400px;
    width: 400px;
  }
`

const ImageContainer = styled.div`
  height: 500px;
  width: 500px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 16px 16px 64px 20px rgba(0, 0, 0, 0.2);

  transition-property: transform, box-shadow;
  transition-duration: 1s, 1s;

  @media (max-width: 900px) {
    height: 400px;
    width: 400px;
  }

  @media (max-width: 1200px) {
    height: 400px;
    width: 400px;
  }

  &:hover {
    box-shadow: 20px 20px 32px 0 rgba(0, 0, 0, 0.3);
    transform: translate(-1%, -1%);
    cursor: pointer;
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
`

const ImageDescription = styled.div`
  position: absolute;
  width: 100%;
  height: 16%;
  bottom: 0;
  background-color: transparent;
  padding-left: 10px;
  padding-bottom: 16px;
  color: transparent;
  transition-property: color, background-color;
  transition-duration: 0.6s, 0.6s;

  ${ImageContainer}:hover & {
    background-color: ${Colors.translucentWhite};
    color: lightgray;
  }

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 1200px) {
    font-size: 13px;
  }
`
const DescTitle = styled.p`
  margin-left: 4px;
  margin-top: 16px;
  margin-bottom: 0px;
`

const Desc = styled.p`
  margin-left: 3px;
  margin-top: 8px;
  margin-right: 8px;
  word-wrap: break-word;
  font-kerning: normal;
`
