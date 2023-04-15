$(document).ready(function () {
    document.getElementById("form1").addEventListener('submit', validaForm1);
    document.getElementById("form2").addEventListener('submit', validaForm2);
    
    function validaForm1(evento) {
        evento.preventDefault();
        var nombre = document.getElementById('nombre');
        if (nombre.value.trim() === "") {
            alert("El campo nombre es obligatorio.");
            nombre.focus();
            return 0;
        }
        var correo = document.getElementById('correo');
        if (correo.value.trim() === "") {
            alert("El campo correo es obligatorio.");
            correo.focus();
            return 0;
        }
        var telefono = document.getElementById('telefono');
        if (telefono.value.trim() === "") {
            alert("El campo telefono es obligatorio.");
            telefono.focus();
            return 0;
        }
        var motivo = document.getElementById('motivo');
        if (motivo.value.trim() === "") {
            alert("El campo motivo es obligatorio.");
            motivo.focus();
            return 0;
        }
        alert("Muchas gracias " + nombre.value + " hemos recibido su " + motivo.value + " y enviaremos una pronta respuesta al correo " + correo.value);
        this.submit();
    }

    function validaForm2(evento) {
        evento.preventDefault();
        var nombre = document.getElementById('nombre2');
        if (nombre.value.trim() === "") {
            alert("El campo nombre es obligatorio.");
            nombre.focus();
            return 0;
        }
        var correo = document.getElementById('correo2');
        if (correo.value.trim() === "") {
            alert("El campo correo es obligatorio.");
            correo.focus();
            return 0;
        }
        var telefono = document.getElementById('telefono2');
        if (telefono.value.trim() === "") {
            alert("El campo telefono es obligatorio.");
            telefono.focus();
            return 0;
        }
        var cantidad = document.getElementById('cantidad');
        if (cantidad.value.trim() === "") {
            alert("El campo cantidad es obligatorio.");
            cantidad.focus();
            return 0;
        }
        alert("Muchas gracias " + nombre.value + " hemos recibido su reserva para " + cantidad.value + " personas, enviaremos una copia al correo " + correo.value);
        this.submit();
    }

    $(".cerrar").click(function () {
        $(".modal").hide();
    });

    $('#img1').click(function () {       
        $("#modal1").show();
    });

    $('#img2').click(function () {
        $("#modal2").show();
    });

    $('#img3').click(function () {
        $("#modal3").show();
    });

});

$("#modal1").hide();
$("#modal2").hide();
$("#modal3").hide();