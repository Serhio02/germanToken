// Burger===================================================================
const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function (e) {
        iconMenu
            .classList
            .toggle('_active');
        menuBody
            .classList
            .toggle('_active');
    });
};
// Menu
// scroll===================================================================

$(document).ready(function () {
    $("#menu")
        .on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id)
                    .offset()
                    .top;
            $('body,html').animate({
                scrollTop: top
            }, 0);
        });
});

// ScrollBtn===================================================================
window.onload = () => {
    window.onscroll = function (e) {
        if (window.scrollY > 300) {
            progressBar();

            scrollbarAnimation();
            window.scrollY = null;
        }
    };
    const scrollBtn = document.querySelector(".isShowBtn");
    window.onscroll = () => {
        if (window.scrollY > 600) {
            scrollBtn
                .classList
                .remove("_hide");
        } else if (window.scrollY < 600) {
            scrollBtn
                .classList
                .add("_hide");
        }
    };
    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    }
}

// Roadmap===================================================================
// const titles = document.querySelectorAll(".list-main__title");
// console.log(titles);



// const titles = document.querySelectorAll(".list-main__title");
// const title = document.querySelector(".list-main__title._active-title");

// let title1 = titles[0].firstElementChild;
// let title2 = titles[1];
// let title3 = titles[2].firstElementChild;
// let title4 = titles[3].firstElementChild;
// console.log(title2);

// const images = document.querySelectorAll(".list-items__item");
// const imgItems = document.querySelectorAll(".roadmap__img");
// console.log(images);
// const img = document.querySelector(".list-main__image");


// let img1 = images[3].innerHTML;
// let img2 = images[2].innerHTML;
// let img3 = images[1].innerHTML;
// let img4 = images[0].innerHTML;

// console.log(img3);

// const selectedImage = images[4];
// const texts = document.querySelectorAll(".list-main__text");
// const text = document.querySelector(".list-main__text._active-text");

// let text1 = texts[0];
// let text2 = texts[1];
// let text3 = texts[2];
// let text4 = texts[3];


// let activeTitle = title;
// let activeText = text;
// let activeImage = img.innerHTML;
// console.log(activeImage);
// let clickedItem;

// window.onclick = e => {
//     clickedItem = e.target;
//     console.log(clickedItem);
//         if (imgItems[3] == clickedItem) {
//             activeTitle.classList.remove("_active-title");
//             title2.classList.add("_active-title");
//             activeText.classList.remove("_active-text");
//             text2.classList.add("_active-text");
//             activeImage = img3;
//         } else if (imgItems[2] == clickedItem) {
//             activeTitle.classList.remove("_active-title");
//             title3.classList.add("_active-title");
//             activeText.classList.remove("_active-text");
//             text3.classList.add("_active-text");
//         } else if (imgItems[1] == clickedItem) {
//             activeTitle.classList.remove("_active-title");
//             title4.classList.add("_active-title");
//             activeText.classList.remove("_active-text");
//             text4.classList.add("_active-text");
//         };   
// } 


