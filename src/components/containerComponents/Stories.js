import UserStorie from "./storiesComponents/UserStorie";

export function Stories() {
    
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
            name: "nayhanwpyle...", image: "./imagens/nathanwpylestrangeplanet.jpeg"
        },
        {
            name: "wawawiwa...", image: "./imagens/wawawiwacomicsa.jpeg"
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
            {storiesData.map((storiesData) => <UserStorie name={storiesData.name} image={storiesData.image}/>)}
        </div>
    );
}