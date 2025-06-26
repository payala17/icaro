window.onload = function() {
  var formulario = document.querySelector('.formulario-contacto');
  formulario.onsubmit = function(e) {
    e.preventDefault(); // esto lo encontré googleando porque me parecía importante que no vuelva a recargar la página


    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completar todos los campos!');
      return;
    }

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    alert('Gracias por el mensaje!');

    formulario.reset();
  };
};