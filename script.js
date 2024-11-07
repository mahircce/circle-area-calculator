function calculateArea(r){
    let pi = 3.1416;
    let area = pi*(r*r);
    return area;
}
    let area = calculateArea(prompt("Enter radious of a Circle:"));
document.write("The Area Of this Circle: " +area);
