import { Link, Outlet } from 'react-router-dom'

const BackToHome = () => {
  return (
    <>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition cursor-pointer select-none">
      <Link to="/" className="flex items-center justify-center">
        <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 0l-7 7 7 7" />
        </svg>
        Volver al inicio
      </Link>
    </button>

    <Outlet />
    </>
  )
}

export default BackToHome