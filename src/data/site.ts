export const site = {
  name: "Centro Medico Miraverde",
  legalName: "Centro Medico Miraverde",
  url: "https://www.cmmiraverde.org",
  locale: "es-ES",
  whatsappUrl: "https://wa.me/message/6MYVYBWTRYIMI1",
  email: "centromedicomiraverde@gmail.com",
  phoneNumbers: ["+34 922 717 001", "+34 626 170 094"],
  address: "Centro Medico Miraverde, C. el Drago, 38660 Fanabe, Santa Cruz de Tenerife",
  shortAddress: "C. el Drago, 38660 Fanabe, Santa Cruz de Tenerife",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Centro+Medico+Miraverde%2C+C.+el+Drago%2C+38660+Fanabe%2C+Santa+Cruz+de+Tenerife",
  coordinates: {
    lat: 28.09503,
    lng: -16.729357
  },
  mapZoom: 17,
  openingHours: [
    "Lunes a viernes: horario amplio segun especialidad",
    "Atencion personalizada con cita previa por WhatsApp o telefono"
  ]
} as const;

export type SiteConfig = typeof site;
