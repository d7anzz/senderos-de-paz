export interface ServiceDetail {
  id: string;
  name: string;
  category: string;
  ataud: string;
  features: string[];
  image: string;
  gallery?: string[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'plan-clasico': {
    id: 'plan-clasico',
    name: 'Plan Funerario Clásico',
    category: 'Paquete Funerario',
    ataud: 'Ataúd modelo cuadrado',
    image: '/paquete-clasico.jpg',
    features: [
      'Ataúd modelo cuadrado',
      'Capilla ardiente',
      'Carroza panorámica',
      'Vehículo para arreglos florales',
      'Trámites en general y RENIEC',
      'Instalación y traslado del servicio',
      'Preparación tanatológica'
    ],
    gallery: [
      'plan-mejorado/ataud.png',
      'plan-clasico/capilla.png',
      'plan-clasico/carroza.jpg',
      'plan-clasico/furgon.png'
    ]
  },
  'plan-superior': {
    id: 'plan-superior',
    name: 'Plan Funerario Superior',
    category: 'Paquete Funerario',
    ataud: 'Ataúd modelo cuadrado americano',
    image: '/paquete-superior.jpg',
    features: [
      'Ataúd modelo cuadrado americano',
      'Capilla ardiente',
      'Carroza panorámica',
      'Vehículo para arreglos florales',
      'Van de 10 pasajeros para la familia',
      'Trámites en general y RENIEC',
      'Instalación y traslado del servicio',
      'Preparación tanatológica'
    ],
    gallery: [
      'plan-mejorado/ataud.png',
      'plan-mejorado/carroza.jpg',
      'plan-mejorado/van.jpg',
      'plan-clasico/furgon.png'
    ]
  },
  'plan-mejorado': {
    id: 'plan-mejorado',
    name: 'Plan Funerario Mejorado',
    category: 'Paquete Funerario',
    ataud: 'Ataúd modelo Lincoln redondo',
    image: '/paquete-mejorado.jpg',
    features: [
      'Ataúd modelo Lincoln redondo',
      'Capilla ardiente',
      'Carroza panorámica',
      'Vehículo para arreglos florales',
      'Van de 10 pasajeros para la familia',
      'Cuadrilla de cargadores',
      'Trámites en general y RENIEC',
      'Instalación y traslado del servicio',
      'Preparación tanatológica'
    ],
    gallery: [
      'plan-premium/ataud.jpg',
      'plan-mejorado/carroza.jpg',
      'plan-mejorado/van.jpg',
      'plan-superior/cargadores.jpg',
      'plan-clasico/furgon.png'
    ]
  },
  'plan-premium': {
    id: 'plan-premium',
    name: 'Plan Funerario Premium',
    category: 'Paquete Funerario',
    ataud: 'Ataúd modelo Lincoln o Fígaro laqueado al natural',
    image: '/paquete-premium.jpg',
    features: [
      'Ataúd modelo Lincoln o Fígaro laqueado al natural',
      'Capilla ardiente',
      'Carroza panorámica',
      'Vehículo para arreglos florales',
      'Coaster de 24 pasajeros para la familia',
      'Cuadrilla de cargadores',
      'Trámites en general y RENIEC',
      'Instalación y traslado del servicio',
      'Preparación tanatológica'
    ],
    gallery: [
      'plan-premium/ataud.jpg',
      'plan-clasico/furgon.png',
      'plan-vip/coaster.jpg',
      'plan-superior/cargadores.jpg',
      'plan-mejorado/carroza.jpg'
    ]
  },
  'plan-vip': {
    id: 'plan-vip',
    name: 'Plan Funerario VIP',
    category: 'Paquete Funerario',
    ataud: 'Ataúd modelo tallado luna completa',
    image: '/paquete-vip.jpg',
    features: [
      'Ataúd modelo tallado luna completa',
      'Capilla ardiente',
      'Carroza panorámica',
      'Vehículo para arreglos florales',
      'Coaster de 24 pasajeros para la familia',
      'Van de 10 pasajeros para la familia',
      'Cuadrilla de cargadores',
      'Trámites en general y RENIEC',
      'Instalación y traslado del servicio',
      'Preparación tanatológica'
    ],
    gallery: [
      'plan-vip/ataud.jpg',
      'plan-vip/coaster.jpg',
      'plan-mejorado/van.jpg',
      'plan-clasico/furgon.png',
      'plan-mejorado/carroza.jpg',
      'plan-superior/cargadores.jpg'
    ]
  },
  // Agregar al objeto SERVICES_DATA en services-data.ts:

'traslados-nacionales': {
  id: 'traslados-nacionales',
  name: 'Traslados al Interior del País',
  category: 'Servicio Especializado',
  ataud:'',
  image: '/servicios/traslado-nacional.jpg',
  features: [
    'Trámites de autorización sanitaria para traslado interprovincial',
    'Acondicionamiento especial y embalaje reglamentario',
    'Unidad de transporte fúnebre acondicionada a nivel nacional',
    'Coordinación directa con funerarias y cementerios de destino',
    'Acompañamiento y orientación a los familiares durante el trayecto'
  ]
},
'traslados-internacionales': {
  id: 'traslados-internacionales',
  name: 'Repatriación y Traslados al Exterior',
  category: 'Servicio Especializado',
  ataud:'',
  image: '/servicios/traslado-internacional.jpg',
  features: [
    'Gestión consular y permisos de repatrición',
    'Trámites ante el Ministerio de Salud (DIGESA) y cancillería',
    'Cofre o ataúd hermético especial para transporte aéreo',
    'Embalaje de exportación bajo reglamentación IATA',
    'Coordinación logística con aerolíneas'
  ]
},
'exhumaciones': {
  id: 'exhumaciones',
  name: 'Servicio de Exhumaciones y Traslado de Restos',
  category: 'Servicio Especializado',
  ataud:'',
  image: '/servicios/exhumaciones.jpg',
  features: [
    'Asesoría y obtención de permisos legales y sanitarios',
    'Coordinación con la administración del cementerio',
    'Personal técnico especializado y equipo de protección',
    'Urna o cofre para reducción de restos',
    'Traslado al nuevo destino o crematorio'
  ]
},
'asistencia-duelo': {
  id: 'asistencia-duelo',
  name: 'Asistencia Emocional y Manejo de Duelo',
  category: 'Servicio Especializado',
  ataud:'',
  image: '/servicios/apoyo-duelo.jpg',
  features: [
    'Sesiones de contención emocional para la familia',
    'Guía y material de apoyo para el proceso de duelo',
    'Atención personalizada por profesionales en tanatología',
    'Acompañamiento en momentos críticos y homenajes'
  ]
}
};
