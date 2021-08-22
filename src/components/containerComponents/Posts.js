import Post from "./postsComponents/Post";

export default function Posts() {

    const postsData = [
        {
            user: {name: "meowed", image: "./imagens/meowed.jpeg"},
            lastUser: {name: "respondeai", image: "./imagens/responde-ai.jpeg", likes: "101.523"},
            comments: [
                {name: "bad-vibes", comment: "A great Actress!!"},
                {name: "smallcutecats", comment: "Real beautiful woman"}
            ],
            content: {image: "", videoMp4: "./videos/wonder-woman.mp4", videoOgv: "./videos/wonder-woman.ogv", isVideo: true}
        },
        {
            user: {name: "memeriagourmet", image: "./imagens/memeriagourmet.jpeg"},
            lastUser: {name: "respondeai", image: "./imagens/responde-ai.jpeg", likes: "101.523"},
            comments: [
                {name: "bad-vibes", comment: "ohhhhhhhhhhhhhhhhhh very cuteeee"},
                {name: "smallcutecats", comment: "This is my friend miauuu"}
            ],
            content: {image: "./imagens/gato.jpeg", videoMp4: "", videoOgv: "", isVideo: false}
        },
        {
            user: {name: "filomoderna", image: "./imagens/filomoderna.jpeg"},
            lastUser: {name: "bad-vibes", image: "./imagens/bad-vibes.jpeg", likes: "835.523"},
            comments: [
                {name: "catanacomics", comment: "The best anime of the century!"},
                {name: "respondeai", comment: "Hey hey hey very interesting"}
            ],
            content: {image: "./imagens/attack.jpg", videoMp4: "", videoOgv: "", isVideo: false}
        },
        {
            user: {name: "meowed", image: "./imagens/meowed.jpeg"},
            lastUser: {name: "barked", image: "./imagens/barked.jpeg", likes: "999.523"},
            comments: [
                {name: "bad-vibes", comment: "hannnnn! the naughty grandma"},
                {name: "respondeai", comment: "kkkkkkkkkkkkkkkkkk"}
            ],
            content: {image: "./imagens/rainha.jpg", videoMp4: "", videoOgv: "", isVideo: false}
        },
        {
            user: {name: "barked", image: "./imagens/barked.jpeg"},
            lastUser: {name: "adorable_animals", image: "./imagens/adorableanimals.jpeg", likes: "99.159"},
            comments: [
                {name: "catanacomics", comment: "so cute"},
                {name: "respondeai", comment: "pretyyyy"}
            ],
            content: {image: "./imagens/dog.jpeg", videoMp4: "", videoOgv: "", isVideo: false}
        },
        {
            user: {name: "razoesparaacreditar", image: "./imagens/razoesparaacreditar.jpeg"},
            lastUser: {name: "adorableanimals", image: "./imagens/adorableanimals.jpeg", likes: "101.523"},
            comments: [
                {name: "barked", comment: "kkkkkkkkkkkkkkkkkkkkkkkkk"},
                {name: "bad-vibes", comment: "where's the meme bro then are you?"}
            ],
            content: {image: "", videoMp4: "videos/tue.mp4", videoOgv: "videos/tue.ogv", isVideo: true}
        },
        {
            user: {name: "9gag", image: "./imagens/9gag.jpeg"},
            lastUser: {name: "respondeai", image: "./imagens/responde-ai.jpeg", likes: "1.165.523"},
            comments: [
                {name: "catanacomics", comment: "Death is coming..."},
                {name: "respondeai", comment: "Nightmare"}
            ],
            content: {image: "./imagens/ceifador.jpg", videoMp4: "", videoOgv: "", isVideo: false}
        },
        {
            user: {name: "smallcutecats", image: "./imagens/smallcutecats.jpeg"},
            lastUser: {name: "memeriagourmet", image: "./imagens/memeriagourmet.jpeg", likes: "101.593"},
            comments: [
                {name: "nathanwpylestrangeplanet", comment: "woww looking forward to these movies"},
                {name: "respondeai", comment: "Matrix!!!"}
            ],
            content: {image: "", videoMp4: "videos/films.mp4", videoOgv: "videos/films.ogv", isVideo: true}
        },
        {
            user: {name: "nathanwpylestrangeplanet", image: "./imagens/nathanwpylestrangeplanet.jpeg"},
            lastUser: {name: "chibirdart", image: "./imagens/chibirdart.jpeg", likes: "2.981.500"},
            comments: [
                {name: "catanacomics", comment: "#teamMario"},
                {name: "memeriagourmet", comment: "hehehe always #teamSonic"}
            ],
            content: {image: "", videoMp4: "videos/marioxsonic.mp4", videoOgv: "videos/marioxsonic.ogv", isVideo: true}
        }];



    return (
        <div class="posts">
          {postsData.map((postsData) => (<Post data={postsData}/>))}
        </div>
    );
}