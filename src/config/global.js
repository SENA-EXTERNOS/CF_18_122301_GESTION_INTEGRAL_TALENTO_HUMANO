export default {
  global: {
    componenteFormativo:
      'Implementación y desarrollo del programa de capacitación de recurso humano',
    descripcionCurso:
      'Este componente formativo presenta información importante para implementar las acciones de coordinación y capacitación planeadas para el desarrollo del talento humano en una organización, teniendo en cuenta sus políticas, roles, metodología, protocolos y la normatividad vigente, fundamentos para consolidar la estructura y los procedimientos técnicos en la institución.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto de coordinación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Metodología para verificación de actividades y recursos de agenda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Roles de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Contingencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Metodología para el control de asistentes, actividades y logística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Modelos de medición de capacitación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Planes de mejoramiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Concepto de coordinación',
      referencia:
        'Corporación Industrial Minuto de Dios. (2017). <i>10 pasos para realizar un plan de formación empresarial</i> (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5C2JzAv343c',
    },
    {
      tema: 'Concepto de coordinación',
      referencia:
        'Lay, M. T., Suárez, J. & Zamora, M. Modelo para gestionar la capacitación de directivos y reservas en la empresa ganadera cubana. <i>Pastos y Forrajes</i>, 28(3), p. 253-263. ',
      tipo: 'PDF',
      link: 'https://www.redalyc.org/pdf/2691/269121675009.pdf',
    },
    {
      tema:
        'Metodología para el control de asistentes, actividades y logística',
      referencia:
        'Lay, M. T., Suárez, J. & Zamora, M. Modelo para gestionar la capacitación de directivos y reservas en la empresa ganadera cubana. <i>Pastos y Forrajes</i>, 28(3), p. 253-263.',
      tipo: 'PDF',
      link:
        'https://academia.utp.edu.co/seminario-investigacion-II/files/2017/03/Norma_Tecnica_Colombiana_NTC_1486_completa_archivo.pdf',
    },
    {
      tema: 'Modelos de medición de capacitación',
      referencia:
        'Procem Consultores. (2019). <i>¿Qué son los indicadores de Gestión?</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5C2JzAv343c',
    },
  ],
  glosario: [
    {
      termino: 'Capacitación',
      significado:
        'conjunto de procesos organizados, relativos tanto a la educación formal como a la informal, dirigidos a prolongar y a complementar la educación inicial mediante la generación de conocimientos, el desarrollo de habilidades y el cambio de actitudes.',
    },
    {
      termino: 'Competencia',
      significado:
        'capacidad de una persona para desempeñar, en diferentes contextos y con base en los requerimientos de calidad y resultados esperados; capacidad determinada por los conocimientos, destrezas, habilidades, valores y actitudes.',
    },
    {
      termino: 'Contingencia',
      significado: 'posibilidad que algo suceda o no suceda.',
    },
    {
      termino: 'Cotización',
      significado:
        'documento que establece el  precio a pagar por un bien o servicio.',
    },
    {
      termino: 'Evaluación',
      significado:
        'valoración de conocimientos, actitud y rendimiento de una persona o de un servicio.',
    },
    {
      termino: 'Formación',
      significado:
        'procesos que tienen por objeto específico desarrollar y fortalecer una ética del servicio público basada en los principios que rigen la función administrativa.',
    },
    {
      termino: 'Indicador',
      significado:
        'indicador de gestión (KPI) es una forma de medir si una empresa, unidad, proyecto o persona está logrando sus metas y objetivos estratégicos.',
    },
    {
      termino: 'Informe ejecutivo',
      significado:
        'documento escrito que resume los puntos más destacados de un informe más extenso.',
    },
    {
      termino: 'Logística',
      significado:
        'conjunto de los medios y métodos que permiten llevar a cabo la organización de una empresa o de un servicio.',
    },
    {
      termino: 'Proveedor',
      significado:
        'persona o una empresa que abastece a otras empresas con existencias (artículos), los cuales serán vendidos directamente o transformados para su posterior venta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Da Silva, D. (2021). <i>¿Qué son los indicadores de gestión y como impactan en el servicio al cliente?</i>',
      link: 'https://www.zendesk.com.mx/blog/indicadores-gestion/',
    },
    {
      referencia: 'jmp. Statistical Discovery. (s.f.). Tipos de gráficos.',
      link:
        'https://www.jmp.com/es_co/statistics-knowledge-portal/exploratory-data-analysis/types-of-graphs.html#907483fa-2882-4c56-b2e5-1788419af8c7',
    },
    {
      referencia:
        'PMK Digital Learning. (2020). <i>KPI Relevantes para Medir la Efectividad de la Gestión de Capacitación</i>.',
      link: 'https://pmkvirtual.com/blog/kpi/',
    },
    {
      referencia:
        'Question Pro. (s.f.). <i>Instrumentos de Evaluación de capacitación escolar</i>.',
      link:
        'https://www.questionpro.com/blog/es/instrumentos-de-evaluacion-de-capacitacion/#:~:text=Los%20instrumentos%20de%20evaluaci%C3%B3n%20de%20capacitaci%C3%B3n%20sobre%20la%20estructura%20del,las%20clases%20y%20la%20pr%C3%A1ctica.',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). <i>Diccionario de la lengua española</i>.',
      link: 'https://dle.rae.es/',
    },
    {
      referencia:
        'Rodrigues, N. (2021). <i>Cómo elaborar un plan de mejora en 7 pasos</i>.',
      link: 'https://blog.hubspot.es/sales/plan-de-mejora',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
