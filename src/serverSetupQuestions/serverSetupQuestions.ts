const serverSetupQuestions = [
  {
    type: "input",
    name: "desiredPort",
    message: "On which port do you want the API to start?",
    default: 4000,
  },
  {
    type: "confirm",
    name: "customerPermissibility",
    message: "Do you want to allow customers to create, delete and modify?",
  },
];

export default serverSetupQuestions;
