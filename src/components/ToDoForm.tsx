import ErrorBlock from "../components/ErrorMessage";
import type { DraftTask } from "../types";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useTaskStore } from "../store";
import { useEffect } from 'react';
import { toast } from "react-toastify";
import { validate } from "uuid";

const ToDoForm = () => {
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftTask>();
    const [showDeadline, setShowDeadline] = useState(false);

    const addTask = useTaskStore((state => state.addTask));
    const activeTaskId = useTaskStore( (state) => state.activeTaskId);
    const tasks = useTaskStore((state) => state.tasks);
    const updateTask = useTaskStore((state) => state.updatedTask);

    useEffect( () => {
        if(activeTaskId) {
            const activeTask = tasks.filter((task => task.id === activeTaskId))[0];

            setValue('title', activeTask.title);
            setValue('description', activeTask.description);
            setValue('deadline', activeTask.deadline);
        }
    }, [activeTaskId]);



    const registerTask = (data: DraftTask) => {
        if(activeTaskId) {
            updateTask(data);
            toast.success('Tarea actualizada correctamente', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            addTask(data)
            toast.success('Tarea agregada correctamente', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        reset();
    }



    return (
    <section className="w-full md:w-1/2 lg:w-3/5 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-8 flex flex-col max-h-[65vh] md:max-h-[80vh] overflow-y-auto border border-purple-200">
            <h2 className="text-3xl font-extrabold text-purple-700 mb-6 tracking-tight flex items-center gap-2">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Agregar Nueva Tarea
            </h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(registerTask)}>
                <input
                    type="text"
                    placeholder="Ingrese el título de la tarea"
                    className="p-3 text-base text-gray-700 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-purple-300"
                    id="title"
                    {...register('title', {
                        required: 'El nombre de la tarea es obligatorio',
                        maxLength: {
                            value: 75,
                            message: 'El nombre de la tarea no puede exceder los 75 caracteres',
                        },
                    })}
                />
                {errors.title && (
                    <ErrorBlock>{errors.title?.message}</ErrorBlock>
                )}
                <textarea
                    placeholder="Ingrese la descripción de la tarea"
                    className="p-3 text-base text-gray-700 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-purple-300 resize-none min-h-[80px]"
                    id="description"
                    {...register('description', {
                        required: 'La descripción de la tarea es obligatoria',
                        maxLength: 200,
                        minLength: 1,
                    })}
                />
                {errors.description && (
                    <ErrorBlock>
                        {errors.description?.message || 'Error al agregar la tarea'}
                    </ErrorBlock>
                )}
                {/* Campo para establecer una fecha limite de realizacion no obligatoria*/}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="accent-purple-500 w-5 h-5 rounded focus:ring-2 focus:ring-purple-400"
                        id="showDeadline"
                        checked={showDeadline}
                        onChange={() => setShowDeadline((prev) => !prev)}
                    />
                    <label className="text-base text-gray-700 select-none" htmlFor="showDeadline">
                        Establecer fecha límite
                    </label>
                </div>
                {showDeadline && (
                    <>
                        <label className="text-base text-purple-500 font-medium">Seleccione una fecha límite para la tarea</label>
                        <input
                            type="date"
                            className="p-3 text-base text-gray-700 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
                            id="deadline"
                            {...register('deadline', {
                                required: 'La fecha límite es obligatoria si se selecciona',
                                validate: (value : string | boolean | undefined) => {
                                    if (!value) return; 
                                    if (validate(value)) return true; 
                                    // Validar si la fecha es mayor a la fecha actual
                                    const today = new Date();
                                    const selectedDate = new Date(value as string);
                                    if (selectedDate >= today) return true;
                                    return 'La fecha límite debe ser mayor a la fecha actual';
                                }})
                            }
                        />
                        {errors.deadline && (
                            <ErrorBlock>{errors.deadline?.message}</ErrorBlock>
                        )}
                    </>
                )}
                <button
                    type="submit"
                    className="px-6 py-3 mt-2 rounded-full font-bold shadow-md border-2 border-purple-500 bg-gradient-to-r from-purple-500 to-pink-400 text-white hover:from-pink-400 hover:to-purple-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                >
                    <span className="inline-flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        Agregar Tarea
                    </span>
                </button>
            </form>
        </section>
    )
}

export default ToDoForm