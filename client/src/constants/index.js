export const VACANCIES_API_URL = 'http://127.0.0.1:8000/api/vacancies/';
export const COMPANIES_API_URL = 'http://127.0.0.1:8000/api/companies/';
export const SIGNUP_API_URL = 'http://127.0.0.1:8000/api/companies/';
export const LOGGED_IN_COMPANY_DASHBOARD_DATA = 'http://127.0.0.1:8000/api/vacancies/dashboard/';

export const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});