<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Roles de trabajo
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para llevar a cabo una actividad de capacitación con éxito y sin prevenciones adicionales, ante todo si es un evento masivo, es necesario asignar responsabilidades al equipo de trabajo, para poder abarcar cada uno de los detalles y generar una logística sin contratiempos.
        p(data-aos="fade-down") Entre los roles de trabajo que se pueden asignar, se encuentran los siguientes:               
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')  
    .bg2
      .row.justify-content-center.align-items-start.mb-5
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')        
        .col-lg-7
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg3")
            .row.row.justify-content-center.align-items-start(titulo="Logística para la preparación del salón")
              .col-12
                p Incluye a las personas encargadas de vigilar que el salón se encuentre dotado de silletería cómoda, y de los medios audiovisuales necesarios para la ejecución de la capacitación. 
            .row.row.justify-content-center.align-items-start(titulo="Moderador")
              .col-12
                p Se refiere a las personas encargadas de dirigir el desarrollo de la capacitación ante los asistentes, incluyendo unas palabras de bienvenida, una presentación del instructor, la despedida y los agradecimientos.  
            .row.row.justify-content-center.align-items-start(titulo="Comité de bienvenida")
              .col-12
                p Relaciona a las personas encargadas de registrar la asistencia, entregar las escarapelas de identificación y el material de apoyo a los participantes.  
            .row.row.justify-content-center.align-items-start(titulo="Logística de ubicación del personal en el salón")
              .col-12
                p Alude a las personas encargadas de ubicar, en el espacio, a los participantes cuidando que todos queden sentados y organizados cómodamente, para atender a todo el proceso de capacitación. 
            .row.row.justify-content-center.align-items-start(titulo="Logística de refrigerios")
              .col-12
                p Indica a las personas encargadas de vigilar que la estación de café o refrigerios se ubique en un lugar conveniente y apropiado y, al mismo tiempo, controlar la afluencia de personas para recibir el respectivo refrigerio, así como también vigilar el aseo y la organización del lugar.  
            .row.row.justify-content-center.align-items-start(titulo="Logística de cierre del evento")
              .col-12
                p Se refiere a las personas encargadas de repartir el formato de evaluación de la capacitación y/o del proceso de aprendizaje, si así ha sido establecido con anterioridad. 

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-6
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Responsabilidades y obligaciones de colaboradores y directivos

      p(data-aos="fade-down") Los directivos serán los que inicialmente aprueban o reprueban las cotizaciones o proveedores de capacitación, lugar, fecha y hora. Una vez aprobados estos aspectos, el área de capacitación se encarga de realizar la ejecución de las decisiones. 
      p(data-aos="fade-down").mb-5 Destinar las tareas y responsabilidades al equipo de apoyo, será de vital importancia para el éxito de la actividad, por esto se asignan los siguientes roles: 
      .row.justify-content-center.align-items-start.mb-5
        .col-lg-7
          LineaTiempoD.color-primario
            p(numero="1" titulo="Planeación del evento") Cotizar, gestionar aprobar.  
            p(numero="2" titulo="Ejecución del mismo") Equipo de bienvenida e instalación del evento de capacitación, lo que implica entrega de escarapelas, material de apoyo y registro de asistencia. 
            p(numero="3" titulo="Tiempos de desarrollo") Personal que se encuentra informado para que la capacitación se desenvuelva en los tiempos planeados previamente. 
            p(numero="4" titulo="Refrigerio") Equipo de trabajo que maneja la información sobre la llegada y distribución de los refrigerios. 
            p(numero="5" titulo="Evaluación del evento") Personal encargado de evaluar la capacitación que se llevó a efecto. 
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='') 
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-6
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Deberes de los colaboradores y las directivas

      p(data-aos="fade-down").mb-5 Así como las empresas están obligadas a capacitar a sus trabajadores, de acuerdo con lo reglamentado en la Ley 50 de 1990, también los trabajadores se encuentran comprometidos a participar en los eventos de capacitación.
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10    
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/27.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 De acuerdo con lo anterior, desde la mencionada Ley, el gobierno colombiano dispuso que para las empresas con 50 o más empleados que desarrollen una jornada laboral de 48 horas semanales, se deben destinar 2 horas de dicha jornada a programas de capacitación y/o recreación; de igual manera, con la implementación del SSST, Sistema de Seguridad y Salud en el Trabajo, existen algunos temas que son de obligatorio cumplimiento y que exponen a la empresa a multas de carácter económico, por su incumplimiento. 
      p(data-aos="fade-down").mb-5 Como contraparte, el trabajador también tiene la obligación de asistir a las capacitaciones que se le programen; es importante conocer que la Ley dice que la programación se debe realizar dentro de la jornada laboral. 
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-6
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Proceso de convocatoria y divulgación de eventos 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')       
      .col-lg-8
        p(data-aos="fade-down") Como parte del desarrollo de la estrategia logística de un evento de capacitación, es importante la convocatoria y divulgación de la misma, asegurando que la información llegue a toda la población que se definió, para lograr el evento.             
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Para concretar la publicidad, lo ideal es desarrollar una pieza gráfica llamativa que invite a participar del evento y que contenga el tema, la fecha, hora y lugar donde se llevará a cabo.
    p(data-aos="fade-down").mb-5 A continuación, se plantea un ejemplo de convocatoria para una capacitación:  
    
    .row.justify-content-center.align-items-start
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')       
      .col-lg-8
        p(data-aos="fade-down") Para llevar un control de las personas participantes, es importante que se genere una inscripción previa, para así poder definir los recursos logísticos como: capacidad del salón, cantidad de refrigerios, certificados de asistencia, entre otros.

        p(data-aos="fade-down") La divulgación de dicha invitación se puede realizar a través de correo electrónico, grupos de WhatsApp, carteleras, sistemas informáticos que utilice la empresa, entre otros.       
                                   
</template>

<script>
export default {
  name: 'Tema3',
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
.bloque-fondo3
  background-image: url(../assets/curso/temas/30.png)
  background-repeat: no-repeat
  background-size: contain
  background-position: bottom
</style>
