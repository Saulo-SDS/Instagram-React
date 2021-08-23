import Suggestion from "./suggesitonsComponents/Suggestion";

export default function Suggestions() {
    const suggestionsData = [
            {
                name: "bad.vibes.memes", image: "./imagens/bad-vibes.jpeg", description: "Segue você"
            },
            {
                name: "chibirdart", image: "./imagens/chibirdart.jpeg", description: "Segue você"
            },
            {
                name: "razoesparaacreditar", image: "./imagens/razoesparaacreditar.jpeg", description: "Novo no instagram"
            },
            {
                name: "adorable_animals", image: "./imagens/adorableanimals.jpeg", description: "Segue você"
            },
            {
                name: "smallcutecats", image: "./imagens/smallcutecats.jpeg", description: "Segue você"
            }];

    return (
        
        <div class="suggestions">
            <Menu/>
            {suggestionsData.map((data) => (<Suggestion name={data.name} image={data.image} description={data.description}/>))}
        </div>
    );
}

function Menu() {
    
    return (
        <div class="menu">
          <div>
              <p class="suggestions-for-you">Sugestões para você</p>
          </div>
          <div>
            <a href="#/"><p class="see-all">Ver tudo</p></a>
          </div>
        </div>
    );
}