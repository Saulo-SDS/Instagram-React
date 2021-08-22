export default function Content(props) {
    
    if(props.content.isVideo){
        return (
            <div>
                <video muted width="100%" height="100%" controls autoPlay>
                <source src={props.content.videoMp4} type="video/mp4"/>
                <source src={props.content.videoOgv} type="video/ogv"/>
                </video>
            </div>
        );
    }

    return (
        <div>
            <div>
                <img src={props.content.image} class="image-post"/>
            </div>
        </div>

    );
}