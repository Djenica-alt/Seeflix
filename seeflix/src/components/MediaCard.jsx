import "./mediaCard.css";
export default function MediaCard({title, cover, rating, type}){
    return( 
        <div className="mediaCard">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
            <p>{rating}</p>
            <p>{type}</p>
        </div>
    )
}