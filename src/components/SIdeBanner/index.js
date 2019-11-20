import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
.banner{
    // width:50%;
    height:100vh;
    padding:30px 30px 0 30px;
    @media only screen and (max-width:612px){
        padding:20px 20px 0 20px;
    }
    @media only screen and (max-width:612px){
        position:fixed;
        left:0;
        right:0;
        bottom:0;
    }
    .text{
        a{
            text-decoration:none;
        }
        h1{
            color:white;
            font-size:20px;
            span{
                color:#f2af42;
            }
        }
        .big-text{
            display:flex;
            justify-content:center;
            align-items:center;
            height:90vh;
            @media only screen and (max-width:1024px){
                height:45vh;
            }
            @media only screen and (max-width:612px){
                display:none;
            }
            h3{
                font-size:50px;
                color:white;
                text-align:center;
                @media only screen and (max-width:1024px){
                    font-size:30px;
                }
            }
        }
    }
}
`;
const SideBanner = () => {
    return (
        <Container>
            <div className="banner" 
                style={{background:`url(${require('../../assets/img/banner.jpg')})`, backgroundPosition:'center', backgroundSize:'cover'}}>
                    <div className="text">
                        <Link to="/"><h1>Simplify <span>Payroll</span></h1></Link>
                        <div className="big-text">
                            <h3>Join more than 100,000 small businesses and their teams.</h3>
                        </div>
                        
                    </div>
                    
                    {/* <img src={require('../../assets/img/signup-image.webp')} alt="" /> */}
            </div>
        </Container>
    );
}

export default SideBanner;
