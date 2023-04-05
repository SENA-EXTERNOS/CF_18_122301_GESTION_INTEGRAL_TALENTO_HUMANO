<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')    
      .col-lg-8
        p(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde conocerá sobre las actividades administrativas y logísticas necesarias para la implementación de un programa de capacitación empresarial, a través de metodologías prácticas que lleven al cumplimiento de la planeación trazada, las políticas de la empresa y la normatividad exigida. En este componente podrá aprender sobre diferentes modelos para la medición de capacitación, necesarios para la presentación de un informe ejecutivo. Además, también conocerá diversos indicadores de gestión que permitan el cumplimiento de las metas establecidas por la organización. Y para finalizar, podrá saber sobre los planes de mejoramiento o secuencia de pasos y acciones que realiza una empresa, para obtener mejores resultados en los programas de capacitación, los cuales son implementados por recursos humanos.

    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/XhpmcCW9xbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
