import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CustomService from './CustomService';
import ServiceContext from '../data/servicesContext';
import { prices } from '../data/prices';
import banner from '../images/banner.jpg';
import casa from '../images/casa.png'

function Calculator() {
    const { services, setServices, numPages, setNumPages, numLanguages, setNumLanguages } = useContext(ServiceContext);
  
    const handleChange = (e) => {
        setServices({ ...services, [e.target.name]: e.target.checked });
    };

    const totalPrice = Object.keys(services)
        .filter((service) => services[service])
        .reduce((acc, curr) => {
            if (curr === 'web') {
                return acc + prices[curr] + (numPages + numLanguages) * prices.page;
            }
            return acc + prices[curr];
        }, 0);

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
                <h3 className="text-xl font-bold mb-4">SEO
                    <h2 className='text-base'>Programació d'una web responsive completa</h2>
                </h3>
                <p className="font-bold pe-6 text-3xl">300 €</p>
                    <div className="flex items-center">
                    <input 
                        type="checkbox" 
                        name="seo" 
                        checked={services.seo} 
                        onChange={handleChange} 
                        className="form-checkbox h-5 w-5 accent-green-500 checked:border-green-500box"
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
                        checked={services.ads} 
                        onChange={handleChange} 
                        className="form-checkbox h-5 w-5 accent-green-500 checked:border-green-500box"
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
                        checked={services.web} 
                        onChange={handleChange} 
                        className="form-checkbox h-5 w-5 accent-green-500 checked:border-green-500box"
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

        </div>
    );
}

export default Calculator;
