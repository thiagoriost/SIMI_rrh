export interface ErrorType {
  parent:   Parent;
  response: Response;
  errors:   string[];
}

export interface Parent {
  message: string;
  name:    string;
  config:  Config;
  code:    string;
  status:  null;
}

export interface Config {
  transitional:      Transitional;
  transformRequest:  null[];
  transformResponse: null[];
  timeout:           number;
  xsrfCookieName:    string;
  xsrfHeaderName:    string;
  maxContentLength:  number;
  maxBodyLength:     number;
  env:               Env;
  headers:           Headers;
  baseURL:           string;
  withCredentials:   boolean;
  method:            string;
  url:               string;
  data:              string;
}

export interface Env {
  FormData: null;
}

export interface Headers {
  Accept:         string;
  "Content-Type": string;
  Authorization:  null;
}

export interface Transitional {
  silentJSONParsing:   boolean;
  forcedJSONParsing:   boolean;
  clarifyTimeoutError: boolean;
}

export interface Response {
  status:     number;
  statusText: string;
}
