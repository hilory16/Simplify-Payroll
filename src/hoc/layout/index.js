import React, { Component } from 'react';
import styled from 'styled-components';
import './layout.css'


class Layout extends Component {
    state = {  }

    wrapper = styled.div`  
    // font-family: 'Roboto', sans-serif;
    // font-weight:700;
        // padding:0 100px;
    `;
    render() { 
        return ( 
            <this.wrapper>
                {this.props.children}
            </this.wrapper>
         );
    }
}
 
export default Layout;