import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { agregarPedido } from '../graphql/appMutation';
import { PlatosPorCategoria, PedidosPorEstado } from '../graphql/appQuery';
import { Pedidos } from '../containers/Pedidos';
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-fns/format";

class Mozo extends Component {

    constructor(props) {
        super(props);
        var date = format(new Date(), "yyyy-MM-dd");
        this.state = {PedEnt: '', PedFon: '', PedRef: '', PedFec: date, PedEst: 'N'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const varName = target.name;
        if (varName === 'PedEnt'){
            this.setState({PedEnt: event.target.value});
        } else if (varName === 'PedFon'){
            this.setState({PedFon: event.target.value});
        } else if (varName === 'PedRef'){
            this.setState({PedRef: event.target.value});
        }
    }
  
    render() {
        return (
            <div className="Cocina">
                <p><Link to={'/'} className="linkDashboard"> <FontAwesomeIcon icon={faArrowCircleLeft} /> Regresar </Link></p>
                <h1>Mozo</h1>
                <hr></hr>
                <Mutation mutation={agregarPedido}>
                    {(agregarPedido, { loading, error }) => (
                    <div>
                        <form className="food-formulario" onSubmit={e => {
                                e.preventDefault();
                                agregarPedido({ variables: { PedEnt: Number(this.state.PedEnt), PedFon: Number(this.state.PedFon), PedRef: Number(this.state.PedRef), PedFec: this.state.PedFec, PedEst: this.state.PedEst } });
                        }}>
                            <h2>Agregar Nuevo Pedido</h2>
                            <hr></hr>
                            <div className="form-group">
                                <label>Plato de Entrada:</label>
                                <select id="PedEnt" name="PedEnt" value={this.state.PedEnt} onChange={this.handleChange}>
                                    <option value="-1">--Seleccione uno--</option>
                                    <Query query={PlatosPorCategoria} variables = {{ PlaFec: this.state.PedFec, PlaCat: "E" }}>
                                        {({ loading, error, data }) => {
                                        if (loading) return <option value="-1">--Seleccione uno--</option>
                                        if (error){
                                            return <option value="-1">--Seleccione uno--</option>;
                                        }
                                        return data.platosPorCategoria.map(plato => {
                                            return (
                                                <option key={plato.PlaIde} value={plato.PlaIde}>{plato.PlaNom}</option>
                                            );
                                        })
                                    }}
                                    </Query>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Plato de Fondo:</label>
                                <select id="PedFon" name="PedFon" value={this.state.PedFon} onChange={this.handleChange}>
                                    <option value="-1">--Seleccione uno--</option>
                                    <Query query={PlatosPorCategoria} variables = {{ PlaFec: this.state.PedFec, PlaCat: "P" }}>
                                        {({ loading, error, data }) => {
                                        if (loading) return <option value="-1">--Seleccione uno--</option>
                                        if (error){
                                            return <option value="-1">--Seleccione uno--</option>;
                                        }
                                        return data.platosPorCategoria.map(plato => {
                                            return (
                                                <option key={plato.PlaIde} value={plato.PlaIde}>{plato.PlaNom}</option>
                                            );
                                        })
                                    }}
                                    </Query>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Refresco:</label>
                                <select id="PedRef" name="PedRef" value={this.state.PedRef} onChange={this.handleChange}>
                                    <option value="-1">--Seleccione uno--</option>
                                    <Query query={PlatosPorCategoria} variables = {{ PlaFec: this.state.PedFec, PlaCat: "R" }}>
                                        {({ loading, error, data }) => {
                                        if (loading) return <option value="-1">--Seleccione uno--</option>
                                        if (error){
                                            return <option value="-1">--Seleccione uno--</option>;
                                        }
                                        return data.platosPorCategoria.map(plato => {
                                            return (
                                                <option key={plato.PlaIde} value={plato.PlaIde}>{plato.PlaNom}</option>
                                            );
                                        })
                                    }}
                                    </Query>
                                </select>
                            </div>
                            <button type="submit">Hacer pedido</button>
                        </form>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error :( Please try again</p>}
                    </div>
                )}
                </Mutation>
                <div className="menu-grilla">
                    <p className="grilla-tittle">Pedidos Listos</p>
                    <hr></hr>
                    <Pedidos graphqlQuery={PedidosPorEstado} graphqlVar={{PedFec: this.state.PedFec, PedEst: "L"}} pedidoEstado={this.state.PedEst} ChgEst="E"/>
                    <hr></hr>
                    <p className="grilla-tittle">Pedidos Entregados</p>
                    <hr></hr>
                    <Pedidos graphqlQuery={PedidosPorEstado} graphqlVar={{PedFec: this.state.PedFec, PedEst: "E"}} pedidoEstado={this.state.PedEst} ChgEst=""/>
                </div>
            </div>
        );
    }
  }
  
  export default Mozo;
  