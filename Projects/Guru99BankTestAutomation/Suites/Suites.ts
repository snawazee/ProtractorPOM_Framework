/**
 * Export the mail information such as from to etc.
 */
export let params = {
  browserName: "chrome",
  sharedTestFiles: true,
  maxInstance: 4,
  nodeMailer: {
    sendMail: {
      fromUser: "snawazee@gmail.com", // sender address
      toUser: "snawazee@gmail.com", // list of receivers
      subjectOfMail: "Guru99Bank Test Automation reports", // Subject line
      textOfMail:
        "Hi Safdar\n \nPlease find the attached screenshot of testreports \nThanks\nNodeMailer",
    },
  },
};

/**
 * Export the test suite of spec files.
 */
export let suites = [
  "../TestCases/LoginPageTest.js",
  "../TestCases/HomePageTest.js",
  "../TestCases/NewCostumerPageTest.js",
  "../TestCases/EditCostumerPageTest.js",
  "../TestCases/DeleteCustomerPageTest.js",
];
