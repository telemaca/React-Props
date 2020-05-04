const root = document.getElementById('root')
const e = React.createElement

// Precio
// Crear un componente Precio que tenga los props:

// valor, que toma un número
// moneda, que tome un string con el tipo de moneda (ARS, USD, EUR, etc.)
// y que renderice el precio formateado con el símbolo de la moneda adelante

// Investigar Intl.NumberFormat

const Precio = ( {valor, moneda} ) => {
    const precioAMostrar = new Intl.NumberFormat('en-US', {
        style: 'currency', currency: moneda
      }).format(valor);
      
    return e('p', null, precioAMostrar)
}


const App = () => {
    return e('main', null, [
        e(Precio, { valor: 10, moneda: "EUR"}),
        e(Precio, { valor: 100, moneda: "ARS"}),
        e(Precio, { valor: 15, moneda: "USD"}),
        e(Precio, { valor: 150, moneda: "JPY"})
    ])
}

ReactDOM.render(e(App), root)