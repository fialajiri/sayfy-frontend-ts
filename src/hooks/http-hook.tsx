import axios from "axios";
import { useCallback, useRef, useState, useEffect } from "react";
import { HttpError } from "../models/error-model";
import { AXIOS_CONFIG } from "../models/axios-config";

export enum MethodEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface RequestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body: any;
  headers: any;
}

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<HttpError | null>(null);

  const activeHttpRequest = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (url: string, method: MethodEnum = MethodEnum.GET, body: any = null, headers = {}) => {
      setIsLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequest.current.push(httpAbortCtrl);

      try {
        const { data } = await axios(url, {
          method,
          data: body,
          signal: httpAbortCtrl.signal,
          headers: AXIOS_CONFIG.headers,
          withCredentials: AXIOS_CONFIG.withCredentials,
        });

        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        setIsLoading(false);
        return data;
      } catch (err: any) {
        setError(err);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
