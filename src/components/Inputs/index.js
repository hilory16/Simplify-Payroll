import React from 'react';
import styled from 'styled-components';
import {color3Dark, primaryColor} from '../../themes/colors';

const Field = styled.div`
    position:relative;
    // label{
    //     position:absolute;
    //     bottom:0;
    //     left:0;
    //     height:100%;
    //     width:100%;
    //     text-align:left;
    //     border-bottom:1px solid ${color3Dark};
    //     pointer-events:none;

    //     :after{
    //         content:'';
    //         position:absolute;
    //         height:100%;
    //         width:100%;
    //         left:0;
    //         bottom:-1px;
    //         border-bottom:4px solid red;
    //         // transform:translateX(-100%);
    //     }

    //     span{
    //         position:absolute;
    //         bottom:5px;
    //         transition:all ease .3s;
    //         color:red;
    //     }
    //     :hover{
    //         span{
    //             color:yellow;
    //             transform:translateY(-100%);
    //         }
                
           
    //     }
    // }
`;
const TextInput = styled.input`
    outline:none;
    width:100%;
    border:none;
    border-bottom:1px solid ${primaryColor};
    // position:relative;
    padding-top:20px;
    position:relative;
    transition:all ease .3s;
    @media only screen and (max-width:612px){
        padding-top:8px;
    }
    // :hover{
    //     ::placeholder{
    //         color:red;
    //         position:absolute;
    //         top:0px;
    //         left:50px;
    //     }
    // }
    // :focus {
    //     padding-bottom:50px;
    //     ::placeholder{
    //         color:red;
    //         padding-bottom:40px;
            
    //     } 
    //     color:red;
    // }
    
`;


const Input = ({placeholder, type, label, value, handleInput, name}) => {
    return (
        <Field>
           <TextInput  type={type} placeholder={placeholder} value={value} onChange={(e) => handleInput(e,name)}/>
           {/* <label>
            <span>{label}</span>
            </label> */}
        </Field>
    );
}

export default Input;
