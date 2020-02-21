import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  scalar DateTime
  type Query {
    platos: [Plato]
    pedidos: [Pedido]
    plato(PlaIde: Int!): Plato
    platosPorCategoria(PlaFec: DateTime!, PlaCat: String!): [Plato]
    PedidosPorEstado(PedFec: DateTime!, PedEst: String!): [Pedido]
    pedido(PedIde: Int!): Pedido
    menuDiario(PlaFec: DateTime!): [Plato]
  }

  type Plato {
    PlaIde: ID!
    PlaNom: String
    PlaDes: String
    PlaFec: DateTime
    PlaCat: String
  }

  type Pedido {
    PedIde: ID!
    PedPlaEnt: Plato
    PedEnt: Int
    PedPlaFon: Plato
    PedFon: Int
    PedPlaRef: Plato
    PedRef: Int
    PedFec: DateTime
    PedEst: String
  }

  input PlatoEntrada {
    PlaNom: String
    PlaDes: String
    PlaFec: DateTime
    PlaCat: String
  }

  input PedidoEntrada {
    PedEnt: Int
    PedFon: Int
    PedRef: Int
    PedFec: DateTime
    PedEst: String
  }

  type Mutation {
    agregarPlato(PlaNom: String!, PlaDes: String, PlaFec: DateTime!, PlaCat: String!): Plato
    agregarPedido(PedEnt: Int!, PedFon: Int!, PedRef: Int!, PedFec: DateTime!, PedEst: String!): Pedido
    actualizarPlato(PlaIde: ID!, input: PlatoEntrada): Plato
    actualizarPedido(PedIde: ID!, input: PedidoEntrada): Pedido
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})