//Задание 1
function parseCount (unitsGoods) {
   let numberGoods;
   numberGoods = Number.parseInt(unitsGoods);
     if (!numberGoods) {
       const unitsGoodsError = new Error ("Невалидное значение");
       throw unitsGoodsError;
     };
   return numberGoods; 
}

function validateCount (unitsGoods) {
  try { 
    let numberValidate;
    numberValidate = parseCount(unitsGoods);
      if (numberValidate) {
        return numberValidate;
   }
  } catch(unitsGoodsError) {  
    return unitsGoodsError;
  }
}

console.log(validateCount("123"));
console.log(validateCount("75"));
console.log(validateCount("132"));
console.log(validateCount( ));
console.log(parseCount("132"));
//console.log(parseCount("gv"));

//Задание 2
class Triangle {
    constructor (a, b, c) { 
      if (((a + b) > c) && ((b + c) > a) && ((c + a) > b)) {    
             Object.assign (this, {a, b, c})
      } else {
        const notAtriangle = new Error ("Треугольник с такими сторонами не существует");
       throw notAtriangle;
      }       
    } 
    getPerimeter () {
        let P = this.a + this.b + this.c;
        return P;
    }
    getArea () {
        let p = this.getPerimeter() / 2;
        let S = +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return S;
    }   
} 

function getTriangle (a, b, c) {
  try { 
    return new Triangle(a, b, c);
    
  } catch(err) { 
    return {
      getPerimeter: () => "Ошибка! Треугольник не существует",
      getArea: () => "Ошибка! Треугольник не существует",
    }
  }
}

let Triangle1 = new Triangle(6.3, 3, 5.5);
console.log(Triangle1);
console.log(Triangle1.getPerimeter());
console.log(Triangle1.getArea());
console.log(getTriangle (3, 2, 7))
//let Triangle2 = new Triangle(3, 2, 7);