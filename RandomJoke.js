let Array_of_jokes = [
    `Why don’t they play poker in the jungle? Too many cheetahs`,
    `What did the frustrated cat say? Are you kitten me right meow`,
    `What kind of tea is hard to swallow? Reality`,
    `What did the Buddhist say to the hot dog vendor? Make me one with everything`,
    `How did the hamburger know he needed new pants? His buns were showing`,
    `What do you call two monkeys that share an Amazon account? Prime mates`,
    `What do you call a pile of cats? A meow-tain`,
    `If you’re American when you go into a bathroom and when you come out, what are you while you’re inside? European`,
    `What’s the leading cause of dry skin? Towels`,
    `When does Snoop Dogg use an umbrella? For drizzle`,
    `What kind of cereal do dads like? Corn flakes`,
    `When does a joke become a dad joke? When it becomes apparent`,
    `Why is it hard to explain puns to kleptomaniacs? They always take things literally`,
    `If you see a robbery at an Apple store, what does it make you? An Iwitness`,
];


//! Joke by array

// let The_Joke =
// Array_of_jokes[Math.floor(Math.random() * Array_of_jokes.length)];
// document.getElementById(
//     "The_Joke"
// ).innerHTML = `Joke of the reload>>><h4 style="margin:0 10px;">${The_Joke}`;

//! JOKE BY  JokeAPI
document.getElementById("The_Joke").innerHTML = "Loading...  xD";
fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single")
    .then((response) => response.json())
    .then((data) => {
        let resultDiv = document.getElementById("The_Joke");
        resultDiv.innerHTML = `<h4 style="margin:0 10px">${data[Object.keys(data)[3]]}</h4>`;
    })
    .catch((error) => {
        let resultDiv = document.getElementById("The_Joke");
        resultDiv.innerHTML = `Try reloading again or maybe the API stopped it's services! :(  [Check Console]`;
        console.error("Error:", error);
    });
