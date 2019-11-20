import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,.4);
    z-index:500;
    @media only screen and (max-width:500px){
        position:fixed;
    }
    .close{
        color:white;
        cursor:pointer;
        padding:30px;
        font-size:40px;
    }
    
`;

const Wrapper = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .card{
        width:400px;
        height:300px;
        background:white;
        border-radius:20px;
        padding:40px;
        @media only screen and (max-width:500px){
            position:absolute;
            width:auto;
            left:30px;
            right:30px;

        }
        h6{
            color:red;
            text-align:center;
        }
        .error-icon{
            display:flex;
            justify-content:center;
            i{
                font-size:200px;
                text-align:center;
                color:red;
            }
        }
    }
`;


const Message = ({message, clearMessage}) => {
    return (
        <Container>
            <div className="fa fa-close close" onClick={clearMessage}></div>
            <Wrapper>
                <div className="card">
                     
                     <h6>{message}</h6>
                     <div className="error-icon">
                         <i className="fa fa-times-circle"></i>
                     </div>
                </div>
            </Wrapper>
                
        </Container>
    );
}

export default Message;
