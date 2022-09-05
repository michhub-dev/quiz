import HomePage from "./components/HomePage.js"

export default function App(){
    return(
        <HomePage  />
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