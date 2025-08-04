import { API_URL } from "@/configs/global";
import {
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

// API error types
type ApiError =
  | BadRequestError
  | ValidationError
  | UnauthorizedError
  | NotFoundError
  | UnhandledException
  | NetworkError;

/**
 * Axios instance for HTTP requests
 */
const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios response interceptor
httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response) {
      const statusCode = error.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;

        if (statusCode === 400 && !errorData.errors) {
          throw {
            ...errorData,
          } as BadRequestError;
        }

        if (statusCode === 400 && errorData.errors) {
          throw {
            ...errorData,
          } as ValidationError;
        }

        if (statusCode === 404) {
          throw {
            ...errorData,
            detail: "سرویس مورد نظر یافت نشد.",
          } as NotFoundError;
        }

        if (statusCode === 403) {
          throw {
            ...errorData,
            detail: "دسترسی به این سرویس مجاز نیست.",
          } as UnauthorizedError;
        }

        if (statusCode >= 500) {
          throw {
            ...errorData,
            detail: "خطای سرور.",
          } as UnhandledException;
        }
      } else {
        throw {
          detail: "خطای شبکه.",
        } as NetworkError;
      }
    }
  }
);

// Base API function
async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);

  return response.data as T;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers,
    method: "GET",
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    headers,
    method: "POST",
    data: JSON.stringify(data),
  };
  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    headers,
    method: "PUT",
    data: JSON.stringify(data),
  };
  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    headers,
    method: "DELETE",
  };
  return await apiBase(url, options);
}

export { readData, createData, updateData, deleteData };
