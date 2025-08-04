interface ProblemDetails {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends ProblemDetails {}
interface ValidationError extends ProblemDetails {}
interface UnauthorizedError extends ProblemDetails {}
interface NotFoundError extends ProblemDetails {}
interface UnhandledException extends ProblemDetails {}
interface NetworkError extends ProblemDetails {}

type ApiError =
  | BadRequestError
  | ValidationError
  | UnauthorizedError
  | NotFoundError
  | UnhandledException
  | NetworkError;

export type {
  ProblemDetails,
  BadRequestError,
  ValidationError,
  UnauthorizedError,
  NotFoundError,
  UnhandledException,
  NetworkError,
  ApiError,
};
