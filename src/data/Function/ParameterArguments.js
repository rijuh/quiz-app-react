export const ParameterArguments = [
    {
        question: "What are parameters in JavaScript?",
        options: [
            "Values passed to a function when calling it",
            "Placeholders defined in a function definition",
            "Return values of a function",
            "Global variables"
        ],
        answer: "Placeholders defined in a function definition"
    },
    {
        question: "What are arguments in JavaScript?",
        options: [
            "Variables inside a function",
            "Values you pass when calling a function",
            "Default values of parameters",
            "Functions themselves"
        ],
        answer: "Values you pass when calling a function"
    },
    {
        question: "In the function `function add(a, b) {}`, what are `a` and `b`?",
        options: ["Arguments", "Parameters", "Return values", "Objects"],
        answer: "Parameters"
    },
    {
        question: "In `add(2, 3)`, what are `2` and `3`?",
        options: ["Parameters", "Arguments", "Variables", "Properties"],
        answer: "Arguments"
    },
    {
        question: "Can a function be called without passing arguments even if it has parameters?",
        options: ["Yes", "No", "Only in ES6", "Only with default values"],
        answer: "Yes"
    },
    {
        question: "What is the purpose of parameters in a function?",
        options: [
            "To pass data into the function",
            "To return data from the function",
            "To store global values",
            "To declare constants"
        ],
        answer: "To pass data into the function"
    },
    {
        question: "Which keyword can be used to access all arguments passed to a function?",
        options: ["arguments", "params", "args", "values"],
        answer: "arguments"
    },
    {
        question: "Can you have more arguments than parameters when calling a function?",
        options: ["Yes, extra arguments are ignored", "No, it throws an error", "Only with default values", "Only in strict mode"],
        answer: "Yes, extra arguments are ignored"
    },
    {
        question: "Can you have more parameters than arguments?",
        options: ["Yes, missing parameters are undefined", "No, it throws an error", "Only in ES5", "Only in strict mode"],
        answer: "Yes, missing parameters are undefined"
    },
    {
        question: "Which of the following is correct?",
        options: [
            "Arguments are defined in function definition",
            "Parameters are values passed during function call",
            "Parameters are placeholders and arguments are actual values",
            "Arguments and parameters are the same thing"
        ],
        answer: "Parameters are placeholders and arguments are actual values"
    },
    {
        question: "What is the value of a parameter if no argument is passed for it?",
        options: ["null", "0", "undefined", "empty string"],
        answer: "undefined"
    },
    {
        question: "Can default values be set for parameters?",
        options: ["Yes, using `parameter = value`", "No", "Only with arguments keyword", "Only in ES6"],
        answer: "Yes, using `parameter = value`"
    },
    {
        question: "Which is true about the `arguments` object?",
        options: [
            "It is available in all functions",
            "It is available only in arrow functions",
            "It is available only in strict mode",
            "It is used to define parameters"
        ],
        answer: "It is available in all functions"
    },
    {
        question: "What will `function test(a) { console.log(a); } test();` print?",
        options: ["0", "null", "undefined", "Error"],
        answer: "undefined"
    },
    {
        question: "Which of the following allows infinite number of arguments?",
        options: ["rest parameter `...args`", "default parameter", "global variables", "switch statement"],
        answer: "rest parameter `...args`"
    },
    {
        question: "Can arguments be used without defining parameters?",
        options: ["Yes, using `arguments` object", "No, parameters are required", "Only in arrow functions", "Only in ES6"],
        answer: "Yes, using `arguments` object"
    },
    {
        question: "What is the difference between parameters and arguments?",
        options: [
            "Parameters are defined in the function, arguments are passed when calling",
            "Arguments are defined in the function, parameters are passed when calling",
            "Both are the same",
            "Parameters store return values"
        ],
        answer: "Parameters are defined in the function, arguments are passed when calling"
    },
    {
        question: "What will `function sum(a, b) { return a + b; } sum(5);` return?",
        options: ["5", "undefined", "NaN", "Error"],
        answer: "NaN"
    },
    {
        question: "What does the rest parameter syntax `...args` do?",
        options: [
            "It collects all remaining arguments into an array",
            "It ignores extra arguments",
            "It duplicates arguments",
            "It defines default arguments"
        ],
        answer: "It collects all remaining arguments into an array"
    },
    {
        question: "Can you pass functions as arguments to another function?",
        options: ["Yes", "No", "Only in ES6", "Only with parameters"],
        answer: "Yes"
    }
]
