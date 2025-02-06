import {pool} from '../config/config.js'

const getPayrolls = async ()=>{
    let [data] = await pool.query('SELECT*FROM payroll_table')
    return data  
  }

const getSinglePayroll = async (payroll_id)=>{
    let [data] = await pool.query('SELECT * FROM modern_technology_database.payroll_table WHERE payroll_id =?',[payroll_id])
    return data
}


 
 const insertPayroll = async (payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance) => {
     await pool.query('INSERT INTO payroll_table (payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance) VALUES (?, ?, ?, ?,?,?)',[payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance])
    return 'Payroll added succesfully!'
}

const deletePayroll = async(payroll_id)=>{
    await pool.query('DELETE FROM payroll_table WHERE (payroll_id = ?)',[payroll_id])
    return 'Payroll deleted'
}

const updatePayroll = async(payroll_id,hours_worked,leave_deduction,final_salary)=>{
    await pool.query('UPDATE payroll_table SET hours_worked = ?, leave_deduction = ?, final_salary =? WHERE (payroll_id = ?)',[payroll_id,hours_worked,leave_deduction,final_salary,perfomance])
    return await getPayrolls()
}

export{getPayrolls,getSinglePayroll, insertPayroll,deletePayroll, updatePayroll}