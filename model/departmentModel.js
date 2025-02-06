import {pool} from '../config/config.js'

const getDepartments = async ()=>{
    let [data] = await pool.query('SELECT*FROM departments')
    return data  
  }

const getSingleDepartment = async (department_id)=>{
    let [data] = await pool.query('SELECT * FROM departments WHERE department_id =?',[department_id])
    return data
}
 
 const insertDepartment = async (department_id,department_name) => {
     await pool.query('INSERT INTO departments (department_id,department_name) VALUES (?, ?,)',[department_id,department_name])
    return 'Department added succesfully!'
}

const deleteDepartment = async(department_id)=>{
    await pool.query('DELETE FROM departments WHERE (department_id = ?)',[department_id])
    return 'Department deleted'
}

const updateDepartment = async(department_id,department_name)=>{
    await pool.query('UPDATE departments SET  department_name =? WHERE (department_id = ?)',[department_id,department_name])
    return await getDepartments()
}

export{getDepartments,getSingleDepartment, insertDepartment,deleteDepartment, updateDepartment}