 import moment from 'moment';

// const date = moment().format('DD-MM-YYYY')

// const baseUrl = `https://api.iev.aero/api/flights/${date}`;
const baseUrl = `https://api.iev.aero/api/flights/10-02-2020`;
export const fetchFlightsList = async () => {
    const response = await fetch(baseUrl);
    if (response.ok) {
        return response.json();
    };
    throw new Error('failed connected to server!!!');
};



