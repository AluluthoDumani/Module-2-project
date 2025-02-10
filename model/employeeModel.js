import {pool} from '../config/config.js'

const getEmployees = async () => {
    let [data] = await pool.query(`
      SELECT *
      FROM 
        employee_info
    `);
    return data;
  }
  

const getSingleEmployee = async (employee_id)=>{
    let [data] = await pool.query('SELECT * FROM employee_info WHERE employee_id =?',[employee_id])
    return data
}
 
 const insertEmployee = async (name,position,department_id,employment_history,contact) => {
     await pool.query('INSERT INTO employee_info (name,position,department_id,employment_history,contact) VALUES ( ?, ?, ?,?,?)',[name,position,department_id,employment_history,contact])
   return 'Employee added succesfully!'}


   const deleteEmployee = async (employee_id) => {
    const [result] = await pool.query('DELETE FROM employee_info WHERE employee_id = ?', [employee_id]);
    return result;  
  };

  const updateEmployee = async (employee_id, name, position, department_id, employment_history, contact) => {
    const [result] = await pool.query(
      'UPDATE employee_info SET name = ?, position = ?, department_id = ?, employment_history = ?, contact = ? WHERE employee_id = ?',
      [name, position, department_id, employment_history, contact, employee_id]
    );
    return result;
  };

export{getEmployees,getSingleEmployee, insertEmployee,deleteEmployee, updateEmployee}