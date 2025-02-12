import express from 'express';
import {
  fetchAllLeaves,
  fetchSingleLeave,
  createLeave,
  removeLeave,
  modifyLeave,
  approveLeaveRequest,
  rejectLeaveRequest
} from '../controller/leaveCon.js';

const router = express.Router();

router.get('/', fetchAllLeaves);
router.get('/:leave_id', fetchSingleLeave);  // updated endpoint to match fetchSingleLeave
router.post('/', createLeave);
router.delete('/:leave_id', removeLeave);
router.put('/:leave_id', modifyLeave);
router.patch('/:leave_id/approve', (req, res) => {
  console.log("PATCH request to approve leave with ID:", req.params.leave_id);
  approveLeaveRequest(req, res);
});
router.patch('/:leave_id/reject', (req, res) => {
  console.log("PATCH request to reject leave with ID:", req.params.leave_id);
  rejectLeaveRequest(req, res);
});

export default router;
