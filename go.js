const detail_show = document.getElementById("detail");
detail_show.addEventListener('click', () => {
    console.log("detail");
    location.href = `introduceshow.html?${name}`;
});