// create a class of circle
class Circle {
    
    // has one parameter, radius and stores it using this.radius
    constructor(radius){
        this.radius = radius
    }
   
    // Getter for all three and will calculate value using this.radius and pi
    get diameter(){
        return (this.radius * 2)
    }
    get circumference(){
        return  (Math.PI * this.diameter)
    }
    get area(){
        return (Math.PI * (this.radius * this.radius))
    }
    //diameter = radius x 2
    //circumference = pi x diameter
    //area = pi x radius ^2

     // Setter for all three and accept values for each calculation,calculate radius based on input and set this.radius
    //Area will us math.sqrt() in setting
    set diameter(diameter){
        return this.radius = diameter / 2
    }
    set circumference(circumference){
        return this.radius = (circumference/Math.PI)/2
    }
    set area(area){
        return this.radius = Math.sqrt(area / Math.PI)
    }
}