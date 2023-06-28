import styled from 'styled-components';

// estilo header, button e input
export const HeaderDiv = styled.header`
background: rgb(73, 72, 70);
height:100px;
display: flex;
align-items: center;
justify-content: space-around;
`

export const  ButtonDescrit = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 30px;
  

`;
export const InputSearch = styled.input`
margin-top: -5px;
font-family: inherit;
font-size: inherit;
background-color: #f4f2f2;
color: #646464;
padding: 0.7rem 1rem;
border-radius: 25px;
width: 200px;
`
export const LabelDiv = styled.label`
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const FormDiv = styled.form`

display: flex;
flex-direction: whap;
align-items: center;




`
export const SvgLupa = styled.svg`
height: 25px;
margin-right: -150px;
margin-top: -35px;

`
export const H1 = styled.h1`
font-size: 50px;
font-family: Impact;
color:white;
text-shadow: 
               -1px -1px 5px red, 
               -1px 1px 5px red,                    
                1px -1px 5px red,                  
                1px 0px 5px red;

`

// estilo dos card
export const CardHeroi = styled.div`

width: 190px;
height: 254px;
border-radius: 30px;
background: rgb(73, 72, 70);
box-shadow: 5px 5px 5px red;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
          
`
export const CardDiv = styled.div`
margin-top: 35px;
display:flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
`
export const Cardimg = styled.img`
height:150px;
width:100px;
`
export const H3 = styled.h3`
color:white;
text-align: center;
`
// estilo das descrição

export const DescritDivMan = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-top: 50px;
`

export const DescritDiv = styled.div`
width: 700px;
border-radius: 30px;
background: rgb(73, 72, 70);
box-shadow: 5px 5px 5px red;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap:30px;
`
export const H2 = styled.h2`
color:white;
text-align: center;
`
export const H1Descrit = styled.h1`
color:white;
text-align: center;
`
export const P = styled.p`
font-size: 20px;
color:white;
text-align: center;
`
export const Img = styled.img`
height:261px;
width:464px;
`
