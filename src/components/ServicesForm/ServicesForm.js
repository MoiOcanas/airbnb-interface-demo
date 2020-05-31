import React from 'react'

const ServicesForm = () => (
    <div className="customer-info-form">
        <form className="form">
            <div className="form-head">
                <div>
                    <span id="price">$3,317</span>
                    <span>/noche</span>
                </div>
                <div>
                <span id="stars">
                    <i class="fa fa-star" aria-hidden="true"></i> 4.97
                </span>
                </div>
            </div>
            <div className="form-content">
                <div className="form-content-element"><input  className="form-content-input" type="text"/> </div>
                <div className="form-content-element"><input  className="form-content-input" type="text"/> </div>
                <div className="form-content-element"><input  className="form-content-input" type="text"/> </div>
            </div>
            <button className="form-button">
                Reservar
            </button>
            <div style={{ textAlign: "center" }}>
                <p>Aun no se te cobran nada</p>
            </div>
            <div className="form-content-footer">
                <div>
                    <ul className="list-left">
                        <li>$3,317 x 11 noches</li>
                        <li>Tarifa de limpieza.</li>
                        <li>Comisión por servicio.</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-right">
                        <li>$36, 490</li>
                        <li>$500</li>
                        <li>$5,222</li>
                    </ul>
                </div>
            </div>
        </form>
    </div>
);

export default ServicesForm;