const socket = io()

const chatBox = document.getElementById("chatBox")
const messagge = []
console.log("first")
let user

swal.fire({
    title: "Inicia sesion",
    input: "text",
    text: "Por favor inicie sesión para continuar",
    inputValidator: (valor) =>{
        return !valor && 'Ingrese un valor valido'
    },
    allowOutsideClick: false
}).then(resultado => {
    user = resultado.value
    console.log(user)
})

chatBox.addEventListener('keyup', (e) =>{
    if(e.key =="Enter"){
        if(chatBox.value.trim().length > 0){
            socket.emit("mensaje", {usuario:user, info: chatBox.value})
            chatBox.value = ""
        }
    }
})

socket.on("mensajesLogs", info => {
    messageLogs.innerHTML = ""
    console.log(info)
    info.array.forEach(mensaje => {
        messageLogs.innerHTML += `<p>${mensaje.usuario} - ${mensaje.info}</p>`
        
    });
})

/* socket.emit('mensaje', 'Hola, me estoy conectando')

socket.on('evento-admin', datos =>{
    console.log(datos)
})

socket.on('evento-general', datos =>{
    console.log(datos)
}) */