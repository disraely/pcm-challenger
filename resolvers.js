'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _plato = require('./models/plato');

var _pedido = require('./models/pedido');

var _lodash = require('lodash');

var _graphqlTypeDatetime = require('graphql-type-datetime');

var _graphqlTypeDatetime2 = _interopRequireDefault(_graphqlTypeDatetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = exports.resolvers = {
  DateTime: _graphqlTypeDatetime2.default,
  Query: {
    platos: function platos() {
      return _plato.platos;
    },
    pedidos: function pedidos() {
      return _pedido.pedidos;
    },
    /*plato(obj, args, context, info) {
      return find(platos, { PlaIde: args.PlaIde });
    },*/
    plato: function plato(_, _ref) {
      var PlaIde = _ref.PlaIde;
      return (0, _lodash.find)(_plato.platos, { PlaIde: PlaIde });
    },
    platosPorCategoria: function platosPorCategoria(_, _ref2) {
      var PlaFec = _ref2.PlaFec,
          PlaCat = _ref2.PlaCat;
      return (0, _lodash.filter)(_plato.platos, { PlaFec: PlaFec, PlaCat: PlaCat });
    },
    PedidosPorEstado: function PedidosPorEstado(_, _ref3) {
      var PedFec = _ref3.PedFec,
          PedEst = _ref3.PedEst;
      return (0, _lodash.filter)(_pedido.pedidos, { PedFec: PedFec, PedEst: PedEst });
    },
    pedido: function pedido(_, _ref4) {
      var PedIde = _ref4.PedIde;
      return (0, _lodash.find)(_pedido.pedidos, { PedIde: PedIde });
    },
    menuDiario: function menuDiario(_, _ref5) {
      var PlaFec = _ref5.PlaFec;
      return (0, _lodash.filter)(_plato.platos, { PlaFec: PlaFec });
    }
  },
  /*Pedido: {
    PedPlaEnt(pedido) {
      return find(platos, { PlaIde: pedido.PedEnt }); ;
    }
  },*/
  Pedido: {
    PedPlaEnt: function PedPlaEnt(pedido) {
      return (0, _lodash.find)(_plato.platos, { PlaIde: pedido.PedEnt });
    },
    PedPlaFon: function PedPlaFon(pedido) {
      return (0, _lodash.find)(_plato.platos, { PlaIde: pedido.PedFon });
    },
    PedPlaRef: function PedPlaRef(pedido) {
      return (0, _lodash.find)(_plato.platos, { PlaIde: pedido.PedRef });
    }
  },
  Mutation: {
    agregarPlato: function agregarPlato(root, args) {
      var nuevoPlato = { PlaIde: _plato.platos.length, PlaNom: args.PlaNom, PlaDes: args.PlaDes, PlaFec: args.PlaFec, PlaCat: args.PlaCat };

      /*if (filter(platos, { PlaFec: args.PlaFec, PlaCat: "E" }).length > 1) {
        throw new Error('MAXENTRADAS');
      }
        if (filter(platos, { PlaFec: args.PlaFec, PlaCat: "P" }).length > 1) {
        throw new Error('MAXPFONDO');
      }
        if (filter(platos, { PlaFec: args.PlaFec, PlaCat: "R" }).length > 0) {
        throw new Error('MAXREFRESCO');
      }*/

      _plato.platos.push(nuevoPlato);
      return nuevoPlato;
    },
    actualizarPlato: function actualizarPlato(_, _ref6) {
      var PlaIde = _ref6.PlaIde,
          input = _ref6.input;

      if (!_plato.platos[Number(PlaIde) - 1]) {
        throw new Error('Plato no encontrado con identificador ' + PlaIde);
      }
      var plato = (0, _lodash.find)(_plato.platos, { PlaIde: Number(PlaIde) });

      plato.PlaNom = input.PlaNom;
      plato.PlaDes = input.PlaDes;
      plato.PlaFec = input.PlaFec;
      plato.PlaCat = input.PlaCat;

      _plato.platos[Number(PlaIde)] = plato;

      return plato;
    },
    agregarPedido: function agregarPedido(root, args) {
      var nuevoPedido = { PedIde: _pedido.pedidos.length, PedEnt: args.PedEnt, PedFon: args.PedFon, PedRef: args.PedRef, PedFec: args.PedFec, PedEst: args.PedEst };
      _pedido.pedidos.push(nuevoPedido);
      return nuevoPedido;
    },
    actualizarPedido: function actualizarPedido(_, _ref7) {
      var PedIde = _ref7.PedIde,
          input = _ref7.input;

      if (!_pedido.pedidos[Number(PedIde) - 1]) {
        throw new Error('Pedido no encontrado con identificador ' + PedIde);
      }
      var pedido = (0, _lodash.find)(_pedido.pedidos, { PedIde: Number(PedIde) });

      pedido.PedEnt = input.PedEnt;
      pedido.PedFon = input.PedFon;
      pedido.PedRef = input.PedRef;
      pedido.PedFec = input.PedFec;
      pedido.PedEst = input.PedEst;

      _pedido.pedidos[Number(PedIde)] = pedido;

      return pedido;
    }
  }
};
//# sourceMappingURL=resolvers.js.map