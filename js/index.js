const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const navItems = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');


openIcon.addEventListener('click', () => {
        openIcon.style.display ="none";
        closeIcon.style.display ="block";
        // navItems.style.right = "0px"

        for(i=0; i< navItem.length; i++) {
                navItem[i].style.display = 'block';
        }
        navItems.style.width = "70vw";
})

closeIcon.addEventListener('click', () => {
        closeIcon.style.display ="none";
        openIcon.style.display ="block";
        navItems.style.width = "0px";
        for(i=0; i< navItem.length; i++) {
                navItem[i].style.display = 'none';
        }
})
