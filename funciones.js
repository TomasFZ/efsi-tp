


const vectorNotas = document.getElementsByTagName("input")

var vectorMateriasConLasNotasMasAlta = []

function ValidarNotaMasAlta() {
    if (ValidarDatos()){
        return null
    }
    else{
    var nota = 0
    vectorMateriasConLasNotasMasAlta=[]
    let x = 0
    for (var i = 0; i < vectorNotas.length; i++) {
        if (nota < Number(vectorNotas[i].value)) {
            nota = vectorNotas[i].value
        }

    }

    for (var i = 0; i < vectorNotas.length; i++) {
        if (Number(vectorNotas[i].value) == nota) {
            vectorMateriasConLasNotasMasAlta.push(vectorNotas[i].className)
            document.getElementById("materiaDeEsaNota").innerHTML += vectorMateriasConLasNotasMasAlta[x] + "\n"
            document.getElementById(vectorNotas[i].className).style.color = "blue"
            x++
        } //your so skibidi your so fanum tax sticking out your gyatt for the rizzler
    }





    resultadosBorrar=document.getElementsByClassName("resultado")
    
    for (var i = 0; i<resultadosBorrar.length;i++){
        resultadosBorrar[i].innerHTML=""
    }
    document.getElementById("resultadosDos").style.visibility = "visible"
    document.getElementById("resultadoNotaMasAlta").innerHTML = nota
    vectorMateriasConLasNotasMasAlta.forEach(m => {
        document.getElementById("materiaDeEsaNota").innerHTML += m + "\n"

    }) 
    
    
    //hola soy un hacker mi nombre es hacker2009 y los voy a hackear en tres dos uno 0 ok han sido hackeados muajajajajja hola soy el hacker e hackeado la cuenta de danosqui
    //uy soy dante recupere control hay un hacker hola hacker como te llamas
    //bum hackeado hola soy un hacker mi nombre es... hacker2009 porque soy hacker y naci en 2009
    //ahhH! hahhhhhhhhh (respira muy fuerte) hola volvi soy dante retome el control quiero que me presten mucha atencion NO LE DEN AL HACKER NO LE DIGAN BAJO NINGUN CONCEPTO EL-
    //uh justo lo hackie aahora si muajajja ya veran .... hola soy dante me dicen la contraseña secretaa

}}

// function MostrarNotaMasAlta(){
//     document.getElementById("resultadoNotaMasAlta").innerHTML= ValidarNotaMasAlta()
// }



function CalcularPromedio() {
    return ((Number(notaMatematica.value) + Number(notaLengua.value) + Number(notaEfsi.value)) / vectorNotas.length).toFixed(2)
}

function ValidarDatos(){
    var anyEmpty = false
    const arrInputs = document.getElementsByTagName("input")
    //console.log(arrInputs[2].value)
    var i = 0
    while(i<arrInputs.length && anyEmpty === false){
        if(arrInputs[i].value == ""){
            anyEmpty = true
            
            console.log("anyempty es true en " + arrInputs[i] + " con " + arrInputs[i].value)
        }
        i++
    }

    
    if (anyEmpty == true) {
        alert("todos los campos deben ser completados")
        
    }
    console.log(anyEmpty)
    return anyEmpty


}
function ValidarNota() {
    
    var arrInputs = Array.prototype.slice.call(document.getElementsByTagName("input"))
    boton = document.getElementById("botonPromedio")
    arrInputs.forEach(i => {

        if (i.value == "") {
            i.style.color = "black"
        }
        else if (i.value > 10 || i.value <= 0) {
            i.style.color = 'red'
            boton.setAttribute("disabled", "true")
        }
        else {
            i.style.color = 'green'
            boton.removeAttribute("disabled")
        }
    });
}



function MostrarPromedio() {

    if (ValidarDatos() == true){
        return null
    }
    else{
    imgInfo.src = "https://media1.tenor.com/m/RFZsuBVxm3QAAAAC/bh187-minions.gif"
    resultNumero = document.getElementById("resultadoNumero")
    imgInfo = document.getElementById("imgInfo")
    document.getElementById("resultadoNumero").style.color = "red"
    const resultadoDiv = document.getElementById("resultados")
    resultadoDiv.style.visibility = "visible"


    resultNumero.innerHTML = CalcularPromedio()

    if (document.getElementById("resultadoNumero").innerHTML < 6) {
        return
    }


    resultNumero.style.color = "green"

    imgInfo.src = "https://i.pinimg.com/originals/2f/4e/b7/2f4eb7bd0ebe9bca45f46cc6f1664be7.gif"


    }
}


