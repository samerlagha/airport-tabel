import React from 'react';
import moment from 'moment';
import './flyList.scss'

const FlysList =(props) =>{
  return props.data.map(item => {
    const terminal = item.terminal === "A" ? "terminal" : "terminal d";
    const statusFilght = item.status === "LN" ? "Landed " : "Departed at ";
    const logo = item.airline.ru.logoSmallName;
    const name = item.airline.ru.name;
    const flight = item.codeShareData[0].codeShare;
    const timeFact = moment(item.timeTakefFact).format("HH:mm");
    const localTime = moment(item.timeToStand).format("HH:mm");
    const teminalNumber = item.term;
    const destination = item["airportToID.name_en"] || item["airportFromID.name_en"];

    return (
      <tr key={item.ID} className="details-body">
        <td className="details-item">
          <span className={`${terminal}`}> {teminalNumber}</span>
        </td>
        <td className="details-item time">{localTime}</td>
        <td className="details-item destination">{destination}</td>
        <td className="details-item status">
          {statusFilght} {timeFact}
        </td>
        <td className="details-item">
          <span className="logo">
            <img src={logo} alt={name} />
            <span>{name}</span>
          </span>
        </td>
        <td className="details-item flight">{flight}</td>
      </tr>
    );
  });
};

export default FlysList;