import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { flightsListSelector, spinnerSelector } from "../../../../store/flights.selectors";
import Spinner from "../../../spinner/Spinner";
import ItemsList from "../FlysList/FlysList";
import * as flightsActions from "../../../../store/flights.actions";
import "./tableList.scss";
import qs from "qs";

const TableList = ({ getFlightsList, flights, isLoading }) => {
  const { direction } = useParams();
  const search = qs.parse(useLocation().search, { ignoreQueryPrefix: true })
    .search;

  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  if (isLoading) {
    return <Spinner />;
  }

  let allFlights = !search
    ? flights
    : flights.filter(flight => flight.codeShareData[0].codeShare === search);

  const isFound =
    allFlights.length < 1 ? (
      <tr>
        <th colSpan="7" className="not-found">
          Not Found
        </th>
      </tr>
    ) : (
      <ItemsList data={allFlights} />
    );

  return (

        
    <table className="flights-details">
      <thead className="table-head">
        <tr className="details-header">
          <th>Термінал</th>
          <th>Розклад</th>
          <th>Призначення</th>
          <th>Статус</th>
          <th>Авіакомпанія</th>
          <th>Рейс</th>
        </tr>
      </thead>
      <tbody className="table-body">{isFound}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  flights: flightsListSelector(state),
  isLoading: spinnerSelector(state)
});

export default connect(mapStateToProps, flightsActions)(TableList);


{/* <tr data-v-27fc5867="">
  <th data-v-27fc5867="" scope="col">Термінал</th>
  <th data-v-27fc5867="" scope="col">Розклад</th>
  <th data-v-27fc5867="" scope="col">Призначення</th>
  <th data-v-27fc5867="" scope="col">Статус</th>
  <th data-v-27fc5867="" scope="col" class="mobile-only"></th>
  <th data-v-27fc5867="" scope="col">Авіакомпанія</th>
  <th data-v-27fc5867="" scope="col" class="mobile-only">
    </th><th data-v-27fc5867="" scope="col">Рейс</th>
<th data-v-27fc5867="" scope="col"></th>

</tr> */}
			