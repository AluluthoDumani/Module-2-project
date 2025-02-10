import {deleteEmployeeCon, getEmployeesCon, getSingleEmployeeCon, insertEmployeeCon, updateEmployeeCon} from '../controller/EmployeeCon.js'
import express from "express"


const router = express.Router()

router.get('/', getEmployeesCon )
router.get ('/:employee_id',getSingleEmployeeCon )
router.post('/',insertEmployeeCon )
router.delete('/:employee_id', deleteEmployeeCon);
router.patch('/:employee_id', updateEmployeeCon)



export default router