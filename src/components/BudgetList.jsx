import React from 'react';

const BudgetList = ({ budgets }) => {
    return (
        
        <ul className='space-y-6 w-full max-w-3xl border-t-4 border-gray-400 mt-10'>
            <p className='font-bold text-2xl mt-6 mb-8 '>Pressupostos en curs:</p>
                {budgets.map((budget, index) => (
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
                        <div className='flex flex-col items-center text-center'>
                            <strong className='text-gray-500'>Total:</strong> 
                            <p className='text-4xl font-bold'>{budget.totalPrice} € </p>
                        </div>
                    </li>
                ))}
        </ul>
    );
};
  

export default BudgetList;