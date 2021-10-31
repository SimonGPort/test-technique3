import styled from 'styled-components'
import { Grid } from "@material-ui/core";

export const Container=styled.div`
padding: 15px;
`

export const GridContainer=styled(Grid)`
height: calc(100vh - 300px);
`

export const LeftGridItem=styled(Grid)`
position:relative;
min-height:250px;
`

export const RightGridItem=styled(Grid)`
background-color:#fafafa;
padding:10px;
`
export const ReturnButton=styled(Grid)`
display:flex;
justify-content:flex-end;
text-decoration:underline;
cursor:pointer;
position:absolute;
top:10px;
left:10px;
font-size:2em;
font-weight:bold;
@media (max-width: 600px) {
    font-size:1.8em;
  }
`

export const Image=styled.img`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
height:70%;
`
export const BeerTitle=styled.div`
color:#343232;
font-size:2.6rem;
font-weight:700;
line-weight:1.14em;
margin-bottom:25px;
@media (max-width: 600px) {
    text-align:center;
  }
`

export const Ul=styled.ul`
margin-bottom:25px;
`

export const Li=styled.li`
color: #343232;
font-size: 2rem;
@media (max-width: 600px) {
    font-size:1.6rem;
  }
`

export const Section=styled.div`
margin-left: 25px;
color: rgb(52,50,50);
font-size:1.6rem;
text-align:justify;
margin-right:50px;
@media (max-width: 600px) {
    font-size:1.2rem;
  }
`