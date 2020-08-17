for(var i= 1; i < 100; i++){
    var multiploTres = i % 3 == 0;
    var multiploCinco = i % 5 == 0;
    
    if(multiploTres && multiploCinco){
        console.log("Trescinco");
    }
    else if (multiploTres){
        console.log("Tres");
    }
    else if(multiploCinco){
        console.log("Cinco");
    }
    else{
        console.log(i)
    }
}