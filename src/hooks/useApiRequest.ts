/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from "axios";

export const baseURL = "https://api.github.com/search";

// Construct axios instance for general requests
const makeRequest = axios.create({
  baseURL: baseURL, // Initialize with base url
  timeout: 1 * 60 * 1000, // Set timeout at 60s
});

/** Make an api request call */
const useApiRequest = (): AxiosInstance => {
  // Resolve request type
  const request = makeRequest;

  // Add request interceptor
  request.interceptors.response.use(
    (config) => config,
    (error) => {
      if (error?.code === "ECONNABORTED") {
      }
      return Promise.reject(error);
    }
  );

  return request;
};

export default useApiRequest;
