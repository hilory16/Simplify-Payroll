import styled from 'styled-components';
import {color3Dark, primaryColor, secondaryColor} from '../../themes/colors';

export const Container = styled.div`
    display:flex;
    height:100vh;
    overflow:hidden;
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
            top:70px;
        }
    }

    h2{
        color:${color3Dark}
        @media only screen and (max-width:612px){
            color:white;
            font-size:22px;
        }
    }
    p{
        color:${primaryColor}
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
        .form-field{
            margin-bottom:35px;
            display:flex;
            justify-content:Space-between;
            @media only screen and (max-width:612px){
                margin-bottom:20px;
            }
            @media only screen and (max-width:500px){
               flex-flow:row wrap;
               margin-bottom:0px;
            }
            .half{
                width:48%;
                @media only screen and (max-width:500px){
                    width:96%;
                    margin-bottom:20px;
                }
                .select{
                    border:none;
                    background:transparent;
                    margin-bottom:20px;
                    border-bottom:1px solid ${primaryColor};
                    outline:none;
                    color:${color3Dark};
                    // moz-appearance:none;
                    // -webkit-appearance:none;
                    // appearance:none;
                    // background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right;
                }

                .file{
                    text-align:left;
                    label{
                       padding-left:12px;
                    }
                    input{
                        width:100%;
                        padding-bottom:0;
                    }
                }
            }
            .checkbox{
                margin-right:10px;
            }
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
    }
`;


