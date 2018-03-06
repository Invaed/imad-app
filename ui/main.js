var button = document.getElementById('counter');
button.onclick = function(){
    counter = counter + 1;
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var spa = document.getElementById('count');
                spa.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://ankitemail247.imad.hasura-app.io/counter',true);
    request.send('null');
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var names = ["name1","name2","name3","name4"];
    var lists = '';
    for(var i=0; i<names.length; i++){
        lists += "<li>"+names[i]+"</li>";
    }
    
    var ul = document.getElementById("name_list");
    ul.innerHTML = lists;
};