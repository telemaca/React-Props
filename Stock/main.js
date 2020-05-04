// Stock y ListaStock
// Crear un componente Stock que tome como props producto (string correspondiente a nombre), cantidad (número) y maximo (número), y renderice un elemento li que: - si la cantidad es menor al 10% de maximo, ponga el texto en rojo - si la cantidad es mayor a 10% de maximo y menor al 25% de maximo, ponga el texto en naranja - si la cantidad es mayor al 25% de maximo y menor al 40% de maximo, ponga el texto en amarillo - si la cantidad es mayor al 40% de maximo, ponga el texto en verde

// Crear un componente ListaStock que tome una lista de productos y renderice un ul con un array de Stock por cada ítem de la lista. Ejemplo de lista:

const root = document.getElementById('root')
const e = React.createElement

const productos = [
  {producto: 'Chocolates', cantidad: 34, maximo: 100},
  {producto: 'Caramelos', cantidad: 99, maximo: 200},
  {producto: 'Turrones', cantidad: 3, maximo: 50},
  {producto: 'Alfajores', cantidad: 25, maximo: 130},
  {producto: 'Tortas', cantidad: 9, maximo: 10},
]


const Stock = ({ producto, cantidad, maximo }) => {
    const porcentaje = (cantidad * 100) / maximo
    let classColor = ''
    if (porcentaje <= 10) {
        classColor = 'red-font'
    } else if (porcentaje <= 25) {
        classColor = 'orange-font'
    } else if (porcentaje <= 40) {
        classColor = 'yellow-font'
    } else {
        classColor = 'green-font'
    }

    return e('li', null, e('p', {className: `${classColor}`}, producto))
}

const ListaStock = ({ productos }) => {
    const lista = productos.map((producto) =>
        e(Stock, {
            producto: producto.producto,
            cantidad: producto.cantidad,
            maximo: producto.maximo
        }))

    return e('ul', null, lista)
}


const App = () => {
    return e('main', null, e(ListaStock, {productos}))
}

ReactDOM.render(e(App), root)