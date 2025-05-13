import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import { styled } from "@mui/material";
import menuImage from "../assets/menuImageKa.jpeg";

const MenuPage = ({ title, subtitle }) => {
  return (

    <MenuPageContainer className="menuPageMainContainer">
      <DesignOne>
        <FirstImage src={design1} alt="N/A" />
      </DesignOne>
      <DesignOne>
        <SecondImage src={design2} alt="N/A" />
      </DesignOne>
      <MenuContentSection>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>
          {subtitle} <ContentSpan>//</ContentSpan> {title}{" "}
        </ContentDescription>
      </MenuContentSection>
      
      <DesignOne>
        <ThirdImage src={design3} alt="N/A" />
      </DesignOne>
      <DesignOne>
        <FourthImage src={design4} alt="N/A" />
      </DesignOne>
    </MenuPageContainer>
  );
};

const MenuPageContainer = styled("div")`
  width: 100vw;
  width:100vw;
  height: 365px;
  background-image: url(${menuImage});
  display: grid;
  grid-template-columns: 17% 17% 32% 17% 17%;

   @media(max-width:1400px){
  width:120vw;
  }

   @media(max-width:1100px){
  width:200vw;
  }

  @media(max-width:600px){
    width:220vw;
    }
`;
const DesignOne = styled("div")`
  width: 100%;
  height: 100%;
  padding: 23px;
  display: flex;
  align-items: center;

    @media(max-width:600px){

  }
`;
const MenuContentSection = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;
const ContentTitle = styled("h2")`
  color: #0e2a46;
  font: 700 60px "Epilogue";
  text-transform: uppercase;

   @media(max-width:1100px){
font: 700 70px "Epilogue";
  }
    @media(max-width:600px){
font: 700 40px "Epilogue";
  }
`;

const ContentSpan = styled("span")`
  color: #fc6441;
`;

const ContentDescription = styled("p")`
  color: #0e2a46;
  font: 400 16px "Sora";

   @media(max-width:1100px){
font: 400 26px "Sora";
  }


  @media(max-width:600px){
    font: 400 22px "Sora";
      }
`;
const FirstImage = styled("img")`
  width: 77px;
  height: 85px;
  margin-bottom: 90px;
`;
const SecondImage = styled("img")`
  width: 85px;
  height: 24px;
  margin-top: 150px;
`;
const ThirdImage = styled("img")`
  width: 41px;
  height: 37px;
  margin-top: 240px;
  margin-left:60px;
`;
const FourthImage = styled("img")`
  width: 66px;
  height: 65px;
  margin-bottom: 240px;
  margin-left: 130px;

  @media (max-width:600px){
margin-left:23px
  }
`;

export default MenuPage;
