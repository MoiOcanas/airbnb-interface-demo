import React from 'react'

const Map = () => (
    <div class="map">
        <div style={{ width: "100%", height: "100%" }}>
            <iframe 
                width="100%"
                title="map"
                height="100%" 
                src="https://maps.google.com/maps?width=100%&height=100&hl=es&q=Reynosa+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0">
                <a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">Marcar radio en el mapa</a>
            </iframe>
        </div>
        <br />
    </div>
);

export default Map;