import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export const showToast = (message: string, type: "success" | "error" = "success") => {
    toast(message, {
        type: type,
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        rtl: false,
        closeOnClick: true,
        pauseOnHover: false,
        transition: Slide,
        className: "font-medium rounded-md",



    });
};
