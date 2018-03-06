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