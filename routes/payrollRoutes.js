import {deletePayrollCon, getPayrollsCon, getSinglePayrollCon, insertPayrollCon, updatePayrollCon} from '../controller/payrollCon.js'
import express from "express"
const router = express.Router()
router.get('/', getPayrollsCon )
router.get('/:employee_id', getSinglePayrollCon);
router.post('/',insertPayrollCon )
router.delete('/:payroll_id',deletePayrollCon )
router.patch('/:payroll_id', updatePayrollCon)
export default router