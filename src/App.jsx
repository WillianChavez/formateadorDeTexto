import Header from './components/header/index.jsx'
import { useState, useRef } from 'react'
import './App.css'
import copy from './../copy.svg'

function App() {
    const [textoFormateado, setTextoFormateado] = useState('')
    const elMessage = useRef(null)
    const elTextoFomateado = useRef(null)

    const removerComas = () => {
        setTextoFormateado(textoFormateado.replace(/,/g, ''))
    }

    const removerPuntos = () => {
        setTextoFormateado(textoFormateado.replace(/\./g, ''))
    }

    const convertirMayusculas = () => {
        setTextoFormateado(textoFormateado.toUpperCase())
    }

    const convertirMinusculas = () => {
        setTextoFormateado(textoFormateado.toLowerCase())
    }

    const handleCopy = (e) => {
        // copiar texto al portapapeles
        elTextoFomateado.current.select()
        document.execCommand('copy')

        elMessage.current.innerHTML = 'Copiado!'
        //agergar una clase al elemento
        elMessage.current.classList.add('show-message')
        setTimeout(() => {
            elMessage.current.classList.remove('show-message')
        }, 3000)
    }
    return (
        <div>
            <Header />
            <main className="main">
                <span className="btn" onClick={handleCopy}>
                    Copiar texto
                    <img src={copy} alt="" className="copyImg" />
                    <span className="message" ref={elMessage}></span>
                </span>
                <textarea
                    className="input-text-area"
                    onChange={(e) => setTextoFormateado(e.target.value)}
                    value={textoFormateado}
                    placeholder="Ingrese el texto que desea formatear"
                    rows="10"
                    ref={elTextoFomateado}
                ></textarea>

                <ul className="options">
                    <li className="option-item" onClick={removerComas}>
                        Eliminar comas ( , )
                    </li>
                    <li className="option-item" onClick={removerPuntos}>
                        Eliminar puntos ( . )
                    </li>
                    <li className="option-item" onClick={convertirMayusculas}>
                        Convertir a mayúsculas
                    </li>
                    <li className="option-item" onClick={convertirMinusculas}>
                        Convertir a minúsculas
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default App
