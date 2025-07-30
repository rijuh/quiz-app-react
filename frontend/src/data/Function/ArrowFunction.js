export const ArrowFunction = [
    {
        question: "What symbol is used to define an arrow function?",
        options: ["->", "=>", "::", "=>{}"],
        answer: "=>"
    },
    {
        question: "Which of the following is the correct arrow function syntax?",
        options: [
            "const add = (a, b) => a + b;",
            "const add = (a, b) : a + b;",
            "const add = -> (a, b) a + b;",
            "const add = (a, b) => { return a + b }"
        ],
        answer: "const add = (a, b) => a + b;"
    },
    {
        question: "What is returned by default if the arrow function has no braces `{}`?",
        options: ["Nothing", "The evaluated expression", "undefined", "null"],
        answer: "The evaluated expression"
    },
    {
        question: "Which statement about `this` in arrow functions is true?",
        options: [
            "`this` is dynamically bound",
            "`this` is lexically bound (inherits from parent scope)",
            "`this` refers to the global object always",
            "`this` is undefined"
        ],
        answer: "`this` is lexically bound (inherits from parent scope)"
    },
    {
        question: "Can an arrow function be used as a constructor?",
        options: ["Yes", "No", "Only with classes", "Only in ES5"],
        answer: "No"
    },
    {
        question: "What will `const fn = () => 5; console.log(fn());` print?",
        options: ["undefined", "5", "fn", "Error"],
        answer: "5"
    },
    {
        question: "Which is the shortest valid arrow function?",
        options: ["() => 1", "() : 1", "=> 1", "() -> 1"],
        answer: "() => 1"
    },
    {
        question: "What happens if an arrow function body has curly braces `{}`?",
        options: [
            "It automatically returns the value",
            "You must use `return` explicitly",
            "It causes an error",
            "It runs as a generator"
        ],
        answer: "You must use `return` explicitly"
    },
    {
        question: "Which of the following is NOT a difference between arrow functions and regular functions?",
        options: [
            "Arrow functions can't be constructors",
            "Arrow functions inherit `this` from the parent scope",
            "Arrow functions don't have their own arguments object",
            "Arrow functions can't be used in callbacks"
        ],
        answer: "Arrow functions can't be used in callbacks"
    },
    {
        question: "Which of these arrow functions will return an object?",
        options: [
            "() => {name: 'JS'}",
            "() => ({name: 'JS'})",
            "() => return {name: 'JS'}",
            "() => [name: 'JS']"
        ],
        answer: "() => ({name: 'JS'})"
    },
    {
        question: "Can you omit parentheses if there is a single parameter?",
        options: ["Yes", "No", "Only with default values", "Only with strict mode"],
        answer: "Yes"
    },
    {
        question: "Which arrow function is correct for squaring a number?",
        options: [
            "const square = x => x * x;",
            "const square = (x) -> x * x;",
            "const square = (x) => {x * x}",
            "const square = x : x * x"
        ],
        answer: "const square = x => x * x;"
    },
    {
        question: "Do arrow functions have their own `arguments` object?",
        options: ["Yes", "No", "Only with rest parameters", "Only with default parameters"],
        answer: "No"
    },
    {
        question: "What will happen if you use `new` with an arrow function?",
        options: ["It will work", "It throws an error", "It returns undefined", "It binds `this`"],
        answer: "It throws an error"
    },
    {
        question: "Which of the following is true about arrow functions?",
        options: [
            "They have a prototype property",
            "They cannot use `call` or `apply` to set `this`",
            "They must always use braces",
            "They are slower than normal functions"
        ],
        answer: "They cannot use `call` or `apply` to set `this`"
    },
    {
        question: "Can arrow functions be asynchronous?",
        options: ["Yes, using async keyword", "No", "Only with promises", "Only in ES5"],
        answer: "Yes, using async keyword"
    },
    {
        question: "Which of the following will log 10?",
        options: [
            "const fn = () => { return 10 }; console.log(fn());",
            "const fn = () => 10; console.log(fn());",
            "const fn = _ => 10; console.log(fn());",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "How do arrow functions handle the `super` keyword?",
        options: [
            "They have their own `super`",
            "They inherit `super` from parent class",
            "They can't use `super`",
            "`super` is always undefined"
        ],
        answer: "They inherit `super` from parent class"
    },
    {
        question: "Which is the correct way to use arrow function with default parameters?",
        options: [
            "const greet = (name = 'Guest') => `Hello ${name}`;",
            "const greet = name =>= 'Guest' `Hello ${name}`;",
            "const greet = (name : 'Guest') => `Hello ${name}`;",
            "const greet = name = 'Guest' => `Hello ${name}`;"
        ],
        answer: "const greet = (name = 'Guest') => `Hello ${name}`;"
    },
    {
        question: "Which is NOT true about arrow functions?",
        options: [
            "They are always anonymous",
            "They cannot be used as generators",
            "They do not have their own `this`",
            "They are hoisted like function declarations"
        ],
        answer: "They are hoisted like function declarations"
    }
]
