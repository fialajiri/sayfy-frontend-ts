import { useCallback, useRef, useState, useEffect } from "react";

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
  const [errors, setErrors] = useState<string[]>([]);

  const activeHttpRequest = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (url: string, method: MethodEnum = MethodEnum.GET, body: any = null, headers = {}) => {
      setIsLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequest.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        setErrors((preState) => [...preState, err.message]);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setErrors([]);
  };

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, errors, sendRequest, clearError };
};
