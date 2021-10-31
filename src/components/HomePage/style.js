import styled from 'styled-components'
import {Grid} from "@material-ui/core";

export const Container=styled.div`
padding:10px;
position:relative;
`

export const TopSection=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:18px;
align-items:center;
@media (max-width: 600px) {
    display:revert;
  }
`

export const TopSectionTitle=styled.h1`
color: rgb(52,50,50);
@media (max-width: 600px) {
    text-align:center;
  }
`

export const SearchSection=styled.div`
width: 400px;
height:160px;
`

export const SearchTitle=styled.div`
font-size: 1.6em;
`
export const SearchGrid=styled.div`
display:grid;
grid-template-columns:30% 70%;
`
export const SubSearchTitle=styled.div`
font-size: 1.2em;
height:35px;
`

export const SearchInput=styled.input`
border:1px solid rgb(52,50,50);
border-radius:5px;
width:90%;
padding:0px 5px;
height:22px;
`

export const WrapperSlider=styled.div`
margin-left:7px;
`

export const CardGridItem=styled(Grid)`
margin-bottom:25px;
display:flex;
justify-content:center;
`