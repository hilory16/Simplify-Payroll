import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    .wrapper{
        ul{
            padding:0;
            li{
                list-style:none;
                display:inline-block;
                padding:0 20px;

                .circle{
                    padding:15px;
                    border-radius:70%;
                    background:black;;
                    width:fit-content;
                    margin:10px auto;
                    position:relative;
                    :nth-child(3) :after{
                        height:0px;
                    }
                    :after{
                        content:'';
                        width:300%;
                        height:3px;
                        display:block;
                        background:black;
                        position:absolute;
                        top: 50%;
                        left: 50px;
                                   
                    }
                }
            }
        }
    }
`;

const Steps = () => {
    return (
        <Container>
            <div className="wrapper">
                <ul>
                    <li>
                        <p className="circle">1</p>
                        <p> Create a group</p>
                    </li>
                    <li>
                        <p className="circle">2</p>
                        <p> Add a new one</p>
                    </li>
                    <li>
                        <p className="circle">3</p>
                        <p> Pass it round</p>
                    </li>
                </ul>
            </div>
        </Container>
    );
}

export default Steps;
