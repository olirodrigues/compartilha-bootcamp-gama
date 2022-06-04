const API_PROD = "https://api-financeiro-gama.herokuapp.com";

export const buildURL = (path: string) => `${API_PROD}${path}`;
