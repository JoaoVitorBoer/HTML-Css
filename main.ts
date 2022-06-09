
for(let i=0; i <25; i++){
    if(i%2 == 0){
      //console.log('%d é par', i);
    }
}
//console.log('\n')

/////////////////////////////////////////
let x: number = 0
while( x < 25){
  if(x%2 == 0){
      //console.log('%d é par', x);
    }
  x++;
}

console.log('\n')

/////////////////////////////////////////

let i: number = 0;
while (i != 12) {
  i += 2;
}

//console.log(i);

/////////////////////////////////////////

function min(x: number, y:number): number{
    if(x < y){
      return x;
    }
    else {
      return y;
    }
}

console.log(min(3,1))

/////////////////////////////////////////

function pow(x: number, y: number): number{
  let somado: number = 0;
  for(let i=0; i < y; i++)
  {
    if(i == 0 ){somado = 1}
       somado = x*somado;
  }
  return somado;
}

function pow_recursive(x: number, y: number): number{
    
    if(y == 0){return 1}
    else{
      return x*pow_recursive(x,y-1);
      }
}

console.log(pow(2,5))
console.log(pow_recursive(3,3))

////////////////////////////////

function toMaiusculaPrimeira(s: string): string{
   return s.charAt(0).toUpperCase() + s.substr(1);
 
}
console.log(toMaiusculaPrimeira("michael"));

////////////////////////////////
function getMax(arr: Array<number>): number{
  let maior: number = 0; 
  
  for(let x = 0; x < arr.length; x++){
     if(arr[x] > maior){
        maior = arr[x];
     }
  }
  
  return maior
}


let array: Array<number> = [99,54,21,35,75,642,124,546,8412,654,9999];

console.log(getMax(array))

//////////////////////////////////////

let mapa = new Map<string,string>();
mapa.set('RS', '“Rio Grande do Sul”');
mapa.set('“SC”', '“Santa Catarina”');
mapa.set('“PR”', '“Paraná”');
console.log(mapa.get('“RS”'));
for(let sigla of mapa.keys()) {
console.log(sigla);
}
for(let estado of mapa.values()) {
console.log(estado);
}
for(let entrada of mapa.entries()) {
console.log(entrada);
}

/////////////////////////////////////////







