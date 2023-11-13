//點擊其他地方隱藏下拉內容
document.addEventListener('click', function (event) {
    var dropdown = document.querySelector('.language');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});
//點擊出現語言選擇
function languagebtn() {
    var dropdown = document.querySelector('.language');
    dropdown.classList.toggle('active');
}

//點擊其他地方隱藏下拉內容
document.addEventListener('click', function (event) {
    var dropdown = document.querySelector('.menu');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});
//點擊出現語言選擇
function menubtn() {
    var dropdown = document.querySelector('.menu');
    dropdown.classList.toggle('active');
}