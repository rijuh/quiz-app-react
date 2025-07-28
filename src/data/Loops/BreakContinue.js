export const BreakContinue = [
    {
        question: "What is the purpose of the `break` statement in JavaScript?",
        options: ["To skip the current iteration", "To exit a loop or switch", "To pause the loop", "To restart the loop"],
        answer: "To exit a loop or switch"
    },
    {
        question: "What does the `continue` statement do?",
        options: ["Stops the loop completely", "Skips the current iteration", "Repeats the loop from start", "Ends the program"],
        answer: "Skips the current iteration"
    },
    {
        question: "In which statement can `break` be used?",
        options: ["if statement", "for loop", "switch statement", "for loop and switch statement"],
        answer: "for loop and switch statement"
    },
    {
        question: "In which statement can `continue` be used?",
        options: ["if statement", "for loop", "switch statement", "function"],
        answer: "for loop"
    },
    {
        question: "What will this code print? `for(let i=0;i<3;i++){ if(i==1) break; console.log(i); }`",
        options: ["0 1 2", "0 1", "0", "1 2"],
        answer: "0"
    },
    {
        question: "What will this code print? `for(let i=0;i<3;i++){ if(i==1) continue; console.log(i); }`",
        options: ["0 1 2", "0 2", "1 2", "0"],
        answer: "0 2"
    },
    {
        question: "Can `break` be used outside a loop or switch?",
        options: ["Yes", "No", "Only in ES6", "Only in functions"],
        answer: "No"
    },
    {
        question: "Can `continue` be used outside a loop?",
        options: ["Yes", "No", "Only in ES5", "Only inside functions"],
        answer: "No"
    },
    {
        question: "What happens if `break` is used in a `while` loop?",
        options: ["The current iteration is skipped", "The loop terminates", "The loop restarts", "Nothing happens"],
        answer: "The loop terminates"
    },
    {
        question: "What happens if `continue` is used in a `while` loop?",
        options: ["The loop stops", "The next iteration starts", "The current iteration repeats", "Nothing happens"],
        answer: "The next iteration starts"
    },
    {
        question: "Can `break` exit multiple nested loops at once?",
        options: ["Yes, always", "No, it only exits the innermost loop", "Only in ES6", "Only with `return`"],
        answer: "No, it only exits the innermost loop"
    },
    {
        question: "Which statement is true about `continue`?",
        options: ["It stops the loop completely", "It skips remaining code in the current iteration", "It exits switch statements", "It works in functions"],
        answer: "It skips remaining code in the current iteration"
    },
    {
        question: "What will this code print? `for(let i=1;i<=3;i++){ if(i==2) break; console.log(i); }`",
        options: ["1", "1 2", "2 3", "1 3"],
        answer: "1"
    },
    {
        question: "What will this code print? `for(let i=1;i<=3;i++){ if(i==2) continue; console.log(i); }`",
        options: ["1 2 3", "1 3", "2 3", "1 2"],
        answer: "1 3"
    },
    {
        question: "Can `break` be used in a `switch` statement?",
        options: ["Yes", "No", "Only with loops", "Only with functions"],
        answer: "Yes"
    },
    {
        question: "What happens if you forget `break` in a switch case?",
        options: ["The program crashes", "It falls through to the next case", "It exits the switch", "Nothing happens"],
        answer: "It falls through to the next case"
    },
    {
        question: "What will `for(let i=0;i<5;i++){ if(i%2==0) continue; console.log(i); }` print?",
        options: ["0 2 4", "1 3", "2 4", "1 2 3 4"],
        answer: "1 3"
    },
    {
        question: "Which keyword can be used to stop execution of a loop early?",
        options: ["stop", "break", "end", "halt"],
        answer: "break"
    },
    {
        question: "Which keyword can be used to skip only the current iteration of a loop?",
        options: ["skip", "continue", "break", "exit"],
        answer: "continue"
    },
    {
        question: "What will `while(true){ break; console.log('Hi'); }` print?",
        options: ["Hi", "Nothing", "Infinite loop", "Error"],
        answer: "Nothing"
    }
]
