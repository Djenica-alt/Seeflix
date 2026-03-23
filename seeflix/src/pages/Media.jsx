import MediaCard from "../components/MediaCard"
import mediaData from "../data/mediaData"
import "./media.css"
export default function Media() {
    return(
        <section className="media">
            <h1>Media Page</h1>

            <div className="mediaGrid">
                {mediaData.map((item, index)=> (
                    <MediaCard key={index}{...item}/>
                ))}
            </div>
      
        </section>
    )
}