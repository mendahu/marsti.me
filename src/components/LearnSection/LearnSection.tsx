import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import VerticalMenu from "../VerticalMenu/VerticalMenu";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "50%",
      flexShrink: 0,
    },
  })
);

export type LearnSectionProps = {};

export default function LearnSection(props: LearnSectionProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section>
      <h2 id="faq">Learn about Mars Time</h2>

      {faqData.map((faqItem) => {
        return (
          <Accordion
            expanded={expanded === faqItem.id}
            onChange={handleChange(faqItem.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faqItem.id}bh-content`}
              id={`${faqItem.id}bh-header`}
            >
              <Typography className={classes.heading}>
                {faqItem.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faqItem.text}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </section>
  );
}
