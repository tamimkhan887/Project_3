document.getElementById("id-triangle").style.display = "none";
document.getElementById("id-rectangle").style.display = "none";
document.getElementById("id-parallelogram").style.display = "none";
document.getElementById("id-rhombus").style.display = "none";
document.getElementById("id-pentagon").style.display = "none";
document.getElementById("id-ellipse").style.display = "none";
function inputCollector(input){
    const inp = document.getElementById(input);
    const inpValue = inp.value;
    const data = parseFloat(inpValue);
    return data;
}

document.getElementById("triangle-btn").addEventListener("click",function(){
    const base = inputCollector("triangle-base");
    const height = inputCollector("triangle-height");
    const area = 0.5*base*height ;
    document.getElementById("result-triangle").innerText = area;
    document.getElementById("id-triangle").style.display = "block";
})
document.getElementById("parallelogram-btn").addEventListener("click",function(){
    const base = inputCollector("parallelogram-base");
    const height = inputCollector("parallelogram-height");
    const area = base*height ;
    document.getElementById("result-parallelogram").innerText = area;
    document.getElementById("id-parallelogram").style.display = "block";
})

document.getElementById("rectangle-btn").addEventListener("click",function(){
    const width = inputCollector("rectangle-width");
    const length = inputCollector("rectangle-length");
    const area = width*length ;
    document.getElementById("result-rectangle").innerText = area;
    document.getElementById("id-rectangle").style.display = "block";
})

document.getElementById("rhombus-btn").addEventListener("click",function(){
    const d1 = inputCollector("rhombus-d1");
    const d2 = inputCollector("rhombus-d2");
    const area = 0.5*d1*d2 ;
    document.getElementById("result-rhombus").innerText = area;
    document.getElementById("id-rhombus").style.display = "block";
})

document.getElementById("pentagon-btn").addEventListener("click",function(){
    const p = inputCollector("pentagon-p");
    const a = inputCollector("pentagon-a");
    const area = 0.5*p*a ;
    document.getElementById("result-pentagon").innerText = area;
    document.getElementById("id-pentagon").style.display = "block";
})
document.getElementById("ellipse-btn").addEventListener("click",function(){
    const p = inputCollector("ellipse-a");
    const a = inputCollector("ellipse-b");
    const area = (22/7)*p*a ;
    document.getElementById("result-ellipse").innerText = area;
    document.getElementById("id-ellipse").style.display = "block";
})
