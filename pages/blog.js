import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Center from '../utils/center'
import Layout from './components/layout'
import Lottie from 'react-lottie'
import animation from '../assets/animations/bear.gif'


export default function Blog() {



    return (
        <Layout>

            <Head>
                <title>Blog</title>
                <link rel="icon" href="/h.png" />
            </Head>

            <Center>
                <Anim src={animation} />
            </Center>
        </Layout>
    )

}

const Anim = styled.img`
    width: 320px;
    height: 320px;
`