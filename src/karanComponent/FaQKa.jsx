import React, { useState } from "react";
import MenuPage from "./MenuPageKa";
import students from "../assets/students.jpeg";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import FooterPart from "./footer/FooterPartKa";

const accordianContent = [
  {
    header:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    leftContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: students,
  },
  {
    header: "What is the purpose of Lorem Ipsum text?",
    leftContent:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: students,
  },
  {
    header: "What is the purpose of Lorem Ipsum text?",
    leftContent:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: students,
  },
  {
    header: "What is the purpose of Lorem Ipsum text?",
    leftContent:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: students,
  },
  {
    header: "What is the purpose of Lorem Ipsum text?",
    leftContent:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: students,
  },
];

const FaQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FaqMainContainer >
      <MenuPage title="FaQs" subtitle="Home" />
      {accordianContent &&
        accordianContent.map((curAccordian, index) => (
          <AccordianContainer
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordianSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <RemoveOutlinedIcon />
                ) : (
                  <AddOutlinedIcon />
                )
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              expanded={expanded === `panel${index}`}
            >
              <AccordianHeader
                variant="h6"
                expanded={expanded === `panel${index}`}
              >
                {curAccordian.header}
              </AccordianHeader>
            </AccordianSummary>
            <AccordianDetails>
              <DetailsTypography>{curAccordian.leftContent}</DetailsTypography>
              {curAccordian.image && (
                <DetailsImage
                  src={curAccordian.image}
                  alt="FAQ Image"
                  className="faq-image"
                />
              )}
            </AccordianDetails>
          </AccordianContainer>
        ))}
              <FooterPart/>
    </FaqMainContainer>
  );
};

export default FaQ;

const AccordianContainer = styled(Accordion)`
  width: 50%;
   @media (max-width:1100px){
    width: 70% ;

   }

   @media (max-width:600px){
    width: 90% ;
    
   }
`;
const FaqMainContainer = styled('div')`
 width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
   align-items: center;

   @media (max-width:1400px){
   width:120vw;
   }
   
   @media (max-width:1100px){
    width: 200vw ;
   }

   @media (max-width:600px){
    width: 220vw ;
   }
`;

const AccordianHeader = styled(Typography)`
  font: 600 14px "Epilogue";
  color: ${(props) =>
    props.expanded
      ? "#FFFFFF"
      : "#333931"}; 
      @media(max-width:1100px){
        font: 600 22px "Epilogue";
      }

       @media(max-width:600px){
        font: 600 20px "Epilogue";
      }
`;

const AccordianSummary = styled(AccordionSummary)`
  background-color: ${(props) =>
    props.expanded
      ? "#04857A"
      : "#FFFFFF"}; 
`;

const AccordianDetails = styled(AccordionDetails)`
  display: flex;
  gap: 12px;
`;

const DetailsTypography = styled(Typography)`
  font: 400 14px "Sora";
  color: #333931;

  @media(max-width:1100px){
    font: 400 28px "Sora";
  }

    @media(max-width:600px){
    font: 400 20px "Sora";
  }
`;

const DetailsImage = styled("img")`
  width: 206px;
  height: 108px;
`;
