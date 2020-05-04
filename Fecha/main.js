// Fecha
// Crear un componente Fecha que tenga un prop fecha que tome un objeto de tipo Date, y renderice un elemento p con la fecha formateada, por ejemplo: miércoles, 29 de abril de 2020

// Investigar Intl.DateTimeFormat

const root = document.getElementById('root')
const e = React.createElement


const Fecha = ({fecha}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = new Intl.DateTimeFormat('es-AR', options).format(fecha)

    return e('p', null, fechaFormateada)
}


const App = () => {
    return e('main', null, [
        e(Fecha, {fecha: new Date}),
        e(Fecha, {fecha: new Date (1986, 7, 12)}),
        e(Fecha, {fecha: new Date (2016, 5, 16)}),
        e(Fecha, {fecha: new Date (1980, 3, 24)})
    ])
}

ReactDOM.render(e(App), root)