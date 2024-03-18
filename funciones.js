

const notaMatematica = document.getElementById("notaMatematica");
const notaLengua = document.getElementById("notaLengua");
const notaEfsi = document.getElementById("notaEfsi");

const vectorNotas = [notaMatematica, notaLengua, notaEfsi]


function ValidarNotaMasAlta(){
    var nota = 0
    for(var i = 0; i < vectorNotas.length; i++){
        if(nota < vectorNotas[i].value){
            nota = vectorNotas[i].value
        }
    }

    // nota.style.color='blue'

    console.log(nota)
    document.getElementById("resultadosDos").style.visibility = "visible"
    document.getElementById("resultadoNotaMasAlta").innerHTML = nota
}

// function MostrarNotaMasAlta(){
//     document.getElementById("resultadoNotaMasAlta").innerHTML= ValidarNotaMasAlta()
// }



function CalcularPromedio(){
    return ((Number(notaMatematica.value) + Number(notaLengua.value) + Number(notaEfsi.value))/vectorNotas.length).toFixed(2)
}

function ValidarDatos() {
    let anyEmpty
    const arrInputs=document.getElementsByTagName("input")
    arrInputs.forEach(i => {
        anyEmpty= i.value == NaN
    });
    if( anyEmpty ){
        alert("todos los campos deben ser completados")
    }
    
    
    
}
function ValidarNota(){
    var arrInputs = Array.prototype.slice.call(document.getElementsByTagName("input"))
    arrInputs.forEach(i => {
        
        if (i.value==""){
            i.style.color="black"
        }
        else if (i.value>10 || i.value<=0){
            i.style.color='red'
        }
        else{
            i.style.color='green'
        }
    });
}



function MostrarPromedio(){
    imgInfo.src = "https://media1.tenor.com/m/RFZsuBVxm3QAAAAC/bh187-minions.gif"
    resultNumero = document.getElementById("resultadoNumero")
    imgInfo = document.getElementById("imgInfo")
    document.getElementById("resultadoNumero").style.color="red"
    const resultadoDiv = document.getElementById("resultados")
    resultadoDiv.style.visibility = "visible"
    
    
    resultNumero.innerHTML= CalcularPromedio()

    if(document.getElementById("resultadoNumero").innerHTML<6){
    return }
   
    
    resultNumero.style.color="green"
    
    imgInfo.src = "https://i.pinimg.com/originals/2f/4e/b7/2f4eb7bd0ebe9bca45f46cc6f1664be7.gif"



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