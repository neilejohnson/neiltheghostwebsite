////////////////
///// QUOTE ////
////////////////

const quote = document.querySelector("#quote");

const randomSelection = [
    '"The secret of getting ahead is getting started." – Mark Twain',
    '"Everything you can imagine is real."― Pablo Picasso',
    '"Do one thing every day that scares you."― Eleanor Roosevelt',
    '"Whatever you are, be a good one." ― Abraham Lincoln',
    '"Goodbye blue Monday." ― Kurt Vonnegut',
    '"We’re here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark." — Whoopi Goldberg',
    '"Be the change you wish to see in the world." — Ghandi',
    '"Passion is energy. Feel the power that comes from focusing on what excites you." — Oprah Winfrey',
    '"You know, you do need mentors, but in the end, you really just need to believe in yourself." - Diana Ross'
]

quote.innerText = randomSelection[Math.floor(Math.random() * randomSelection.length)];

// if click pippin then populate comics in comics section with pippin images.
// we'll need a list of the pippin images
//if statement that will populate list of images from the folder until it can't do that anymore
//compile images into HTML and then insert that into the div.

let currentComic = "pippin";

for(let i = 1; i<=10; i++) {
    console.log(`<img src="../resources/img/comics/short-stories/${currentComic}/${currentComic}-${i}.jpg"></img>`);
};

