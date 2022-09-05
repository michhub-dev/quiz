
import '../HomePage.css';

export default function HomePage(){
    return(
        <>
        <main className="home-container">
                <img src="images/blob.png" alt="img" className="background-img" />
                <img src="" alt="" className="" />
                <div className="description">
                        <h1 className="title">Quizzical</h1>
                        <p className="home-text">Can you answer these questions correctly? Let's find out</p>
                        <button className="home-btn" >Start quiz</button>
                </div>
        </main>
        </>
    )
}