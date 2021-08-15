
function combo() {
    array = []
    xy = k
    cubo = 0
        p = xy.toString()
        cubo = 0
        for (i = 0; i < p.length; i++) {
            y = p.charAt(i)
            w = parseInt(y)
            cubo += w**3
        }


    if (xy == cubo) {
        array.push(cubo)
    }
}
        

    


    


function cubesum() {
    document.getElementById("ans").innerHTML = ""
    for (k = 1; k < 500; k = k + 1) {
         xy = k
         combo()
         document.getElementById("ans").innerHTML += "<h4>" + array + "</h4>"
    }
}
    
        
    
   




    
    

    

    
        
        
    
    
    

