import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomService from './CustomService';
import ServiceContext from '../data/servicesContext';
import { prices } from '../data/prices';
import banner from '../images/banner.jpg';
import casa from '../images/casa.png'
import BudgetList from './BudgetList';

function Calculator() {
    // { Desplegable servicio WEB }
    const { services, setServices, numPages, numLanguages } = useContext(ServiceContext);
  
    const handleChange = (e) => {
        setServices({ ...services, [e.target.name]: e.target.checked });
    };

    // { Cálculo servicios }
    const totalPrice = Object.keys(services)
        .filter((service) => services[service])
        .reduce((acc, curr) => {
            if (curr === 'web') {
                return acc + prices[curr] + (numPages + numLanguages) * prices.page;
            }
            return acc + prices[curr];
    }, 0);
    
    // { Contenedor de presupuestos }
    const [budgets, setBudgets] = useState([]);

    const handleAddBudget = () => {
        const clientName = document.getElementById('nom').value;
        const clientPhone = document.getElementById('telefon').value;
        const clientEmail = document.getElementById('email').value;
    

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!clientName || !clientPhone || !clientEmail|| !clientEmail.match(emailRegex)) {
          alert('Please enter a name, phone number and email.');
          return;
        }
    
        // Objeto de los detalles del presupuesto
        const newBudget = {
            name: clientName,
            phone: clientPhone,
            email: clientEmail,
            services: { ...services },
            totalPrice,
            details: services.web ? { numPages, numLanguages } : null,
        };

        setBudgets([...budgets, newBudget]);
            document.getElementById('nom').value = ''; 
            document.getElementById('telefon').value = '';
            document.getElementById('email').value = '';
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
           
            {/* Banner */}
            <div className="relative w-full">
                     {/* Icono home */}
                    <Link to="/">
                        <button className="mt-6 mb-6 ml-6 px-4 py-2 absolute  bg-green-500 text-white rounded-md hover:bg-green-600">
                        <img src={casa} alt='inicio' className='w-6'/>
                        </button>
                    </Link>
                <img src={banner} alt="Banner" className="w-full h-40 rounded-3xl mb-16" />
                <h1 className="flex absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold whitespace-nowrap">
                Aconsegueix la millor qualitat
                </h1>
            </div>

            {/* Tarjetas de presupuestos */}
            <div className="space-y-6 w-full max-w-3xl">

                {/* Tarjeta SEO */}
                <div className={`bg-white p-6 rounded-xl shadow-lg ${services.seo ? 'border-2 border-green-500' : 'border'}`}>
                <label className="flex place-items-center justify-between ">
                <h3 className="text-xl font-bold mb-4 ">Seo
                    <h2 className='text-base'>Programació d'una web responsive completa</h2>
                </h3>
                <p className="font-bold pe-6 text-3xl">300 €</p>
                    <div className="flex items-center">
                    <input 
                        type="checkbox" 
                        name="seo" 
                        id='seo'
                        checked={services.seo} 
                        onChange={handleChange} 
                        className="form-checkbox h-5 w-5 accent-green-500"
                    />
                    Afegeix
                    </div>
                </label>
                </div>

                {/* Tarjeta ADS */}
                <div className={`bg-white p-6 rounded-xl shadow-lg ${services.ads ? 'border-2 border-green-500' : 'border'}`}>
                <label className="flex place-items-center justify-between">
                <h2 className="text-xl font-bold mb-4">Ads
                    <h3 className='text-base'>Programació d'una web responsive completa</h3>
                </h2>
                <p className="font-bold pe-6 text-3xl">400 €</p>
                    <div className="flex items-center">
                    <input 
                        type="checkbox" 
                        name="ads" 
                        id='ads'
                        checked={services.ads} 
                        onChange={handleChange} 
                        className="form-checkbox h-5 w-5 accent-green-500"
                    />
                    Afegeix
                    </div>
                </label>
                </div>

                {/* Tarjeta WEB */}
                <div className={`bg-white p-6 rounded-xl shadow-lg ${services.web ? 'border-2 border-green-500' : 'border'}`}>
                <label className="flex place-items-center justify-between">
                <h3 className="text-xl font-bold mb-4 ">Web
                    <h2 className='text-base'>Programació d'una web responsive completa</h2>
                </h3>
                <p className="font-bold pe-6 text-3xl">500 €</p>
                    <div className="flex items-center">
                    <input 
                        type="checkbox" 
                        name="web" 
                        id='web'
                        checked={services.web} 
                        onChange={handleChange} 
                        className="form-checkbox h-5 w-5 accent-green-500"
                    />
                    Afegeix
                    </div>
                </label>
                {services.web && <CustomService/>}
                </div>
            </div>
            
            {/* Total */}
            <div className="mt-10 -mr-36 w-full max-w-xl text-end">
                <p className="text-3xl font-bold">Preu pressuposat:<span className="ml-14 text-4xl">{totalPrice} €</span></p>
            </div>

            {/* Tarjeta presupuesto */}
            <div className="space-y-6 w-full max-w-3xl mt-12 pb-12 bg-white p-6 rounded-xl shadow-lg">
                <label className="flex place-items-start justify-between">
                    <h3 className="text-2xl font-bold mb-4 ">Demanar pressupost </h3>
                </label>
                <div className='flex space-x-3 items-center'>
                    <input 
                        type="text"     
                        name="nom" 
                        id="nom" 
                        className="block rounded-md border-0 -m-1 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom">
                    </input>
                    <input 
                        type="number"     
                        name="telefon" 
                        id="telefon" 
                        className="block rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Telèfon">
                    </input>
                    <input 
                        type="text"     
                        name="email" 
                        id="email" 
                        className="block rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email">
                    </input>
                    <button
                        onClick={handleAddBudget}
                        className="flex-grow px-1 py-2 -m-0 bg-green-500 text-white text-sm rounded-md hover:bg-green-600">
                        Sol·licitar pressupost →
                    </button>
                </div>
            </div>
            {budgets.length > 0 && <BudgetList budgets={budgets} />}
        </div>
    );
}

export default Calculator;
