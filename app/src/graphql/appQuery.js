import { gql } from 'apollo-boost';

export const pedidosQuery = gql`
{
    pedidos {
        PedIde
        PedEnt
        PedPlaEnt {
            PlaNom
        }
        PedFon
        PedPlaFon {
            PlaNom
        }
        PedRef
        PedPlaRef {
            PlaNom
        }
        PedFec
        PedEst
    }
}  
`;

export const PlatosPorCategoria = gql`
    query PlatosPorCategoria($PlaFec: DateTime!, $PlaCat: String!) {
        platosPorCategoria(PlaFec: $PlaFec, PlaCat: $PlaCat) {
            PlaIde
            PlaNom
        }
    }
`;

export const PedidosPorEstado = gql`
    query PedidosPorEstado($PedFec: DateTime!, $PedEst: String!) {
        PedidosPorEstado(PedFec: $PedFec, PedEst: $PedEst) {
        PedIde
        PedEnt
        PedPlaEnt {
            PlaNom
        }
        PedFon
        PedPlaFon {
            PlaNom
        }
        PedRef
        PedPlaRef {
            PlaNom
        }
        PedFec
        PedEst
    }
}
`;

export const MenuDiario = gql`
    query MenuDiario($PlaFec: DateTime!) {
        menuDiario(PlaFec: $PlaFec) {
            PlaIde
            PlaNom
            PlaCat
        }
    }
`;