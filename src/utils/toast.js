import { toast,Bounce } from "react-toastify"

const ErrorToast=(toastMessage='server error')=>{
    toast.error(toastMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        })
}

const SuccessToast=(toastMessage='successfull')=>{
    toast.success(toastMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        })
}

export {ErrorToast,SuccessToast} 
