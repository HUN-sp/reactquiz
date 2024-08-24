// data.js
export const mathQuiz = [
  {
    question: "What is 2 + 2?",
    type: "multiple",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "Is 7 a prime number?",
    type: "trueFalse",
    correctAnswer: "true"
  },
  {
    question: "What is the square root of 64?",
    type: "multiple",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8"
  },
  {
    question: "Which of the following are even numbers?",
    type: "multipleCorrect",
    options: ["2", "3", "4", "6", "7", "8"],
    correctAnswers: ["2", "4", "6", "8"]
  },
  {
    question: "What is 3 * 5?",
    type: "multiple",
    options: ["10", "15", "20", "25"],
    correctAnswer: "15"
  },
  {
    question: "Is π (pi) an irrational number?",
    type: "trueFalse",
    correctAnswer: "true"
  },
  {
    question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
    type: "multiple",
    options: ["24", "32", "64", "128"],
    correctAnswer: "32"
  }
];

export const javascriptQuiz = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    type: "multipleCorrect",
    options: ["var", "let", "const", "variable"],
    correctAnswers: ["var", "let", "const"]
  },
  {
    question: "Is JavaScript a statically typed language?",
    type: "trueFalse",
    correctAnswer: "false"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    type: "multiple",
    options: ["number", "boolean", "string", "float"],
    correctAnswer: "float"
  },
  {
    question: "Which methods can be used to add elements to an array?",
    type: "multipleCorrect",
    options: ["push()", "unshift()", "add()", "append()"],
    correctAnswers: ["push()", "unshift()"]
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    type: "multiple",
    options: ["Assignment", "Comparison (value only)", "Comparison (value and type)", "Logical AND"],
    correctAnswer: "Comparison (value and type)"
  },
  {
    question: "Is 'undefined' a primitive data type in JavaScript?",
    type: "trueFalse",
    correctAnswer: "true"
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    type: "multiple",
    options: ["func", "def", "function", "method"],
    correctAnswer: "function"
  }
];

export const dsaQuiz = [
  {
    question: "Is a linked list a linear data structure?",
    type: "trueFalse",
    correctAnswer: "true"
  },
  {
    question: "Which of the following are examples of linear data structures?",
    type: "multipleCorrect",
    options: ["Array", "Queue", "Tree", "Stack", "Graph"],
    correctAnswers: ["Array", "Queue", "Stack"]
  },
  {
    question: "What is the time complexity of binary search?",
    type: "multiple",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(log n)"
  },
  {
    question: "Is a binary search tree a type of balanced tree?",
    type: "trueFalse",
    correctAnswer: "false"
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out) principle?",
    type: "multiple",
    options: ["Queue", "Stack", "Linked List", "Array"],
    correctAnswer: "Stack"
  },
  {
    question: "Which of the following are valid graph traversal algorithms?",
    type: "multipleCorrect",
    options: ["Depth-First Search", "Breadth-First Search", "In-order Traversal", "Quick Sort"],
    correctAnswers: ["Depth-First Search", "Breadth-First Search"]
  },
  {
    question: "What is the worst-case time complexity of quicksort?",
    type: "multiple",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
    correctAnswer: "O(n^2)"
  }
];