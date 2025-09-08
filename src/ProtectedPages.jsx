import LanguageSelector from './components/LanguageSelector/languageselector.jsx'

export default function ProtectedPages({ onLogout }) {
  return (
    <div className="relative min-h-screen">
      <button
        className="top-6 left-6 px-6 py-2 bg-white/30 text-red-600 font-semibold rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:bg-white/60 hover:text-red-800 transition-colors duration-200 z-50"
        onClick={onLogout}
      >
        Logout
      </button>
      <LanguageSelector onSelect={(lang) => console.log(`Selected language: ${lang}`)} /> 
    </div>
  );
}