import { useMutation } from "react-query";
import { createAppointment} from "./appointmentApi";



export const useCreateAppointment = ()=>{
    return useMutation((data)=>createAppointment(data))
}

