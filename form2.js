function sendMail() {
    var params = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        empresa: document.getElementById("empresa").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        rut: document.getElementById("rut").value,
        ayuda: document.getElementById("ayuda").value,
    };

    const serviceID = "service_i98j9f7";
    const templateID = "template_xygjnzs";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("empresa").value = "";
            document.getElementById("direccion").value = "";
            document.getElementById("telefono").value = "";
            document.getElementById("rut").value = "";
            document.getElementById("ayuda").value = "";

            console.log(res);
            alert("Tu mensaje se ha enviado correctamente!!!")

        })
        .catch(err => console.log(err));

}