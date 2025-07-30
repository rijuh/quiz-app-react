export const SwitchCase = [
  {
    question: "Which keyword is used to define a switch block in JavaScript?",
    options: ["switch", "case", "if", "choose"],
    answer: "switch"
  },
  {
    question: "Which keyword is used to define a branch inside a switch?",
    options: ["if", "case", "branch", "when"],
    answer: "case"
  },
  {
    question: "What keyword is used to exit a case block?",
    options: ["return", "exit", "break", "stop"],
    answer: "break"
  },
  {
    question: "Which block in a switch executes when no case matches?",
    options: ["else", "default", "otherwise", "fallback"],
    answer: "default"
  },
  {
    question: "What happens if you omit the break statement in a case?",
    options: ["Error", "Only default runs", "It falls through to the next case", "Nothing happens"],
    answer: "It falls through to the next case"
  },
  {
    question: "Can a switch statement be nested inside another switch?",
    options: ["Yes", "No", "Only in ES6", "Only in strict mode"],
    answer: "Yes"
  },
  {
    question: "Which type of comparison does switch use?",
    options: ["==", "===", "!=", "!="],
    answer: "==="
  },
  {
    question: "Can multiple cases share the same block of code?",
    options: ["Yes", "No", "Only with default", "Only with break"],
    answer: "Yes"
  },
  {
    question: "Which keyword marks the start of the switch statement?",
    options: ["case", "switch", "default", "begin"],
    answer: "switch"
  },
  {
    question: "What is the purpose of the default case?",
    options: ["To handle matching cases", "To handle errors", "To run if no case matches", "To stop the switch"],
    answer: "To run if no case matches"
  },
  {
    question: "Which statement will skip executing the rest of the switch?",
    options: ["continue", "break", "exit", "stop"],
    answer: "break"
  },
  {
    question: "What is the output of this? `switch(1){case 2: console.log('A'); default: console.log('B')}`",
    options: ["A", "B", "A and B", "Nothing"],
    answer: "B"
  },
  {
    question: "Can switch be used with strings?",
    options: ["Yes", "No", "Only with ES5", "Only with numbers"],
    answer: "Yes"
  },
  {
    question: "What is the output of `switch('x'){case 'y': console.log('Y');}`?",
    options: ["Y", "Error", "Nothing", "x"],
    answer: "Nothing"
  },
  {
    question: "Where should the default case be placed?",
    options: ["Always at the start", "Always at the end", "Anywhere", "Before the first case"],
    answer: "Anywhere (but usually at the end)"
  },
  {
    question: "What is the output if two cases have the same value?",
    options: ["First matching case runs", "Second matching case runs", "Both run", "Error"],
    answer: "First matching case runs"
  },
  {
    question: "Can you use expressions inside case labels?",
    options: ["Yes", "No", "Only in ES6", "Only with numbers"],
    answer: "Yes"
  },
  {
    question: "Which statement will continue the execution without exiting the switch?",
    options: ["break", "fallthrough", "continue", "None"],
    answer: "None (it falls through by default)"
  },
  {
    question: "Does a switch statement work with boolean values?",
    options: ["Yes", "No", "Only in ES5", "Only with default"],
    answer: "Yes"
  },
  {
    question: "What is the output of `switch(0){case false: console.log('A'); default: console.log('B')}`?",
    options: ["A", "B", "A and B", "Nothing"],
    answer: "B"
  },
  {
    question: "Can the default case be omitted?",
    options: ["Yes", "No", "Only in ES6", "Only in strict mode"],
    answer: "Yes"
  },
  {
    question: "What happens if the default case is in the middle without break?",
    options: ["Error", "It will fall through to the next case", "It will skip all cases", "Nothing"],
    answer: "It will fall through to the next case"
  },
  {
    question: "Which of the following can NOT be used in a case label?",
    options: ["Strings", "Numbers", "Variables", "Functions"],
    answer: "Functions (directly)"
  },
  {
    question: "Can a case label be a variable?",
    options: ["Yes", "No", "Only numbers", "Only strings"],
    answer: "Yes"
  },
  {
    question: "What is the output of `switch(2){case 1: case 2: console.log('Yes');}`?",
    options: ["Yes", "No", "Error", "Nothing"],
    answer: "Yes"
  },
  {
    question: "Which statement is true about switch?",
    options: ["It can replace complex if-else chains", "It cannot handle strings", "It doesn't support default", "It always needs break"],
    answer: "It can replace complex if-else chains"
  },
  {
    question: "Can a switch statement be used without any case?",
    options: ["Yes", "No", "Only in ES6", "Only in strict mode"],
    answer: "No"
  },
  {
    question: "Does a switch statement check data types?",
    options: ["Yes, using ===", "No, using ==", "Sometimes", "Only in strict mode"],
    answer: "Yes, using ==="
  },
  {
    question: "What is the purpose of fall-through behavior?",
    options: ["To run multiple cases with same logic", "To stop execution", "To skip default", "To throw an error"],
    answer: "To run multiple cases with same logic"
  },
  {
    question: "Can switch be used with enums or constants?",
    options: ["Yes", "No", "Only with numbers", "Only with default"],
    answer: "Yes"
  },
  {
    question: "What happens if break is missing after the default case?",
    options: ["Error", "Nothing", "It continues executing below the switch", "It executes remaining cases"],
    answer: "Nothing (default is usually last)"
  },
  {
    question: "What is the output of `switch(3){case 1: console.log('A'); case 2: console.log('B');}`?",
    options: ["A", "B", "A and B", "Nothing"],
    answer: "Nothing"
  },
  {
    question: "Can you return from inside a switch?",
    options: ["Yes", "No", "Only with default", "Only in strict mode"],
    answer: "Yes"
  },
  {
    question: "Which keyword must be used for multiple cases sharing one block?",
    options: ["case", "group", "label", "merge"],
    answer: "case"
  },
  {
    question: "Which statement correctly starts a switch with variable x?",
    options: ["switch(x){}", "switch x{}", "switch{x}", "switch[x]{}"],
    answer: "switch(x){}"
  },
  {
    question: "Can you use nested switches inside loops?",
    options: ["Yes", "No", "Only with if", "Only with default"],
    answer: "Yes"
  },
  {
    question: "Does a switch statement support comparison ranges like `case x > 5:`?",
    options: ["Yes", "No", "Only in ES6", "Only with default"],
    answer: "No"
  },
  {
    question: "What is the output of `switch('1'){case 1: console.log('A'); default: console.log('B')}`?",
    options: ["A", "B", "A and B", "Nothing"],
    answer: "B"
  },
  {
    question: "Can the default case be placed first?",
    options: ["Yes", "No", "Only in ES6", "Only in strict mode"],
    answer: "Yes"
  },
  {
    question: "Which statement about switch is FALSE?",
    options: ["It can handle numbers", "It can handle strings", "It always requires a default", "It uses strict equality"],
    answer: "It always requires a default"
  }
]
