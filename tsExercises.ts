/*### 1. Tipos básicos

**Descripción**: Declara variables con los tipos básicos: `string`, `number`, `boolean`, `any`. Asegúrate de asignarles valores iniciales.

- Declara una variable llamada `nombre` de tipo `string` con el valor `"Juan"`.
- Declara una variable llamada `edad` de tipo `number` con el valor `25`.
- Declara una variable llamada `esEstudiante` de tipo `boolean` con el valor `true`.
- Declara una variable llamada `cualquierCosa` de tipo `any` con el valor `42`.
*/

let nombre: string = "Juan";
let edad: number = 25;
let esEstudiante: boolean = true;
let cualquierCosa: any = 42;

/*### 2. Inferencia de tipos

**Descripción**: Deja que TypeScript infiera el tipo de las variables basándose en el valor inicial.

**Requerimientos**:
- Declara una variable llamada `saludo` con el valor `"Hola, TypeScript"`.
- Declara una variable llamada `anios` con el valor `30`.
- Declara una variable llamada `esActivo` con el valor `false`.
*/

let saludo = "Hola, TypeScript";
let anios = 30;
let esActivo = false;


/*### 3. Tipos personalizados (type aliases)

**Descripción**: Define un tipo personalizado llamado `Persona` que represente a un individuo con las propiedades `nombre` (string) y `edad` (number). Luego, crea una variable de ese tipo.

**Requerimientos**:
- Define un `type` llamado `Persona`.
- Crea una variable llamada `persona1` de tipo `Persona` con los valores `{ nombre: "Ana", edad: 28 }`.*/

type Persona = {
    nombre: string,
    edad: number
}

const persona1: Persona = {
    nombre: "Ana",
    edad: 28
};


/*### 4. Interfaces

**Descripción**: Define una interfaz llamada `Producto` que incluya las propiedades `id` (number), `nombre` (string) y `precio` (number). Luego, crea un objeto basado en esa interfaz.

**Requerimientos**:
- Define una interfaz llamada `Producto`.
- Crea una variable llamada `producto1` que siga el formato de la interfaz con los valores `{ id: 1, nombre: "Café", precio: 10.5 }`.*/

interface Producto {
    id: number,
    nombre: string,
    precio: number
};

const producto1: Producto = {
    id: 1,
    nombre: "Café",
    precio: 10.5
};

/*### 5. Funciones y tipado

**Descripción**: Define una función llamada `multiplicar` que reciba dos parámetros de tipo `number` y devuelva su producto.

**Requerimientos**:
- La función debe llamarse `multiplicar`.
- Debe recibir dos parámetros: `a` y `b`.
- Debe devolver un valor de tipo `number`.*/

function multiplicar(a: number, b: number) {
    return a * b;
}


/*### 6. Parámetros opcionales y valores por defecto

**Descripción**: Crea una función llamada `saludar` que reciba un parámetro opcional llamado `nombre`. Si no se proporciona un nombre, la función debe usar "Amigo" como valor por defecto.

**Requerimientos**:
- La función debe llamarse `saludar`.
- Debe devolver un mensaje como `"Hola, Juan!"` o `"Hola, Amigo!"`.*/

function saludar(nombre: string = "Amigo"){
    return "Hola, " + nombre + "!";
}


/*### 7. Unión de tipos

**Descripción**: Crea una función llamada `mostrarResultado` que reciba un parámetro que puede ser de tipo `string` o `number` y devuelva una cadena de texto.

**Requerimientos**:
- La función debe llamarse `mostrarResultado`.
- Si el valor es un número, debe devolver `"El resultado es: [valor]"`.
- Si el valor es una cadena, debe devolver `"Mensaje recibido: [valor]"`.*/

function mostrarResultado(valor: string | number){
    if(typeof valor === "string"){
        return "Mensaje recibido: " + valor;
    } else if (typeof valor === "number"){
        return "El resultado es: " + valor;
    }
}


/*### 8. Intersección de tipos

**Descripción**: Define dos tipos llamados `Empleado` y `Usuario`. Luego, combina ambos tipos en uno solo llamado `EmpleadoUsuario` y crea un objeto que lo represente.

**Requerimientos**:
- `Empleado` debe tener una propiedad `salario` (number).
- `Usuario` debe tener una propiedad `email` (string).
- `EmpleadoUsuario` debe combinar ambas propiedades.*/

type Empleado = {
    salario: number
}

type Usuario = {
    email: string
}

