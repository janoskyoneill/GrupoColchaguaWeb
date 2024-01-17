function sendMail() {
    var params = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        ciudad: document.getElementById("ciudad").value,
        comuna: document.getElementById("comuna").value,
        codigoPais: document.getElementById("codigoPais").value,
        telefono: document.getElementById("telefono").value,
        rut: document.getElementById("rut").value,
        ayuda: document.getElementById("ayuda").value,
        archivo: document.getElementById("archivo").value,
    };

    const serviceID = "service_bnhu2o7";
    const templateID = "template_t7yyupl";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("ciudad").value = "";
            document.getElementById("comuna").value = "";
            document.getElementById("codigoPais").value = "";
            document.getElementById("telefono").value = "";
            document.getElementById("rut").value = "";
            document.getElementById("ayuda").value = "";
            document.getElementById("archivo").value = "";
            console.log(res);
            alert("Tu mensaje se ha enviado correctamente!!!")

        })
        .catch(err => console.log(err));

}