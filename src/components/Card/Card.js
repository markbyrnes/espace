import styles from "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <img src="./logo192.png" className="card__img"/> {/*placeholder */}
            <div className="card__stats">
                <p className="card__title">Product Name</p>
                <p>Rating</p>
                <p>Price</p>
                <span className="card__stock-location">
                    <p>Stock</p>
                    <p>Location</p>
                </span>
            </div>
        </div>
    )
}