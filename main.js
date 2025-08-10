const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const papers = document.querySelectorAll(".paper");

let currentPage = 0;

// Set z-index for layering
papers.forEach((paper, index) => {
    paper.style.setProperty('--z', papers.length - index);
});

nextBtn.addEventListener("click", () => {
    if (currentPage < papers.length) {
        papers[currentPage].classList.add("flipped");
        currentPage++;
    }
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        papers[currentPage].classList.remove("flipped");
    }
});
