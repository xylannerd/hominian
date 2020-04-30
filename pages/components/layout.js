import Lottie from 'react-lottie';
import * as earthAnimation from '../../assets/animations/globe.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Colors from '../../constants/colors';
import styled from 'styled-components';

import * as actions from '../../store/actions'
import { connect } from 'react-redux'
import * as Webpages from '../../constants/pages'

const Layout = (props) => {

    const router = useRouter();

    return (
        <div className="mainContainer">

            <NavBar>
                <Link href="/">
                    <Logo>HOMINIAN</Logo>
                </Link>
                <PageLinks>
                    <Link href="/products">
                        <Link1 active={router.pathname === '/products'}>Products</Link1>
                    </Link>
                    <Link href="/blog">
                        <Link2 active={router.pathname === '/blog'}>Blog</Link2>
                    </Link>
                </PageLinks>
            </NavBar>
            <Childrens>
                {props.children}
            </Childrens>
            <Footer>
                <LogoFooter>HOMINIAN</LogoFooter>
            </Footer>

            <style jsx>
                {`
                        .mainContainer{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            min-height: 100vh;
                            font-family: 'Circular-Book', Arial, sans-serif;
                        }                    
                     
                  `}
            </style>

            <style global jsx>
                {`
                        body {
                            margin: 0;
                            padding: 0;
                            border: 0;
                        }
                       
                    `}
            </style>

        </div>
    )

}


// const mapStateToProps = state => {
//     return {
//         activeLink: state.activePage
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         currentPage: (page) => dispatch({ type: actions.ACTIVE_PAGE, activePg: page })
//     }
// }

export default Layout;

const Childrens = styled.div`
    min-height: 85vh;
`

const NavBar = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 7vh;
    background-color: white;
    box-shadow: 0px 0px 0px 0px black;
`
const Logo = styled.div`
    font-size: 32px;
    padding-left: 42px;
    color: grey;
    font-family: sans-serif;
    text-transform: uppercase;

    &:hover{
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
const PageLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 32px;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */

`
const Link1 = styled.a`
    font-size: 24px;
    color: ${({active}) => active ? Colors.transparentBlack : 'grey'};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 16px;
    padding-left: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({active}) => active ? 'grey' : 'transparent'};
    border-radius: 10px;
    transition-property: color, border-color;
    transition-duration: 0.65s, 0.65s;

    &:hover{
        cursor: pointer;
        border-color: grey;
        color: ${Colors.transparentBlack};
    }

`
const Link2 = styled.a`
    font-size: 24px;
    color: ${({active}) => active ? Colors.transparentBlack : 'grey'};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 16px;
    padding-left: 16px;
    border: 1px solid ${({active}) => active ? 'grey' : 'transparent'};
    border-radius: 10px;
    transition-property: color, border;
    transition-duration: 0.65s, 0.65s;

    &:hover{
    cursor: pointer;
    border: 1px solid grey;
    color: ${Colors.transparentBlack};
}

`

const Footer = styled.div`
display: flex;
width: 100%;
height: 8vh;
background-color: ${ Colors.footerGrey};
align-items: center;
justify-content: flex-end;
`

const LogoFooter = styled.div`
font-size: 24px;
padding-right: 42px;
color: grey;
font-family: sans-serif;

-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */



`