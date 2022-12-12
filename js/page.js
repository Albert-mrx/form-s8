//----------------Datos de validacion de formulario---------
///input
    //usuario
const usuario = document.getElementById('usuario');
const msgError = document.getElementById('input-error');
const msgVal = document.getElementById('validacion-estado');
    //nombre usuario
const nombre = document.getElementById('nombre');
const msgError2 = document.getElementById('input-error2');
const msgVal2 = document.getElementById('validacion-estado2');
    //contraseña
const password = document.getElementById('password');
const msgError3 = document.getElementById('input-error3');
const msgVal3 = document.getElementById('validacion-estado3');
    //contraseña 2
const password2 = document.getElementById('password2');
const msgError4 = document.getElementById('input-error4');
const msgVal4 = document.getElementById('validacion-estado4');
    //Email
const correo = document.getElementById('correo');
const msgError5 = document.getElementById('input-error5');
const msgVal5 = document.getElementById('validacion-estado5');
    //telefono
const telefono = document.getElementById('telefono');
const msgError6= document.getElementById('input-error6');
const msgVal6 = document.getElementById('validacion-estado6');

//----------------validando con jQuery--------------
$('#btn-Enviar').click(enviar);
function enviar(){
    //valores de entrada
    let user =usuario.value;
    let nameUser = nombre.value;
    let pwd = password.value;
    let pwd2 = password2.value;
    let email = correo.value;
    let Phone = telefono.value;

    //ExprecionesRegulares
        //user
    let RegExpUser =/^[A-Za-z]+([\s]?[A-Za-z])*$/;
        //PWD
    let RegExpPwd = /^[A-Za-z]{1}[a-z]*[0-9]{1}/;
        //Email
    let RegExpEmail = /["A-Za-z"][0-9]{3}@gmail.com/g;
        //phone
    let RegExpPhone = /[9]{1}[0-9]+/g;
    if(user==""||nameUser==""||pwd==""||pwd2=="" ||email==""||Phone==""){
        $('.msgform').html("complete los campos por favor");
    }else{
        //validamos las Expreciones
    if(!RegExpUser.test(user)){
        $('#input-error').html("El usuario tiene que ser Mayusculas ,espacio y Minusculas ❌");
    }else{
        $('#validacion-estado').html("correcto✅");
    }
        //name User
    if(!RegExpUser.test(nameUser)){
        $('#input-error2').html("El Nombre tiene que ser Mayusculas, espacio y Minusculas.❌");
    }else{
        $('#validacion-estado2').html("correcto✅");
    }
        //password
    if(!RegExpPwd.test(pwd)){
        $('#input-error3').html("La contraseña tiene que tener caracteres numericos,letras,especiales❌");
    }else{
        $('#validacion-estado3').html("correcto✅");
    }
        //comparando password
    if(pwd2===pwd){
        $('#validacion-estado4').html("correcto✅");
    }else{
        $('#input-error4').html("Ambas contraseñas deben ser iguales❌");
    }
        //email
    if(!RegExpEmail.test(email)){
        $('#input-error5').html("El correo solo puede contener letras, numeros, puntos y @gamil.com❌");
    }else{
        $('#validacion-estado5').html("correcto✅");
    }
        //numero celular
    if(!RegExpPhone.test(Phone)){
        $('#input-error6').html("El telefono solo puede contener numeros y empezar con 9 tener  9 dígitos.❌");
    }else{
        $('#validacion-estado6').html("correcto✅");
    }
    }
}
$('#reload').click(function(){
    $(":button").unload();
})


