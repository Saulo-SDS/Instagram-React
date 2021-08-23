export default function FooterPost(props) {

    return (
        <div class="footer-posts">
            <a href="#/"  class="icon-amei"><ion-icon name="heart-outline"></ion-icon></a>
            <a href="#/"  class="icon-enviar"><ion-icon name="paper-plane-outline"></ion-icon></a>
            <a href="#/"  class="icon-chat"><ion-icon name="chatbubble-outline"></ion-icon></a>
            <a href="#/"  class="icon-marcacao"><ion-icon name="bookmark-outline"></ion-icon></a>
            <a href="#/"  class="last-profile-like"><img src={props.lastUser.image} alt={props.lastUser.image}/></a>
            <p class="total-likes">Curtido por <strong>{props.lastUser.name}</strong> e <strong>{props.lastUser.likes} pessoas</strong></p>
        </div>
    );
}
