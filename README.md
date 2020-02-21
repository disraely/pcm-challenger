# Code Challenge

"Desarrollar una aplicación web para la atención de menú de almuerzo"
La app busca mejorarle la vida al mozo y al cocinero de un restaurante típico de menús fijos, como los que solemos buscar a la hora del almuerzo.

Ejemplo de casos de uso:
Como Cocinero, debo definir dos entradas, dos platos de fondo y un refresco y ofrecerlos para que los comensales elijan uno de cada uno
El mozo registra el pedido del comensal y debe llegar al Cocinero como Nuevo Pedido
El cocinero revisa sus Nuevos Pedidos.
Una vez que el cocinero termina, marca el pedido como "para servir" y el mozo debe recogerlo y servirlo
Una vez servido, el mozo marca como "entregado

## Getting Started

Server side: A simple express server with GraphQL.
Font side: A simple application that recovers a list of dishes and orders using graphql client and React.

### Prerequisites

You need to install them

```
frontend
    "@fortawesome/fontawesome-svg-core": "^1.2.27",
    "@fortawesome/free-solid-svg-icons": "^5.12.1",
    "@fortawesome/react-fontawesome": "^0.1.8",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@testing-library/user-event": "^7.2.1",
    "apollo-boost": "^0.4.7",
    "apollo-cache-inmemory": "^1.6.5",
    "apollo-client": "^2.6.8",
    "apollo-link": "^1.2.13",
    "apollo-link-rest": "^0.7.3",
    "date-fns": "^2.9.0",
    "graphql": "^14.5.8",
    "graphql-anywhere": "^4.2.6",
    "graphql-tag": "^2.10.1",
    "node-sass": "^4.13.1",
    "qs": "^6.9.1",
    "react": "^16.12.0",
    "react-apollo": "^3.1.3",
    "react-dom": "^16.12.0",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.3.0"
```

### Installing

Client

```
cd app
npm install
npm start // dev
npm build
npm test
npm eject
```

Server

```
cd server
npm install
npm start
```

## Running the tests

All tests are found as screenshots in the folder with name 'screenshots' in the main directory

### And coding style tests

```
sass https://sass-lang.com/
```

## Built With

* [Node]
* [React]
* [Express]
* [BabelJs]
* [graphql]
* [apollo]

## Authors

* **Disraeli Ari** - *Initial work* - [Challenger](https://bitbucket.org/disraely_ari/pcm-challenger/src/master/)

See also the list of [contributors](https://github.com/disraely/pcm-challenger) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Cap of coffee
* Inspiration
* never give up
