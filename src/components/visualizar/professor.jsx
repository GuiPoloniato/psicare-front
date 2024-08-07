import React from "react";
import TableProfAluno from "../table/profAlunos";
import "./style.css";

export default function VisualizarProfessor({handleCloseVisualizar, dadosProfessor}){

    return(
        <div className="visualizar">
            <div className="body-visualizar">
                <div className="header-visualizar">
                    <div className="header-visualizar-info">
                        <h1>Informações sobre professor</h1>
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
                            <h1>{dadosProfessor.nome}</h1>
                        </div>
                    </div>
                    <div className="coluna2">
                        <div className="email">
                            <p>Email</p>
                            <h1>{dadosProfessor.email}</h1>
                        </div>
                        <div className="telefone">
                            <p>Telefone</p>
                            <h1>{dadosProfessor.telefone}</h1>
                        </div>
                    </div>  
                    <div className="coluna3">
                        <div className="disciplina">
                            <p>Disciplina</p>
                            <h1>{dadosProfessor.disciplina}</h1>
                        </div>
                        <div className="cpf">
                            <p>CPF</p>
                            <h1>{dadosProfessor.cpf}</h1>
                        </div>
                    </div>   
                </div>     
                
            </div>
            <TableProfAluno/>
        </div>
    )
}