fonar.addEventListener("click", () => {
    flashlight.classList.toggle("on")
})

document.addEventListener("mousemove", (el) => {
    console.log(el);

    flashlight.style.top = `${el.clientY - 125}px`
    flashlight.style.left = `${el.clientX - 125}px`
})