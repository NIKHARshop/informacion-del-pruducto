document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "573197660129";

 
  const codigo = document.querySelector("#codigo").value;
  const talla = document.querySelector("#talla").value;
  const color = document.querySelector("#color").value;
  const observaciones = document.querySelector("#observaciones").value;
  const numerodecalzado = document.querySelector("#numerodecalzado").value;
  
  
  const resp = document.querySelector("#respuesta");  

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
  *_NIKHARshopformulario_*%0A
        *CODIGO*%0A
        ${codigo}%0A
        *TALLA*%0A
        ${talla}%0A
        *NUMERO DE CALZADO*%0A
        ${numerodecalzado}%0A
        *COLOR*%0A
        ${color}%0A
        *OBSERVACIONES*%0A
        ${observaciones}`;

  if (codigo === '' || talla === '' || color === '') {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${codigo}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu pedido, ${codigo}`;

  window.open(url);
});
