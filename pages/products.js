import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Center from '../utils/center'
import Layout from './components/layout'
import Colors from '../constants/colors'

import FmLogo from '../assets/findME/fnme.png';
import Frag1 from '../assets/findME/frag_1.webp';
import Frag2 from '../assets/findME/frag_2.webp';
import Frag3 from '../assets/findME/frag_3.webp';

import GooglePlayBadge from '../assets/findME/google-play-badge.png';


export default class Products extends Component {


    render() {


        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            pauseOnHover: true,
            onChange: (oldIndex, newIndex) => {
                console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
        }


        return (
            <Layout>

                <Head>
                    <title>Products</title>
                    <link rel="icon" href="/h.png" />
                </Head>

                <MainContainer>


                    <FindMeWrapper>
                        <FindMeHeader>
                            <FindMeLogo src={FmLogo} alt='FindMe Logo' />
                        </FindMeHeader>

                        <FindMeBody>
                            <LeftPart>
                                <MainImage src={Frag1} alt='Abductions Lost Missing Runaway Child Sad' />
                            </LeftPart>
                            <RightPart>
                                <ParaWrapper>
                                    <Para1>
                                        When you believe a person in your life has disappeared, it can leave you feeling really awful and helpless. And it becomes really important that you do everything you can in order to get that person back safe and sound.
                                </Para1>
                                    <Para2>
                                        It's a community app you can use to help or query about Lost or Missing individuals.
                                </Para2>
                                </ParaWrapper>

                                <GooglePlayButtonContainer>
                                    <a href='https://play.google.com/store/apps/details?id=com.hominian.findme' target='_blank'>
                                        <GooglePlayButton src={GooglePlayBadge} alt='Get it on Google Playstore' />
                                    </a>
                                </GooglePlayButtonContainer>

                            </RightPart>


                        </FindMeBody>

                    </FindMeWrapper>





                </MainContainer>

            </Layout >
        )
    }
}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 128px;
`

const FindMeWrapper = styled.div`
    display: flex;
    width: 1200px;
    /* background-color: grey; */
    flex-direction: column;
    margin-left: 64px;
    margin-right: 64px;
    margin-bottom: 128px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 1px 1em 1px ${Colors.fmBlueExtraTransparent};
    transition: box-shadow 1s;

    &:hover{
        box-shadow: 1px 1px 1em 1px ${Colors.fmBlueTransparent};    
    }

    @media(max-width: 700px){
        width: 95%;
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 128px;
        padding-bottom: 16px;

    }
    

`

const FindMeHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: lightsalmon; */
`

const FindMeLogo = styled.img`
    width: 100px;
    margin-left: 32px;
    margin-top: 16px;
    margin-bottom: 12px;
    object-fit: contain;

`
const FindMeBody = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 700px){
        flex-direction: column;
        align-items: center;
    }

`

const LeftPart = styled.div`
    display: flex;
    width: 30%;
    /* background-color: lightpink; */
    justify-content: center;

    @media(max-width: 700px){
        width: 80%;
    }


`

const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    /* background-color: lightgreen; */
    justify-content: space-around;
    padding-bottom: 16px;
    padding-left: 32px;
    padding-right: 64px;
    margin-top: 64px;

    @media(max-width: 700px){
        width: 80%;
        padding: 0;
        margin-top: 0px;
    }

`
const MainImage = styled.img`
    width: 82%;
    object-fit: contain;

    @media(max-width: 700px){
        width: 64%;
    }

`

const ParaWrapper = styled.div`
    line-height: 1.275;
    /* background-color: coral; */

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
`

const Para1 = styled.p`
    color: grey;

`

const Para2 = styled.p`
    color: grey;
`

const GooglePlayButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* background-color: lightpink; */

    @media(max-width: 700px){
        margin-top: 16px;
    }

`
const GooglePlayButton = styled.img`
    width: 160px;
    margin-left: -8px;

    &:hover{
        cursor: pointer;
    }

`