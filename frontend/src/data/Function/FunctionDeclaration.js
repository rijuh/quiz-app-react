export const FunctionDeclaration = [
    {
        question: "Which keyword is used to declare a function in JavaScript?",
        options: ["func", "function", "declare", "fn"],
        answer: "function"
    },
    {
        question: "What is the correct syntax to declare a function named myFunc?",
        options: [
            "function myFunc() {}",
            "function: myFunc() {}",
            "declare myFunc() {}",
            "myFunc function() {}"
        ],
        answer: "function myFunc() {}"
    },
    {
        question: "What will happen if you call a function before its declaration?",
        options: ["Error", "undefined", "It works because of hoisting", "It only works in strict mode"],
        answer: "It works because of hoisting"
    },
    {
        question: "Which of the following is a function declaration and not a function expression?",
        options: [
            "const myFunc = function() {}",
            "function myFunc() {}",
            "let myFunc = () => {}",
            "myFunc = function() {}"
        ],
        answer: "function myFunc() {}"
    },
    {
        question: "What will `typeof myFunc` return if myFunc is a function declaration?",
        options: ["'function'", "'object'", "'undefined'", "'string'"],
        answer: "'function'"
    },
    {
        question: "What is the default return value of a function without a return statement?",
        options: ["null", "undefined", "0", "false"],
        answer: "undefined"
    },
    {
        question: "Which of these is NOT allowed in a function name?",
        options: ["$", "_", "letters", "spaces"],
        answer: "spaces"
    },
    {
        question: "Can you declare two functions with the same name in the same scope?",
        options: ["Yes, last one overrides the previous", "No, it throws an error", "Only in ES6", "Only inside classes"],
        answer: "Yes, last one overrides the previous"
    },
    {
        question: "What is the scope of a function declared inside another function?",
        options: ["Global", "Block", "Local to the parent function", "Class scope"],
        answer: "Local to the parent function"
    },
    {
        question: "What is the output of `function test() {}; console.log(test());`?",
        options: ["null", "undefined", "function", "error"],
        answer: "undefined"
    },
    {
        question: "Can function declarations be used with default parameters?",
        options: ["Yes", "No", "Only in ES6", "Only in strict mode"],
        answer: "Yes"
    },
    {
        question: "What does hoisting mean for function declarations?",
        options: [
            "They are not available before declaration",
            "They are moved to the top of their scope",
            "They are only partially available",
            "They work only in block scope"
        ],
        answer: "They are moved to the top of their scope"
    },
    {
        question: "What will happen if you return nothing from a function?",
        options: ["undefined is returned", "null is returned", "0 is returned", "Error is thrown"],
        answer: "undefined is returned"
    },
    {
        question: "Which keyword is used to return a value from a function?",
        options: ["return", "yield", "break", "exit"],
        answer: "return"
    },
    {
        question: "Can function declarations be anonymous?",
        options: ["Yes", "No", "Only in ES5", "Only in strict mode"],
        answer: "No"
    },
    {
        question: "What happens if you declare a function inside a block `{}` in strict mode?",
        options: [
            "It will be available globally",
            "It will only be available inside the block",
            "It will throw an error",
            "It will be hoisted to the top of the script"
        ],
        answer: "It will only be available inside the block"
    },
    {
        question: "What will `function myFunc(a, b) { return a + b; }` return when called as `myFunc(2)`?",
        options: ["2", "NaN", "undefined", "Error"],
        answer: "NaN"
    },
    {
        question: "Can you pass another function as a parameter to a function declaration?",
        options: ["Yes", "No", "Only in ES6", "Only in classes"],
        answer: "Yes"
    },
    {
        question: "What is the output of `console.log(sum); function sum() {}`?",
        options: ["function sum() {}", "undefined", "Error", "null"],
        answer: "function sum() {}"
    },
    {
        question: "What happens if you write `return` on one line and the value on the next line?",
        options: ["It returns the value", "It returns undefined", "It throws an error", "It concatenates the lines"],
        answer: "It returns undefined"
    }
]
