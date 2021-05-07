import styles from "./styles/Years.module.css";

export type YearsProps = {};

export default function Years(props: YearsProps) {
  return (
    <div>
      <p>
        A year on Mars (the time it takes to orbit the sun) is about 668 sols
        (Mars days) long, or about 687 Earth days. Mars Years are tracked
        starting with Mars Year 1 (MY1) which began on April 11, 1955. This date
        is arbitrary; it was chosen by scientist R. Todd Clancy in a publication
        describing seasonal temperatures around a great dust storm in 1956, but
        it has become convention by the scientific community now.
      </p>
    </div>
  );
}
