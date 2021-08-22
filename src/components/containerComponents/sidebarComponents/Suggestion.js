export default function Suggestion(props) {
    
    return (
        <div class="users">
          <div class="user-follow">
            <a href="#"><img src={props.image}/></a>

            <div class="description">
              <a href="#"><p class="name-user">{props.name}</p></a>
              <p class="title-follow">{props.description}</p>
            </div>

          </div>
          <a href="#" class="follow">Seguir</a>
        </div>
    );
}