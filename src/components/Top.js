import LogoDesktop from "./topComponents/LogoDesktop";
import LinksTop from "./topComponents/LinksTop";
import TopMobile from "./topComponents/TopMobile";

export default function Top() {
    return (
        <header class="top-bar">
            <div class="top">
                <LogoDesktop/>
                <div class="pesquisa">
                    <input class="search-box" type="search" placeholder="Pesquisar"/>
                </div>                
                <LinksTop/>
            </div>
            <TopMobile/>
        </header>
    );
}