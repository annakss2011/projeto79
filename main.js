menuListArray = ["Pizza Vegetariana","Pizza portuguesa","pizza 4 queijos","pizza calabreza"
                    ];


function getMenu(){
   var htmldata="";
   menuListArray.sort();
   for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray [i]+'<br>'
}
 document.getElementById("displayMenu").innerHTML
}


function addItem(){
    var htmldata;
    var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
     var item=document.getElementById("addItem").value;
     menuListArray.sort();
     htmldata="";
     for(var i=0;i<menuListArray.length;i++)[
      htmldata=html+imgtags+menuListArray[i]+'<br/>'
     ]
      document.getElementById("displayAddedMenu").innerHTML=htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}