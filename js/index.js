const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const navItems = document.querySelector('.nav-list');

openIcon.addEventListener('click', () => {
        openIcon.style.display ="none";
        closeIcon.style.display ="block";
        navItems.style.right = "0px"
})

closeIcon.addEventListener('click', () => {
        closeIcon.style.display ="none";
        openIcon.style.display ="block";
        navItems.style.right = "-70vw"
})
