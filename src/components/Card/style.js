import styled from 'styled-components'

export const CardContainer=styled.div`
border:12px solid #f2f2f2;
background-color:white;
position:relative;
height:350px;
width:300px;
padding:8px;
cursor:pointer;
transition:1s;
&:hover {
    border-color:rgb(52,50,50)
}
`

export const Wrapper=styled.div`
width:100%;
position:absolute;
height:200px;
margin:auto;
text-align:center;
right:0;
left:0;
top:0;
bottom:0;
`

export const CardText=styled.div`
font-size:1.6em;
height:50px;
margin-bottom:10px;
text-align:center;
color: rgb(52,50,50);
font-weight:700;
`