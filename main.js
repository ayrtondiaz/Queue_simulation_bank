
let tiempo_arribo_inicial=0
let inicio_servicio1_inicial=0
let tiempo_entre_arribos= Math.floor(Math.random()*6+1);
//Cajero1-inicial
let tiempo_servicioA= Math.floor(Math.random()*6+1);
let tiempo_servicioB= Math.floor(Math.random()*6+1);
// console.log(`El tiempo de servicio 1 es: ${tiempo_servicio1}`)
let inicio_servicioA = tiempo_arribo_inicial;
// console.log(`El tiempo de servicio inicial es: ${inicio_servicio1_inicial}`)
let fin_servicioA= tiempo_servicioA+inicio_servicioA;
// console.log(`El tiempo de fin de servicio 1 es: ${fin_servicio1}`)
let tiempo_inactivoA= inicio_servicioA-tiempo_servicioA;
// console.log(`El tiempo de inactividad 1 es: ${tiempo_inactivo1}`)
let tiempo_en_esperaA=0
let inicio_servicioB = tiempo_arribo_inicial;
// console.log(`El tiempo de servicio inicial es: ${inicio_servicio1_inicial}`)
let fin_servicioB= tiempo_servicioB+inicio_servicioB;
// console.log(`El tiempo de fin de servicio 1 es: ${fin_servicio1}`)


//Cajero1
let tiempo_de_arribo=0
function Simulacion() {
    let inicio_servicio1;
    let inicio_servicio2;
    console.log(`\n**El tiempo de arribo del cliente 1 es de 0`)
    console.log(`Inicia el servicio del cajero 1 con T=0`)  
    console.log(`Finaliza el servicio del cajero 1 con : `+fin_servicioA)  
    console.log(`El tiempo de servicio del cajero 1 fue de : `+tiempo_servicioA)  
    console.log(`Inicia el servicio del cajero 2 con T=0`)  
    console.log(`Finaliza el servicio del cajero 2 con : `+fin_servicioB)  
    console.log(`El tiempo de servicio del cajero 2 fue de : `+tiempo_servicioB)  
    let fin_servicio1= tiempo_servicioA
    let fin_servicio2= tiempo_servicioB
    for (let i = 2; i < 21; i++) {

        let tiempo_entre_arribos_dist= Math.floor(Math.random()*6+1);
        let tiempo_servicio= Math.floor(Math.random()*6+1);

        tiempo_de_arribo= tiempo_de_arribo+tiempo_entre_arribos_dist

        // setTimeout(function(){
        //     console.log(`\n\n**El tiempo de arribo del cliente ${i} es de ${tiempo_de_arribo}`)   
        //     console.log(`Inicia el servicio del cajero 1`)
        //     console.log(`Comprobando disponibilidad del cajero..`)
        


        
        if(fin_servicio1<fin_servicio2)
        {
            if(fin_servicio1>tiempo_de_arribo)
            {
                inicio_servicio1=fin_servicio1
                console.log(`Inicia el servicio del cajero 1 con T=${inicio_servicio1}`)
                console.log(`Tiempo de servicio estipulado con T=${tiempo_servicio}`)
                fin_servicio1= tiempo_servicio+ inicio_servicio1 
                console.log(`El servicio del cajero 1 finalizo con T=${fin_servicio1}`)
                console.log(`Mientras tanto el cajero 2 finalizo con T=${fin_servicio2}`)
            }else{
                inicio_servicio1=tiempo_de_arribo
                console.log(`Inicia el servicio del cajero 1 con T=${inicio_servicio1}`)
                console.log(`Tiempo de servicio estipulado con T=${tiempo_servicio}`)
                fin_servicio1= tiempo_servicio+ inicio_servicio1 
                console.log(`El servicio del cajero 1 finalizo con T=${fin_servicio1}`)
                console.log(`Mientras tanto el cajero 2 finalizo con T=${fin_servicio2}`)
            }

        }
        else{ 
            console.log("El cajero 1 esta ocupado, se lo designara al cajero 2")
            
                if(fin_servicio2>tiempo_de_arribo)
                {
                    inicio_servicio2=fin_servicio2
                    console.log(`Inicia el servicio del cajero 2 con T=${inicio_servicio2}`)
                    console.log(`Tiempo de servicio estipulado con T=${tiempo_servicio}`)
                    fin_servicio2=tiempo_servicio+inicio_servicio2
                    console.log(`El servicio del cajero 2 finalizo con T=${fin_servicio2}`)
                    console.log(`Mientras tanto el cajero 1 finalizo con T=${fin_servicio1}`)
                }else{
                    inicio_servicio2=tiempo_de_arribo
                    console.log(`Inicia el servicio del cajero 2 con T=${inicio_servicio2}`)
                    console.log(`Tiempo de servicio estipulado con T=${tiempo_servicio}`)
                    fin_servicio2=tiempo_servicio+inicio_servicio2
                    console.log(`El servicio del cajero 2 finalizo con T=${fin_servicio2}`)
                    console.log(`Mientras tanto el cajero 1 finalizo con T=${fin_servicio1}`)
                }
            
            
        }
        
    // }, 3000);
    }}
  

Simulacion();