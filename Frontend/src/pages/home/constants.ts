const instructionsList = [
  "Build a form (on the EXAM page) to add new items to be listed in the example tab table",
  {
    text: "Form should validate the following:",
    subItems: ["Unique emails", "First name and last name are required"],
  },
  "Format date to be displayed in the example table: 2016/01/20",
  "Add search capability in example tab table. A single text field would be sufficient.",
  'Replace "Load data" button with "next / previous" paging buttons. Display 30 items at a time',
  "Example tab should load first 30 automatically on the first load",
];

const lookingForList = [
  "Clean code: use of best practices",
  "Apply refactoring where deemed necessary",
];

const otherInfoList = [
  "Don't spend too much time on UI design and CSS - as long as our eyes don't bleed, it is fine. This is not a web-designer exam.",
  "No time to finish? Leave comments on what's left and what has to be done to complete the task. Estimate time required.",
];

export { instructionsList, lookingForList, otherInfoList };
