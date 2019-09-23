import React from 'react';

import '../App.css';

function Inicio() {
  return (
    <div className='container'>
      <div className="container">
        <div className="jumbotron text-light">

          <h1>¿Quienes Somos?</h1>
        </div>
        
        <div className="row">
          <div className="col-sm-6">
            <h3>Misión</h3>
            <p class="text-justify font-weight-bolder text-light">Somos una organización sin animo de lucro dedicada a generar cambios en el imaginario colectivo
               con el fin de reintegrar al American Pitbull Terrier (APBT) a la sociedad. empleando métodos alternos
               para la canalización de su capacidad enérgica por medio del deporte, la obediencia y la crianza
               minuciosa y responsabilizada, así como la lucha constante en contra del maltrato animal, con el
               objetivo de eliminar las estigmatizaciones, lograr el respeto por w igualdad de derechos del APBT
              entre otras razas y la sana interacción humano-can.</p>
          </div>
          <div class="col-sm-6">
            <h3>Visión</h3>
            <p class="text-justify font-weight-bolder text-light">Ser una organización que además de velar por los intereses de nuestros canes,
             en el entorno de necesidades que nuestra actual sociedad atraviesa, también ser reconocidos como un grupo
             de profesionales comprometidos con nuestro País, a través del desarrollo de proyectos, planes y programas
             sociales que aporten al mejoramiento de la calidad de vida del ser humano y su entorno. Trabajando con
             profesionalismo y excelencia en todas sus acciones.</p>
          </div>
        </div>
        <div className="jumbotron">
          <h1>¿Contacto?</h1>
        </div>
      </div>
    </div>




  );
}
export default Inicio;
