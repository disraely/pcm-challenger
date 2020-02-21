'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\n  scalar DateTime\n  type Query {\n    platos: [Plato]\n    pedidos: [Pedido]\n    plato(PlaIde: Int!): Plato\n    platosPorCategoria(PlaFec: DateTime!, PlaCat: String!): [Plato]\n    PedidosPorEstado(PedFec: DateTime!, PedEst: String!): [Pedido]\n    pedido(PedIde: Int!): Pedido\n    menuDiario(PlaFec: DateTime!): [Plato]\n  }\n\n  type Plato {\n    PlaIde: ID!\n    PlaNom: String\n    PlaDes: String\n    PlaFec: DateTime\n    PlaCat: String\n  }\n\n  type Pedido {\n    PedIde: ID!\n    PedPlaEnt: Plato\n    PedEnt: Int\n    PedPlaFon: Plato\n    PedFon: Int\n    PedPlaRef: Plato\n    PedRef: Int\n    PedFec: DateTime\n    PedEst: String\n  }\n\n  input PlatoEntrada {\n    PlaNom: String\n    PlaDes: String\n    PlaFec: DateTime\n    PlaCat: String\n  }\n\n  input PedidoEntrada {\n    PedEnt: Int\n    PedFon: Int\n    PedRef: Int\n    PedFec: DateTime\n    PedEst: String\n  }\n\n  type Mutation {\n    agregarPlato(PlaNom: String!, PlaDes: String, PlaFec: DateTime!, PlaCat: String!): Plato\n    agregarPedido(PedEnt: Int!, PedFon: Int!, PedRef: Int!, PedFec: DateTime!, PedEst: String!): Pedido\n    actualizarPlato(PlaIde: ID!, input: PlatoEntrada): Plato\n    actualizarPedido(PedIde: ID!, input: PedidoEntrada): Pedido\n  }\n';

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});
//# sourceMappingURL=schema.js.map