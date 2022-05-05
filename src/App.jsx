import Header from './components/header/index.jsx'
import { useState, useRef } from 'react'
import './App.css'
import copy from './../copy.svg'
import trash from './../trash.svg'

function App() {
    const [textoFormateado, setTextoFormateado] = useState('')
    const elMessage = useRef(null)
    const elTextoFomateado = useRef(null)

    const removerComas = () => {
        let text = textoFormateado.replace(/,/g, '')
        setTextoFormateado(text.replace(/;/g, ''))
    }

    const removerPuntos = () => {
        let text = textoFormateado.replace(/\./g, '')
        setTextoFormateado(text.replace(/:/g, ''))
    }

    const removerDosPuntos = () => {
        setTextoFormateado(textoFormateado.replace(/:/g, ''))
    }

    const convertirMayusculas = () => {
        setTextoFormateado(textoFormateado.toUpperCase())
    }

    const convertirMinusculas = () => {
        setTextoFormateado(textoFormateado.toLowerCase())
    }

    const removerTodo = () => {
        let text = textoFormateado.replace(/\./g, '')
        text = text.replace(/:/g, '')
        text = text.replace(/,/g, '')
        text = text.replace(/;/g, '')
        text = text.replace(/\d/g, '')
        // remover espacios al principio y final
        text = text.replace(/^\s+|\s+$/g, '')
        setTextoFormateado(text)
    }

    const removerNumeros = () => {
        setTextoFormateado(textoFormateado.replace(/\d/g, ''))
    }

    const handleCopy = (e) => {
        // copiar texto al portapapeles

        navigator.clipboard.writeText(textoFormateado)
        elMessage.current.innerHTML = 'Copiado!'
        //agergar una clase al elemento
        elMessage.current.classList.add('show-message')
        setTimeout(() => {
            elMessage.current.classList.remove('show-message')
        }, 3000)
    }

    const handleTrash = () => {
        setTextoFormateado('')
    }

    return (
        <div>
            <Header />
            <main className="main">
                <div className="actions">
                    <span className="btn" onClick={handleCopy}>
                        Copiar texto
                        <img src={copy} alt="" className="copyImg" />
                        <span className="message" ref={elMessage}></span>
                    </span>

                    <span className="btn" onClick={handleTrash}>
                        Borrar texto
                        <img src={trash} alt="" className="copyImg trash" />
                        <span className="message" ref={elMessage}></span>
                    </span>
                </div>
                <textarea
                    className="input-text-area"
                    onChange={(e) => setTextoFormateado(e.target.value)}
                    value={textoFormateado}
                    placeholder="Ingrese el texto que desea formatear"
                    rows="10"
                    ref={elTextoFomateado}
                ></textarea>

                <ul className="options">
                    <li className="option-item" onClick={removerTodo}>
                        Solo texto
                    </li>

                    <li className="option-item" onClick={removerComas}>
                        Eliminar comas
                    </li>
                    <li className="option-item" onClick={removerPuntos}>
                        Eliminar puntos
                    </li>
                    <li className="option-item" onClick={convertirMayusculas}>
                        TODO MAYÚSCULAS
                    </li>
                    <li className="option-item" onClick={convertirMinusculas}>
                        todo minúsculas
                    </li>
                    <li className="option-item" onClick={removerNumeros}>
                        Eliminar numeros
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default App
