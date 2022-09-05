import HomePage from "./components/HomePage.js";
import {useState, useEffect} from 'react';
import QuizPage from "./components/QuizPage.js";

export default function App(){
    const [allQuiz, setAllQuiz] = useState([])

    const mapArray = allQuiz.map(quiz => {
        return <QuizPage />
    })
    return(
        <main>
            <HomePage  />
        <QuizPage />
        </main>
    )
}

