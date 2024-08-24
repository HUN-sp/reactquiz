// import React, { useState, useEffect } from 'react'
// import './Quiz.css'
// import { data } from '../../Assets/data'
// import { useTheme } from '../../ThemeContext'
// import { PieChart } from 'react-minimal-pie-chart'

// const Quiz = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [lock, setLock] = useState(false);
//     const [score, setScore] = useState(0);
//     const [showResult, setShowResult] = useState(false);

//     const { darkMode, toggleDarkMode } = useTheme();

//     const [progress, setProgress] = useState(0);

//     const question = data[currentQuestion];

//     const checkAns = (selectedOption) => {
//         if (lock === false) {
//             setSelectedAnswer(selectedOption);
//             setLock(true);
//             if (selectedOption === question.ans) {
//                 setScore(score + 1);
//             }
//         }
//     }

//     useEffect(() => {
//         // Update progress whenever currentQuestion changes
//         const newProgress = ((currentQuestion + 1) / data.length) * 100;
//         setProgress(newProgress);
//     }, [currentQuestion]);

//     const ProgressBar = () => {
//         return (
//             <div className="progress-bar-container">
//                 <div 
//                     className="progress-bar-fill" 
//                     style={{width: `${progress}%`}}
//                 ></div>
//             </div>
//         )
//     }

    

//     const getClassName = (index) => {
//         if (selectedAnswer === null) return "";
//         if (index + 1 === question.ans) return "correct";
//         if (index + 1 === selectedAnswer) return "wrong";
//         return "";
//     }

//     const nextQuestion = () => {
//         if (currentQuestion < data.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//             setSelectedAnswer(null);
//             setLock(false);
//         } else {
//             setShowResult(true);
//         }
//     }

//     const resetQuiz = () => {
//         setCurrentQuestion(0);
//         setSelectedAnswer(null);
//         setLock(false);
//         setScore(0);
//         setShowResult(false);
//         setProgress(0);
//     }

//     if (showResult) {
//         const incorrect = data.length - score;
//         return (
//             <div className={`container result ${darkMode ? 'dark-mode' : ''}`}>
//                 <h2>Quiz Completed!</h2>
//                 <div className="result-summary">
//                     <PieChart
//                         data={[
//                             { title: 'Correct', value: score, color: '#4CAF50' },
//                             { title: 'Incorrect', value: incorrect, color: '#f44336' },
//                         ]}
//                         style={{ height: '200px' }}
//                         label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
//                         labelStyle={{
//                             fontSize: '5px',
//                             fontFamily: 'sans-serif',
//                             fill: darkMode ? '#fff' : '#000',
//                         }}
//                     />
//                 </div>
//                 <p>Your score: {score} out of {data.length}</p>
//                 <button onClick={resetQuiz}>Retry Quiz</button>
//                 <button onClick={toggleDarkMode} className="theme-toggle">
//                     {darkMode ? '☀️' : '🌙'}
//                 </button>
//             </div>
//         )
//     }

//     return (
//         <div className={`container ${darkMode ? 'dark-mode' : ''}`}> 
//             <h1>Quiz App</h1>
//             <button onClick={toggleDarkMode} className="theme-toggle">
//                 {darkMode ? '☀️' : '🌙'}
//             </button>
//             <ProgressBar />
//             <hr />
//             <h2>{currentQuestion + 1}. {question.question}</h2>
            
//             <ul>
//                 {['option1', 'option2', 'option3', 'option4'].map((optionKey, index) => (
//                     <li 
//                         key={index} 
//                         onClick={() => checkAns(index + 1)}
//                         className={getClassName(index)}
//                     >
//                         {question[optionKey]}
//                     </li>
//                 ))}
//             </ul>

//             <button onClick={nextQuestion} disabled={!lock}>
//                 {currentQuestion === data.length - 1 ? "Finish" : "Next"}
//             </button>
//             <div className="index">{currentQuestion + 1} of {data.length}</div>
//         </div>
//     )
// }

// export default Quiz

// Quiz.js
import React, { useState } from 'react'
import './Quiz.css'
import { mathQuiz, javascriptQuiz, dsaQuiz } from '../../Assets/data'
import { useTheme } from '../../ThemeContext'
import { PieChart } from 'react-minimal-pie-chart'

