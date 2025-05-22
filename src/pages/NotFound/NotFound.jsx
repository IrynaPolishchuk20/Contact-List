import './NotFound.css'

export default function NotFound(){
    return(
        <div className="rain404-container">
            <div className="rain"></div>
            <div className="rain404-content">
                <h1>404 — Контакт не знайдено</h1>
                <p>Наче він загубився під дощем...</p>
                <button>Повернутись до контактів</button>
            </div>
        </div>
    )
}