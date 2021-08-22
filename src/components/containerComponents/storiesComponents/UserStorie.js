export default function UserStorie(props) {
    return (
        <div class="user-stories">
            <div class="post-stories">
                <a href="#"><img src={props.image} class="image-stories"/></a>
                <a href="#"><img src="./imagens/stories_background.jpg" class="background-stories"/></a>
                </div>
                <div class="name">
                <a href="#"><p>{props.name}</p></a>
            </div>
        </div>
    );
}