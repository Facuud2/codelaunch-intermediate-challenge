

type ButtonStatusProps = {
    completed: boolean;
    onClick: () => void;
}



const ButtonStatus = ({ completed, onClick}: ButtonStatusProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${completed
          ? "bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-500 text-white hover:from-pink-500 hover:to-yellow-600 hover:scale-105"
          : "bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 text-white hover:from-emerald-500 hover:to-green-600 hover:scale-105"}
      `}
      onClick={onClick}
      type="button"
      aria-label={completed ? 'Marcar como pendiente' : 'Marcar como completada'}
    >
      {completed ? '⏳' : '✔'} Marcar como {completed ? 'Pendiente' : 'Completada'}
    </button>
  );
}

export default ButtonStatus