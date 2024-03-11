import { Box,Button } from "@mui/material"
import styled from "styled-components"


export const StyledBox = styled(Box)`
background-color:#f6f6f6;
height: 100vh;
`

// export const StyledTextField = styled.input`
// background: red;
// .MuiOutlinedInput-root{}
// `;

export const StyledTextField = styled.input`
margin-top: 13px;
margin-right:-8px;
width:315px;
height:40px;
background:#f4f4f4;
border-radius:5px;
border:0px;
font-size:19px;
color:#535353;
`;



export const StyledInputLabel = styled.div`
color: #535353;
font-family: "Gilroy-Medium", sans-serif;
font-size: 20px;
margin-top: 30px;
margin-right:222px;
`;

// && this is important jayre aa select thatu na hoy MEANS css apply na thati hoy.

export const StyledButton = styled(Button)`
&& { 
    background-color: #424242;
    margin-top:100px;
    width:320px;
    height:50px;
    margin-left:13px;
    border-radius:8px;
    font-weight:600;
    border:1px solid black;
}
`

export const HomeButton = styled(Button)`
&& 
{
    border:2px solid black;
    padding:10px;
    color:black;
    font-weight: bold;
}
`



