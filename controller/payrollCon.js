import {getPayrolls,getSinglePayroll, insertPayroll,deletePayroll, updatePayroll} from '../model/payrollModel.js'
const getPayrollsCon = async(req,res)=>{
    res.json({Payrolls: await getPayrolls()})
}

export {getPayrollsCon, insertPayrollCon, getSinglePayrollCon,deletePayrollCon, updatePayrollCon}

const getSinglePayrollCon = async(req,res)=>{

    res.json({emp: await getSinglePayroll(req.params.payroll_id)})
}


const insertPayrollCon = async (req,res)=>{
    let {payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance} = req.body
  res.json({Payrolls: await insertPayroll(payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance)
    
  })

}

const deletePayrollCon = async (req,res) => {
    res.json({Payrolldel: await deletePayroll(req.params.payroll_id)})
    
}

// This only updates name,position and department id 
const updatePayrollCon = async(req,res)=>{
    let {payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance} = req.body
    res.json({Payroll :await updatePayroll(payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance)})
}