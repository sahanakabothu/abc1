const openCard = document.getElementById("openCard");
const content = document.getElementById("content");

openCard.addEventListener("click", () => {
    openCard.style.display = "none";
    content.style.display = "block";
});
