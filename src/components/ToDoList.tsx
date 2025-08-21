import { useTaskStore } from "../store";
import type { Task } from "../types";
import ButtonStatus from "./ButtonStatus";
import { toast } from "react-toastify";
const ToDoList = () => {

    const tasks = useTaskStore((state) => state.tasks);
    const deleteTask = useTaskStore((state) => state.deleteTask);
    const getTaskById = useTaskStore((state) => state.getTaskById);
    const updateCompletedStatus = useTaskStore((state) => state.updateCompletedStatus);

    const handleClick = (task : Task, actionType: string) => {
        if(actionType === 'delete') {
            deleteTask(task.id)
            toast.error('Tarea eliminada', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }

        if(actionType === 'toggle') {
            updateCompletedStatus(task.id);
            if(task.completed) {
                toast.success('Tarea marcada como completada', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            } else {
                toast.info('Tarea marcada como pendiente', {
                                    position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
                });
                };
        }
        }
        
    

    return (
    <section className="w-full md:w-1/2 lg:w-2/5 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-8 flex flex-col max-h-[65vh] md:max-h-[80vh] overflow-y-auto mb-4 md:mb-0 border border-blue-200">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight flex items-center gap-2">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" /></svg>
                Lista de Tareas
            </h2>
            <ul className="list-none p-0 m-0 divide-y divide-gray-300 flex-1 ">
                {tasks.length === 0 ? (<li className="py-4 px-2 text-gray-500">No hay tareas pendientes</li>) :
                    tasks.map((task) => (
                        <li key={task.id} className="py-6 px-4 space-y-2 bg-gradient-to-r from-white via-blue-50 to-purple-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 mb-4 last:mb-0">
                            <h3 className="text-xl font-bold text-purple-700 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                {task.title}
                            </h3>
                            <p className="text-gray-600 italic">{task.description}</p>
                            {task.deadline ? (
                                
                                    <p className="text-sm text-blue-500 font-medium">📅 Fecha límite: {task.deadline}</p>
                                
                            ) : (
                                <p className="text-sm text-gray-400">Sin fecha límite</p>
                            )}
                            <p className="text-sm text-gray-500">Estado: <span className={task.completed ? 'text-green-600 font-bold' : 'text-yellow-500 font-bold'}>{task.completed ? 'Completada' : 'Pendiente'}</span></p>
                            <button
                                type="button"
                                className="px-4 py-2 rounded-full font-semibold shadow-md border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-cyan-500 hover:to-blue-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 mr-2"
                                onClick={() => getTaskById(task.id)}
                                aria-label="Editar tarea"
                            >
                                ✏️ Editar
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 rounded-full font-semibold shadow-md border-2 border-red-500 bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-pink-500 hover:to-red-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                onClick={() => {
                                    handleClick(task, 'delete');
                                }}
                                aria-label="Eliminar tarea"
                            >
                                🗑️ Eliminar
                            </button>
                            <ButtonStatus
                                completed={task.completed ?? false}
                                onClick={() => {
                                    handleClick(task, 'toggle') ;
                                }}
                            />
                        </li>
                    ))
                }

            </ul>
        </section>
    )
}

export default ToDoList