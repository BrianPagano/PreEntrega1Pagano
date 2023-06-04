 // Pre Entrega calculadora de pago en cuotas
//creo una funcion para calcular valor de cuotas segun parametros de precio y cuota ingresado
 function calculadoraCuota(precio,cuotas) {
    if (cuotas === 1) {
      return (precio)
    } else if (cuotas === 3) {
      return ((((precio*11.56)/100)+precio)/3)
    } else if (cuotas === 6) {
      return ((((precio*23.94)/100)+precio)/6)
    } else if (cuotas === 12) {
      return ((((precio*52.54)/100)+precio)/12)
    }
  }
  
  //le pido el precio al usuario y valido que sea un numero
  let prec = Number(prompt("ingrese el precio del producto"))
  while (isNaN(prec)){
    prec = Number(prompt("No es un dato valido, por favor ingrese el precio del producto"))
  }
  //le pido la cantidad de cuotas al usuario y valido que sea una cuota valida
  let cuo = Number(prompt("ingrese la cantidad de cuotas 1, 3, 6 o 12"))
  while ((cuo !=1) && (cuo !=3) && (cuo!=6) && (cuo!=12)){
    cuo = Number(prompt("No es un dato valido, por favor ingrese la cantidad de cuotas 1, 3, 6 o 12"))
  }
  
  //llamo a la funcion y muestro la informacion
  let resultado = calculadoraCuota(prec,cuo)
  alert("Si realizas una compra por $"+prec+" pagaras "+cuo+" cuota/s de $"+resultado.toFixed(2))
  
  