import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import { Ls, MeanSolar, Years } from "./content";
import { useState } from "react";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    id: "panel1",
    label: "Years (MY)",
    content: <Years />,
  },
  {
    id: "panel2",
    label: "Solar Longitude (Ls)",
    content: <Ls />,
  },
  {
    id: "panel3",
    label: "Mean Solar Time (MST)",
    content: <MeanSolar />,
  },
];

export type LearnSectionProps = {};

export default function LearnSection(props: LearnSectionProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container component="section" disableGutters>
      <Typography
        id="faq"
        component="h2"
        variant="h3"
        color="primary"
        mt={"2rem"}
      >
        Learn about Mars Time
      </Typography>

      <Box mt={"2rem"}>
        {faqData.map((faqItem) => {
          return (
            <Accordion
              expanded={expanded === faqItem.id}
              onChange={handleChange(faqItem.id)}
              key={faqItem.id}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${faqItem.id}bh-content`}
                id={`${faqItem.id}bh-header`}
              >
                <Typography>{faqItem.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>{faqItem.content}</AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
}
