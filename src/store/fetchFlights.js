// import moment from 'moment';

//  const date = moment().format('DD-MM-YYYY')
//  const date ='10-02-2020'
//  const date= moment().format('10-02-2020')

// const baseUrl = `https://api.iev.aero/api/flights/${date}`;
// const baseUrl = `https://api.iev.aero/api/flights/10-02-2020`;

// export const fetchFlightsList = async () => {
//     const response = await fetch(baseUrl);
//     if (response.ok) {
//         return response.json();
//     };
//     throw new Error();
// };

// import moment from 'moment';

// const date = moment().format('DD-MM-YYYY')

// const baseUrl = `https://api.iev.aero/api/flights/13-01-2020`;

// export const fetchFlightsList = async () => {
//     const response = await fetch(baseUrl);
//     if (response.ok) {
//         return response.json();
//     };
//     throw new Error();
// };

import moment from "moment";

const url = "https://api.iev.aero/api/flights";

export const fetchFlightsList = () => {
  const today = moment(new Date()).format("DD-MM-YYYY");
  return fetch(`${url}/10-02-2020`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed flight");
    })
}