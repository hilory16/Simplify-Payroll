import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';
import {primaryColor, color3Dark, secondaryColor} from '../../themes/colors';

const Container = styled.div`
    padding:60px 80px;
    @media only screen and (max-width:1024px){
        padding:40px 30px;
    }
    @media only screen and (max-width:500px){
        padding:40px 10px;
    }
    box-shadow:8px 1px 5px #00a18947;
    .wrapper{
        width:100%;
        display:flex;
        justify-content:space-between;
        @media only screen and (max-width:500px){
           flex-flow:row wrap;
        }
        .item{
            width:23%;
            padding:0 10px;
            @media only screen and (max-width:500px){
                width:100%;
                margin-bottom:30px;
            }
            @media only screen and (max-width:500px){
                padding:0;
            }
            h4{
                font-size:20px;
                color:${secondaryColor};
            }
            p{
                text-align:justify;
                color:${color3Dark};
                @media only screen and (max-width:1024px){
                    font-size:14px;
                }
            }
            .nav{
                display:block;
                li{
                    list-style:none;
                    display:block;
                    padding:5px 0;
                    @media only screen and (max-width:1024px){
                        padding:2px 0;
                        font-size:14px;
                    }
                    a{
                        color:${color3Dark};
                    }
                }
            }

            .contact{
                margin:0;
                padding:0;
                li{
                    list-style:none;
                    padding:10px 0;
                    @media only screen and (max-width:1024px){
                        padding:5px 0;
                        font-size:14px;
                    }
                    color:${color3Dark}
                    i{
                        padding-right:10px;
                        color:${color3Dark}
                    }
                }
            }
        }
        .item-more{
            width:30%;
            padding:0 15px;
            @media only screen and (max-width:500px){
                width:100%;
            }
            @media only screen and (max-width:1024px){
                padding-left:0;
            }
            h4{
                font-size:20px;
                color:${secondaryColor};
            }
            p{
                text-align:justify;
                @media only screen and (max-width:1024px){
                    font-size:14px;
                }
            }
            .nav{
                display:block;
                li{
                    display:block;
                
                }
            }
        }
    }

    .social{
        margin-top:30px;
        margin-bottom:50px;
        a{
            color:${color3Dark}
            transition:all ease .2s;
            :hover{
                color:${primaryColor}
            }
        }
        span{
            padding:0 20px;
            
        }
    }

    .copyright{
        text-align:center;
    }
`;

const Footer = () => {
    return (
        <Container>
            <div className="wrapper">
                <div className="item-more">
                    <h4>Our Company</h4>
                    <p>Technology alone is not enough You need technology plus expertise, at every level and at every stage, to keep your human resources software modern and adaptable.</p>
                </div>

                <div className="item">
                    <h4>Quick Links</h4>
                    <ul className="nav">
                        <li><AnchorLink href='#home' className="cool-link">Home</AnchorLink></li>
                        <li><AnchorLink href='#company' className="cool-link">Our Company</AnchorLink></li>
                        <li><AnchorLink href='#features' className="cool-link">Features</AnchorLink></li>
                        <li><AnchorLink href='#features' className="cool-link">Blog</AnchorLink></li>
                        <li><Link href='/signup' className="cool-link">Sign up</Link></li>
                        <li><Link href='#' className="cool-link">Login</Link></li>
                    </ul>
                </div>

                <div className="item">
                    <h4>Quick Links</h4>
                    <ul className="nav">
                        <li><AnchorLink href='#home' className="cool-link">Home</AnchorLink></li>
                        <li><AnchorLink href='#company' className="cool-link">Our Company</AnchorLink></li>
                        <li><AnchorLink href='#features' className="cool-link">Features</AnchorLink></li>
                        <li><AnchorLink href='#features' className="cool-link">Blog</AnchorLink></li>
                        <li><Link href='/signup' className="cool-link">Sign up</Link></li>
                        <li><Link href='#' className="cool-link">Login</Link></li>
                    </ul>
                </div>

                <div className="item">
                    <h4>Contact</h4>
                    <ul className="contact">
                        <li><i className="fa fa-home"></i>Simplify payroll</li>
                        <li><i className="fa fa-location-arrow"></i>Unit 426 Bedford heights,UK</li>
                        <li><i className="fa fa-phone"></i>+234 703 012 1883</li>
                        <li><i className="fa fa-envelope"></i>info@simpifypayroll.com</li>
                        <li><i className="fa fa-clock-o"></i>Mon - Sun</li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <Link to=""><span className="fa fa-facebook"></span></Link>
                <Link to=""><span className="fa fa-instagram"></span></Link>
                <Link to=""><span className="fa fa-twitter"></span></Link>
                <Link to=""><span className="fa fa-linkedin"></span></Link>
            </div>

            <div className="copyright"> &copy; All rights reservered  2019</div>
        </Container>
    );
}

export default Footer;
