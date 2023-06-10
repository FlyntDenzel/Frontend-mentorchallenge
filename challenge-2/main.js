const color = document.querySelectorAll('.notification-section #content');
const myButton = document.getElementById('button');

myButton.addEventListener('click', function(){
    for (let i = 0; i < 3; i++) {
        color[i].style.backgroundColor = 'transparent';
    }
});