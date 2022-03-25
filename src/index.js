import React from "react"
import ReactDOM from "react-dom"
import './styles.css'

const App = () => {
    const estilosBotao = {
        marginTop: 12,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: 'blueviolet',
        color: 'white',
        border: 'none',
        width: '100%',
        borderRadius: 8

    }
    const textodoRotulo = 'Nome'
    const obterTextoDoBotao = () => "Enviar"
    //const obterTextoDoBotaoReturn = () => {
    //    return "Enviar"
    //}
    return(
        <div style={{margin: 'auto', width: 768, backgroundColor: 
        '#EEE', padding: 12, borderRadius: 8}}>
            <label className="rotulo" htmlFor="nome" style={{display: 'block', 
            marginBottom: 4}}>{textodoRotulo}</label>
            <input id="nome" type="text" style={{paddingTop: 8, 
            paddingBottom: 8, borderStyle: 'hidden', width: '100%', 
            borderRadius: 8, outline: 'none'}}></input>
            <buttom style={estilosBotao}>{obterTextoDoBotao}</buttom>
        </div>
    )   
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)