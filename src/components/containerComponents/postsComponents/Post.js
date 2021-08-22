import TopPost from "./postComponents/TopPost"
import Content from "./postComponents/Content"
import FooterPost from "./postComponents/FooterPost"
import Comments from "./postComponents/Comments"

export default function Post(props) {
    return (
        <div class="post">
            <TopPost user={props.data.user}/>
            <Content content={props.data.content}/>
            <FooterPost lastUser={props.data.lastUser}/>
            <Comments comments={props.data.comments}/>
        </div>
    );
}


