import { Button, styled } from "@mui/material";
import freedomoIcon from "../assets/demoButtonIcon.png";

const FreeDemoButton = ({ content, onSubmit }) => {
  return (
    <ButtonStyle
      onSubmit={onSubmit}
      endIcon={<FreeDomImage src={freedomoIcon} />}
    >
      {content}
    </ButtonStyle>
  );
};

export default FreeDemoButton;

const ButtonStyle = styled(Button)`
width:230px;
height:59px;
background-color:#04857A;
border-radius: 200px ;
padding-left:24px;
text-transform:capitalize;
color:#ffffff;
display:flex;
font:400 14px 'Sora';
justify-content:space-between;
postion:relative;
  & .MuiButton-endIcon {
 
position:absolute;
left:164px;
    
  }

  @media (max-width:1100px){
  width:400px;
  height:90px;
  font-size:25px;


& .MuiButton-endIcon {
 
position:absolute;
left:310px;
  }

   @media (max-width:600px){
  width:320px;
    height:70px;


    @media (max-width:600px){

    width:300px;
    height:70px;
font:400 20px 'Sora';
height:70px;


& .MuiButton-endIcon {
 
position:absolute;
left:224px;
  }
`;

const FreeDomImage = styled("img")`
  @media (max-width: 1100px) {
    width: 90px;
  }
  @media (max-width: 600px) {
    width: 70px;
  }
`;
