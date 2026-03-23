import "./mediaList.css";
import MediaCard from "./MediaCard";
export default function MediaList({title, items}){
    return(
        <section className="media-list">
            <h2>{title}</h2>
            <ul>
                {items.map((item) => (
                    <MediaCard key={item.id} title={item.title} 
                    cover={item.cover} rating={item.rating} 
                    />
                ))}
            </ul>
        </section>
    )
}

