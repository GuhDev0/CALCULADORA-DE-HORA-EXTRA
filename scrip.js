let btn_calcular = document.querySelector('#btn-calcular');
let p0 = document.querySelector('.p0')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')



 salarioPorcem = (salarioValue, pocentagem,horas) => {
       let porcemDoSalario = (pocentagem/ 100) * salarioValue
         porcemSomado =parseInt(salarioValue) + parseInt(porcemDoSalario)
          valorDaHoraExtra = porcemSomado / 220
          return resultado = valorDaHoraExtra * horas  
    
}
salarioCemPorcem = (salarioValue,horas) =>{
    let salarioPorcento = salarioValue * 2
    let horasExtraComCemPorcento = salarioPorcento / 220
    
    return valorHoras = horasExtraComCemPorcento * horas
    
}
btn_calcular.addEventListener('click', function btn(){
    let salario = document.querySelector('#salario').value
    let porcem = document.querySelector('#porcetagem').value
    let horasExtras = document.querySelector('#horasExtras').value
    
    if(porcem == 100){
        let valorResultado = salarioCemPorcem(salario,horasExtras)
        let totalExtra = parseInt(valorResultado)  + parseInt(salario)
        let SuaHora = (salario * 2) / 220
        p0.innerHTML = `Valor da Sua Hora ${SuaHora}`    
        p1.innerHTML = `TOTAL HORA EXTRA DE: ${valorResultado}`
        p2.innerHTML = `Porcetagem da Hora Extra: ${porcem}%`
        p3.innerHTML = `VALOR TOTAL: ${totalExtra}`
       
    }else{
        let valorResultado = salarioPorcem(salario,porcem,horasExtras)
      
    }
        
    

    
    
})