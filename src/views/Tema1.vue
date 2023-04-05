<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Concepto de coordinación
    .bg1      
      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')    
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Para coordinar la implementación del programa de capacitación de una organización, se debe establecer primero la planeación, la cual lleva consigo los temas a realizar (previamente identificados), sus objetivos, los participantes, el cronograma, y la forma en que se ejecuta la evaluación.       
          p(data-aos="fade-down") Una vez clarificado el concepto de planeación, se inicia con la ejecución del programa que, por lo general, se realiza cada mes. 

        .row.justify-content-start.align-items-center.mb-5.pt-5           
          .col-lg-3
            .bgp.p-1(data-aos="fade-right")
              h4(data-aos="fade-down").mb-0 Elementos 

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')    
        .col-lg-10
          p(data-aos="fade-down") De acuerdo con la definición de la Real Academia Española (RAE), la palabra <b>coordinar</b> implica dirigir y concertar varios elementos. Transferido este concepto al tema de la capacitación, <b>coordinar su desarrollo</b>, implica dirigir una serie de actividades administrativas y logísticas para lograr la consecución del objetivo trazado, desde la decisión del tema a trabajar, hasta su ejecución y evaluación. 

      p(data-aos="fade-down").mb-5 Elementos que se deben tener en cuenta para coordinar una planeación de capacitación: 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          PasosA.color-primario(tipo="l")
            .row.justify-content-center.align-items-center
              .col-lg-9.my-3
                p(data-aos="fade-left") Cotizar con diferentes proveedores, el contenido de la capacitación a implementar, las técnicas y el público al que va dirigido.   
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-3.order-1.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')            
              .col-lg-9.text-start.order-lg-2.my-3
                p(data-aos="fade-right") Determinar la fecha, hora y lugar donde se llevará a cabo la capacitación.  
            .row.justify-content-center.align-items-center
              .col-lg-9.my-3
                p(data-aos="fade-left") Determinar recursos y materiales, y las ayudas audiovisuales a utilizar durante la formación.   
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-3.order-1.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')            
              .col-lg-9.text-start.order-lg-2.my-3
                p(data-aos="fade-right") Realizar la invitación a la capacitación, incluyendo la información que sustenta el evento a realizarse.
            .row.justify-content-center.align-items-center
              .col-lg-9.my-3
                p(data-aos="fade-left") Coordinar el refrigerio o estación de café, si está incluido dentro del presupuesto.   
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-3.order-1.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')            
              .col-lg-9.text-start.order-lg-2.my-3
                p(data-aos="fade-right") Coordinar la bienvenida a los participantes, la entrega de escarapela con la identificación, material de apoyo, libreta de apuntes, ubicación del personal en el salón, registro de asistencia, entre otros; evaluar el proceso y certificar la participación.

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-3
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Proceso de capacitación 
      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')    
        .col-lg-10
          p(data-aos="fade-down") Capacitar a los trabajadores implica involucrarlos para poner en funcionamiento sus habilidades y conocimientos, procurando realizar con mayor propiedad, las funciones de su cargo, con el fin de lograr la consecución de objetivos organizacionales que permitan una mayor competitividad de la empresa en el mercado.
    p(data-aos="fade-down").mb-5 Lo invitamos a ver el siguiente video, donde se nos amplía la temática sobre la capacitación:
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/MvICzVEr0F8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)             
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
