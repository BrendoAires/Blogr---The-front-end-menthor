const linkMenu = document.querySelector("#menu");
linkMenu.addEventListener('click', ()=>{
	const element = document.getElementById("menu-dropdown");
    if (element.style.display === 'none') {
        element.style.display = 'block';

    } else {
        element.style.display = 'none'; 
    }
})