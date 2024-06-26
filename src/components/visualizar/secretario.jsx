import React from "react";
import "./style.css";


export default function VisualizarSecretario({handleCloseVisualizar, dadosSecretario}){

    return(
        <div className="visualizar">
            <div className="body-visualizar">
                <div className="header-visualizar">
                    <div className="header-visualizar-info">
                        <h1>Informações sobre secretário</h1>
                        <div className="voltar">
                            <button className="button-voltar" onClick={handleCloseVisualizar} >Voltar</button>
                        </div>
                    </div>
                    <hr />     
                </div>
                
                <div className="visualizar-info">
                    <div className="coluna1">
                        <div className="nome">
                            <p>Nome</p>
                            <h1>{dadosSecretario.nome}</h1>
                        </div>
                    </div>
                    <div className="coluna2">
                        <div className="email">
                            <p>Email</p>
                            <h1>{dadosSecretario.email}</h1>
                        </div>
                        <div className="telefone">
                            <p>Telefone</p>
                            <h1>{dadosSecretario.telefone}</h1>
                        </div>
                    </div>  
                    <div className="coluna3">
                        <div className="tuno">
                            <p>Turno</p>
                            <h1>{dadosSecretario.turno}</h1>
                        </div>
                        <div className="cpf">
                            <p>CPF</p>
                            <h1>{dadosSecretario.cpf}</h1>
                        </div>
                    </div>   
                </div>     
                
            </div>
            
        </div>
    )
}