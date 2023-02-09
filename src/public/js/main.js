const socket = io()

socket.emit('mensaje', 'Hola, este es el mensaje de conexion socket.io que sale de la app')

socket.on('evento-admin', datos =>{
    console.log(datos)
})

socket.on('evento-general', datos =>{
    console.log(datos)
})