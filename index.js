var InputArea = document.getElementById("inputArea");
var OutputArea = document.getElementById("outputArea");

function traduzirFrase() {
    var frase = InputArea.value;
    var frasecomRRsubistutuido = frase.replace(/rr/g, 'l')
    var frasecomRsubistituido = frasecomRRsubistutuido.replace(/r/g, 'l')
    var frasefinal = frasecomRsubistituido.replace(/R/g, 'L')

    OutputArea.value = frasefinal;
}

