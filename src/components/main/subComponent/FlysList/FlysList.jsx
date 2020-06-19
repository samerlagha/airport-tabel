import React from "react";
import "./flyList.scss";
import moment from "moment";

   const FlaysList = ({ data }) => {
     console.log('data:',data)
  return data.map(item => {
    const terminal = item.term === "A" ? "terminal" : "terminal d";
    const statusFilght = item.status === "LN" ? "Прибув " : "Вилетів о ";
    const logoAirLine = item.airline.en.logoSmallName;
    const nameAirLine = item.airline.en.name;
    const flightNumber = item.codeShareData[0].codeShare;
    const timeFact = moment(item.timeTakeofFact).format("HH:mm");
    const localTime = moment(item.timeToStand).format("HH:mm");
    const terminalNo = item.term;
    const destination = item["airportToID.name_en"] || item["airportFromID.name_en"];

    return (
      <tr key={item.ID} className="details-body">
        <td className="details-item">
          <span className={`${terminal}`}> {terminalNo}</span>
        </td>
        <td className="details-item time">{localTime}</td>
        <td className="details-item destination">{destination}</td>
        <td className="details-item status">
          {statusFilght} {timeFact}
        </td>
        <td className="details-item">
          <span className="logo">
            <img src={logoAirLine} alt={nameAirLine} />
            <span>{nameAirLine}</span>
          </span>
        </td>
        <td className="details-item flight">{flightNumber}</td>
      </tr>
    );
  });
};

// ({data}) => {
//   return data.map(item => {
//     const terminal = item.terminal === "A" ? "terminal" : "terminal d";
//     const statusFilght = item.status === "LN" ? "Прибув" : "Вилетів о";
//     const logo = item.airline.ru.logoSmallName;
//     const name = item.airline.ru.name;
//     const flight = item.codeShareData[0].codeShare;
//     const timeFact = moment(item.timeTakefFact).format("HH:mm");
//     const localTime = moment(item.timeToStand).format("HH:mm");
//     const treminalNumber = item.term;
//     const destination =
//       item["airportToID.name_en"] || item["airportFromID.name_en"];

//     return (
//       <tr key={item.ID} className="details-body">
//         <td className="details-item">
//           <span className={`${terminal}`}> {treminalNumber}</span>
//         </td>
//         <td className="details-item time">{localTime}</td>
//         <td className="details-item destination">{destination}</td>
//         <td className="details-item status">
//           {statusFilght} {timeFact}
//         </td>
//         <td className="details-item">
//           <span className="logo">
//             <img src={logo} alt={name} />
//             <span>{name}</span>
//           </span>
//         </td>
//         <td className="details-item flight">{flight}</td>
//       </tr>
//     );
//   });
// };

export default FlaysList;