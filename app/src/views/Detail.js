import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

const peopleQuery= gql`
  query getPeople($peopleName: String!){
    people(name: $peopleName){
      name
      eye_color
      hair_color
      skin_color
      birth_year
      vehicles{
        name
      }
    }
  }
`;

class Detail extends Component {

  state = {
    name: this.props.match.params.name
  }

  render() {
    return (
      <Query query={peopleQuery} variables = {{ peopleName: this.state.name }}>
      {({ loading, error, data }) => {
          if (loading) return <p>Loading</p>
          if (error){
            console.log(error);
            return <p>Failed to load data</p>;
          }
          return (
            <div className="card contentDetail">
              <Link to={'/'} className="backButton"> &#8666; Regresar</Link>
              <div className="card-body">
                <p className="card-info">General Information</p>
                <div className="people-detail-row">
                  <div className="people-detail-block-name">Eye Color</div>
                  <div className="people-detail-block-value">{data.people.eye_color}</div>
                </div>
                <div className="people-detail-row">
                  <div className="people-detail-block-name">Hair Color</div>
                  <div className="people-detail-block-value">{data.people.hair_color}</div>
                </div>
                <div className="people-detail-row">
                  <div className="people-detail-block-name">Skin Color</div>
                  <div className="people-detail-block-value">{data.people.skin_color}</div>
                </div>
                <div className="people-detail-row">
                  <div className="people-detail-block-name">Birth Year</div>
                  <div className="people-detail-block-value">{data.people.birth_year}</div>
                </div>
                <p className="card-info">Vehicles</p>
                {data.people.vehicles = data.people.vehicles.map((vehicle, key) =>
                  <div className="people-detail-row" key={vehicle.name}>
                    <div className="people-detail-block-name">{vehicle.name}</div>
                  </div>
                )}
              </div>
            </div>);
      }}
      </Query>
    );
  }
}

export default Detail;
