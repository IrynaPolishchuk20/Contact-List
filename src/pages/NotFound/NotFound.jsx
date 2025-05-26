import './NotFound.css'
import astronaut from '../../assets/astronaut.png'
import { Link } from 'react-router'

export default function NotFound(){
    return(
        <div classNameName="notfound">
            <div classNameName="star star1"></div>
            <div classNameName="star star2"></div>
            <div classNameName="star star3"></div>
            <div classNameName="star star4"></div>
            <h1 classNameName="notfound-title">404</h1>
            <p classNameName="notfound-subtitle">Ой! Сторінку не знайдено 🌌</p>
            <img src={astronaut} alt="Астронавт" classNameName="notfound-image" />
            <Link to="/" classNameName="notfound-button">🚀 Назад на головну</Link>
        </div>
    )
}