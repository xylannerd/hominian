import React, { Component } from 'react'
import Head from 'next/head'
import Center from '../utils/center'
import Layout from './components/layout'

export default class Products extends Component {



    render() {
        return (
            <Layout>

                <Head>
                    <title>Products</title>
                    <link rel="icon" href="/h.png" />
                </Head>

                <Center>
                   <h2>FindMe!</h2>
                   <h2>Bitstone!</h2>
                   <h2>...</h2>
                </Center>
            </Layout>
        )
    }
}
