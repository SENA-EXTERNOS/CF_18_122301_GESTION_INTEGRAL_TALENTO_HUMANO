<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4

    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Contingencia
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/31.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Aunque todo se encuentre perfectamente planeado, es preciso contar con un plan de contingencia que permita proyectar, lo que podría salirse de lo normal y saber cómo actuar frente a este nuevo suceso, porque se está trabajando con personas convocadas por la empresa; entonces, es pertinente establecer planes de contingencia frente a variables que, aunque no sean las normales, sí pueden llegar a presentarse.
    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Concepto y objetivo 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')    
      .col-lg-5
        p(data-aos="fade-down") Según la RAE (2021), una <b>contingencia</b> es la posibilidad de que algo suceda o no suceda. Para este caso, cuando se está organizando un evento, pueden suceder muchas variables: incumplimiento por parte del capacitador, eventos de salud de los participantes, incumplimiento del proveedor de refrigerios, no escribir los marcadores borrables, etc. Todos estos imprevistos se deben tener en cuenta para asegurarse que el evento se presente con éxito.  
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='') 

    p(data-aos="fade-down").mb-5 Nadie quiere que el plan A falle, pero tener un buen plan B es la mejor manera de estar preparado para cualquier situación. Con un plan de respaldo sólido, se puede reaccionar de manera efectiva ante imprevistos y volver a la normalidad lo más rápido posible.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10 
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Un plan de contingencia tiene como objetivo, planificar y describir la capacidad para generar respuestas rápidas, que se requieran, para controlar una situación que se sale de la regularidad.

    p(data-aos="fade-down") Para la ejecución correcta del programa de capacitación de recursos humanos, se debe diseñar un plan de contingencia que posibilite la identificación y el análisis de situaciones que generan cambios en la formación. Estas irregularidades pueden cambiar la estructura planeada o ser claves para el desarrollo armónico del evento. Por lo tanto, se tienen en cuenta diferentes etapas que permiten la solución efectiva de dichos sucesos. 
    p(data-aos="fade-down").mb-5 Para llevar a cabo un plan de contingencias, es importante conocer lo que se debe tener en cuenta; a continuación, se revisarán los pasos para lograrlo:

    .tarjeta-gris.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-md-5.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')
          .col-md-5 
            h4.mb-3 Identificar los posibles riesgos
            p Realizar una lista de cada uno de los riesgos que podrían afectar el normal desarrollo de la capacitación o del plan de capacitación; se puede realizar una lluvia de ideas con el personal que ayuda con el desarrollo del plan de capacitación o capacitación específica. 
        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-md-5.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/35.png', alt='')
          .col-md-5 
            h4.mb-3 Evaluar los riesgos según su gravedad y probabilidad
            p Identificados los riesgos y las amenazas potenciales, se procede a realizar un análisis de riesgo e identificar el posible impacto de cada uno de ellos.  
        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-md-5.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')
          .col-md-5 
            h4.mb-3 Identificar riesgos importantes
            p Una vez asignado el grado de gravedad y probabilidad de cada riesgo, se decide cuáles riesgos son los más importantes para abordar. 

            p Ejemplo: riesgo de evento de la salud del participante en la capacitación. Riesgo de evento de la salud del conferencista.  
        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-md-5.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')
          .col-md-5 
            h4.mb-3 Crear un plan de contingencia para los mayores riesgos
            p Crear un plan de contingencia para cada riesgo que se identifique. Tener en cuenta aspectos como: factores desencadenantes que pondrán en marcha el plan, respuesta inmediata, quiénes deben participar y recibir informes, responsabilidades claves, cronograma de respuestas. 
        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-md-5.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')
          .col-md-5 
            h4.mb-3 Aprobación del plan de contingencia
            p Los líderes relevantes de la empresa, deberán conocer el plan y generar la respectiva aprobación de las acciones y medidas a tomar. 
        .row.justify-content-center.align-items-center(titulo="Paso 6")
          .col-md-5.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')
          .col-md-5 
            h4.mb-3 Socialización de los planes de contingencia 
            p Una vez creados los planes de contingencia, se deben socializar con las personas pertinentes.  
        .row.justify-content-center.align-items-center(titulo="Paso 7")
          .col-md-5.mb-4.mb-md-0
            img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')
          .col-md-5 
            h4.mb-3 Supervisar el plan de contingencia 
            p Revisar el plan de contingencia con frecuencia, para asegurarse que sigue siendo el correcto. Se deben tener en cuenta, nuevos riesgos o nuevas oportunidades. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8 
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Un plan de contingencia debe estar listo para prevenir cualquier eventualidad que se pueda presentar, así que lo óptimo es que cuente con las siguientes características:
    .bg3_1
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-8 
          img.img-a.img-t(src='@/assets/curso/temas/42.svg', alt='')

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Control y seguimiento

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/43.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El control y seguimiento de un plan de contingencia implica el conjunto de acciones que se llevarán a cabo para la comprobación de la correcta ejecución de las actividades del proyecto, establecidas en la planificación del mismo. De esta forma es importante revisar y actualizar constantemente el plan trazado para evitar fracasos en la ejecución de lo planeado.          
</template>

<script>
export default {
  name: 'Tema4',
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
.bloque-fondo4
  background-image: url(../assets/curso/temas/44.png)
  background-repeat: no-repeat
  background-size: contain
  background-position: bottom
</style>
