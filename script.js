const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');


function imageMode(color){
    image1.src = `/images/reading_time_${color}.svg`;
    image2.src = `/images/goal_${color}.svg`;
    image3.src = `/images/cooking_${color}.svg`;
}

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0)';
    textBox.style.backgroundColor = 'rgb(255 255 255)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255)';
    textBox.style.backgroundColor = 'rgb(0 0 0)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

function changeTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();  
    }

    else{
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
        
    }
};


toggleSwitch.addEventListener('change', changeTheme);


