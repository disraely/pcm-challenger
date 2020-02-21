import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { ReactComponent as Icon} from '../assets/svg/tail-spin.svg';
import { MenuDiario } from '../graphql/appQuery';
import format from "date-fns/format";
import { faUtensils, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    var date = format(new Date(), "yyyy-MM-dd");
    this.state = {PlaFec: date};
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><FontAwesomeIcon icon={faClipboard} /> Menú del dia</h5>
            <Query query={MenuDiario} variables = {{PlaFec: this.state.PlaFec}}>
              {({ loading, error, data }) => {
              if (loading) return <p><Icon /> Loading</p>
                if (error){
                  return <p>Error al recuperar los datos</p>;
                }
                return data.menuDiario.map(plato => {
                  return (
                    <p key={plato.PlaIde} className="card-content"><FontAwesomeIcon icon={faUtensils} />  {plato.PlaNom.charAt(0).toUpperCase() + plato.PlaNom.slice(1)} - {plato.PlaCat === 'E' ? 'Plato de entrada' : plato.PlaCat === 'P' ? 'Plato de Fondo' : 'Refresco'}</p>
                  );
                })
              }}
            </Query>
            </div>
        </div>
        <div className="card">
          <p><FontAwesomeIcon icon={faClipboard} /> Elija su cargo:</p>
          <div className="DashButton"><button><Link to={'/cocinero'} className="linkDashboard">Cocinero</Link></button></div>
          <div className="DashButton"><button><Link to={'/mozo'} className="linkDashboard">Mozo</Link></button></div>
          <div className="space"></div>
        </div>
      </div>
    )
  }
}
/*
class Dashboard extends Component {
  render() {
    return (
      <Query query={peoplesQuery}>
      {({ loading, error, data }) => {
          if (loading) return <p className="card-title-loading"> <Icon /> Loading </p>
          if (error){
            return <p className="card-title-failed">Failed to load data</p>;
          }
          return data.peoples.map(people => {
            return (
              <div className="card" key={people.name}>
                <Link to={'/people/'+people.name} className="contentDashboard">
                  <div className="card-body">
                    <div className="people-detail-row">
                      <div className="people-detail-block-name">
                        <p className="card-title">{people.name}</p>
                        <p className="card-subtitle">{people.species[0].name} from {people.homeworld.name}</p>
                      </div>
                      <div className="people-detail-block-value">&#10148;</div>
                    </div>
                  </div>
                </Link>
              </div>);
          })
      }}
      </Query>
    );
  }
}
*/

export default Dashboard;