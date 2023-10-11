<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Metodología para el control de asistentes, actividades y logística
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')    
      .col-lg-8.up
        p(data-aos="fade-down") En un plan de capacitación, es de vital importancia dejar evidencia del trabajador que participó en la capacitación programada; esto soporta la veracidad en la gestión de las empresas y en la obligatoriedad de capacitar a su personal.       
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Generalmente, este control se realiza por medio de listas de asistencia, registro y control de la misma, donde se consigna el nombre de la capacitación, la fecha de realización, intensidad horaria, lugar en que se ejecutó la capacitación, nombre del participante, número de la cédula, cargo en la compañía y firma de asistencia.   
    .bg4
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-7
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Metodología para la consolidación de información y presentación de informes

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')    
        .col-lg-10
          p(data-aos="fade-down") En la ejecución de los planes de capacitación, se van generando datos que, mes a mes, semestral o anualmente, puedan dar cuenta de la gestión del proceso de capacitación de una organización.   
          p(data-aos="fade-down") Para consolidar esa información se llevan a cabo los siguientes pasos: 

      TabsC.color-acento-contenido.mb-5
        .py-3.py-md-4(titulo="Compilación")
          .row.justify-content-center.align-items-start
            .col-md-5.mb-4.mb-md-0
              p Datos como capacitaciones planeadas frente a capacitaciones ejecutadas, cumplimiento del plan de capacitación por líneas de capacitación, cantidad de participantes, cobertura por áreas o ciudades, entre otras.          
            .col-md-6  
              img.img-a.img-t(src='@/assets/curso/temas/48.png', alt='')
        .py-3.py-md-4(titulo="Tabulación de resultados")
          .row.justify-content-center.align-items-start
            .col-md-5.mb-4.mb-md-0
              p El proceso de tabulación de la información, consiste en realizar una tabla o un cuadro con los resultados obtenidos luego de la recopilación de datos. Radica, por lo tanto, en presentar los datos estadísticos en forma de tablas o cuadros, con el objetivo de ser sencillos de leer y de comprender.         
            .col-md-6  
              img.img-a.img-t(src='@/assets/curso/temas/49.png', alt='') 
        .py-3.py-md-4(titulo="Tablas de frecuencia")
          .row.justify-content-center.align-items-start
            .col-md-5.mb-4.mb-md-0
              p Una tabla de frecuencias muestra, de forma ordenada, un conjunto de datos estadísticos y a cada uno de ellos se le asigna una frecuencia que, en pocas palabras, son las veces que se repite un número o dato. Se pueden usar las tablas de frecuencias para ordenar variables cuantitativas o cualitativas.         
            .col-md-6  
              img.img-a.img-t(src='@/assets/curso/temas/50.png', alt='')                                 
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-2
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Gráficas

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='')    
        .col-lg-10
          p(data-aos="fade-down") Los gráficos estadísticos son herramientas para la visualización de datos que permiten representar, de manera accesible, información compleja. Consiguen entregar al usuario, la información de manera clara y precisa, facilitando la comparación y comprensión de la evolución de distintas variables.
    p(data-aos="fade-down").mb-5 Existen varios tipos de gráficos estadísticos y entre ellos están: 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start.py-4
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Mapa de calor
            p Muestra la posible relación entre variables. Se suele utilizar para datos que cambian con el tiempo. Usa colores para explorar la relación entre variables.        
          .col-md-6 
              img.img-a.img-t(src='@/assets/curso/temas/52.svg', alt='')
        .row.justify-content-center.align-items-start.py-4
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Diagrama de caja y bigotes
            p Muestra la distribución de datos y resalta el promedio y los valores no frecuentes. Tienen líneas que se extienden verticalmente y sobresalen, llamadas bigotes, que muestran el mínimo y el máximo y cualquier dato que no se encuentre dentro del rango es marcado e identificado de forma individual.

            p Visualmente describen varias características importantes, al mismo tiempo. Se usan para localizar errores de datos y explorar una variable.
         
          .col-md-6 
              img.img-a.img-t(src='@/assets/curso/temas/53.png', alt='')    
        .row.justify-content-center.align-items-start.py-4
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Diagrama de barras
            p Gráfico de barras horizontales que recoge la frecuencia con que se repite una determinada variable en cada uno de los distintos grupos en los que se ha dividido un conjunto. 

            p Utilizado para mostrar de forma breve, un grupo de datos que puede incluir variables cualitativas y cuantitativas.
         
          .col-md-6 
              img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='')   
        .row.justify-content-center.align-items-start.py-4
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Gráfico de líneas 
            p Permite visualizar los cambios a lo largo de una categoría continua, como tiempo o distancia. Observar un cambio con un gráfico de líneas, permite ver de una sola vez la tendencia general y comparar al mismo tiempo, varias tendencias.         
          .col-md-6 
              img.img-a.img-t(src='@/assets/curso/temas/55.png', alt='')   
        .row.justify-content-center.align-items-start.py-4
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Histograma
            p Gráfico que indica la frecuencia de un hecho mediante una distribución de los datos. No se elabora con atributos, sino con variables medibles como: peso, temperatura y tiempo.

            p Es similar a un diagrama de barras, donde cada una representa cómo se distribuyen los datos en una categoría única y la cantidad de frecuencias de un punto de datos específico.         
          .col-md-6 
              img.img-a.img-t(src='@/assets/curso/temas/56.png', alt='')   
        .row.justify-content-center.align-items-start.py-4
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Gráfico en mosaico
            p Se utiliza para mostrar la relación entre dos variables, ya sean factores o cadenas de texto. Es una representación gráfica de una tabla de contingencia. Consiste en una cuadrícula, en la que cada rectángulo representa la cantidad de casos que corresponden a un cruce específico de variables.         
          .col-md-6 
              img.img-a.img-t(src='@/assets/curso/temas/57.png', alt='')   
        .row.justify-content-center.align-items-start.py-4
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Gráfico circular 
            p Es útil para ilustrar la relación de las partes con el todo cuando hay una cantidad reducida de niveles. Es una forma popular de mostrar qué parte de la cantidad total (las ventas anuales) representa cada cantidad individual (las ventas trimestrales).         
          .col-md-6 
              img.img-a.img-t(src='@/assets/curso/temas/58.png', alt='') 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Normas técnicas

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Para presentación de un informe de gestión del plan de capacitación, se puede utilizar como guía la Norma Técnica Colombiana 1486 para la elaboración de informes; allí se puede encontrar una guía en relación a márgenes, portada, introducción, tabla de contenido, cuerpo del texto, conclusiones y bibliografía. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/60.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 También es importante presentar informes ejecutivos en programas gráficos que generen una presentación rápida y concisa de la información que se quiere transmitir. En estos informes ejecutivos se debe plasmar información básica del informe a presentar como objetivo, desarrollo del proyecto o actividad, resultados, indicadores, propuesta de mejora si las hay.          
</template>

<script>
export default {
  name: 'Tema5',
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
.bloque-fondo5
  background-image: url(../assets/curso/temas/61.png)
  background-repeat: no-repeat
  background-size: contain
  background-position: bottom
</style>
