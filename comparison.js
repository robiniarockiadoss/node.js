
  const a = 5, b = 10, c = 'hello';

  // equal to operator
  console.log(a == 5);     // true
  console.log(b == '10');   // true
  console.log(c == 'Hello');  // false

  const d = 3, e = 'hello';

  // not equal operator
  console.log(d != 2); // true
  console.log(e != 'Hello'); // true

  const f = 2;

  // strict equal operator
  console.log(f === 2); // true
  console.log(f === '2'); // false


  const g = 2, h = 'hello';

  // strict not equal operator
  console.log(g !== 2); // false
  console.log(g !== '2'); // true
  console.log(h !== 'Hello'); // true

  const i = 3;

  // greater than operator
  console.log(i> 2); // true

  const j = 3;

  // greater than or equal operator
  console.log(j >= 3); //true

  const k = 3, l = 2;

  // less than operator
  console.log(k < 2); // false
  console.log(l < 3); // true

  const m = 2;

  // less than or equal operator
  console.log(m <= 3) // true
  console.log(m <= 2); // true