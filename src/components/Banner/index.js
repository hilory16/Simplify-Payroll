import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index';
import { color3Dark, primaryColor } from '../../themes/colors';
import {Link} from 'react-router-dom';

const Container = styled.div`
    height:100vh;
    // background:red;
    position:relative;
    @media only screen and (max-width:1024px){
        height:80vh; 
    }
    @media only screen and (max-width:500px){
        height:100vh;
    }
`;

const Content = styled.div`
    display:flex;
    position:absolute;
    top:60%;
    transform:translateY(-50%);
    width:100%;
    justify-content:space-between;
`;
const Text = styled.div`
    display:flex;
    align-items:center;
    padding-left:80px;
    @media only screen and (max-width:1024px){
        padding-left:30px;  
    }
    @media only screen and (max-width:500px){
        padding-left:15px; 
        padding-right:15px;  
    }
    .text-group{
       
        h1{
            color:${color3Dark};
            text-transform:capitalize;
            font-weight:700;
            @media only screen and (max-width:1024px){
               font-size:37px;
            }
            @media only screen and (max-width:500px){
                font-size:29px;  
            }
        }
        .text-more{
            color:${primaryColor};
        }
        a{
            text-decoration:none;
            width:fit-content;
            display: block;
            .button{
                background:${primaryColor};
                padding:10px 30px;
                border-radius:5px;
                color:white;
                border:1px solid ${primaryColor};
                transition:all ease .3s;
                :hover{
                    color:${primaryColor};
                    background:transparent;
                }
            }
        }
    }
    
`;
const Image = styled.div`
    @media only screen and (max-width:500px){
        display:none;
    }
    img{
        height:80vh;
        // margin-right:-20px;
        @media only screen and (max-width:1024px){
            height:20vh;
        }
        @media only screen and (max-width:500px){
            height:0;
        }
    }
`;

const vector = require('../../assets/img/landing.png');

const Banner = ({toggleNav, showNav}) => {
    return (
        <Container style={{background:`url()`}}>
            <Header toggleNav = {() => (toggleNav())} showNav = {showNav}/>
            <Content>
                <Text>
                    <div className="text-group">
                        <h1>Simplify Payroll with softwares and services designed for your business</h1>
                        <p className="text-more">Join more than <span>100,000</span> small businesses and their teams.</p>
                        <Link to="">
                            <p className="button">Get Started</p>
                        </Link>
                    </div>
                    
                </Text>

                <Image>
                    <img src={vector} alt="simplify payroll"/>
                </Image>
            </Content>
        </Container>
    );
}

export default Banner;
