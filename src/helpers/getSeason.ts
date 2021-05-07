export const getSeason = (ls: number): string => {
  switch (true) {
    case ls < 30:
      return "Early Spring";
    case ls < 60:
      return "Spring";
    case ls < 90:
      return "Late Spring";
    case ls < 120:
      return "Early Summer";
    case ls < 150:
      return "Summer";
    case ls < 180:
      return "Late Summer";
    case ls < 210:
      return "Early Fall";
    case ls < 240:
      return "Fall";
    case ls < 270:
      return "Late Fall";
    case ls < 300:
      return "Early Winter";
    case ls < 330:
      return "Winter";
    case ls < 360:
      return "Late Winter";
  }
};
