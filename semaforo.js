let semaforo = "verde"

switch(semaforo) {
    case "vermelho":
        console.log("Cuidado, pare!") 
        break
    case "amarelo":
        console.log("Atençao!")
        break
    case "verde":
        console.log("Siga em frente")
        break
    default:
        console.log("Cor desconhecida.")
}