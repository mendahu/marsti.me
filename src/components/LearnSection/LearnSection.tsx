import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
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

export default function LearnSection() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Typography id="faq" component="h2" variant="h3" color="primary">
        Learn about Mars Time
      </Typography>

      <Box my={"2rem"}>
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
    </Grid>
  );
}
