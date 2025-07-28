export const FunctionExpression = [
    {
        question: "What is a function expression in JavaScript?",
        options: [
            "A function declared using the function keyword with a name",
            "A function stored in a variable",
            "A function without parameters",
            "A function that always returns a value"
        ],
        answer: "A function stored in a variable"
    },
    {
        question: "Which of the following is a function expression?",
        options: [
            "function greet() { return 'Hi'; }",
            "const greet = function() { return 'Hi'; }",
            "function greet(name) { return name; }",
            "None of the above"
        ],
        answer: "const greet = function() { return 'Hi'; }"
    },
    {
        question: "Can a function expression be anonymous?",
        options: ["Yes", "No", "Only in ES6", "Only if it returns a value"],
        answer: "Yes"
    },
    {
        question: "What will happen if you call a function expression before it is defined?",
        options: ["It will work", "It will throw an error", "It will return undefined", "It will return null"],
        answer: "It will throw an error"
    },
    {
        question: "Which of the following uses function expression correctly?",
        options: [
            "let add = function(a, b) { return a + b; }",
            "let add(a, b) = { return a + b; }",
            "function = add(a, b) { return a + b; }",
            "let add = function: a + b"
        ],
        answer: "let add = function(a, b) { return a + b; }"
    },
    {
        question: "Can function expressions be assigned as object properties?",
        options: ["Yes", "No", "Only in ES6", "Only if they return a value"],
        answer: "Yes"
    },
    {
        question: "What is the difference between function declaration and function expression?",
        options: [
            "Function expressions are hoisted",
            "Function declarations are hoisted but expressions are not",
            "They both behave the same",
            "Function expressions must be anonymous"
        ],
        answer: "Function declarations are hoisted but expressions are not"
    },
    {
        question: "Can a function expression be self-invoking (IIFE)?",
        options: ["Yes", "No", "Only in ES6", "Only inside objects"],
        answer: "Yes"
    },
    {
        question: "What is the output of `const greet = function(){ return 'Hello'; }; console.log(greet());`?",
        options: ["Hello", "undefined", "Error", "function"],
        answer: "Hello"
    },
    {
        question: "What does 'anonymous function' mean?",
        options: [
            "A function that has no return",
            "A function without a name",
            "A function with no parameters",
            "A function that is self-invoked"
        ],
        answer: "A function without a name"
    },
    {
        question: "Which of the following is NOT true about function expressions?",
        options: [
            "They can be assigned to variables",
            "They can be passed as arguments",
            "They can be hoisted",
            "They can be returned from functions"
        ],
        answer: "They can be hoisted"
    },
    {
        question: "Can function expressions be used as callbacks?",
        options: ["Yes", "No", "Only in ES5+", "Only in promises"],
        answer: "Yes"
    },
    {
        question: "Which of the following is an Immediately Invoked Function Expression (IIFE)?",
        options: [
            "function test(){}",
            "(function(){ console.log('Hi'); })();",
            "function() { console.log('Hi'); }",
            "let test = function(){}"
        ],
        answer: "(function(){ console.log('Hi'); })();"
    },
    {
        question: "What is the value of `typeof function(){};`?",
        options: ["object", "function", "undefined", "string"],
        answer: "function"
    },
    {
        question: "Can function expressions have names?",
        options: ["Yes", "No", "Only in ES6", "Only with arrow functions"],
        answer: "Yes"
    },
    {
        question: "What is the output? `const sum = function add(a,b){ return a+b }; console.log(add(2,3));`",
        options: ["5", "undefined", "Error", "null"],
        answer: "Error"
    },
    {
        question: "Why is a function expression useful?",
        options: [
            "It allows creating functions dynamically",
            "It can be passed around as data",
            "It supports callbacks",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which of the following is an arrow function expression?",
        options: [
            "function test() { return 1; }",
            "const test = () => 1;",
            "let test() => 1",
            "test = => 1"
        ],
        answer: "const test = () => 1;"
    },
    {
        question: "Can a function expression be used to define methods inside objects?",
        options: ["Yes", "No", "Only in ES6", "Only with arrow functions"],
        answer: "Yes"
    },
    {
        question: "What will be the output of `let fn = function(){}; console.log(fn.name);`?",
        options: ["anonymous", "function", "fn", "undefined"],
        answer: "fn"
    }
]
