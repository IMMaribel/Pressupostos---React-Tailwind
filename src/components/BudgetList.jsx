import React, {useState, useEffect} from 'react';

const BudgetList = ({ budgets }) => {
    
    const [sortedBudgets, setSortedBudgets] = useState(budgets);
    const [defaultBudgets, setDefaultBudgets] = useState(budgets);
 
    useEffect(()=>{
        setSortedBudgets(budgets);
        setDefaultBudgets(budgets);
    }, [budgets]);

    // Filtrar por nombre
    const handleSortByName = () => {
        const sorted = [...sortedBudgets].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setSortedBudgets(sorted);
    };
 
    // Función para reiniciar
    const handleResetOrder = () => {
        setSortedBudgets(defaultBudgets);
    };
 
    return (
        <div>
            {/* Botones filtros*/}
        <ul className='space-y-6 w-full max-w-3xl border-t-4 border-gray-400 mt-10'>
            <p className='font-bold text-2xl mt-6'>Pressupostos en curs:</p>
            <div className="flex space-x-4 mb-6 justify-end">
                <button
                    onClick={handleSortByName}
                    className="checked:font-bold py-2 px-4 rounded"
                >
                    Nom▿
                </button>
                <button
                    onClick={handleResetOrder}
                    className="checked:font-bold py-2 px-4 rounded"
                >
                    Restart▿
                </button>
            </div>
            {/* {Lista de presupuestos} */}
                {sortedBudgets.map((budget, index) => (
                    <li key={index} className="flex grid-cols-3 mt-8 bg-white p-6 pb-6 rounded-xl shadow-lg">
                        <div className=' mr-2'>
                            <p className='text-3xl font-bold '>{budget.name}</p>
                            <p className='text-gray-500 font-bold'>{budget.email}
                            <br/>{budget.phone}
                            </p>
                        </div>
                        <div className='mx-16'>
                        <ul>
                            <h3 className='font-bold'>Serveis contractats:</h3>
                                {Object.keys(budget.services).map((service) =>
                                budget.services[service] && <li key={service}>{service}</li>
                                )}
                                {budget.services.web && (
                                    <div className="mt-2">
                                        <p>· {budget.details.numPages} <span></span>pàgines</p>
                                        <p>· {budget.details.numLanguages} <span></span>llenguatges</p>
                                    </div>
                                )}
                            </ul>
                        </div>
                        <div className='flex flex-col justify-center text-center'>
                            <strong className='text-gray-500'>Total:</strong> 
                            <p className='text-4xl font-bold'>{budget.totalPrice} € </p>
                        </div>
                    </li>
                ))}
        </ul>
    </div>
    );
};
  

export default BudgetList;