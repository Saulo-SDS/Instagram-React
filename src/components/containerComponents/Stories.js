import UserStorie from "./storiesComponents/UserStorie";

export default function Stories() {
    
    const storiesData = [
        { 
            name: "9gag", image: "./imagens/9gag.jpeg"
        },
        {
            name: "meowed", image: "./imagens/meowed.jpeg"
        },
        {
            name: "barked", image: "./imagens/barked.jpeg"
        },
        {
            name: "nathanwpyle...", image: "./imagens/nathanwpylestrangeplanet.jpeg"
        },
        {
            name: "wawawiwac...", image: "./imagens/wawawiwacomicsa.jpeg"
        },
        {
            name: "respondeai", image: "./imagens/responde-ai.jpeg"
        },
        {
            name: "filomoderna", image: "./imagens/filomoderna.jpeg"
        },
        {
            name: "memeriagourmet", image: "./imagens/memeriagourmet.jpeg"
        }];

    return (
        <div class="stories">
            {storiesData.map((storieData) => <UserStorie name={storieData.name} image={storieData.image}/>)}
            <a href="#/"><ion-icon class="button-stories" name="chevron-forward-circle-sharp"></ion-icon></a>
        </div>
    );
}