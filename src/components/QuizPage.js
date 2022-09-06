import '../QuizPage.css';

export default function QuizPage(){
    return (
        <>
        <main className='quiz-container'>
            <img className='quiz-img' src='images/blob.png' alt='img'/>
          <div className="quiz-info">
          <h2 className="question">Here's my question?</h2><br/><br />
            <button className='btn1 btn'>1 in the</button>
            <button className='btn2 btn'>2</button>
            <button className='btn3 btn'>3</button>
            <button className='btn4 btn'>4</button>
            <hr />
          </div>
            <button className='result-btn'>Check answer</button>
        </main>
        </>
    )
}