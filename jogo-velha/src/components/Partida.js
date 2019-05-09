import React from "react";



export default class Partida extends React.Component{


    render() {
        return(
            <div>
                <h2>{this.props.partida.estadio}</h2>
                <div>
                    <span>{this.props.partida.data}</span>
                    <span> - </span>
                    <span>{this.props.partida.horario}</span>
                </div>
                
            </div>
        )
    }
}