import {deleteDepartmentCon, getDepartmentsCon, getSingleDepartmentCon, insertDepartmentCon, updateDepartmentCon} from '../controller/departmentCon.js'
import express from "express"


const router = express.Router()

router.get('/', getDepartmentsCon )
router.get ('/:department_id',getSingleDepartmentCon )
router.post('/',insertDepartmentCon )
router.delete('/:department_id',deleteDepartmentCon )
router.patch('/:department_id', updateDepartmentCon)



export default router