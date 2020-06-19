import moment from 'moment';

 //const date = moment().format('DD-MM-YYYY')
//  const date ='10-02-2020'


// const baseUrl = `https://api.iev.aero/api/flights/${date}`;


// export const fetchFlightsList = async () => {
//     const response = await fetch(baseUrl);
//     if (response.ok) {
//         return response.json();
//     };
//     throw new Error();
// };

// import moment from "moment";

const url = "https://api.iev.aero/api/flights";

export const fetchFlightsList = () => {
  //const today = moment(new Date()).format("DD-MM-YYYY");
  const data= '10-02-2020'
 // return fetch(`${url}/${today}`)
 return fetch(`${url}/${data}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed flight");
    })
}