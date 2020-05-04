// Paginado
// Crear un componente Pagina que tome los siguientes props:

// actual, número de la página actual
// maximo, número de la página máxima
// y renderice un paginado de la siguiente forma: [Previous] [1] [...] [5] [...] [10] [Next], es decir, la página 1, puntos suspensivos, la página actual, puntos suspensivos y la página máxima, con las palabras para avanzar y retroceder.

// Ignorar lo que sucede si la página actual es igual a la primera o a la última.

// Darle algunos estilos

const root = document.getElementById('root')
const e = React.createElement


const Pagina = ({actual, maximo}) => {
    
    return [
        e('button', {className: 'wrapper btn previous'}, "Previous"),
        e('div', {className: 'page-wrapper odd'}, 
            e('p', {className: 'page-txt'}, 1)),
        e('div', {className: 'page-wrapper'}, 
            e('p', {className: 'page-txt'}, ". . .")),
        e('div', {className: 'page-wrapper odd'}, 
            e('p', {className: 'page-txt'}, actual)),
        e('div', {className: 'page-wrapper'},   
            e('p', {className: 'page-txt'}, ". . .")),
        e('div', {className: 'page-wrapper odd'}, 
            e('p', {className: 'page-txt'}, maximo)),
        e('button', {className: 'wrapper btn next'}, "Next")
    ]
}

const Paginas = () => {
    return e('div', {className: 'pages-wrapper'}, 
        e(Pagina, ({actual: 5, maximo: 15})))
}

const App = () => {
    return e('main', null, e(Paginas))
}

ReactDOM.render(e(App), root)