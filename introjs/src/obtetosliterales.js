//Objetos literales

const alumno = {
    nombre: 'Miguel Chuil',
    correo: 'developer.chuil@gmail.com',
    edad: 20,
    direccion:{
        calle: 'Olivos #4',
        zip: 30500,
        ciudad: 'Mexico',
    }
}

//reasignado valores
alumno.edad = 80;
alumno.direccion.calle = 'Av. Reforma #456'


//leer propiedades
console.log(alumno)
console.log(alumno.direccion)

//agregar mas propiedades al objeto
alumno.telefono = '9876543621'
alumno.direccion.departamento = 'Norte de Santander'


//objeto literal con funciones
const cuentaBancaria = {
    cliente: 'Miguel Chuil',
    banco: 'BBVA',
    nocuenta: 123456789,
    saldo: 0,
    tipo: 'Debito',
    info: function(){
        console.log(`Cliente: ${this.cliente}
        Banco: ${this.banco}
        Numero de cuenta: ${this.nocuenta}
        Tipo de cuenta: ${this.tipo}`)
    },
    depositar: function(cantidad){
        this.saldo += cantidad
        console.log(`Deposito por ${cantidad} correcto...`)
        this.consultarSaldo()
    },
    retirar: function(cantidad){
        if(cantidad > this.saldo){
            console.log(`Saldo insuficiente para retirar ${cantidad}`)
            return
        }

        this.saldo -= cantidad
        console.log(`Retiro de ${cantidad} correcto...`)
        this.consultarSaldo()
    },
    consultarSaldo: function (){
        console.log(`Su saldo actual es ${this.saldo}`)
    }
}

cuentaBancaria.info()


// crear una función para depositar, para retirar y para mostrar el saldo de la cuenta
cuentaBancaria.depositar(5000000)
cuentaBancaria.depositar(1500000)

cuentaBancaria.retirar(10000000)
cuentaBancaria.retirar(500000)

cuentaBancaria.consultarSaldo()

