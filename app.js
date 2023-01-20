const productos = [
    { nombre: "arroz", precio: 200 },
    { nombre: "pan", precio: 250 },
    { nombre: "galletas", precio: 380 },
    { nombre: "fideos", precio: 180 },
    { nombre: "aceite", precio: 600 },
    { nombre: "arvejas", precio: 230 },
];
let carrito = []

let seleccion = prompt("¿Necesitas comprar algo?")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa, si o no")
    seleccion = prompt("¿Necesitabas algo?")
}

if (seleccion == "si") {
    alert("Gracias, por tu respuesta, Te mostramos nuestros productos")
    let nuestrosProductos = productos.map((productos) => productos.nombre + " " + "$" + productos.precio);
    alert(nuestrosProductos.join(" - "))
} else if (seleccion == "no") { alert("Gracias por tu visita!") }

while (seleccion != "no") {
    let producto = prompt("Agrega lo que quieras comprar")
    let precio = 0

    if (producto == "arroz" || producto == "pan" || producto == "galletas" || producto == "fideos" || producto == "aceite" || producto == "arvejas") {
        switch (producto) {
            case "arroz":
                precio = 200;
                break;
            case "pan":
                precio = 250;
                break;
            case "galletas":
                precio = 380;
                break;
            case "fideos":
                precio = 180;
                break;
            case "aceite":
                precio = 600;
                break;
            case "arvejas":
                precio = 230;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("Cuantas unidades queres llevar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito);
    } else {
        alert("No disponemos de stock de ese producto")
    }

    seleccion = prompt("Necesitas algo mas?")
    while (seleccion === "no") {
        alert("Gracias por tu compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},Total: ${carritoFinal.unidades * carritoFinal.precio}`);
        })
        break;
    }
}

const total = carrito.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: " ${total}`);