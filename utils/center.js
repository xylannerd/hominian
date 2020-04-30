import React, { Component } from 'react';
import styled from 'styled-components';

export default class Center extends Component {
    render() {
        return (
            <CenterContent>
                {this.props.children}
            </CenterContent>
        )
    }
}

const CenterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 85vh;
    flex-direction: column;
`