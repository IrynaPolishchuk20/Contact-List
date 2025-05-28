import './NotFound.scss'
import astronaut from '../../assets/astronaut.png'
import { Link } from 'react-router'

export default function NotFound(){
    return(
        <div className="notfound">
            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <h1 className="notfound-title">404</h1>
            <p className="notfound-subtitle">Ой! Сторінку не знайдено 🌌</p>
            <img src={astronaut} alt="Астронавт" className="notfound-image" />
            <Link to="/" className="notfound-button">🚀 Назад на головну</Link>
        </div>
    )
}