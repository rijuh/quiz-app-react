export const WhileLoop = [
    {
        question: "Which keyword is used to create a while loop in JavaScript?",
        options: ["loop", "while", "for", "do"],
        answer: "while"
    },
    {
        question: "What will the while loop do if the condition is false initially?",
        options: ["Run once", "Never run", "Throw an error", "Skip one iteration"],
        answer: "Never run"
    },
    {
        question: "What is the correct syntax for a while loop?",
        options: ["while (condition) { }", "while {condition}()", "while: condition {}", "while condition: {}"],
        answer: "while (condition) { }"
    },
    {
        question: "Which of the following can lead to an infinite while loop?",
        options: ["Condition becomes false", "No break statement", "Condition never becomes false", "Syntax error"],
        answer: "Condition never becomes false"
    },
    {
        question: "What is the output of `let i=0; while(i<2){ console.log(i); i++; }`?",
        options: ["0 1", "1 2", "2 3", "Nothing"],
        answer: "0 1"
    },
    {
        question: "Can you use break inside a while loop?",
        options: ["Yes", "No", "Only in ES6", "Only in strict mode"],
        answer: "Yes"
    },
    {
        question: "What will `let x=5; while(x>0){x--;}` do?",
        options: ["Infinite loop", "Decrement x until 0", "Print numbers", "Error"],
        answer: "Decrement x until 0"
    },
    {
        question: "Which keyword skips the current iteration of a while loop?",
        options: ["break", "skip", "continue", "return"],
        answer: "continue"
    },
    {
        question: "Does the condition in a while loop check before or after the loop body?",
        options: ["Before", "After", "Both", "Depends on syntax"],
        answer: "Before"
    },
    {
        question: "Which loop guarantees at least one execution?",
        options: ["while", "do...while", "for", "for...of"],
        answer: "do...while"
    },
    {
        question: "What will `while(false){console.log('Hi')}` print?",
        options: ["Hi", "Nothing", "false", "Error"],
        answer: "Nothing"
    },
    {
        question: "Which of the following can be used as a condition in a while loop?",
        options: ["Boolean expression", "Numbers only", "Strings only", "Arrays only"],
        answer: "Boolean expression"
    },
    {
        question: "Can a while loop be nested inside another while loop?",
        options: ["Yes", "No", "Only in ES6", "Only once"],
        answer: "Yes"
    },
    {
        question: "What is the output of `let i=3; while(i){console.log(i); i--;}`?",
        options: ["3 2 1", "2 1 0", "1 2 3", "Nothing"],
        answer: "3 2 1"
    },
    {
        question: "Which of the following is true about while loops?",
        options: ["They always run at least once", "They may not run at all", "They must run forever", "They don't need conditions"],
        answer: "They may not run at all"
    },
    {
        question: "What happens if you forget to update the loop variable in a while loop?",
        options: ["Nothing", "It runs once", "It causes an infinite loop", "Error"],
        answer: "It causes an infinite loop"
    },
    {
        question: "Which of the following will create an infinite loop?",
        options: ["while (true) {}", "while (false) {}", "while (i>10) {}", "while (0) {}"],
        answer: "while (true) {}"
    },
    {
        question: "What is the difference between while and do...while?",
        options: ["do...while checks first", "while checks after", "do...while runs at least once", "There is no difference"],
        answer: "do...while runs at least once"
    },
    {
        question: "Can while loops be used to iterate over arrays?",
        options: ["Yes", "No", "Only with for loop", "Only in ES6"],
        answer: "Yes"
    },
    {
        question: "What will `let i=0; while(i<3){i++; if(i===2) break;}` leave as the final value of i?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    }
]
