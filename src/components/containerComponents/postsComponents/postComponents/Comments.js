export default function Comments(props) {

    return (
        <div class="comments-general">
            {props.comments.map((comments) => (
                <div class="comment">
                    <p class="name-user-comment"><strong>{comments.name}</strong></p>
                    <p class="comment-user">{comments.comment}</p>
                    <button type="button" class="comment-amei"><ion-icon name="heart"></ion-icon></button>
                </div>
            ))}
            <div class="box-comment">
                <input class="input-comment" type="text" placeholder="Adicione um comentário..."/>
                <button type="submit" class="button-publish">Publicar</button>
            </div>
        </div>
    );
}