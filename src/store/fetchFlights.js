import moment from 'moment';

const date = moment().format('DD-MM-YYYY')

const baseUrl = `https://api.iev.aero/api/flights/${date}`;

export const fetchFlightsList = async () => {
    const response = await fetch(baseUrl);
    if (response.ok) {
        return response.json();
    };
    throw new Error('failed connected to server!!!');
};
// const baseUrl = 'https://api.iev.aero/api/flights';

// export const fetchdataFlights= (date)=>{
//     return fetch(`${baseUrl}/${date}`)
//       .then(response=>{
//           if(response.ok){
//               return response.json();
//           };
//           throw new Error('failed connected to server!!!')
//       })
// }


