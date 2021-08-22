import TopPost from "./TopPost"
import Content from "./Content"
import FooterPost from "./FooterPost"
import Comments from "./Comments"

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


