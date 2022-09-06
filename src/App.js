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

/*"react/cjs/react.production.min"

 const mapArray = allQuiz.map(quiz => <HomePage startQuiz={startQuiz}/>)

    useEffect(() => {
        async function startQuiz() {
            const res = await fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
            const data = await res.json()
            setAllQuiz(data.data.memes)
            
        }
        startQuiz()
        
        return () => {
            
        }
    }, []) */