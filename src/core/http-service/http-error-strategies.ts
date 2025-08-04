import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorStrategy = (errorData: ApiError) => void;

export const badRequestStrategy: ApiErrorStrategy = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};

export const validationErrorStrategy: ApiErrorStrategy = (errorData) => {
  throw {
    ...errorData,
  } as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorStrategy = (errorData) => {
  throw {
    ...errorData,
    detail: "سرویس مورد نظر یافت نشد.",
  } as NotFoundError;
};

export const unauthorizedErrorStrategy: ApiErrorStrategy = (errorData) => {
  throw {
    ...errorData,
    detail: "دسترسی غیرمجاز.",
  } as UnauthorizedError;
};

export const unhandledExceptionStrategy: ApiErrorStrategy = (errorData) => {
  throw {
    ...errorData,
    detail: "خطای غیرمنتظره.",
  } as UnhandledException;
};

export const networkErrorStrategy = () => {
  throw {
    detail: "خطای شبکه.",
  } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorStrategy> = {
  "400": (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestStrategy)(
      errorData
    ),
  "404": notFoundErrorStrategy,
  "403": unauthorizedErrorStrategy,
  "500": unhandledExceptionStrategy,
};
