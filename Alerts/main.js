// Alert
// Crear un componente Alert que

// tenga como props status y message
// message es el mensaje de la alert
// status es un string con alguno de los siguientes valores:
// danger
// success
// warning
// info
// cada status renderiza el componente de un forma distinta, con sus propios colores de e iconos, de la siguiente forma:

const root = document.getElementById('root')
const e = React.createElement

// <i class="fas fa-exclamation-circle"></i>
// <i class="fas fa-check-circle"></i>
// <i class="fas fa-exclamation-triangle"></i>
// <i class="fas fa-info-circle"></i>

const ALERT_ICON = {
    danger: "fas fa-exclamation-circle",
    success: "fas fa-check-circle",
    warning: "fas fa-exclamation-triangle",
    info: "fas fa-info-circle"
}

const Alert = ( { status, message } ) => {
    return e('div', { className: `alert-wrapper ${status}-alert`}, [
        e('i', {className: `${ALERT_ICON[status]} ${status}-icon`}),
        e('p', {className: 'alert-text'}, message)
    ])
}

const App = () => {
    return e('main', null, [
        e(Alert, ( { status: "danger", message: "There was an error processing your request."} )),
        e(Alert, ( { status: "success", message: "Data uploaded to the server. Fire on!"} )),
        e(Alert, ( { status: "warning", message: "Seems your account is about to expire; upgrade now."} )),
        e(Alert, ( { status: "info", message: "Chakra is going live next month. Get ready!"} ))
    ])
}

ReactDOM.render(e(App), root)