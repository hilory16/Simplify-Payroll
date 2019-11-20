import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { color3Dark, primaryColor } from '../../themes/colors';

const Container = styled.div`

    padding-top:30px;
    padding-left:80px;
    padding-right:70px;
    width:100%;
    @media only screen and (max-width:1024px){
        padding-left:30px;
        padding-right:30px;
    }
    @media only screen and (max-width:500px){
        padding-top:20px;
        padding-left:15px;
        padding-right:15px;
    }
`;
const Content = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-evenly;
    @media only screen and (max-width:1024px){
        justify-content:space-between;
    }

    h2{
        width:25%;
        @media only screen and (max-width:1024px){
            font-size:25px;
            width:50%;
            float:left;
        }
        @media only screen and (max-width:500px){
            font-size:21px;
            width:75%;
            margin-bottom:0;
        }
        a{
            color:#00a189;
            transition:all ease .3s;
        }
       
        span{
            color:#f2af42;
        }
    }
    ul{
        margin:0;
    }
    .nav{
        width:50%;
        padding-left:3%;
        @media only screen and (max-width:1024px){
           background:${color3Dark};
           padding-top:50px;
           padding-left:20px;
           position:fixed;
           top:0;
           left:0;
           width:70vw;
           height:100vh;
           display:block;
           z-index:500;
           transition:all ease .3s;
        }
        @media only screen and (max-width:1024px){
           padding-top:30px;
           padding-left:5px;
        }
        .cool-link{
           
            :after{
                content:'';
                width:0%;
                height:2px;
                background:${primaryColor};
                display:block;
                transition:all ease .3s;

            }
            :hover{
                :after{
                    width:100%;
                }
            }
            
        }
        li{
            padding:0 18px;
            font-size:20px;
            @media only screen and (max-width:1024px){
                font-size:30px;
                padding:10px 18px;
            }
            @media only screen and (max-width:500px){
                font-size:18px;
                padding:10px 18px;
            }
            a{
                color:${primaryColor};
                text-decoration:none;
                @media only screen and (max-width:1024px){
                    color:white;
                }
            }
           
        }
        .user-mob{
            display:flex;
            justify-content:flex-start;
            padding-left:20px;
            position:absolute;
            bottom:100px;
            a{
                color:white
                background: ${primaryColor}
                padding:3px 10px;
                border:1px solid ${primaryColor};
                transition:all ease .3s;
                margin-right:15px;
                @media only screen and (max-width:500px){
                    padding:3px 5px;
                } 
                :hover{
                    background: transparent;
                    color:${primaryColor};
                }
                li{
                    padding:0 15px;
                    font-size:20px;
                    list-style:none;
                    display:inline-block;
                    @media only screen and (max-width:500px){
                        padding:0 10px;
                        font-size:14px;
                    }
                }
            }
            @media only screen and (min-width:1029px){
                display:none; 
            } 
        }
    }

    .user{
        width:25%;
        display:flex;
        justify-content:space-between;
        @media only screen and (max-width:1024px){
            display:none; 
        }
        a{
            color:white
            // float:right;
            background: ${primaryColor}
            padding:3px 10px;
            border:1px solid ${primaryColor};
            transition:all ease .3s;
            :hover{
                background: transparent;
                color:${primaryColor};
            }
            li{
                padding:0 15px;
                font-size:20px;
                list-style:none;
                display:inline-block;
            }
        }
    }
    .toggle-icon{
        @media only screen and (min-width:1025px){
            display:none; 
        } 
    }
    
`;

const index = ({toggleNav, showNav}) => {
    console.log(showNav)
    return (
        <Container className="myheader">
            <Content>
                
                <h2><Link to="/">Simplify <span>Payroll</span></Link></h2>
                
                <ul className="nav" style={{left:showNav ? '0' : "-100%"}}>
                    <li><AnchorLink href='#home' className="cool-link">Home</AnchorLink></li>
                    <li><AnchorLink href='#company' className="cool-link">Our Company</AnchorLink></li>
                    <li><AnchorLink href='#features' className="cool-link">Features</AnchorLink></li>
                    <li><AnchorLink href='#contact' className="cool-link">Contact</AnchorLink></li>
                    <ul className="user-mob">
                        <Link to="/signup"><li>Sign up</li></Link>
                        <Link to=""><li>Login</li></Link>
                    </ul>
                </ul>

                <ul className="user">
                   <Link to="/signup"><li>Sign up</li></Link>
                   <Link to=""><li>Login</li></Link>
                </ul>

                <span className="fa fa-bars toggle-icon" onClick={toggleNav}></span>
            </Content>
        </Container>
    );
}

export default index;
