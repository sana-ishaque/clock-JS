let updateTime = () => {
    let now = new Date();
    let hours = now.getHours();;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds()
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;

}


document.querySelector('button').addEventListener("click", function () {
    setInterval(updateTime, 1000);
});