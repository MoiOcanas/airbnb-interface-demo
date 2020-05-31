import React, { useState } from 'react'
import Calendar from 'react-calendar';

import ServicesModal from '../ServicesModal/ServicesModal'
import Map from '../Map/Map'
import ServicesForm from '../ServicesForm/ServicesForm'

const StayDetails = () => {
    const [date, setDate] = useState(new Date())

    return (
        <>
        <div className="stay-details">
            <h5>DEPTO EN LA PLAYA / VELAMAR - TAMPICO</h5>
            <div className="stay-details-header">
                <div>
                    
                    <span id="city">
                        Reynosa, Tamaulipas, Mexico
                    </span>
                </div>
                <div>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <span>Espanol (MXM)</span>
                    <i style={{ marginLeft: "5px" }} class="fa fa-usd" aria-hidden="true"></i>
                    <span>MXM</span>
                </div>
            </div>

            <div className="img-gallery">
                <div className="first-row">
                    <img src="https://a0.muscache.com/im/pictures/b1fb8257-c668-400f-ad32-7eb1115a8ead.jpg?aki_policy=x_large" alt="asd" />
                </div>
                <div className="second-row">
                    <div className="top-images">
                        <img src="https://a0.muscache.com/im/pictures/30fd9b44-a9fe-42c2-a694-b01af1824b64.jpg?aki_policy=large" alt="asd" />
                        <img src="https://a0.muscache.com/im/pictures/72d6f61d-e25b-41f2-85bf-1f60f0ae7eef.jpg?aki_policy=large" alt="asd" />
                    </div>
                    <div className="bottom-images">
                        <img src="https://a0.muscache.com/im/pictures/bc4410e8-12f8-44cc-9467-bfbe9fae9277.jpg?aki_policy=large" alt="asd" />
                        <img src="https://a0.muscache.com/im/pictures/e4e1718a-c1d2-43a0-8a91-d3c29087f87e.jpg?aki_policy=large" alt="asd" />
                    </div>
                </div>
            </div>

            <div className="customer-info-container">
                <div className="customer-info">
                    <div className="customer-info-header">
                        <div className="customer-info-text">
                            <h5>Departamento entero - Anfitrión: Moy</h5>
                            <p>8 huéspedes · 4 habitaciones · 5 camas · 4 baños</p>
                        </div>
                        <div>
                            <img src="/me.png" alt="asd" />
                        </div>
                    </div>

                    <ul className="customer-info-list">
                        <li>
                            <div class="customer-info-list-element">
                                <div><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></div>
                                <div className="list-text">
                                    <h5>Alojamiento entero</h5>
                                    <p>Dispondrás de toda la vivienda (apartamento) para ti.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="customer-info-list-element">
                                <div><i class="fa fa-unlock-alt fa-2x" aria-hidden="true"></i></div>
                                <div className="list-text">
                                    <h5>Llegada autónoma</h5>
                                    <p>Accede al alojamiento con ayuda del portero.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="customer-info-list-element">
                                <div><i class="fa fa-shower fa-2x" aria-hidden="true"></i></div>
                                <div className="list-text">
                                    <h5>Limpio y ordenado</h5>
                                    <p>9 huéspedes recientes han dicho que este alojamiento está impecable.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="customer-info-list-element">
                                <div><i class="fa fa-tag fa-2x" aria-hidden="true"></i></div>
                                <div className="list-text">
                                    <h5>Cancelación gratuita hasta 1 jun.</h5>
                                    <p>Luego de eso, si cancelas antes de las 2:00 PM del 10 jun., recibirás un reembolso completo excepto la comisión por servicio.</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="info-text">
                        <p>
                            Excelente Departamento de lujo en el piso 9 centro con una extraordinaria vista al mar, para pasar una estancia inolvidable y relajante en una zona muy exclusiva y privada, con mucha seguridad 24 hrs del dia. 
                            Dentro del Fraccionamiento Velamar a 20 min de Tampico. Para personas que vengan a disfrutar de plan familiar y traquilo.
                        </p>

                        <h6>El alojamiento</h6>
                        <p>
                            Es un hermoso departamento en el piso 9 centro, el penúltimo piso, con una hermosa vista al Golfo de México en todos los espacios. Tiene 4 recámaras y 4 baños. Con una amplia sala -comedor con su balcón,
                            una grande recámara principal con su balcón, dos recámaras con las amplias ventanas , 
                            una recámara sin ventana, una cocína totalmente equipada, el cuarto de servicio con la lavadora y secadora, cómo una bodeguíta con 
                            las sillas playeras para los balcones y la playa. Todo en una misma planta. Asador privado para nuestros huéspedes.
                        </p>
                    </div>

                    <div className="room-dist">
                        <h5>Distribución de las camas</h5>
                        <div className="room-dist-list">
                            <div className="room-dist-list-element">
                                <i class="fa fa-bed fa-2x" aria-hidden="true"></i>
                                <h6>Habitación 1</h6>
                                <p>1 cama king size</p>
                            </div>
                            <div className="room-dist-list-element">
                                <i class="fa fa-bed fa-2x" aria-hidden="true"></i>
                                <h6>Habitación 1</h6>
                                <p>1 cama king size</p>
                            </div>
                            <div className="room-dist-list-element">
                                <i class="fa fa-bed fa-2x" aria-hidden="true"></i>
                                <h6>Habitación 1</h6>
                                <p>1 cama king size</p>
                            </div>
                        </div>
                    </div>

                    <div className="services-info">
                        <h5>Services</h5>
                        <div className="services-info-container">
                            <ul>
                                <li>Secador de pelo</li>
                                <li>Zona para trabajar con computadora portátil</li>
                                <li>Wifi</li>
                                <li>Elementos básicos</li>
                                <li>Lavadora</li>
                            </ul>
                            <ul>
                                <li>Cocina</li>
                                <li>Estacionamiento gratuito en las instalaciones</li>
                                <li>Plancha</li>
                                <li>TV</li>
                                <li>Televisión por cable</li>
                            </ul>
                            <ServicesModal />
                            
                        </div>
                    </div>

                    <div className="calendar-info">
                        <h5>11 noches en Altamira</h5>
                        <p>15 de jun. de 2020 - 26 de jun. de 2020</p>
                        <Calendar
                            onChange={() => setDate(date)}
                            value={date}
                        />
                    </div>
                </div>
                
                <ServicesForm />

            </div>

            <div>
                <h5>4.91 (94 evaluaciones)</h5>
                <div className="evaluation-section">
                    <div className="evaluation-section-left">
                        <div className="words">
                            <ul>
                                <li>Limpieza</li>
                                <li>Comunicación</li>
                                <li>Llegada</li>
                            </ul>
                        </div>
                        <div className="bars">
                            <ul>
                                <li id="bar"></li>
                                <li id="bar"></li>
                                <li id="bar"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="evaluation-section-right">
                        <div className="words">
                            <ul>
                                <li>Precisión</li>
                                <li>Ubicación</li>
                                <li>Valor</li>
                            </ul>
                        </div>
                        <div className="bars">
                            <ul>
                                <li id="bar"></li>
                                <li id="bar"></li>
                                <li id="bar"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="user-opinion">
                        <img src="/me.png" alt="asd" />
                        <div>
                            <h6>Moises Ocanas</h6>
                            <p>Marzo 2020</p>
                        </div>
                    </div>
                    <div className="user-opinion">
                        <img src="/me.png" alt="asd" />
                        <div>
                            <h6>Moises Ocanas</h6>
                            <p>Marzo 2020</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-info">
                <h4>Ubicacion</h4>
                <Map />
            </div>
        </div>
        <div className="options">
                <h5>Mas opciones para hospedarte</h5>
                <div className="more-options">
                    <div className="option">
                        <img src="https://a0.muscache.com/im/pictures/23202701/6fe734dd_original.jpg?aki_policy=x_large" alt="photo1" />
                        <div className="option-content">
                            <div>Departamento</div>
                            <div> <i class="fa fa-star" aria-hidden="true"></i> 4.97</div>
                        </div>
                        <p>Mi casa home</p>
                        <p id="price">$4855 MXN</p>
                    </div>
                    <div className="option">
                        <img src="https://a0.muscache.com/im/pictures/ea5fdca2-c671-4aac-8dde-4b55465487dc.jpg?aki_policy=x_large" alt="photo2" />
                        <div className="option-content">
                            <div>Departamento</div>
                            <div> <i class="fa fa-star" aria-hidden="true"></i> 4.97</div>
                        </div>
                        <p>Mi casa home</p>
                        <p id="price">$4855 MXN</p>
                    </div>
                    <div className="option">
                        <img src="https://a0.muscache.com/im/pictures/23202701/6fe734dd_original.jpg?aki_policy=x_large" alt="photo3" />
                        <div className="option-content">
                            <div>Departamento</div>
                            <div> <i class="fa fa-star" aria-hidden="true"></i> 4.97</div>
                        </div>
                        <p>Mi casa home</p>
                        <p id="price">$4855 MXN</p>
                    </div>
                    <div className="option">
                        <img src="https://a0.muscache.com/im/pictures/2c806423-add2-4e4c-b05b-a0a11f0b8e2d.jpg?aki_policy=x_large" alt="photo4" />
                        <div className="option-content">
                            <div>Departamento</div>
                            <div> <i class="fa fa-star" aria-hidden="true"></i> 4.97</div>
                        </div>
                        <p>Mi casa home</p>
                        <p id="price">$4855 MXN</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StayDetails;