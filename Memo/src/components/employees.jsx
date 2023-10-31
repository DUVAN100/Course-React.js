import React, { useEffect, useState } from 'react';
import { callApi } from '../../api/callApis/callApis';
import PropTypes from 'prop-types';

export const Employees = React.memo(({page}) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("enter component employees")
    getEmployees(page); 
  }, [page]);

  const getEmployees = async (page) => {
    try {
      const {data: list} = await callApi(`https://reqres.in/api/users?page=${page}`);
      setData(list);
      console.log("finissh call api")
    } catch (error) {
      console.log("Exception:", error);
    }
  };

  return (
    <div>
      <h3>Employees:</h3>
      <p>List Employees</p>
      <div className="listEmployees">
        <h1>Show page {page}</h1>
        <ul>
          {data.length >= 1 && data.map((employee) => (
            <li key={employee.id}>{`${employee.first_name}   ${employee.last_name}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});
Employees.displayName = 'Employees';
Employees.propTypes = {
  page: PropTypes.number.isRequired, // Define el tipo de la propiedad 'page' y asegúrate de que sea requerida.
};