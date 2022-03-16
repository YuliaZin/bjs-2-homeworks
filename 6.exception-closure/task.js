function parseCount(val){
    val = Number.parseInt(val);

    if (isNaN(val) ) throw new Error("Невалидное значение");

    else return val;
}

function validateCount(val){
    try {
        return parseCount(val);
    } catch (error) {
        console.error("Невалидное значение"); 
        return error;
    }

}


//Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a > b + c || b > a + c || c > a + b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
       return Number(this.a + this.b + this.c);
    }

    getArea() {
        let p = this.getPerimeter() / 2;
             
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return Number(s);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b , c)
    } catch(error) {
        return {
            getPerimeter() {return "Ошибка! Треугольник не существует"},
            getArea() {return "Ошибка! Треугольник не существует"}

        }
    }
}

