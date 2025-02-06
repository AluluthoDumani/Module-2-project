import {pool} from '../config/config.js'

const getEmployees = async ()=>{
    let [data] = await pool.query('SELECT*FROM employee_info')
    return data  
  }

const getSingleEmployee = async (employee_id)=>{
    let [data] = await pool.query('SELECT * FROM employee_info WHERE employee_id =?',[employee_id])
    return data
}
 
 const insertEmployee = async (employee_id,name,position,department_id,employment_history,contact) => {
     await pool.query('INSERT INTO employee_info (employee_id,name,position,department_id,employment_history,contact) VALUES (?, ?, ?, ?,?,?)',[employee_id,name,position,department_id,employment_history,contact])
    return 'Employee added succesfully!'
}

const deleteEmployee = async(employee_id)=>{
    await pool.query('DELETE FROM employee_info WHERE (employee_id = ?)',[employee_id])
    return 'Employee deleted'
}

const updateEmployee = async(employee_id,name,position,department_id)=>{
    await pool.query('UPDATE employee_info SET name = ?, position = ?, department_id =? WHERE (employee_id = ?)',[employee_id,name,position,department_id])
    return await getEmployees()
}

export{getEmployees,getSingleEmployee, insertEmployee,deleteEmployee, updateEmployee}