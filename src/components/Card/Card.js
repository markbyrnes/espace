import styles from "./Card.css"

export default function Card({img, title, rating, price, stock, location}){
    return(
        <div className="card">
            <img src={`./${img}`} className="card__img"/>
            <div className="card__stats">
                <p className="card__title">{title}</p>
                <p>{rating}</p>
                <p>{price}</p>
                <span className="card__stock-location">
                    <p>{stock}</p>
                    <p>{location}</p>
                </span>
            </div>
        </div>
    )
}