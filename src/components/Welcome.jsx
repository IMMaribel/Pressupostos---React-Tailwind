import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="flex bg-emerald-200 flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Benvingut/da a la calculadora de pressupostos web</h1>
      <p className="text-xl mb-4">
        Aquesta eina t'ajudarà a calcular el pressupost per al teu projecte web de forma ràpida i senzilla.
      </p>
      <p className="text-lg mb-8">Selecciona els serveis que necessites i el nombre de pàgines i idiomes per veure el cost total.</p>
      
      {/* Botón para ir a la calculadora */}
      <Link to="/calculator">
        <button className="px-4 py-2 w-64 bg-green-700 text-white font-bold text-xl rounded-md hover:bg-green-800">
          Calculadora
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
