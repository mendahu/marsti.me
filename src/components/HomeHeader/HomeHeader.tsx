import {
  Box,
  Button,
  Stack,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useCurrentTime } from "../../contexts/CurrentTimeContext";

const SIGNIFICANT_DIGITS_LS: number = 4;

type CssValues = {
  titleSize: string;
  containerWidth: string;
  buttonPadding: string;
  clock1Size: string;
  clock2Size: string;
  dateSize: string;
  secMargin: {
    top: string;
    left: string;
  };
  mstMargin: {
    top: string;
    left: string;
  };
  lsMarginLeft: string;
  yearMarginRight: string;
};

const smallCssValues: CssValues = {
  titleSize: "4.5rem",
  containerWidth: "288px",
  buttonPadding: "0px",
  clock1Size: "4.8rem",
  clock2Size: "1.5rem",
  dateSize: "1.7rem",
  secMargin: {
    top: "17px",
    left: "18px",
  },
  mstMargin: {
    top: "2px",
    left: "18px",
  },
  lsMarginLeft: "0px",
  yearMarginRight: "0px",
};

const largeCssValues: CssValues = {
  titleSize: "6.05rem",
  containerWidth: "388px",
  buttonPadding: "7px",
  clock1Size: "6.2rem",
  clock2Size: "2.2rem",
  dateSize: "2rem",
  secMargin: {
    top: "22px",
    left: "10px",
  },
  mstMargin: {
    top: "1px",
    left: "10px",
  },
  lsMarginLeft: "9px",
  yearMarginRight: "5px",
};

function Clock() {
  const { getLMST, ls, year } = useCurrentTime();
  const { hour, min, sec } = getLMST();

  const roundedLs =
    Math.round(ls * Math.pow(10, SIGNIFICANT_DIGITS_LS)) /
    Math.pow(10, SIGNIFICANT_DIGITS_LS);

  const isWideScreen = useMediaQuery("(min-width:420px)");
  const cssValues = isWideScreen ? largeCssValues : smallCssValues;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "35% 35% 30%",
        gridTemplateColumns: "60% 19% 21%",
        gridTemplateAreas: `'hourMin hourMin sec' 'hourMin hourMin mst' 'ls year year'`,
      }}
    >
      <Box sx={{ gridArea: "hourMin" }}>
        <Typography
          component="span"
          variant="clock"
          fontSize={cssValues.clock1Size}
        >
          {hour}:{min}
        </Typography>
      </Box>
      <Box
        sx={{ gridArea: "sec" }}
        mt={cssValues.secMargin.top}
        ml={cssValues.secMargin.left}
      >
        <Typography
          component="span"
          variant="clock"
          fontSize={cssValues.clock2Size}
        >
          :{sec}
        </Typography>
      </Box>
      <Box
        sx={{ gridArea: "mst" }}
        mt={cssValues.mstMargin.top}
        ml={cssValues.mstMargin.left}
      >
        <Typography
          component="span"
          variant="clock"
          fontSize={cssValues.clock2Size}
        >
          <abbr title="Mars Coordinated Time">MTC</abbr>
        </Typography>
      </Box>
      <Box sx={{ gridArea: "ls" }} ml={cssValues.lsMarginLeft}>
        <Typography component="span" fontSize={cssValues.dateSize}>
          <abbr title="Solar Longitude">
            L<sub>S</sub>
          </abbr>{" "}
          {roundedLs}&deg;
        </Typography>
      </Box>
      <Box
        sx={{ gridArea: "year", textAlign: "right" }}
        mr={cssValues.yearMarginRight}
      >
        <Typography component="span" fontSize={cssValues.dateSize}>
          <abbr title="Mars Year">MY</abbr> {year}
        </Typography>
      </Box>
    </Box>
  );
}

export default function HomeHeader() {
  const isWideScreen = useMediaQuery("(min-width:420px)");
  const cssValues = isWideScreen ? largeCssValues : smallCssValues;

  return (
    <Container
      disableGutters
      sx={{ maxWidth: cssValues.containerWidth }}
      maxWidth={false}
    >
      <Stack spacing={1}>
        <Typography
          variant={"h2"}
          component="h1"
          align="center"
          color="primary"
          fontSize={cssValues.titleSize}
        >
          MARSTI.ME
        </Typography>
        <Clock />
        <Box px={cssValues.buttonPadding}>
          <Button
            sx={{ mt: "1rem" }}
            variant="contained"
            color="primary"
            href="#faq"
            size="large"
            fullWidth
          >
            What do these mean?
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
