import { platos } from './models/plato';
import { pedidos } from './models/pedido';
import { find, filter } from 'lodash';
import GraphQLDateTime from 'graphql-type-datetime';

export const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    platos: () => platos,
    pedidos: () => pedidos,
    /*plato(obj, args, context, info) {
      return find(platos, { PlaIde: args.PlaIde });
    },*/
    plato: (_, { PlaIde }) => find(platos, { PlaIde }),
    platosPorCategoria: (_, { PlaFec, PlaCat }) => filter(platos, { PlaFec, PlaCat }),
    PedidosPorEstado: (_, { PedFec, PedEst }) => filter(pedidos, { PedFec, PedEst }),
    pedido: (_, { PedIde }) => find(pedidos, { PedIde }),
    menuDiario: (_, { PlaFec }) => filter(platos, { PlaFec })
  },
  /*Pedido: {
    PedPlaEnt(pedido) {
      return find(platos, { PlaIde: pedido.PedEnt }); ;
    }
  },*/
  Pedido: {
    PedPlaEnt: pedido => find(platos, { PlaIde: pedido.PedEnt }),
    PedPlaFon: pedido => find(platos, { PlaIde: pedido.PedFon }),
    PedPlaRef: pedido => find(platos, { PlaIde: pedido.PedRef }),
  },
  Mutation: {
    agregarPlato: (root, args) => {
      const nuevoPlato = { PlaIde: platos.length, PlaNom: args.PlaNom, PlaDes: args.PlaDes, PlaFec: args.PlaFec, PlaCat: args.PlaCat };

      if (filter(platos, { PlaFec: args.PlaFec, PlaCat: "E" }).length > 2) {
        throw new Error('Ya se registraron las Entradas máximas (2) del día.');
      }

      if (filter(platos, { PlaFec: args.PlaFec, PlaCat: "P" }).length > 2) {
        throw new Error('Ya se registraron los platos de fondos máximos (2) del día.');
      }

      if (filter(platos, { PlaFec: args.PlaFec, PlaCat: "R" }).length > 1) {
        throw new Error('Ya se registro el Refresco del día.');
      }

      platos.push(nuevoPlato);
      return nuevoPlato;
    },
    actualizarPlato: (_, { PlaIde, input }) => {
      if(!platos[Number(PlaIde)-1]){
        throw new Error('Plato no encontrado con identificador ' + PlaIde);
      }
      const plato = find(platos, { PlaIde: Number(PlaIde) });
      
      plato.PlaNom = input.PlaNom;
      plato.PlaDes = input.PlaDes;
      plato.PlaFec = input.PlaFec;
      plato.PlaCat = input.PlaCat;

      platos[Number(PlaIde)] = plato
  
      return plato;
    },
    agregarPedido: (root, args) => {
      const nuevoPedido = { PedIde: pedidos.length, PedEnt: args.PedEnt, PedFon: args.PedFon, PedRef: args.PedRef, PedFec: args.PedFec, PedEst: args.PedEst };
      pedidos.push(nuevoPedido);
      return nuevoPedido; 
    },
    actualizarPedido: (_, { PedIde, input }) => {
      if(!pedidos[Number(PedIde)-1]){
        throw new Error('Pedido no encontrado con identificador ' + PedIde);
      }
      const pedido = find(pedidos, { PedIde: Number(PedIde) });
      
      pedido.PedEnt = input.PedEnt;
      pedido.PedFon = input.PedFon;
      pedido.PedRef = input.PedRef;
      pedido.PedFec = input.PedFec;
      pedido.PedEst = input.PedEst;

      pedidos[Number(PedIde)] = pedido
  
      return pedido;
    }
  }
};
