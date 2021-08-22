import BottomBar from "./BottomBar";
import Posts from "./containerComponents/Posts";
import SideBar from "./containerComponents/SideBar";
import Stories from "./containerComponents/Stories";

export default function Container() {
    return (
        <div class="container">
            <div class="general">
                <Stories/>
                <Posts/>
            </div>
            <SideBar/>
            <BottomBar/>
        </div>
    );
}