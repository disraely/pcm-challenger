import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { actualizarPedido } from '../graphql/appMutation';
import { ReactComponent as Icon} from '../assets/svg/tail-spin.svg';

export class Pedidos extends Component {
    render() {
        return (
            <div>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Entrada</th>
                            <th scope="col">Plato de Fondo</th>
                            <th scope="col">Refresco</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Query query={this.props.graphqlQuery} variables = {this.props.graphqlVar}>
                        {({ loading, error, data }) => {
                            if (loading) return <tr><th><Icon /> Loading</th></tr>
                            if (error){
                            return <tr><th>Error al recuperar los datos</th></tr>;
                            }
                            return data.PedidosPorEstado.map(pedido => {
                                return (
                                    <tr key={pedido.PedIde}>
                                        <th scope="row">{pedido.PedIde}</th>
                                        <td>{pedido.PedPlaEnt.PlaNom}</td>
                                        <td>{pedido.PedPlaFon.PlaNom}</td>
                                        <td>{pedido.PedPlaRef.PlaNom}</td>
                                        <td>{pedido.PedFec}</td>
                                        {((pedido.PedEst === 'N' || pedido.PedEst === 'L') && this.props.ChgEst !== '') ? (
                                            <td>
                                                <Mutation mutation={actualizarPedido} refetchQueries={[{ query: this.props.graphqlQuery, variables: this.props.graphqlVar }, { query: this.props.graphqlQuery, variables: { PedFec: this.props.graphqlVar.PedFec, PedEst: "L"}}, { query: this.props.graphqlQuery, variables: { PedFec: this.props.graphqlVar.PedFec, PedEst: "E"}}]}>
                                                {(actualizarPedido, { loading, error }) => (
                                                    <button onClick={e => {
                                                        e.preventDefault();
                                                        console.log(this.props.graphqlVar.PedFec);
                                                        actualizarPedido({ 
                                                            variables: { 
                                                                PedIde: pedido.PedIde,
                                                                input: {
                                                                    PedEnt: pedido.PedEnt,
                                                                    PedFon: pedido.PedFon,
                                                                    PedRef: pedido.PedRef,
                                                                    PedFec: pedido.PedFec,
                                                                    PedEst: this.props.ChgEst
                                                                } 
                                                            } 
                                                        });
                                                    }}>{pedido.PedEst === 'L' ? 'Cambiar a Entregado' : 'Cambiar a Listo'}</button> 
                                                )}
                                                </Mutation>
                                            </td>
                                        ) : (
                                            <td>{pedido.PedEst === 'L' ? 'Listo' : 'Entregado'}</td>
                                        )}
                                    </tr>
                                );
                            })
                        }}
                        </Query>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Pedidos;