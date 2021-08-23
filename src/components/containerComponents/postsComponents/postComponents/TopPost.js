export default function TopPost(props) {
    
    return (
        <div class="top-Publication">
            <a href="#/" class="image-profile-publisher"><img src={props.user.image} class="image-profile" alt={props.user.image}/></a>
            <a href="#/" class="name-profile-publisher"><p class="name-profile">{props.user.name}</p></a>
            <a href="#/" class="icon-mais-informacoes"><ion-icon name="ellipsis-horizontal" class="icon-mais"></ion-icon></a>
        </div>
    );
}
