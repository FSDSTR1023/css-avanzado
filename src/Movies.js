import './index.css';
export default function Movies() {
const moviesObject = {
    movie1: {
      title: "Antebellum",
      year: 2020,
      cast: [
        "Janelle Monáe",
        "Eric Lange",
        "Jena Malone",
        "Jack Huston",
        "Kiersey Clemons",
        "Gabourey Sidibe",
      ],
      genres: ["Thriller"],
      href: "Antebellum_(film)",
      extract:
        "Antebellum is a 2020 American thriller film written and directed by Gerard Bush and Christopher Renz in their feature directorial debuts. The film stars Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons, and Gabourey Sidibe, and follows a 21st century African-American woman who wakes to find herself mysteriously in a Southern slave plantation from which she must escape.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Antebellum_poster.jpeg",
      thumbnail_width: 259,
      thumbnail_height: 384,
    },
    movie2: {
      title: "The Nest",
      year: 2020,
      cast: [
        "Jude Law",
        "Carrie Coon",
        "Charlie Shotwell",
        "Oona Roche",
        "Adeel Akhtar",
      ],
      genres: ["Drama", "Romance"],
      href: "The_Nest_(2020_film)",
      extract:
        "The Nest is a 2020 romantic drama film written, directed, and produced by Sean Durkin. The film stars stars Jude Law, Carrie Coon, Charlie Shotwell, Oona Roche, and Adeel Akhtar.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Nest_poster.jpeg",
      thumbnail_width: 259,
      thumbnail_height: 384,
    },
    movie3: {
      title: "Blackbird",
      year: 2020,
      cast: [
        "Susan Sarandon",
        "Kate Winslet",
        "Mia Wasikowska",
        "Lindsay Duncan",
        "Rainn Wilson",
        "Bex Taylor-Klaus",
        "Sam Neill",
      ],
      genres: ["Drama"],
      href: "Blackbird_(2019_film)",
      extract:
        "Blackbird is a 2019 American drama film directed by Roger Michell and written by Christian Torpe. It is a remake of the 2014 Danish film Silent Heart, also written by Torpe. It stars Susan Sarandon, Kate Winslet, Mia Wasikowska, Lindsay Duncan, Rainn Wilson, Bex Taylor-Klaus, and Sam Neill.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/4/4d/Blackbird_poster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 384,
    },
    movie4: {
      title: "Lost Girls & Love Hotels",
      year: 2020,
      cast: ["Alexandra Daddario", "Takehiro Hira", "Carice van Houten"],
      genres: ["Drama", "Erotic", "Thriller"],
      href: "Lost_Girls_%26_Love_Hotels",
      extract:
        "Lost Girls & Love Hotels is a 2020 American erotic thriller drama film directed by William Olsson from a screenplay by Catherine Hanrahan, based on Hanrahan's 2006 novel Lost Girls and Love Hotels. The film stars Alexandra Daddario as an American English teacher in Tokyo, who loses herself to the city's nightlife and begins an affair with a member of the Yakuza gangs. It was released through video on demand on September 18, 2020, by Astrakan Film AB.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Lost_Girls_%26_Love_Hotels_film_poster.png",
      thumbnail_width: 220,
      thumbnail_height: 322,
    },
    movie5: {
      title: "Killian & the Comeback Kids",
      year: 2020,
      cast: [
        "Taylor A. Purdee",
        "John Donchak",
        "Nathan Purdee",
        "Kassie DePaiva",
      ],
      genres: ["Musical"],
      href: "Killian_%26_the_Comeback_Kids",
      extract:
        "Killian & the Comeback Kids is a 2020 American folk-rock musical film written and directed by Taylor A. Purdee. The film stars Purdee, John Donchak, Nathan Purdee, and Kassie DePaiva along with an ensemble cast that features Maddi Jane and Lee Grant. Killian & the Comeback Kids follows a mixed-race musician who finds himself back in his struggling rural hometown after graduating from an expensive university. The film's screenplay and original music have been preserved by The Academy of Motion Pictures Arts and Sciences' permanent archive.",
    }
};

const moviesArray = [
    {
      title: "Antebellum",
      year: 2020,
      cast: [
        "Janelle Monáe",
        "Eric Lange",
        "Jena Malone",
        "Jack Huston",
        "Kiersey Clemons",
        "Gabourey Sidibe",
      ],
      genres: ["Thriller"],
      href: "Antebellum_(film)",
      extract:
        "Antebellum is a 2020 American thriller film written and directed by Gerard Bush and Christopher Renz in their feature directorial debuts. The film stars Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons, and Gabourey Sidibe, and follows a 21st century African-American woman who wakes to find herself mysteriously in a Southern slave plantation from which she must escape.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Antebellum_poster.jpeg",
      thumbnail_width: 259,
      thumbnail_height: 384,
    },
    {
      title: "The Nest",
      year: 2021,
      cast: [
        "Jude Law",
        "Carrie Coon",
        "Charlie Shotwell",
        "Oona Roche",
        "Adeel Akhtar",
      ],
      genres: ["Drama", "Romance"],
      href: "The_Nest_(2020_film)",
      extract:
        "The Nest is a 2020 romantic drama film written, directed, and produced by Sean Durkin. The film stars stars Jude Law, Carrie Coon, Charlie Shotwell, Oona Roche, and Adeel Akhtar.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Nest_poster.jpeg",
      thumbnail_width: 259,
      thumbnail_height: 384,
    },
    {
      title: "Blackbird",
      year: 2020,
      cast: [
        "Susan Sarandon",
        "Kate Winslet",
        "Mia Wasikowska",
        "Lindsay Duncan",
        "Rainn Wilson",
        "Bex Taylor-Klaus",
        "Sam Neill",
      ],
      genres: ["Drama"],
      href: "Blackbird_(2019_film)",
      extract:
        "Blackbird is a 2019 American drama film directed by Roger Michell and written by Christian Torpe. It is a remake of the 2014 Danish film Silent Heart, also written by Torpe. It stars Susan Sarandon, Kate Winslet, Mia Wasikowska, Lindsay Duncan, Rainn Wilson, Bex Taylor-Klaus, and Sam Neill.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/4/4d/Blackbird_poster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 384,
    },
    {
      title: "Lost Girls & Love Hotels",
      year: 2020,
      cast: ["Alexandra Daddario", "Takehiro Hira", "Carice van Houten"],
      genres: ["Drama", "Erotic", "Thriller"],
      href: "Lost_Girls_%26_Love_Hotels",
      extract:
        "Lost Girls & Love Hotels is a 2020 American erotic thriller drama film directed by William Olsson from a screenplay by Catherine Hanrahan, based on Hanrahan's 2006 novel Lost Girls and Love Hotels. The film stars Alexandra Daddario as an American English teacher in Tokyo, who loses herself to the city's nightlife and begins an affair with a member of the Yakuza gangs. It was released through video on demand on September 18, 2020, by Astrakan Film AB.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Lost_Girls_%26_Love_Hotels_film_poster.png",
      thumbnail_width: 220,
      thumbnail_height: 322,
    },
    {
      title: "Killian & the Comeback Kids",
      year: 2023,
      cast: [
        "Taylor A. Purdee",
        "John Donchak",
        "Nathan Purdee",
        "Kassie DePaiva",
      ],
      genres: ["Musical"],
      href: "Killian_%26_the_Comeback_Kids",
      extract:
        "Killian & the Comeback Kids is a 2020 American folk-rock musical film written and directed by Taylor A. Purdee. The film stars Purdee, John Donchak, Nathan Purdee, and Kassie DePaiva along with an ensemble cast that features Maddi Jane and Lee Grant. Killian & the Comeback Kids follows a mixed-race musician who finds himself back in his struggling rural hometown after graduating from an expensive university. The film's screenplay and original music have been preserved by The Academy of Motion Pictures Arts and Sciences' permanent archive.",
    }
];

const movie1 = [{
    "title": "The Grudge",
    "year": 2020,
    "cast": [
    "Andrea Riseborough",
    "Demián Bichir",
    "John Cho",
    "Betty Gilpin",
    "Lin Shaye",
    "Jacki Weaver"
    ],
    "genres": [
    "Horror",
    "Supernatural"
    ],
    "href": "The_Grudge_(2020_film)",
    "extract": "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
    "thumbnail_width": 220,
    "thumbnail_height": 326
}]
  // Push: añadir elemento al final
  //moviesArray.push(movie1);

  // Pop: eliminar último elemento
  //moviesArray.pop();

  // Shift: elimina primer elemento
  //moviesArray.shift();
  
  // Unshift: añade elementos al principio
  //moviesArray.unshift(movie1);

//   const newMovies = [];
//   Object.values(moviesObject).forEach(m => newMovies.push(m))
//   console.log("new array", newMovies);

    // splice(): cambiar, eliminar o reemplazar uno o varios elemento del array
    // moviesArray.splice(2);

    // console.log("all movies", moviesArray);

    // const arrayThird = [...moviesArray, movie1[0]]
    // console.log("arrayThird", arrayThird);

    // console.log("concat", moviesArray.concat(movie1));

    const frutas = ["pera", "manzana", "plátano"];

    const listaFrutas = frutas.join(", ");
    // console.log("const lista frutas", listaFrutas);

    // console.log(typeof listaFrutas); 
    const numero1 = 1;
    const numero1String = "1";
    // ===

    // Find: devuelve el 1r resultado que coincide con la condición
    console.log("find", moviesArray.find(movie => movie.year === 2021));

    // Filter: devuelve una array
    console.log("filter", moviesArray.filter(movie => movie.year === 2020));

    // Includes:
    console.log(moviesArray.includes(movies => movies.year === 2023))
    console.log(frutas.includes("pera"))

    moviesArray.sort((a, b) => a.year - b.year);
    console.log("sort", moviesArray);
    // a - b  === ascendente
    // b - a === descendente

  return (
    <div className='card-wrapper'>
        {Object.entries(moviesObject).map(([key, value]) => {
            // console.log("movie", key, value)
            return (
                <div key={key} className="card">
                    <h2>{value.title}</h2>
                    <p>{value.year}</p>
                </div>
            )
        })}
    </div>
  );
}

// moviesArray.map((m, i) => {
    // console.log("movie", i, m)
    // return (
    //     <div key={i} className="card">
    //         <h2>{m.title}</h2>
    //         <p>{m.year}</p>
    //     </div>
    // )
// })}