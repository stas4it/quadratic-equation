module.exports = function solveEquation(equation) {
  // your implementation
  let a=0;
  let b=0;
  let c=0;
  let d=0;
  let x1=0;
  let x2=0;
  let roots=[];
  let equationTemp=0;
  equationTemp=equation.replace(/\s+/g,'');
  equationTemp=equationTemp.replace(/\*x\^2/,' ');
  equationTemp=equationTemp.replace(/\*x/,' ');
  equationTemp=equationTemp.split(' ');
  a=parseInt(equationTemp[0]);
  b=parseInt(equationTemp[1]);
  c=parseInt(equationTemp[2]);
  d=Math.pow(b,2)-4*a*c;
  x1=Math.round(((-b)+Math.sqrt(d))/(2*a));
  roots.push(x1);
  x2=Math.round(((-b)-Math.sqrt(d))/(2*a));
  roots.push(x2);
  return roots.sort((x1,x2) => x1-x2 );
}
