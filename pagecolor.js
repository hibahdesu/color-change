let list = document.querySelectorAll('ul li');
let change = document.querySelector('.change');
//If there is a color in the local storage
if (window.localStorage.getItem("color")) {
    //First, adding body color
    change.style.backgroundColor = window.localStorage.getItem("color");
    //Removing active class from all items of the list
    list.forEach((li) => {
        li.classList.remove("active");
    });
    //Adding active class to the current one
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add('active');
}
list.forEach((li) => {
    li.addEventListener('click', (e) => {
        //Remove active class from all list
        list.forEach((li) => {
            li.classList.remove("active");
        });
        //Adding active list to current one
        e.currentTarget.classList.add("active");
        //Adding the current color to local storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        //Chage page background 
        change.style.backgroundColor = e.currentTarget.dataset.color;

    })
})
