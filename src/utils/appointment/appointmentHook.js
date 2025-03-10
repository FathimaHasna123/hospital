import { useMutation } from "react-query";
import { createAppointment, deleteAppointmnet, updateAppointment } from "./appointmentApi";



export const useCreateAppointment = ()=>{
    return useMutation((data)=>createAppointment(data))
}

export const useUpdateAppointment = ()=>{
    return useMutation((data)=>updateAppointment(data))
}

export const useDeleteAppointment = ()=>{
    return useMutation((id)=>deleteAppointmnet(id))
}