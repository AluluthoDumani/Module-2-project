import {
    getLeaves,
    getSingleLeave,
    insertLeave,
    deleteLeave,
    updateLeave,
    approveLeave,
    rejectLeave
  } from '../model/leaveModel.js';
  
  // Get all leave requests
  const fetchAllLeaves = async (req, res) => {
    try {
      const leaves = await getLeaves();
      res.status(200).json(leaves);
    } catch (error) {
      console.error("Error fetching leaves:", error);
      res.status(500).json({ message: "Error fetching leaves", error });
    }
  };
  
  // Get a single leave request by ID
  const fetchSingleLeave = async (req, res) => {
    try {
      const leave = await getSingleLeave(req.params.leave_id);
      if (leave) {
        res.status(200).json(leave);
      } else {
        res.status(404).json({ message: "Leave request not found" });
      }
    } catch (error) {
      console.error("Error fetching leave:", error);
      res.status(500).json({ message: "Error fetching leave", error });
    }
  };
  
  // Create a new leave request
  const createLeave = async (req, res) => {
    const { employee_id, leave_date, reason, status } = req.body;
    try {
      const newLeave = await insertLeave(employee_id, leave_date, reason, status);
      res.status(201).json({ message: "Leave request created", newLeave });
    } catch (error) {
      console.error("Error creating leave request:", error);
      res.status(500).json({ message: "Error creating leave request", error });
    }
  };
  
  // Delete a leave request
  const removeLeave = async (req, res) => {
    try {
      const deletedLeave = await deleteLeave(req.params.leave_id);
      if (deletedLeave) {
        res.status(200).json({ message: "Leave request deleted", deletedLeave });
      } else {
        res.status(404).json({ message: "Leave request not found" });
      }
    } catch (error) {
      console.error("Error deleting leave:", error);
      res.status(500).json({ message: "Error deleting leave", error });
    }
  };
  
  // Update a leave request
  const modifyLeave = async (req, res) => {
    const { employee_id, leave_date, reason, status } = req.body;
    try {
      const updatedLeave = await updateLeave(req.params.leave_id, employee_id, leave_date, reason, status);
      if (updatedLeave) {
        res.status(200).json({ message: "Leave request updated", updatedLeave });
      } else {
        res.status(404).json({ message: "Leave request not found" });
      }
    } catch (error) {
      console.error("Error updating leave:", error);
      res.status(500).json({ message: "Error updating leave", error });
    }
  };
  
  // Approve a leave request
  const approveLeaveRequest = async (req, res) => {
    try {
      const approved = await approveLeave(req.params.leave_id);
      if (approved) {
        res.status(200).json({ message: "Leave request approved", approved });
      } else {
        res.status(404).json({ message: "Leave request not found" });
      }
    } catch (error) {
      console.error("Error approving leave:", error);
      res.status(500).json({ message: "Error approving leave", error });
    }
  };
  
  // Reject a leave request
  const rejectLeaveRequest = async (req, res) => {
    try {
      const rejected = await rejectLeave(req.params.leave_id);
      if (rejected) {
        res.status(200).json({ message: "Leave request rejected", rejected });
      } else {
        res.status(404).json({ message: "Leave request not found" });
      }
    } catch (error) {
      console.error("Error rejecting leave:", error);
      res.status(500).json({ message: "Error rejecting leave", error });
    }
  };
  
  // Export all functions separately
  export {
    fetchAllLeaves,
    fetchSingleLeave,
    createLeave,
    removeLeave,
    modifyLeave,
    approveLeaveRequest,
    rejectLeaveRequest
  };
  