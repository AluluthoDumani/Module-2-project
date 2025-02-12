import {getPayrolls,getSinglePayroll, insertPayroll,deletePayroll, updatePayroll} from '../model/payrollModel.js'
/*const getPayrollsCon = async(req,res)=>{
    res.json({payroll: await getPayrolls()})
}*/
// getPayrollsCon
const getPayrollsCon = async (req, res) => {
    try {
        const payrolls = await getPayrolls(); // Await the result from the model
        res.json({ payroll: payrolls }); // Respond with payroll data
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ message: 'Error fetching payrolls' }); // Send a meaningful error message
    }
};
/*const getSinglePayrollCon = async(req,res)=>{
    res.json({payroll: await getSinglePayroll(req.params.payroll_id)})
}*/
// getSinglePayrollCon
// const getSinglePayrollCon = async (req, res) => {
//     try {
//         const payroll = await getSinglePayroll(req.params.employee_id); // Get the payroll by ID
//         if (payroll.length === 0) {
//             return res.status(404).json({ message: `Payroll with ID ${req.params.employee_id} not found` });
//         }
//         res.json({ payroll: payroll });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error fetching payroll' });
//     }
// };
const getSinglePayrollCon = async (req, res) => {
    const employeeId = req.params.employee_id;
    console.log("Received Employee ID:", employeeId); // Debugging
    try {
        const payroll = await getSinglePayroll(employeeId);
        if (payroll.length === 0) {
            return res.status(404).json({ message: `No payroll record found for Employee ID: ${employeeId}` });
        }
        res.json({ payroll });
    } catch (error) {
        console.error("Database query failed:", error);
        res.status(500).json({ message: "Database query failed", error });
    }
};
/*const insertPayrollCon = async (req,res)=>{
    let {payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance} = req.body
  res.json({payroll: await insertPayroll(payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance)
  })
}*/
// insertPayrollCon
const insertPayrollCon = async (req, res) => {
    const { payroll_id, employee_id, hours_worked, leave_deduction, final_salary, perfomance } = req.body;
    try {
        // Check if required data exists
        if (!payroll_id || !employee_id || !hours_worked || !final_salary) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const result = await insertPayroll(payroll_id, employee_id, hours_worked, leave_deduction, final_salary, perfomance);
        res.json({ message: result }); // Respond with success message
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error inserting payroll' });
    }
};
/*const deletePayrollCon = async (req,res) => {
    res.json({payroll: await deletePayroll(req.params.payroll_id)})
}*/
// deletePayrollCon
const deletePayrollCon = async (req, res) => {
    try {
        const result = await deletePayroll(req.params.payroll_id); // Delete payroll by ID
        res.json({ message: result }); // Send success message
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting payroll' });
    }
};
// This only updates name,position and department id
/*const updatePayrollCon = async(req,res)=>{
    let {payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance} = req.body
    res.json({payroll :await updatePayroll(payroll_id,employee_id,hours_worked,leave_deduction,final_salary,perfomance)})
}*/
// updatePayrollCon
const updatePayrollCon = async (req, res) => {
    const { hours_worked, leave_deduction, final_salary } = req.body;
    try {
        if (!hours_worked || !final_salary) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const result = await updatePayroll(req.params.payroll_id, hours_worked, leave_deduction, final_salary);
        res.json({ message: 'Payroll updated successfully', payroll: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating payroll' });
    }
};
export {getPayrollsCon, insertPayrollCon, getSinglePayrollCon,deletePayrollCon, updatePayrollCon}