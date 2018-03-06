var button = document.getElementById('counter');
button.onclick = function(){
    counter = counter + 1;
    button.innerHTML = counter;
};