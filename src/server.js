import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";


export const useGetData = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('http://localhost:3000/getTask').then((res) => res.data),
    })
    return { data, isLoading }
}

export const usePostdata = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (addata) =>
            axios.post('http://localhost:3000/addTasks', { task: addata }).then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
            toast.success("Task mofaqqiyatli qo'shildi")
        },
        onError: () => toast.error("Todo qo'shishda xatolik")
    });
    return mutation
}

export const useDelete = (id) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (id) =>
            axios.delete(`http://localhost:3000/deleteTasks/${id}`).then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos'])
            toast.error("Todo o'chirildi")
        }
    })
    return mutation
}

export const useUpdate = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: ({ id, created }) =>
            axios.patch(`http://localhost:3000/updateTask/${id}`, { created }).then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
            toast.success("task yangilandi")
        },
    });
    return mutation
}


