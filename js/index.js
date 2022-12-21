const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const navItems = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');


openIcon.addEventListener('click', () => {
        openIcon.style.display ="none";
        closeIcon.style.display ="block";
        navItems.style.paddingTop = "40px";
        navItems.style.paddingLeft = "20px";

        for(i=0; i< navItem.length; i++) {
                navItem[i].style.display = 'block';
        }
        navItems.style.width = "70vw";
})

closeIcon.addEventListener('click', () => {
        closeIcon.style.display ="none";
        openIcon.style.display ="block";
        navItems.style.width = "0px";
        navItems.style.right = "0px"
        navItems.style.paddingTop = "0";
        navItems.style.paddingLeft = "0";
        for(i=0; i< navItem.length; i++) {
                navItem[i].style.display = 'none';
        }
})

// modal for product images
const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);

    });
});
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
  </svg>`;
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};
