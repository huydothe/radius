let Cicle = function(radius){
    this.radius = radius;
    this.getRadius=function (){
        return radius;
    }
    this.getArea=function (){
        return Math.PI*Math.pow(radius,2);
    }
};
let circle=new Cicle(7);
let radius=circle.getRadius();
let area=circle.getArea();
alert("Radius = " + radius + ' And Area = ' + area);