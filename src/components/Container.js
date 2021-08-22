import Posts from "./containerComponents/Posts";
import Stories from "./containerComponents/Stories";

export default function Container() {
    return (
        <div class="container">
            <div class="general">
                <Stories/>
                <Posts/>
            </div>
        </div>
    );
}