const Quiz = () => {
    const [quizType, setQuizType] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const { darkMode, toggleDarkMode } = useTheme();

    const getQuizData = () => {
        switch(quizType) {
            case 'math': return mathQuiz;
            case 'javascript': return javascriptQuiz;
            case 'dsa': return dsaQuiz;
            default: return null;
        }
    }

    const quizData = getQuizData();
    const question = quizData ? quizData[currentQuestion] : null;

    const handleAnswerSelect = (answer) => {
        if (question.type === 'multiple') {
            setSelectedAnswers([answer]);
        } else if (question.type === 'multipleCorrect') {
            setSelectedAnswers(prev => 
                prev.includes(answer) ? prev.filter(a => a !== answer) : [...prev, answer]
            );
        } else if (question.type === 'trueFalse') {
            setSelectedAnswers([answer]);
        }
    }

    const checkAnswer = () => {
        if (question.type === 'multiple' || question.type === 'trueFalse') {
            if (selectedAnswers[0] === question.correctAnswer) {
                setScore(score + 1);
            }
        } else if (question.type === 'multipleCorrect') {
            if (JSON.stringify(selectedAnswers.sort()) === JSON.stringify(question.correctAnswers.sort())) {
                setScore(score + 1);
            }
        }

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswers([]);
        } else {
            setShowResult(true);
        }
    }

    const resetQuiz = () => {
        setQuizType(null);
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setScore(0);
        setShowResult(false);
    }

    if (!quizType) {
        return (
            <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
                <h1>Quiz App</h1>
                <h2>Select a Quiz</h2>
                <button onClick={() => setQuizType('math')}>Math Quiz</button>
                <button onClick={() => setQuizType('javascript')}>JavaScript Quiz</button>
                <button onClick={() => setQuizType('dsa')}>DSA Quiz</button>
                <button onClick={toggleDarkMode} className="theme-toggle">
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        )
    }

    if (showResult) {
        return (
            <div className={`container result ${darkMode ? 'dark-mode' : ''}`}>
                <h2>Quiz Completed!</h2>
                <div className="result-summary">
                    <PieChart
                        data={[
                            { title: 'Correct', value: score, color: '#4CAF50' },
                            { title: 'Incorrect', value: quizData.length - score, color: '#f44336' },
                        ]}
                        style={{ height: '200px' }}
                        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                        labelStyle={{
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                            fill: darkMode ? '#fff' : '#000',
                        }}
                    />
                </div>
                <p>Your score: {score} out of {quizData.length}</p>
                <button onClick={resetQuiz}>Try Another Quiz</button>
                <button onClick={toggleDarkMode} className="theme-toggle">
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        )
    }

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}> 
            <h1>Quiz App</h1>
            <h2>{currentQuestion + 1}. {question.question}</h2>
            
            {question.type === 'multiple' && (
                <ul>
                    {question.options.map((option, index) => (
                        <li key={index}>
                            <input 
                                type="radio" 
                                id={`option${index}`} 
                                name="answer" 
                                value={option}
                                checked={selectedAnswers.includes(option)}
                                onChange={() => handleAnswerSelect(option)}
                            />
                            <label htmlFor={`option${index}`}>{option}</label>
                        </li>
                    ))}
                </ul>
            )}

            {question.type === 'multipleCorrect' && (
                <ul>
                    {question.options.map((option, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox" 
                                id={`option${index}`} 
                                name="answer" 
                                value={option}
                                checked={selectedAnswers.includes(option)}
                                onChange={() => handleAnswerSelect(option)}
                            />
                            <label htmlFor={`option${index}`}>{option}</label>
                        </li>
                    ))}
                </ul>
            )}

            {question.type === 'trueFalse' && (
                <ul>
                    <li>
                        <input 
                            type="radio" 
                            id="true" 
                            name="answer" 
                            value="true"
                            checked={selectedAnswers.includes('true')}
                            onChange={() => handleAnswerSelect('true')}
                        />
                        <label htmlFor="true">True</label>
                    </li>
                    <li>
                        <input 
                            type="radio" 
                            id="false" 
                            name="answer" 
                            value="false"
                            checked={selectedAnswers.includes('false')}
                            onChange={() => handleAnswerSelect('false')}
                        />
                        <label htmlFor="false">False</label>
                    </li>
                </ul>
            )}

            <button onClick={checkAnswer} disabled={selectedAnswers.length === 0}>
                {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
            </button>
            <div className="progress">Question {currentQuestion + 1} of {quizData.length}</div>
            <button onClick={toggleDarkMode} className="theme-toggle">
                {darkMode ? '☀️' : '🌙'}
            </button>
        </div>
    )
}

export default Quiz