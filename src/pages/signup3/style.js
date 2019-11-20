import styled from 'styled-components';
import {color3Dark, primaryColor, secondaryColor} from '../../themes/colors';

export const Container = styled.div`
    display:flex;
`;

export const Left = styled.div`
    width:50%;
    @media only screen and (max-width:1024px){
        width:35%;
    }
    @media only screen and (max-width:612px){
        width:100%;
    }
`;

export const Right = styled.div`
    width:50%;
    @media only screen and (max-width:1024px){
        width:65%;
    }
    @media only screen and (max-width:612px){
        position:absolute;
        width:100%;
    }
    // display:flex;
    // justify-content:center;
    // align-items:center;
    text-align:center;
    position:relative;
    .steps{
        position:absolute;
        top:10px;
        left:50%;
        transform:translateX(-50%);
        // height:100px;
        @media only screen and (max-width:612px){
            top:60px;
        }
        .step-no{
            margin-top:5px;
            color:white;
        }
    }

    h2{
        color:${color3Dark};
        @media only screen and (max-width:612px){
            color:white;
            font-size:22px;
        }
    }
    p{
        color:${primaryColor};
        @media only screen and (max-width:612px){
            font-size:12px;
        }
    }
    .form-card{
        position:absolute;
        top:150px;
        width:100%;
        padding:0 70px;
        @media only screen and (max-width:612px){
            padding:0 30px;
            top:200px;
        }
        .small-text{
            color:${secondaryColor}
        }
        .form-field{
            margin-bottom:35px;
            @media only screen and (max-width:612px){
                margin-bottom:20px;
            }
        }
        a{
            color:white;
        }
        .next{
            padding:8px 15px;
            background:${color3Dark};
            width:fit-content;
            float:right;
            color:white;
            border-radius:4px;
            cursor:pointer;
        }
        .details-list{
            height:100px;
            overflow-y:scroll;
            @media only screen and (max-width:612px){
                height:400px;
                overflow:none;
                margin-bottom:40px;
            }
            h4{
                color:white
            }
            
            td{
                color:white;
                font-weight:400;
            }
           
        }
    }
`;