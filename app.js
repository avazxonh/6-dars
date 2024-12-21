//1-m
function sum(x, y) {
  return x + y;
}
console.log(sum(7, 8));
// 2-m
function toSekunds(minutes) {
  return minutes * 60;
}

console.log(toSekunds(2));
// 3-m
function nextInteger(int) {
  return int + 1;
}
console.log(nextInteger(8));
// 4-m
function uchburchakYuzi(asos, balandlik) {
  let s = (asos * balandlik) / 2;

  return s;
}
uchburchakYuzi(5, 6);
// 5-m
function ageToDays(age) {
  return age * 365;
}
console.log(ageToDays(2));
// 6-m
function kub(number) {
  return number ** 3;
}
kub(3);

// 7-m
function firstElement(arr) {
  return arr[0];
}
let arr = [1, 2, 3];
console.log(firstElement(arr));

// 8-m
function power(x, y) {
  return x * y;
}
console.log(power(2, 4));

// 9-m
function hourToSekunds(hour) {
  return hour * 60;
}
console.log(hourToSekunds(2));
// 10-m
function uchinchiTomon(tomon1, tomon2) {
  return (tomon = tomon1 + tomon2 - 1);
}
uchinchiTomon(7, 8);
// 11-m
function qoldiq(son1, son2) {
  return son1 / son2;
}
console.log(qoldiq(10, 2));

// 12-m
function turtburchakYuzi(boyi, eni) {
  return boyi * eni;
}
console.log(turtburchakYuzi(3, 4));
// 13-m
function stringQoshish(a) {
  return a + "  a";
}
console.log(stringQoshish("javaScript"));
// 14-m
function kvadrat(son) {
  return son ** 2;
}
console.log(kvadrat(5));
// 15-m
function noldan(raqam) {
  if (raqam <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(noldan(0));
// 16-m
function ichkiBurchaklar(n) {
  return (n - 2) * 180;
}
console.log(ichkiBurchaklar(3));
// 17-m
function ochkolar(x, y) {
  return x * 2 + y * 3;
}
console.log(ochkolar(1, 1));
// 18-m
function stringQoshishb(ab) {
  return "qwert" + ab;
}
console.log(stringQoshishb("javaScript"));
// 19-m
function ikkitaSon(x, y) {
  if (x + y <= 100) {
    return true;
  } else {
    return false;
  }
}
console.log(ikkitaSon(22, 15));

// 20-m
function printArray(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
printArray(5);

// 21-m
function oyoqlar(tovuq, qoy, sigir) {
  return tovuq * 2 + qoy * 4 + sigir * 4;
}

console.log(oyoqlar(2, 3, 5));

// 22-m
function and(a, b) {
  return a && b;
}
console.log(and(true, false));

// 23-m
function tengMi(x, y) {
  if (x == y) {
    return true;
  } else {
    return false;
  }
}
console.log(tengMi(5, 5));

// 24-m
function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
  return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
}
console.log(futbolOchko(3, 4, 2));

// 25-m
function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}
console.log(sekundlar(1, 3));
// 26-m
function fun(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(fun(7));
// 27-m
function tengMi(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
console.log(tengMi(0, "0"));

// 28-m
function tengMi(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

console.log(tengMi(0, "0"));
// 29-m
function arrowFunc(j) {
  return j;
}
console.log(arrowFunc(3));

// 30-m
function frameSoni(minut, frame) {
  return minut * 60 * frame;
}
console.log(frameSoni(1, 1));

function litrMasofa(km) {
  return km * 10;
}

console.log(litrMasofa(15));
