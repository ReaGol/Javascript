const language = function (lang) {
  switch (lang) {
    case "Mandarin":
      console.log("Most number of native speakers");
      break;
    case "Spanish":
      console.log("2nd place");
      break;
    case "English":
      console.log("3rd place");
      break;
    case "Hindi":
      console.log("4th place");
      break;
    case "Arabic":
      console.log("5th most spoken");
      break;

    default:
      console.log("Not in the top 5");
  }
};
