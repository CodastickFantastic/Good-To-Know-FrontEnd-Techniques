const square = document.getElementById("square")

function onDrag({movementX, movementY}) {
    let getStyle = window.getComputedStyle(square)
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);

    square.style.left = `${left + movementX}px`;
    square.style.top = `${top + movementY}px`;
}

square.addEventListener("mousedown", ()=>{
    square.addEventListener("mousemove", onDrag)
})

square.addEventListener("mouseup", ()=>{
    square.removeEventListener("mousemove", onDrag)
})

square.addEventListener("mouseleave", ()=>{
    square.removeEventListener("mousemove", onDrag)
})