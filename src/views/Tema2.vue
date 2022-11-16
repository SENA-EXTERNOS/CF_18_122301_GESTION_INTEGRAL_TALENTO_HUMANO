<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Metodología para verificación de actividades y recursos de agenda
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es importante conservar siempre un registro de la planeación del evento de capacitación; a continuación, en la Tabla 1 se introduce una lista de chequeo que ayudará en el proceso, para que ningún detalle pase inadvertido.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Lista de chequeo para el registro de la planeación del evento de capacitación 

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr   
                th(rowspan='2') Actividad
                th(colspan='2') Estado de desarrollo
              tr
                th Pendiente
                th Ejecutado
            tbody.text-center
              tr
                td Cotización del proveedor. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                  
              tr
                td Aprobación de la cotización. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Determinación de la fecha del evento. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Establecimiento de la hora. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Fijación del lugar físico. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Invitación a los participantes. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Coordinación de los refrigerios. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Gestión del pago a los proveedores. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Asignación de tareas al personal de apoyo. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Registro de la capacitación. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Material de apoyo. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Evaluación de la capacitación. 
                td                             
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')                 
              tr
                td Registro fotográfico del evento. 
                td
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.svg', alt='')
                td

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-8
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Soporte documental relacionado con los programas de capacitación de personal

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Una vez revisados los elementos que se deben tener en cuenta para el buen funcionamiento de una capacitación, es importante tener presente los soportes documentales que se deben obtener al final de su ejecución, debido a que ellos serán la evidencia de la gestión llevada a cabo.

    p(data-aos="fade-down").mb-5 Normalmente, de la culminación de un programa de capacitación se desprende la siguiente documentación:        

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')    
      .col-lg-8
        SlyderF.custom.mb-5(columnas="col-lg-6")(data-aos="fade-left")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/18.svg", alt="alt").img100.m-auto     
            p.text-center.mb-0 Programa de capacitación (por lo general en medio digital).
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/19.svg", alt="alt").img100.m-auto     
            p.text-center.mb-0 Registro de asistencia (por lo regular físico).
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/20.svg", alt="alt").img100.m-auto     
            p.text-center.mb-0 Registro, en el sistema, de la asistencia a las capacitaciones en las cuales participa cada trabajador (usualmente por medio digital en Excel o en sistemas diseñados para la gestión del talento humano).
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/21.svg", alt="alt").img100.m-auto     
            p.text-center.mb-0 Evaluaciones de las capacitaciones (físicas o en digital).
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/22.svg", alt="alt").img100.m-auto     
            p.text-center.mb-0 Registros fotográficos (digitales).
</template>

<script>
export default {
  name: 'Tema2',
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
.bloque-fondo2
  background-image: url(../assets/curso/temas/15.svg)
  background-repeat: no-repeat
  background-size: contain
  background-position: bottom
</style>
