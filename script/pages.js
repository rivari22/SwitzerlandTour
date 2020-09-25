const imgWrap = document.querySelectorAll(".img-wrap")
// console.log(imgWrap.length)

let imgWrapperArray = []
for(let i = 1; i <= 4; i++) {
    imgWrapperArray.push({
            imageContent : `img-${i}`,
            modal : `my-modal-${i}`,
            modalContent : `img-modal-${i}`,
            caption : `caption-${i}`,
            spanClose: `close-${i}`
    })
}
console.log(imgWrapperArray)

const img1 = document.querySelector("#img-1")
const img2 = document.querySelector("#img-2")
const img3 = document.querySelector("#img-3")

// const img4 = document.querySelector("#img-4")
// const img5 = document.querySelector("#img-5")
// const img6 = document.querySelector("#img-6")

// const close1 = document.querySelector(`#close-1`)

// const modal = document.querySelector("#my-modal-1")
// const modalImg = document.querySelector("#img-modal-1")
// const caption = document.querySelector("#caption-1")

const modalFunc = (value, id) => {
    let newModal
    for(let i = 0; i < value.length; i++ ) {
        let modal = document.querySelector(`#${value[i].modal}`)
        let modalContent = document.querySelector(`#${value[i].modalContent}`)
        let caption = document.querySelector(`#${value[i].caption}`)
        // let close = document.querySelector(`#${value[i].spanClose}`)
        if(value[i].imageContent === id.id) {
            modal.style.display = "block"
            modalContent.src = id.src;
            caption.innerHTML = id.alt;
            newModal = modal
        }
    }
    return newModal
};

let coba = 0
const modalClick = (img,imgWrapperArray) => {
    img.addEventListener("click", function () {
       coba = modalFunc(imgWrapperArray, img);
    })
}

modalClick(img1, imgWrapperArray)
modalClick(img2, imgWrapperArray)
modalClick(img3, imgWrapperArray)

const spans = document.querySelectorAll(".close").forEach(span => {
    span.addEventListener("click", function(e) {
        console.log("ini apus",e.target)
        coba.style.display = "none"
    })
})

const span = document.getElementsByClassName("close");        

// console.log(newModal)
span.addEventListener("click", function(e) {
    console.log("ini apus",e.target)
    coba.style.display = "none"
})