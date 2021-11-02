import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import {
  Ls,
  MeanSolar,
  Years,
  MonthsAndWeeks,
  Sols,
  Time,
  Timezones,
  Reading,
} from "./content";
import { useState } from "react";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    label: "Years (MY)",
    content: <Years />,
  },
  {
    label: "Months and Weeks",
    content: <MonthsAndWeeks />,
  },
  {
    label: "Solar Longitude (Ls)",
    content: <Ls />,
  },
  {
    label: "Sols: the Martian Day",
    content: <Sols />,
  },
  {
    label: "Tracking Time",
    content: <Time />,
  },
  {
    label: "Mean vs True Solar Time",
    content: <MeanSolar />,
  },
  {
    label: "Timezones and Local Time",
    content: <Timezones />,
  },
  {
    label: "Further reading",
    content: <Reading />,
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

      <Box mt={"2rem"}>
        {faqData.map((faqItem, index) => {
          const id = `panel${index + 1}`;
          return (
            <Accordion
              expanded={expanded === id}
              onChange={handleChange(id)}
              key={id}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}bh-content`}
                id={`${id}bh-header`}
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
