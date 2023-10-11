<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo7
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Planes de mejoramiento
    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-8.up
        p(data-aos="fade-down") Realizar la ejecución de un proceso previamente planeado implica analizarlo e identificar sus fortalezas y debilidades para así construir planes de mejora que permitan dinamizar y enriquecer el proyecto planeado buscando el cumplimiento de los objetivos trazados. Los planes de mejora permiten optimizar las actividades individuales planteadas e impulsar el proceso que permita asegurar el éxito del mismo.        
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Un plan de mejora se puede definir como una secuencia de pasos y acciones que realiza una empresa para obtener mejores resultados. En términos más concretos, un plan de mejora significa un cambio. 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/81.png', alt='')  
    p(data-aos="fade-down").mb-5 De acuerdo con Rodrigues (2021), entre los beneficios que se obtienen de generar un plan de mejora se encuentran:  
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          PasosA.color-primario(tipo="l")
            .row.justify-content-center.align-items-center
              .col-lg-8.my-3
                h4.mb-4 Operaciones más eficientes
                p(data-aos="fade-left") Implementar un plan de mejora en los procesos permite aplicar acciones correctivas a procesos deficientes. Ayuda a eliminar aquellos componentes que consumen mucho tiempo y que, además, son innecesarios; de esta manera, los procesos se vuelven más eficaces.  
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/82.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-4.order-1.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/83.png', alt='')            
              .col-lg-8.text-start.order-lg-2.my-3
                h4.mb-4 Mejora la gestión de la organización
                p(data-aos="fade-right") Los planes de mejora implican esfuerzos en equipo a partir de la gestión de los procesos y sus funciones. Esto permite tener un funcionamiento exitoso del proceso y una mejora en la organización.   
            .row.justify-content-center.align-items-center
              .col-lg-8.my-3
                h4.mb-4 Faculta a tomar mejores decisiones
                p(data-aos="fade-left") Sin duda, uno de los grandes beneficios de implementar planes de mejora en los procesos es la toma de decisiones informadas que impulsan a la optimización.  
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/84.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-4.order-1.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/85.png', alt='')            
              .col-lg-8.text-start.order-lg-2.my-3
                h4.mb-4 Mejora la productividad
                p(data-aos="fade-right") Por medio de un plan de mejora, en el proceso se pueden implementar aplicaciones de automatización para que los empleados mejoren su productividad. Al simplificar tareas repetitivas, su tiempo valioso lo podrán dedicar a labores más estratégicas. De esta forma, se impulsa la productividad en general.   
            .row.justify-content-center.align-items-center
              .col-lg-8.my-3
                h4.mb-4 Satisfacción de empleados
                p(data-aos="fade-left") Cuando los procesos funcionan de manera correcta, ayudan a motivar a los miembros de los equipos que destinan su tiempo en la implementación de los mismos. Por el contrario, un proceso ineficiente podría generar frustración en los empleados, pues les hace sentir que sus esfuerzos no valen la pena. Un plan de mejora de procesos, bien elaborado, podría mejorar la satisfacción de los empleados y hacer que participen de manera positiva en el proceso.   
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/86.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-4.order-1.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.png', alt='')            
              .col-lg-8.text-start.order-lg-2.my-3
                h4.mb-4 Satisfacción del cliente
                p(data-aos="fade-right") El plan de mejora es un proceso con enfoque interno y externo. El resultado final de cada proceso es el de cubrir las necesidades de los clientes y el punto de vista de los consumidores del producto o servicio. La implementación de este análisis aumenta el valor de los procesos y asegura su éxito.   
    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Objetivo y  diseño 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8  
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/88.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El plan de mejora permite:  
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.colorv1
                p.mb-0 Identificar las causas que provocan las debilidades detectadas.
              li 
                i.fas.fa-angle-right.colorv1
                p.mb-0 Identificar las acciones de mejora a aplicar. 
              li 
                i.fas.fa-angle-right.colorv1
                p.mb-0 Analizar su viabilidad. 
              li 
                i.fas.fa-angle-right.colorv1
                p.mb-0 Establecer prioridades en las líneas de actuación.
    p(data-aos="fade-down") Para diseñar un plan de mejora, se deben tener en cuenta varios aspectos importantes.
    p(data-aos="fade-down").mb-5 Conozcamos cada uno de ellos:
    
    .row.justify-content-center.align-items-center          
      .col-lg-10
        img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/89.svg', alt='')            

        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Luego de conocer los aspectos que debemos tener en cuenta en el momento de elaborar un plan de mejora, la siguiente etapa es la elaboración del plan, el cual conlleva una serie de pasos a seguir.

    p(data-aos="fade-down").mb-5 Estos pasos son:  

    .row.justify-content-start.align-items-center.mb-5          
      .col-lg-5
        img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')  
      .col-lg-6
        LineaTiempoD.color-primario
          p(numero="1" titulo="Identificar el proceso a mejorar") El proceso a mejorar, en este caso, sería el proceso de capacitación. Para facilitar el desarrollo de esta fase, se puede ubicar en un diagrama de flujo en el proceso que se está desarrollando, ilustrando cada uno de los pasos que se llevan a cabo; de esta forma, se pueden localizar fácilmente, los puntos débiles.                                 
          p(numero="2" titulo="Analizar el proceso") Una vez plasmado el proceso de capacitación, se examina detalladamente cuáles son los aspectos que integran cada paso y se identifica dónde pueden existir las fallas. Una vez localizados los puntos débiles, se analiza a fondo qué es lo que está sucediendo y cuáles son las causas de la deficiencia en el proceso.                                 
          p(numero="3" titulo="Reformular el proceso") Una vez identificada la raíz del problema, es momento de replantear el proceso. El objetivo de este paso es el de mejorar lo que se tenía y evitar el problema identificado.                               
          p(numero="4" titulo="Redactar un plan de mejora") Una vez elegida la solución, es momento de redactar el plan de mejora del proceso. Este incluye la solución y asignación de los recursos necesarios para llevarlo a cabo, señalando los cambios que se deben aplicar gracias a la información detallada que se ha recabado y cómo debe implementarse. Incluso, se puede realizar otro diagrama en donde se ilustren las tareas, los entregables y los recursos que deben completarse durante el proceso.                                
          p(numero="5" titulo="Comunicar el plan de mejora") Una vez construido el documento con la información del plan de mejora, es momento de comunicarlo al equipo, asegurándose que todos hayan recibido esta información y que estén de acuerdo con las tareas asignadas, manteniendo una actitud flexible y de escucha ante los comentarios y sugerencias.                                
          p(numero="6" titulo="Ejecutar el plan de mejora") Ahora es momento de poner en práctica el plan de mejora en el proceso. Se realiza llevando a cabo al pie de la letra, cada una de las tareas y asignaciones que se diseñaron en el plan, para obtener los mejores resultados.                               
          p(numero="7" titulo="Supervisar el plan de mejora") Una vez que se está ejecutando el plan de mejora, es importante la supervisión que el equipo esté realizando de las mejoras propuestas. Al mismo tiempo, se deben identificar las fallas que puedan surgir con base en un análisis en tiempo real; de esta manera, se podrán mejorar como parte de un método continuo. 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Programa 

    p(data-aos="fade-down").mb-5 Un plan de mejora debe contener los siguientes aspectos:
    
    .row.justify-content-evenly.align-items-end.mb-5       
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/91.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Objetivo</b>. Se describe el objetivo que se desea alcanzar con el desarrollo del plan de mejora planteado. Enuncia lo que se pretende lograr con el planteamiento de la debilidad detectada y establecida como de “atención prioritaria”. 
          hr.mt-4
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/92.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Indicadores</b>. Muestras observables de que se avanza hacia el objetivo planteado. (crucial para verificar el cumplimiento del plan).
          hr.mt-4   
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Necesidad a mejorar</b>. Se describe cuál es la necesidad con relación a los errores u omisiones detectados en los procesos fundamentales del programa y que deben atenderse por el impacto que tienen. Las debilidades deben priorizarse con criterios claramente establecidos: importancia, impacto, viabilidad. 
          hr.mt-4
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/94.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Acciones de seguimiento</b>. Aquellas acciones específicas que permiten controlar el avance y el nivel de ejecución de cada una de las actividades o proyectos que integran el plan. 
          hr.mt-4   
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/95.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Actividades</b>. Son aquellos proyectos específicos que se desarrollarán para superar la debilidad y alcanzar la situación deseada. 
          hr.mt-4
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/96.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Plazo de ejecución</b>. Es la fecha límite para desarrollar la acción. 
          hr.mt-4   
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/97.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Tareas</b>. Es el nivel más operativo de las actividades o proyectos que integran el plan de mejora. 
          hr.mt-4
      .col-lg-5
        .row.justify-content-center.align-items-start      
          .col-auto 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.svg', alt='')
          .col
            p(data-aos="fade-down") <b>Responsable</b>. Es la persona o personas que tendrán la responsabilidad de desarrollar la acción. Generalmente, se enuncia el cargo que ocupa. Puede exponerse una dependencia. 
          hr.mt-4                                    

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
          
</template>

<script>
export default {
  name: 'Tema7',
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
.bloque-fondo7
  background-image: url(../assets/curso/temas/99.png)
  background-repeat: no-repeat
  background-size: contain
  background-position: bottom
</style>
