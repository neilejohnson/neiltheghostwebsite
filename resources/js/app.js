// const mobileNav = document.querySelector("#mobile-nav-id");
// const mainNav = document.querySelector(".main-nav")

// //https://www.youtube.com/watch?v=H4MkGzoACpQ
// //we can do this in CSS

// //this is wrong. display is being added to the html element. Should be toggling between classes
// //we can also check to see the size of the window to add or remove class
// const toggleNav = () => {
//     //if mobile mobile 
//     if (mainNav.style.display === "none") {
//         mainNav.style.display = "block";
//       } else {
//         mainNav.style.display = "none";
//     }
// }

// mobileNav.addEventListener("click", toggleNav);

// const image = document.querySelector("#header-logo")

// const navItems = [
//     {id: "#Nav-Comics", src: "resources/img/comics.png", alt:"comics-logo"},
//     {id: "#Nav-Illustration", src: "resources/img/illustration.png", alt:"illustration-logo"},
//     {id: "#Nav-Music", src: "resources/img/music.png", alt:"music-logo"},
//     {id: "#Nav-Store", src: "resources/img/store.png", alt:"store-logo"},
//     {id: "#Nav-About", src: "resources/img/about.png", alt:"about-logo"}
// ];

// //iterate through items list
// for (let item of navItems) {
//     //select current navitem
//     console.log(item);
//     const currentNav = document.querySelector(item.id);
//     console.log(currentNav)
//     currentNav.addEventListener("mouseover", function() {
//         image.src = item.src;
//         image.alt = item.alt;
//     });
//     currentNav.addEventListener("mouseout", function() {
//         image.src = "resources/img/home.png";
//         image.alt = "home-logo";
//     });
// };






