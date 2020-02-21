import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { agregarPlato } from '../graphql/appMutation';
import { PedidosPorEstado } from '../graphql/appQuery';
import { Pedidos } from '../containers/Pedidos';
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-fns/format";

class Cocinero extends Component {

    constructor(props) {
        super(props);
        var date = format(new Date(), "yyyy-MM-dd");
        this.state = {PlaNom: '', PlaDes: '', PlaFec: date, PlaCat: '', PedEst: 'L'};
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const varName = target.name;
        if (varName === 'PlaNom'){
            this.setState({PlaNom: event.target.value});
        } else if (varName === 'PlaDes'){
            this.setState({PlaDes: event.target.value});
        } else if (varName === 'PlaFec'){
            this.setState({PlaFec: event.target.value});
        } else if (varName === 'PlaCat'){
            this.setState({PlaCat: event.target.value});
        }  
    }
  
    render() {
      return (
        <div className="Cocina">
            <p><Link to={'/'} className="linkDashboard"> <FontAwesomeIcon icon={faArrowCircleLeft} /> Regresar </Link></p>
            <h1>Cocinero</h1>
            <hr></hr>
            <Mutation mutation={agregarPlato}>
                {(agregarPlato, { loading, error }) => (
                <div>
                    <form className="food-formulario" onSubmit={e => {
                        e.preventDefault();
                        agregarPlato({ variables: { PlaNom: this.state.PlaNom, PlaDes: this.state.PlaDes, PlaFec: this.state.PlaFec, PlaCat: this.state.PlaCat } });
                    }}>
                        <h2>Agregar Nuevo Plato</h2>
                        <hr></hr>
                        <div className="form-group">
                            <label>Nombre del plato:</label>
                            <input placeholder="Nombre del plato" name="PlaNom" value={this.state.PlaNom} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Descripcion del plato:</label>
                            <input  placeholder="Desc. del plato" name="PlaDes" value={this.state.PlaDes} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Fecha:</label>
                            <input type="date" name="PlaFec" value={this.state.PlaFec} onChange={this.handleChange} disabled/>
                        </div>
                        <div className="form-group">
                            <label>Categoría:</label>
                            <select id="PlaCat" name="PlaCat" value={this.state.PlaCat} onChange={this.handleChange}>
                                <option value="-1">--Seleccione uno--</option>
                                <option value="E">Entrada</option>
                                <option value="P">Plato de Fondo</option>
                                <option value="R">Refresco</option>
                            </select>
                        </div>
                        <button type="submit">Agregar plato</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again</p>}
                </div>
            )}
            </Mutation>
            <div className="menu-grilla">
                <p className="grilla-tittle">Pedidos Nuevos</p>
                <hr></hr>
                <Pedidos graphqlQuery={PedidosPorEstado} graphqlVar={{PedFec: this.state.PlaFec, PedEst: "N"}} pedidoEstado={this.state.PedEst} ChgEst="L"/>
                <hr></hr>
                <p className="grilla-tittle">Pedidos Listos</p>
                <hr></hr>
                <Pedidos graphqlQuery={PedidosPorEstado} graphqlVar={{PedFec: this.state.PlaFec, PedEst: "L"}} pedidoEstado={this.state.PedEst} ChgEst=""/>
            </div>
        </div>
      );
    }
  }
  
  export default Cocinero;
  