// ▓▓───
// ░───░▓▒░░▒▓░▒░░░░▓░▓█─▓▓─░░░▓▓▓─▒▒▓▒──
// ░───▓░▒░░░▒░▒░░▒░▓▓▓▓▓▓░▒░░░▓▓░░▒▒░▓──
// ░───▓─▒▓░░░▓▓░░▒▓▒▒▒▒▒▒▓▓░░░░─░░▓▒─█──
// ───░█▓▓▓░░░▓▓░░░░▓▓▒░▒▒▒░░░▓░░░▒▓▒▒█░─
// ░───░██▒░░░░░░░░────────░░░░░░░░▓██▒──
// ░────▓▓▒░░▒░─▒▒▒░░░░░░░░░▒░░▒▒▒░▒▓▓───
// ░───░▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▒▒▓░──
// ────░▓▒░▓▒░░▒▒▓█▒─▓███▒░▓▓▒▒░─░█─▒▓▒──
// ░───▒▓▒░▓───────▒▒─▒█▒▒▒▒──────▓─▒▓▒──
// ░───▒▓░░▓▒▒▒▒▒▒▒▒▓░▓█▒░▒▒▒▒▒▒▒▒█─▒▓▒──
// ░───▒▓░─█▓████▓▓███▓▓███▓▓██████─░▓▒──
// ───░▓▓░─█▓████▒▓███▓▓███▓▒████▓█─░▓▓──
// ───▓░▒▓─█▓▒▒▒▒▒▒▒▒▒▓██▒▒▒▒▒▒▒▒▓█─▓▒▒▓─
// ──▒▓──▒▒██▓▓▓▓▓▓▓▓▓███▓▓▓▓▓▓▓███─▓──▓─
// ─▒█▒▒▓▓▓███████████████████████▓▓▓▒░▓▓
// ─░█▓▓▓▒────▓█▓▓██─────░██▓██░───░▓▓▓▓▓
// ──▒▓▓▓─────▒████▓──────▓████░─────█▓▓▒
// ────░░───────▒▓▒────────▒▓░───────▒░──
// ░────────────▒▓▒────────▒▓░───░───────
// ░────────────▒█▒───░────▓█░──░────────
// ░─░─────░────▒█▒──░─────▓█░─────░───░─
// ░░─░─░───░───▒█▒───░────▒▓░────────░─░
// ░───░─░─░────▒▓▒────────▒▓░───────░─░─
// ─────────────▒▒▓───░───░▓▒▓──────────░
// ░─░─░─────▒█▓█▓█▒──────▓█████▒────░─░─
// ─────░────█▓████▒──────▓███▓██───░─░──
// ░─░─░─────██████░──────▒██████──░───░─
// ──────────▓██▓░░──────────███▒────────


// ░▄█▀▀█ █▀▄ ▄▀▄ █▄─█ ▄▀▀─ █▀▀──░▐█▀▄─ ▄▀▄ █▀▄──
// ░▀▀█▄▄ █─█ █─█ █─▀█ █─▀▌ █▀▀──░▐█▀▀▄ █─█ █▀█──
// ░█▄▄█▀ █▀─ ─▀─ ▀──▀ ▀▀▀─ ▀▀▀──░▐█▄▄▀ ─▀─ ▀▀───
// ░─░──░▓░─░▓▓▓▒─░▒▓▓▒░░▓▓▓░░▒▓▓▓─░▒░───
// ─────▒▒▒▒░░─░▒▒▒───▒▒░──░▒▒░──▒▒▒▒▒───
// ░───▒▓──░░░░░─░░░░░░░░░░░░░░░░░░─░▓▒──
// ░───▒▓░░░░░▒░░░▒▒▒░▒░▒░░░░░▒▒▒░░░▒▓▒──
// ░────▓▒──▒░─░─░░░░░░░──░░░░░░░░░░▒█───
// ─────▓▓░▒▓▒▒▒▒▒▒▒░░──░▒▒░░────▒▒─░▒───
// ░───▓█▓█████████████▓████████████▓██──
// ────▓█▓██████████████████████████▓██──
// ░────▓██░─────────▒███─────░▒▒▒▒███▒──
// ░────▒██▒────░▓▓▒─▓███─░▓▓──────██▒───
// ░─────▓██────▓▓██░████░▓▓██────▒██────
// ─────░▒██────▓███▒█▒─█▓▓██▓░───██▓────
// ░────▒▒██▒─▒░▒██▓▓█──██▒█▓▓─░░░██▓▒───
// ─────▓▒▓█▓▒▒▒▒▒▒─██░─██─▒▒▒▒▒▒▒██▓▒───
// ░─░──░▓▒█░▒▒▒▒▒▒▒██▒─██▒░░▒▒▒▒░▒█▓░───
// ─░────▓░▓▒▒▓░▓█████▒▒▓████░░▓▓░▒▒▓───░
// ░─────▒─░▒░▓─▓██▓▒░─▓▒▒▓██▒─▓▒▒▒▒▓────
// ─░───░▓░░░─▒▓──────░▓▒─────▓▒─░░░▓░──░
// ░─░──░▓▒░░░░▓▓░─░░░░▒▒░──░▓▓░░▒░░▓░───
// ░░────▓▓░░░░░▓▓▓▒────░─▒▓▓▒░░▒░░░▓────
// ░─────▓▒░░░░░░░▓▓█▓▓▓▓█▓▓░░░░░░░▓▓────
// ░────▓▓░░░░░░▒░─░▓─▓█─▓▒─░░░▒▓▓░▒