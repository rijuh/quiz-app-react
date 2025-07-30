export const ForLoop = [
    {
        question: "Which keyword is used to start a for loop in JavaScript?",
        options: ["loop", "for", "while", "foreach"],
        answer: "for"
    },
    {
        question: "What are the three parts of a for loop?",
        options: ["start, condition, increment", "start, end, stop", "init, body, exit", "check, break, continue"],
        answer: "start, condition, increment"
    },
    {
        question: "How many times will this loop run? `for (let i = 0; i < 5; i++)`",
        options: ["4", "5", "6", "Infinite"],
        answer: "5"
    },
    {
        question: "What is the value of i after this loop? `for (let i = 0; i < 3; i++) {}`",
        options: ["0", "1", "2", "3"],
        answer: "3"
    },
    {
        question: "Which keyword is used to skip the current iteration in a for loop?",
        options: ["skip", "break", "continue", "stop"],
        answer: "continue"
    },
    {
        question: "Which keyword is used to exit a for loop completely?",
        options: ["exit", "stop", "break", "return"],
        answer: "break"
    },
    {
        question: "What will `for (let i = 5; i > 0; i--) console.log(i)` print first?",
        options: ["1", "0", "5", "4"],
        answer: "5"
    },
    {
        question: "Can a for loop run indefinitely?",
        options: ["Yes, if the condition is always true", "No, it will stop automatically", "Only in strict mode", "Only with break"],
        answer: "Yes, if the condition is always true"
    },
    {
        question: "Which part of the for loop is optional?",
        options: ["initialization", "condition", "increment/decrement", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the output of `for (let i = 0; i < 0; i++) console.log(i)`?",
        options: ["0", "undefined", "No output", "Error"],
        answer: "No output"
    },
    {
        question: "What does `i++` mean in a for loop?",
        options: ["Decrement i by 1", "Increment i by 1", "Multiply i by 2", "Stop the loop"],
        answer: "Increment i by 1"
    },
    {
        question: "What will `for (let i = 0; i < 3; i++) console.log(i);` print?",
        options: ["1 2 3", "0 1 2", "0 1 2 3", "3 2 1"],
        answer: "0 1 2"
    },
    {
        question: "Which of the following loops through an array correctly?",
        options: [
            "for (let i = 0; i < arr.length; i++) {}",
            "for (let i = 1; i <= arr.length; i++) {}",
            "for (let i = arr.length; i > 0; i++) {}",
            "for (i of arr) {}"
        ],
        answer: "for (let i = 0; i < arr.length; i++) {}"
    },
    {
        question: "Can we use `var`, `let`, or `const` in for loop initialization?",
        options: ["Only var", "Only let", "Only const", "All three can be used"],
        answer: "All three can be used"
    },
    {
        question: "What will happen if we remove the condition part from the for loop?",
        options: ["It will throw an error", "It will run once", "It will run infinitely", "It will stop immediately"],
        answer: "It will run infinitely"
    },
    {
        question: "Which of the following is the correct infinite loop?",
        options: [
            "for (;;) {}",
            "for (true) {}",
            "for (i = 0; i++) {}",
            "for (i = 0; i < 10; i--) {}"
        ],
        answer: "for (;;) {}"
    },
    {
        question: "What will `for (let i = 0; i < 3; i++) { if(i==1) break; console.log(i);}` print?",
        options: ["0 1", "1 2", "0", "1"],
        answer: "0"
    },
    {
        question: "What will `for (let i = 0; i < 3; i++) { if(i==1) continue; console.log(i);}` print?",
        options: ["0 1 2", "0 2", "1 2", "2"],
        answer: "0 2"
    },
    {
        question: "What is the output of `for (let i = 10; i > 0; i -= 2) console.log(i);`?",
        options: ["10 8 6 4 2", "10 9 8 7", "2 4 6 8 10", "10 12 14"],
        answer: "10 8 6 4 2"
    },
    {
        question: "Which part of the for loop is executed only once?",
        options: ["Initialization", "Condition", "Increment/decrement", "Body"],
        answer: "Initialization"
    }
]
