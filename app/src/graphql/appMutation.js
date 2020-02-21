import { gql } from 'apollo-boost';

export const actualizarPedido= gql`
    mutation ActualizarPedido($PedIde: ID!, $input: PedidoEntrada) {
        actualizarPedido(PedIde: $PedIde, input: $input) {
            PedIde
        }
    }
`;

export const agregarPlato = gql`
    mutation AgregarPlato($PlaNom: String!, $PlaDes: String, $PlaFec: DateTime!, $PlaCat: String!) {
        agregarPlato(PlaNom: $PlaNom, PlaDes: $PlaDes, PlaFec: $PlaFec, PlaCat: $PlaCat){
            PlaIde
        }
    }
`;

export const agregarPedido = gql`
    mutation AgregarPedido($PedEnt: Int!, $PedFon: Int!, $PedRef: Int!, $PedFec: DateTime!, $PedEst: String!) {
        agregarPedido(PedEnt: $PedEnt, PedFon: $PedFon, PedRef: $PedRef, PedFec: $PedFec, PedEst: $PedEst){
            PedIde
        }
    }
`;