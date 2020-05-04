// PuntajeItem y Puntaje
// Crear un componente PuntajeItem que tome un prop tipo con los valores lleno o vacio y muestre un ícono de una estrella llena o vacía según el caso

// Crear un componente Puntaje que tome un prop puntaje que sea del 1 al 5 y renderice 5 estrellas, siendo valor de score la cantidad de PuntajeItem con tipo lleno, mientras las restantes son tipo vacio, por ejemplo: ★★★✩✩

// Pueden usar íconos de FontAwesome o emojis

// EXTRA:

// Si usan íconos, permitir cambiar el color de las estrellas
// Permitir que PuntajeItem pueda tener otra ícono (corazón por ejemplo) y pueda ser configurado mediante un prop
// Permitir que Puntaje muestre un texto con el puntaje, por ejemplo: ★★★✩✩ 2 de 5 estrellas. Se puede ocultar el elemento usando una clase de CSS con la propiedad display: none


const root = document.getElementById('root')
const e = React.createElement

// <i class="far fa-star"></i> VACIA
// <i class="fas fa-star"></i> LLENA 


const PuntajeItem = ( { lleno = true, color, tipo = "star" } ) => {
    const iconoRelleno = lleno === true ? "fas" : "far"
    return e('i', { className: 
        `${iconoRelleno} fa-${tipo} ${color}-icon icon-style`} )
}

const Texto = ({llevaTexto, puntaje}) => {
    const text = llevaTexto === true ? `${puntaje} de 5` : ``
    return e('p', { className: 'info-text'}, text)
}

const Puntaje = ( { puntaje, color, tipo, texto = false } ) => {
    const score = []
    for (let i = 0; i < puntaje; i++) {
        score.push(e(PuntajeItem, ({ color: color, tipo: tipo })))
    }
    for (let i = 0; i < 5 - puntaje; i++) {
        score.push(e(PuntajeItem, 
            ( { lleno: false, color: color, tipo: tipo } )))
    }

    return e('div', {className: 'score-wrapper'}, [score, 
        e(Texto, ({llevaTexto: texto, puntaje: puntaje}))])
}

const App = () => {
    return e('main', null, [
        e(Puntaje, ( { puntaje: 5, texto: true} )),
        e(Puntaje, ( { puntaje: 2, color: 'green'} )),
        e(Puntaje, ( { puntaje: 4, color: 'red', tipo: 'heart'} ))
    ])
}

ReactDOM.render(e(App), root)