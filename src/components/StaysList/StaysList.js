import React from 'react';

//Components
import Stay from '../Stay/Stay'

const topics = [ "Flexibilidad de cancelacion", "Tipo de jugar", "Precio", "Reservacion inmediata", "Mas filtros" ];

const stays = [
    {
        id: 1,
        title: "DEPTO EN LA PLAYA",
        price: "$ 34534", 
        total: "$ 42,212 MXN",
        stars: "491 (94)"
    },
    {
        id: 2,
        title: "CONDOMINIO EN LA CIUDAD",
        price: "$ 6434", 
        total: "$ 52,423 MXN",
        stars: "534 (92)"
    },
    {
        id: 3,
        title: "DEPTO EN LA PLAYA",
        price: "$ 10943", 
        total: "$ 26,753 MXN",
        stars: "142 (90)"
    },
    {
        id: 4,
        title: "CASA EN EL BOSQUE",
        price: "$ 7943", 
        total: "$ 19,225 MXN",
        stars: "621 (87)"
    }
];

const StaysList = () => (
    <div className="stays-list-container">
        <div className="stays-list-header">
            <h6>Más de 300 alojamientos · 15 jun. - 26 jun.</h6>
            <h4>Estancias en Tamaulipas</h4>
            <div className="topics-list">
                { topics && topics.map(topic => <div className="topics-list-element" key={topic}>{topic}</div>) }
            </div>
            <p>
                Consulta las restricciones de viaje antes de reservar.La salud y la seguridad de nuestras comunidades son lo primero. 
                Sigue las recomendaciones de los Gobiernos y viaja solo cuando sea imprescindible.Más información
            </p>
        </div>
        {
            stays && stays.map(stay => <Stay key={stay.id} stay={stay} />)
        }
    </div>
);

export default StaysList;