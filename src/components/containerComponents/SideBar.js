import Suggestions from "./sidebarComponents/Suggestions";

export default function SideBar() {
    return (
        <div class="side-bar">
            <Emphasis/>
            <Suggestions/>
            <AboutCompany/>
        </div>
    );
}

function Emphasis() {

    return (
        <div class="emphasis">
            <a href="#"><img src="./imagens/catanacomics.jpeg"/></a>
            <div>
                <a href="#">  <p class="title-emphasis">catanacomics</p></a>
                <a href="#">  <p class="subtitle-emphasis">Catana</p></a>
            </div>
        </div>
    );
}

function AboutCompany() {

    return (
        <div class="about-the-company">
            <div class="links-about-the-company">
                <a href="#">Sobre</a> •
                <a href="#">Ajuda</a> •
                <a href="#">Imprensa</a> •
                <a href="#">API</a> •
                <a href="#">Carreiras</a> •
                <a href="#">Privacidade</a> •
                <a href="#">Termos</a> •
                <a href="#">Localizações</a> •
                <a href="#">Contas mais relevantes</a> •
                <a href="#">Hastags</a> •
                <a href="#">Idioma</a>
            </div>
            <p class="rights">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}