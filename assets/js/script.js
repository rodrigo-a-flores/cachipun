let numJuegos = parseInt(prompt('¿Cuantas veces quiere jugar?'));
for(let i=0;i<numJuegos;i++){
    let player = prompt('Escoge: piedra, papel o tijera');
    let computer = Math.floor(Math.random()*3);
    switch(computer){
        case 0:
            computer = 'piedra';
            console.log(computer);
            break;
        case 1:
            computer = 'papel';
            console.log(computer);
            break;
        case 2:
            computer = 'tijera';
            console.log(computer);
            break;
        default:
            alert('Opcion indeterminada');
            break;
    }

    // OPCION: JUGADOR ESCOGE UNA OPCION INVALIDA
    if(player != 'piedra' && player != 'papel' && player != 'tijera'){
        alert('Opción inválida.');
        break;
    }
    
    // OPCION: JUGADOR ESCOGE PIEDRA
    if(player == 'piedra' && computer == 'piedra'){
        alert('Es un empate. La computadora eligió: ' + computer);
    }else if(player == 'piedra' && computer == 'papel'){
        alert('Has perdido contra la maquina. La computadora eligió: ' + computer);
    }else if(player == 'piedra' && computer == 'tijera'){
        alert('Has ganado, felicitaciones. La computadora eligió: ' + computer);
    }

    // OPCION: JUGADOR ESCOGE PAPEL
    if(player == 'papel' && computer == 'piedra'){
        alert('Has ganado, felicitaciones. La computadora eligió: ' + computer);
    }else if(player == 'papel' && computer == 'papel'){
        alert('Es un empate. La computadora eligió: ' + computer);
    }else if(player == 'papel' && computer == 'tijera'){
        alert('Has perdido contra la maquina. La computadora eligió: ' + computer);
    }

    // OPCION: JUGADOR ESCOGE TIJERA
    if(player == 'tijera' && computer == 'piedra'){
        alert('Has perdido contra la maquina. La computadora eligió: ' + computer);
    }else if(player == 'tijera' && computer == 'papel'){
        alert('Has ganado, felicitaciones. La computadora eligió: ' + computer);
    }else if(player == 'tijera' && computer == 'tijera'){
        alert('Es un empate. La computadora eligió: ' + computer);
    }    
}