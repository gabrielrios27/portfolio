import { Project } from '../interfaces/project.interface';

export const projectsList: Project[] = [
  {
    title: 'Libee App',
    description:
      'Aplicación móvil de Libee, red social. La aplicación cuenta con Chat interno para comunicación entre usuarios, visualización de perfiles, Scanner de códigos QR para capturar POIs, Calendario de actividades y notificaciones entre otros (Aplicación en desarrollo).',
    technologies: 'Angular - Ionic - Capacitor',
    linkWeb: 'https://libee-dev.vercel.app/auth/sign-in',
    linkCode: 'https://github.com/gabrielrios27/Libee-app',
    images: [
      'libee-app/explore.png',
      'libee-app/connect.png',
      'libee-app/profile.png',
      'libee-app/calendar.png',
      'libee-app/chat.png',
    ],
  },
  {
    title: 'Libee',
    description:
      'Landing page de Libee, la primera red social física del mundo. Cuenta con 5 secciones, animaciones, diseño responsive y un formulario de contacto.',
    technologies: 'Angular',
    linkWeb: 'https://libee.vercel.app/',
    linkCode: 'https://github.com/gabrielrios27/Libee',
    images: [
      'libee-landing/home.png',
      'libee-landing/afinity.png',
      'libee-landing/way.png',
      'libee-landing/contact.png',
    ],
  },
  {
    title: 'Mensajeros de la Paz - ONG',
    description:
      'Campamento de tecnología en el que durante 4 meses (320 horas) formé parte de un equipo de trabajo tech y se desarrolló un producto digital para Mensajeros de la Paz, una ONG de alto impacto.',
    technologies: 'Angular - Angular Material - Heroku',
    linkWeb: '',
    linkCode: 'https://github.com/gabrielrios27/mensajeros',
    images: [
      'mensajeros/login.png',
      'mensajeros/Dashboard de variables agrupadas por eje.png',
      'mensajeros/dashboard de reportes pendientes.png',
      'mensajeros/carga-variables1.png',
      'mensajeros/maqueta informe comparativo.png',
    ],
  },
  {
    title: 'PelisUp',
    description:
      'Aplicación web para ver información de películas y series. Cuenta con un buscador, visualización de información, inicio de sesión y registro de usuarios, y panel de control con películas y series favoritas. Se consume la API de TMBD películas.',
    technologies: 'Angular - Firebase',
    linkWeb: 'https://pelisup-chi.vercel.app/',
    linkCode: 'https://github.com/gabrielrios27/PelisUp-Folcademy',
    images: [
      'pelisUp/home.png',
      'pelisUp/details.png',
      'pelisUp/log-in.png',
      'pelisUp/series-agregadas.png',
    ],
  },
  {
    title: "D'Jhon Restaurante",
    description:
      'Aplicación web de restaurante ficticio. Cuenta con cinco páginas, animaciones, diseño responsive, formulario de contacto y modo oscuro.',
    technologies: 'HTML - SASS - Bootstrap',
    linkWeb: 'https://djhon-restaurante-rios-d-amico.vercel.app/',
    linkCode:
      'https://github.com/gabrielrios27/Djhon-restaurante-Rios-D-Amico/tree/master',
    images: [
      'djhon/home.png',
      'djhon/platos.png',
      'djhon/vinos.png',
      'djhon/postres.png',
      'djhon/contacto.png',
    ],
  },
  {
    title: 'Modern Home Allentiac',
    description:
      'Aplicación web con galerías de imágenes de pisos y revestimientos de la empresa Allentiac. Cuenta con 5 páginas, animaciones, diseño responsive y botón de WhatsApp.',
    technologies: 'HTML - CSS - Bootstrap',
    linkWeb: 'https://modernhome-allentiac.com/',
    linkCode: 'https://github.com/gabrielrios27/MHAllentiacOnline',
    images: [
      'Allentiac/home.png',
      'Allentiac/pisos.png',
      'Allentiac/vidrios.png',
      'Allentiac/contacto.png',
    ],
  },
];
