import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    
`;
const Index = () => {
    return (
        <Container style={{}}>
            <img src={require('../../assets/img/loading.gif')} alt="loading"/>
        </Container>
    );
}

export default Index;
