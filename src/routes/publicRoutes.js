import { About, Contact, Home, Login, Services } from '../pages';

export const publicRoutes = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'About', path: '/about', Component: About },
  { name: 'Services', path: '/services', Component: Services },
  { name: 'Contact', path: '/contact', Component: Contact },
  { name: 'Login', path: '/login', Component: Login },
];
