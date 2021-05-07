import VerticalMenu from "../VerticalMenu/VerticalMenu";
import { Ls, MeanSolar, Years } from "./content";
import styles from "./styles/LearnSection.module.css";

const faqData = [
  {
    id: "1",
    label: "Years (MY)",
    text: <Years />,
  },
  {
    id: "2",
    label: "Solar Longitude (Ls)",
    text: <Ls />,
  },
  {
    id: "3",
    label: "Mean Solar Time (MST)",
    text: <MeanSolar />,
  },
];

export type LearnSectionProps = {};

export default function LearnSection(props: LearnSectionProps) {
  return (
    <section>
      <h2 id="faq">Learn about Mars Time</h2>

      <VerticalMenu
        navItems={faqData.map((datum) => ({
          label: datum.label,
          id: datum.id,
        }))}
        content={faqData.map((datum) => ({
          text: datum.text,
          id: datum.id,
        }))}
      />
    </section>
  );
}
