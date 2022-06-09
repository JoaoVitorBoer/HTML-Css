for (var i_1 = 0; i_1 < 25; i_1++) {
    if (i_1 % 2 == 0) {
        //console.log('%d é par', i);
    }
}
//console.log('\n')
/////////////////////////////////////////
var x = 0;
while (x < 25) {
    if (x % 2 == 0) {
        //console.log('%d é par', x);
    }
    x++;
}
console.log('\n');
/////////////////////////////////////////
var i = 0;
while (i != 12) {
    i += 2;
}
//console.log(i);
/////////////////////////////////////////
function min(x, y) {
    if (x < y) {
        return x;
    }
    else {
        return y;
    }
}
console.log(min(3, 1));
/////////////////////////////////////////
function pow(x, y) {
    var somado = 0;
    for (var i_2 = 0; i_2 < y; i_2++) {
        if (i_2 == 0) {
            somado = 1;
        }
        somado = x * somado;
    }
    return somado;
}
function pow_recursive(x, y) {
    if (y == 0) {
        return 1;
    }
    else {
        return x * pow_recursive(x, y - 1);
    }
}
console.log(pow(2, 5));
console.log(pow_recursive(3, 3));
////////////////////////////////
function toMaiusculaPrimeira(s) {
    return s.charAt(0).toUpperCase() + s.substr(1);
}
console.log(toMaiusculaPrimeira("michael"));
////////////////////////////////
function getMax(arr) {
    var maior = 0;
    for (var x_1 = 0; x_1 < arr.length; x_1++) {
        if (arr[x_1] > maior) {
            maior = arr[x_1];
        }
    }
    return maior;
}
var array = [99, 54, 21, 35, 75, 642, 124, 546, 8412, 654, 9999];
console.log(getMax(array));
//////////////////////////////////////
var mapa = new Map();
mapa.set('RS', '“Rio Grande do Sul”');
mapa.set('“SC”', '“Santa Catarina”');
mapa.set('“PR”', '“Paraná”');
console.log(mapa.get('“RS”'));
for (var _i = 0, _a = mapa.keys(); _i < _a.length; _i++) {
    var sigla = _a[_i];
    console.log(sigla);
}
for (var _b = 0, _c = mapa.values(); _b < _c.length; _b++) {
    var estado = _c[_b];
    console.log(estado);
}
for (var _d = 0, _e = mapa.entries(); _d < _e.length; _d++) {
    var entrada = _e[_d];
    console.log(entrada);
}
/////////////////////////////////////////
