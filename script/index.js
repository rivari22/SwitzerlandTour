const greeting = document.querySelector("#greeting");
let promptValue = prompt("Siapa nama kamu?")

let imgIndex = document.querySelector("#img-index")
const detail = document.querySelector(".detail")
const h3 = document.querySelector("h3")
const btn = document.querySelector("#btn-started")
const ul = document.querySelector("ul")
const sosmed = document.querySelector(".social-media")
const icon = document.querySelectorAll(".ic")
const socialMedia = document.querySelector(".social-media")
const createdBy = document.querySelector("#created-by")

const render = () => {
    imgIndex.style.width = "60%"
    detail.style.marginLeft = "-20rem"
    greeting.innerHTML = `Hey ${promptValue}. What are you looking for?`;
    greeting.textContent
    for(let i = 0; i < icon.length; i++) {
        icon[i].style.display = "inline-block"
    }
    setTimeout(() => {
        h3.style.display = "inline-block"
        ul.style.display = "flex"
    }, 4500);
    btn.style.display = "none"
    socialMedia.style.margin = "50px 50px 0 0"
    createdBy.style.margin = "0 45px 0 0"
}
const renderedSlide = () => {
    imgIndex.style.width = "70rem"
    detail.style.marginLeft = "2rem"
    greeting.innerHTML = `Hey ${promptValue}. What are you looking for?`;
    greeting.textContent
    for(let i = 0; i < icon.length; i++) {
        icon[i].style.display = "inline-block"
    }
    setTimeout(() => {
        btn.style.display = "block"
    }, 5000);
}

btn.addEventListener("click", function () {
    if(imgIndex.width > 800) {
        render()
    } else  {
        renderedSlide()
    }
})

imgIndex.addEventListener("click", function() {
    if(this.width > 800) {
        render()

    } else  {
        renderedSlide()
    }

})



const renderDatalist = (value) => {
    const autumn = document.querySelector("#ic-autumn")
    const summer = document.querySelector("#ic-summer")
    const spring = document.querySelector("#ic-spring")
    const winter = document.querySelector("#ic-winter")
    if(value.toLowerCase() === "autumn") {
        ul.style.display = "flex"
        autumn.style.display = "inline-block"
        summer.style.display = "none"
        spring.style.display = "none"
        winter.style.display = "none"
        greeting.innerHTML = `Hey ${promptValue}. Are you planning for ${value} season?`;
        greeting.textContent;
    } else if (value.toLowerCase() === "summer") {
        ul.style.display = "flex"
        summer.style.display = "inline-block"
        autumn.style.display = "none"
        spring.style.display = "none"
        winter.style.display = "none"
        greeting.innerHTML = `Hey ${promptValue}. Are you planning for ${value} season?`;
        greeting.textContent;
    } else if (value.toLowerCase() === "spring") {
        ul.style.display = "flex"
        spring.style.display = "inline-block"
        autumn.style.display = "none"
        summer.style.display = "none"
        winter.style.display = "none"
        greeting.innerHTML = `Hey ${promptValue}. Are you planning for ${value} season?`;
        greeting.textContent;
    } else if (value.toLowerCase() === "winter") {
        ul.style.display = "flex"
        winter.style.display = "inline-block"
        spring.style.display = "none"
        autumn.style.display = "none"
        summer.style.display = "none"
        greeting.innerHTML = `Hey ${promptValue}. Are you planning for ${value} season?`;
        greeting.textContent;
    } else {
        alert("the season is wrong, try again or clik Get Started button")
    }
}

const btnDatalist = document.querySelector("#btn-datalist")
btnDatalist.addEventListener("click", function () {
    const season = document.querySelector("#season")
    let value = season.value
    renderDatalist(value)
})