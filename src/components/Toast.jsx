import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const notify = ({ info, status }) => {
  if (status === "success") {
    toast.success(info)
  }
  else if (status === "pending") {
    toast.info(info)
  } else if(status === "failed") {
    toast.error(info)
  }
}
