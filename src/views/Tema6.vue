<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo6
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Modelos de medición de capacitación


    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/62.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Como parte de la presentación de un informe ejecutivo de resultado de un proceso, es pertinente evidenciar los indicadores de gestión del mismo. Se evalúa si se alcanzaron los resultados esperados; para esto es importante definir cuál es la meta y de esta forma establecer los indicadores de gestión que permitan evaluar el camino hacia su consecución y, de esta manera, poder tomar acciones correctivas o preventivas, según sea el caso.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Indicadores de gestión             
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/63.png', alt='')    
      .col-lg-10
        p(data-aos="fade-down") El esfuerzo que una empresa realiza al desarrollar planes de capacitación para sus colaboradores, con el ánimo de afrontar los desafíos del mercado, debe ser medible de alguna manera para poder evaluar la gestión del proceso de capacitación y su impacto en la organización. Los indicadores de gestión o KPI por sus siglas en inglés <i>Key Performance Indicator</i> (Indicador clave de desempeño), son la expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas, según sea el caso. 

    p(data-aos="fade-down").mb-5 Existen varias clases de indicadores de gestión, algunos son:  

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.png', alt='')        
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg3")
          .row.justify-content-center.align-items-start(titulo="Indicadores de gestión externos o internos")
            .col-12
              p <b>Externos</b>. Son aquellos KPI que miden el impacto de la marca en la audiencia externa. Ejemplo: porcentaje de clientes satisfechos.

              p <b>Internos</b>. Son los indicadores de gestión relacionados con los procesos internos de la marca. Ejemplo: ingresos por empleado. 
          .row.justify-content-center.align-items-start(titulo="Indicadores de gestión cuantitativos o cualitativos")
            .col-12
              p <b>Cuantitativos</b>. Este criterio incluye los KPI que miden procesos objetivos de producción y servicio y se expresan en valores numéricos. Ejemplo: volumen de ingresos por ventas.

              p <b>Cualitativos</b>. Son los indicadores de gestión que miden percepciones subjetivas acerca del funcionamiento de la empresa. Ejemplo: calificación de la calidad del servicio.   
  
          .row.justify-content-center.align-items-start(titulo="Indicadores de gestión para medir eficacia y eficiencia")
            .col-12
              p <b>Eficacia</b>. Bajo este criterio se agrupan los KPI que miden el funcionamiento objetivo de la organización. Ejemplo: cantidad de productos fabricados en el mes.

              p <b>Eficiencia</b>. Son los indicadores de gestión que permiten apreciar cómo la empresa utiliza, de manera racional, los recursos disponibles para obtener resultados superiores a los planificados. Ejemplo: cantidad de ventas proyectadas frente a cantidad de ventas conseguidas.

    p(data-aos="fade-down") Algunos de los indicadores explicados anteriormente, se trabajan en los planes de capacitación.
    
    p(data-aos="fade-down").mb-5 A continuación, se describen algunos ejemplos: 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Cumplimiento" :icono="require('@/assets/curso/temas/65.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p El índice de cumplimiento muestra cuántos colaboradores, dentro de la organización, recibieron capacitación. Se calcula dividiendo la cantidad de capacitaciones culminadas, entre el total de capacitaciones planificadas en un periodo:
            img.img-a.img-t.mt-4(src='@/assets/curso/temas/73.svg', alt='')   

          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/69.png', alt='')   
      .py-4.py-md-5(titulo="Tasa de cobertura (TCC)" :icono="require('@/assets/curso/temas/66.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p La tasa de cobertura muestra el alcance de la capacitación, es decir, mide el porcentaje de la población alcanzada. Se calcula dividiendo la cantidad de colaboradores capacitados entre el promedio de colaboradores que tiene la empresa en un tiempo determinado:
            img.img-a.img-t.mt-4(src='@/assets/curso/temas/74.svg', alt='')   

          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/70.png', alt='')  
      .py-4.py-md-5(titulo="Inversión por empleado (ICE)" :icono="require('@/assets/curso/temas/67.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p La medición de la inversión por empleado <b>mostrará el costo de capacitación por empleado</b> en un período determinado.

            p Se calcula dividiendo el monto de la inversión de los programas de capacitación, entre el promedio de empleados en un tiempo determinado.
            img.img-a.img-t.mt-4(src='@/assets/curso/temas/75.svg', alt='')   

          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/71.png', alt='')  
      .py-4.py-md-5(titulo="Impacto de la capacitación (IC)" :icono="require('@/assets/curso/temas/68.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p La medición del impacto ayudará a determinar el nivel de influencia en el logro de los objetivos y metas predeterminadas, que fueron el resultado de la capacitación de los colaboradores.

            p Se puede calcular de diversas formas y dependerá del área del negocio relacionado con  la capacitación; por ejemplo: impacto de la capacitación comercial se valora en ingresos, consecución de clientes, cumplimiento de metas de ventas, crecimiento del mercado entre otras. 
          .col-md-4
            img.img-a.img-t(src='@/assets/curso/temas/72.png', alt='')                                           
    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-6
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Instrumento de evaluación de capacitación         
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Para evaluar una capacitación en sí misma, se procede con instrumentos de evaluación que se pueden diseñar fácilmente y que pueden aportar, así como los indicadores de gestión del proceso, información para conocer el nivel de apropiación del conocimiento generado en la capacitación o retroalimentación del proceso vivenciado. A continuación, se profundiza un poco más en el tema:
        
    p(data-aos="fade-down").mb-5 En el desarrollo del proceso de evaluación, se pueden identificar dos tipos de evaluación:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="De retroalimentación de la capacitación")
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            p Tiene como objetivo, conseguir una retroalimentación del participante frente al proceso formativo recibido. Evalúa aspectos como desempeño del docente, retroalimentación del material del curso, los tiempos del curso, la disponibilidad de los materiales de estudio, la implementación del curso, etc.        
          .col-md-6  
            img.img-a.img-t(src='@/assets/curso/temas/77.png', alt='') 
      .py-3.py-md-4(titulo="De asimilación de conceptos")
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            p Tiene como objetivo examinar el nivel de aprehensión de conocimientos.        
          .col-md-6  
            img.img-a.img-t(src='@/assets/curso/temas/78.png', alt='')  
      .py-3.py-md-4(titulo="Características generales")
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            p Como características generales para la elaboración de las encuestas, en cualquiera de los casos, se deben tener presente los siguientes aspectos:
            ul.lista-ul.ps-3
              li 
                i.lista-ul__vineta.colorv
                p.mb-0 El tamaño de la evaluación debe ser justa (ni muy larga ni muy corta).
              li 
                i.lista-ul__vineta.colorv
                p.mb-0 El contenido debe ser claro, conciso y bien estructurado.
              li 
                i.lista-ul__vineta.colorv
                p.mb-0 Se pueden utilizar varios tipos de preguntas: abiertas, cerradas, falso y verdadero, opción múltiple, entre otras.                     
          .col-md-6  
            img.img-a.img-t(src='@/assets/curso/temas/79.png', alt='')                             
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-fondo6
  background-image: url(../assets/curso/temas/80.png)
  background-repeat: no-repeat
  background-size: contain
  background-position: bottom
</style>
