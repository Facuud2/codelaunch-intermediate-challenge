import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {


    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col">
            <div className="flex flex-col md:flex-row flex-1 gap-8 p-4 md:p-10 lg:p-16 max-w-7xl w-full mx-auto">
                {/* Lista de tareas a la izquierda */}
                <ToDoList />
                {/* Formulario a la derecha */}
                <ToDoForm />
            </div>

            <ToastContainer 
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Home;
