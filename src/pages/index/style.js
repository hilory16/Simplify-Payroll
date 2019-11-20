import styled from 'styled-components';
import { color3Dark, primaryColor } from '../../themes/colors';

export const Container = styled.div`
    height:100vh;
    .na-map{
        padding:100px 0;
        background:#f6f6f6;
        iframe{
            width:100%;
            height:350px;
            @media only screen and (max-width:500px){
                width:100vw;
            }
        }
    }
    @media only screen and (max-width:1024px){
        height:100vh;
    }
`;

export const Company = styled.div`
    background:#f6f6f6;
    margin-top:30px;
    padding-top:100px;
    padding-bottom:30px;
    display:flex;
    justify-content:space-between;
    @media only screen and (max-width:1024px){
        padding-top:60px;
        .bg-img{
            img{
                width:90%;
            }
        }
     }
     @media only screen and (max-width:500px){
        padding-top:40px;
        flex-flow:row wrap;
        .bg-img{
            margin-bottom:20px;
            img{
                width:100%;
            }
        }
     }
    
    .text{
        padding-right:90px;
        width:50%;
        @media only screen and (max-width:1024px){
            padding-right:30px;
            width:70%;
        }
        @media only screen and (max-width:500px){
            width:100%;
            padding-right:15px;
            padding-left:15px;
        }
        h3{
            color:${color3Dark};
            text-align:center;
            margin-bottom:40px;
            font-size:60px;
            font-weight:700;
            @media only screen and (max-width:1024px){
                font-size:40px;
                margin-bottom:20px;
            }
        }
        p{
            text-align:justify;
            line-height:27px;
            color:${primaryColor};
            @media only screen and (max-width:1024px){
                line-height:23px;
            }
        }
    }
`;

export const Features = styled.div`
    background:#f6f6f6;
    padding-top:60px;
   
    h3{
        color:${color3Dark};
        text-align:center;
        margin-bottom:40px;
        font-size:60px;
        font-weight:700;
        @media only screen and (max-width:1024px){
            font-size:45px;
        }
    }
    .feature-card{
        min-height: 280px;
        box-shadow:2px 3px 6px rgba(0,0,0,.12);
        background:white;
        padding:20px 30px;
        margin-bottom:30px;
        transition:all ease .3s;
        :hover{
            box-shadow:2px 3px 6px rgba(0,0,0,.3);
        }
        .feature-icon{
            margin-bottom:20px;
            img{
                width:80px;
                height:80px;
            }
        }
        .feature-heading{
            h6{
                font-size:500;
                font-size:22px;
            }
        }
        .feature-body{
            p{
                font-size:400;
                font-size:14px;
                color:${primaryColor}
            }
        }
    }
    
`;
