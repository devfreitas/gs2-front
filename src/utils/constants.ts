export const APP_NAME = 'SkillHub';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Plataforma moderna de cursos online';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CADASTRO: '/cadastro',
  CURSOS: '/cursos',
  DASHBOARD: '/dashboard',
  CHECKOUT: '/checkout',
  MEUS_CARTOES: '/meus-cartoes',
} as const;

export const THEME_STORAGE_KEY = 'skillhub-theme';
export const AUTH_STORAGE_KEY = 'skillhub-auth';
