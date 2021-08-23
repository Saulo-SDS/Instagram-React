import LogoDesktop from "./topComponents/LogoDesktop";
import LinksTop from "./topComponents/LinksTop";
import TopMobile from "./topComponents/TopMobile";

export default function Top() {
    return (
        <header class="top-bar">
            <div class="top">
                <LogoDesktop/>
                <BoxSearch/>
                <LinksTop/>
            </div>
            <TopMobile/>
        </header>
    );
}

function BoxSearch() {

    return (
        <div class="pesquisa">
            <input class="search-box" type="search" placeholder="Pesquisar"/>
        </div>      
    );
}