type EmpleadoUsuario = Empleado & Usuario;

const empleadoUsuario1: EmpleadoUsuario = {
    salario : 10000,
    email: "empleadoUsuario@gmail.com"
};


/*### 9. Enumeraciones (Enums)

**Descripción**: Crea un enum llamado `EstadoPedido` con los valores `Pendiente`, `Procesando` y `Completado`. Luego, usa este enum para definir el estado de un pedido.

**Requerimientos**:
- Declara un enum llamado `EstadoPedido`.
- Declara una variable llamada `estadoActual` y asígnale el valor `EstadoPedido.Pendiente`.*/

enum EstadoPedido {
    Pendiente = "Pendiente",
    Procesando = "Procesando",
    Completado = "Completado"
}

const estadoActual = EstadoPedido.Pendiente;


/*### 10. Clases y constructores

**Descripción**: Crea una clase llamada `Animal` que tenga una propiedad `nombre` y un método `hacerSonido`. El nombre debe inicializarse mediante un constructor.

**Requerimientos**:
- La clase debe llamarse `Animal`.
- Debe tener un método llamado `hacerSonido` que imprima `"Sonido genérico"`.*/

class Animal {
    nombre: string

    constructor(nombre: string){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log("Sonido Genérico");
    }
}

/*### 11. Modificadores de acceso (public, private, protected)

**Descripción**: Crea una clase llamada `CuentaBancaria` con una propiedad privada llamada `saldo`. Implementa un método público para obtener el saldo y otro para agregar fondos.

**Requerimientos**:
- La clase debe llamarse `CuentaBancaria`.
- Debe tener un método llamado `obtenerSaldo`.
- Debe tener un método llamado `agregarFondos` que aumente el saldo.*/

class CuentaBancaria {
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo;
    }

    obtenerSaldo(): number{
        return this.saldo;
    }

    agregarFondos(): void{
        this.saldo += 100;
    }
}

/*### 12. Herencia

**Descripción**: Implementa una clase base llamada `Vehiculo` que tenga una propiedad `marca` y un método `encender`. Crea una subclase llamada `Auto` que añada una propiedad `puertas`.

**Requerimientos**:
- La clase base debe llamarse `Vehiculo` y tener:
  - Una propiedad pública `marca` inicializada mediante el constructor.
  - Un método `encender` que imprima `"Vehículo encendido"`.
- La subclase `Auto` debe:
  - Extender de `Vehiculo`.
  - Añadir una propiedad `puertas` inicializada mediante su constructor.
  - Implementar un método `abrirPuertas` que imprima `"Abriendo [número] puertas"`.*/

  class Vehiculo {
    marca: string

    constructor(marca: string){
        this.marca = marca;
    }

    encender(){
        console.log("Vehiculo encendido");
    }
  }

  class Auto extends Vehiculo {
    puertas: number

    constructor(puertas: number, marca: string){
        super(marca);
        this.puertas = puertas;
    }

    abrirPuertas(){
        console.log("Abriendo " + this.puertas + " puertas.");
    }
  }

  /*### 13. Genéricos

**Descripción**: Crea una función genérica llamada `revertirArray` que reciba un array de cualquier tipo y devuelva un nuevo array con los elementos en orden inverso.

**Requerimientos**:
- La función debe llamarse `revertirArray`.
- Debe aceptar un parámetro genérico `T` que sea un array de cualquier tipo.
- Debe devolver un nuevo array con los elementos en orden inverso.
- Prueba la función con un array de números y otro de cadenas.*/

function revertirArray(T){
    return T.reverse();
}

let numeros = [1,2,3,4,5,6,7,8,9];
let cadenas = ["Hola", "Esto", "Son", "Cadenas", "En", "TS"];

console.log(revertirArray(numeros));
console.log(revertirArray(cadenas));


/*### 14. Tuplas

**Descripción**: Usa una tupla para representar coordenadas en un espacio bidimensional y escribe una función que las imprima.

**Requerimientos**:
- Declara una tupla llamada `coordenadas` que contenga dos números (x, y).
- Crea una función llamada `imprimirCoordenadas` que acepte una tupla como argumento y muestre su contenido en el formato `(x, y)`.
- Prueba la función con diferentes valores.*/

let coordenadas: [number, number];

function imprimirCoordenadas(tupla){
    return coordenadas[0] & coordenadas[1];
}

let coordenadas1: [number, number] = [10, 20];
console.log(imprimirCoordenadas(coordenadas1));
