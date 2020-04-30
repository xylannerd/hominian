import React, { Component } from 'react'
import Head from 'next/head'
import Layout from './components/layout'
import Center from '../utils/center'

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Home</title>
                    <link rel="icon" href="/favicon.png" />
                </Head>

                <Center>
                    This is Home.
                    </Center>
            </Layout>

        )
    }
}
