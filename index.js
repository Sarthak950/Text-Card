const chars = "abcdefghiklmnopqrstuvwxyz0123456789"

const randomChar = () => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
}

const randomString = () => {
    let string = "";
    for (let i = 0; i < 10000; i++) {
        string += randomChar();
    }
    return string;
}

const box = document.getElementsByClassName("text-container")[0]
box.innerHTML = randomString();

document.getElementsByClassName("body-container")[0].onmousemove = (e) => {
    box.innerHTML = randomString();


    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    box.style.setProperty("--x", `${x}px`);
    box.style.setProperty("--y", `${y}px`);

    x = (e.clientX - e.target.offsetLeft) / box.offsetWidth - 0.5;
    y = (e.clientY - e.target.offsetTop) / box.offsetHeight - 0.5;

    box.style.setProperty("--TiltX", `${x * 20}deg`);
    box.style.setProperty("--TiltY", `${y * 20}deg`);

}

