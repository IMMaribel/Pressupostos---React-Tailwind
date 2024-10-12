import React, { useContext } from 'react';
import ServiceContext from '../data/servicesContext';

function CustomService() {
    const { numPages, setNumPages, numLanguages, setNumLanguages } = useContext(ServiceContext);

    const handleIncrement = (field) => {
        if (field === 'pages') {
            setNumPages(numPages + 1);
        } else if (field === 'languages') {
            setNumLanguages(numLanguages + 1);
        }
    };

    const handleDecrement = (field) => {
        if (field === 'pages' && numPages > 0) {
            setNumPages(numPages - 1);
        } else if (field === 'languages' && numLanguages > 0) {
            setNumLanguages(numLanguages - 1);
        }
    };

    return (
    <div className="flex flex-col items-end space-y-2">
      <div className="flex items-center">
        <label className='font-bold mr-4'>Nombre de pàgines</label>
        <button className='m-2 w-4 h-4 flex items-center justify-center rounded-full border border-slate-500 text-slate-500' 
            onClick={() => handleDecrement('pages')}>-</button>
        <input
          type="number"
          value={numPages}
          onChange={(e) =>  setNumPages(Math.max(0, Number(e.target.value)))}
          className="border border-gray-300 rounded-md p-2 w-16 text-center font-bold appearance-none"
        />
        <button className='m-2 w-4 h-4 flex items-center justify-center rounded-full border border-slate-500 text-slate-500' 
            onClick={() => handleIncrement('pages')}>+</button>
      </div>
      <div className="flex items-center">
        <label className='font-bold mr-4'>Nombre de llenguatges</label>
        <button className='m-2 w-4 h-4 flex items-center justify-center rounded-full border border-slate-500 text-slate-500' 
            onClick={() => handleDecrement('languages')}>-</button>
        <input
          type="number"
          value={numLanguages}
          onChange={(e) =>  setNumLanguages(Math.max(0, Number(e.target.value)))}
          className="border border-gray-300 rounded-md p-2 w-16 text-center font-bold"
        />
        <button className='m-2 w-4 h-4 flex items-center justify-center rounded-full border border-slate-500 text-slate-500' 
            onClick={() => handleIncrement('languages')}>+</button>
      </div>
    </div>
    );
}

export default CustomService;
