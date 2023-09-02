var string="";
var buttons= document.querySelectorAll("button");
for(var i=0;i <16;i++){
    buttons[i].addEventListener( 'click',function(e){
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
}