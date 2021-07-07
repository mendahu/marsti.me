import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Theme,
  Typography,
} from "@material-ui/core";
import { Ls, MeanSolar, Years } from "./content";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const faqData = [
  {
    id: "panel1",
    label: "Years (MY)",
    text: <Years />,
  },
  {
    id: "panel2",
    label: "Solar Longitude (Ls)",
    text: <Ls />,
  },
  {
    id: "panel3",
    label: "Mean Solar Time (MST)",
    text: <MeanSolar />,
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  marginTop: {
    marginTop: "2rem",
  },
}));

export type LearnSectionProps = {};

export default function LearnSection(props: LearnSectionProps) {
  const classes = useStyles();
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
        className={classes.marginTop}
      >
        Learn about Mars Time
      </Typography>

      <div className={classes.marginTop}>
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
              <AccordionDetails>
                <Typography>{faqItem.text}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Container>
  );
}
