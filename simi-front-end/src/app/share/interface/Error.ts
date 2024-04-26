export interface ErrorType {
  parent: Parent;
}

export interface Parent {
  message:  string;
  name:     string;
  config:   Config;
  response: Response;
  errors:   any[];
}

export interface Config {
  transitional:      Transitional;
  transformRequest:  string;
  transformResponse: string;
  timeout:           string;
  xsrfCookieName:    string;
  xsrfHeaderName:    string;
  maxContentLength:  string;
  maxBodyLength:     string;
  env:               Env;
  headers:           Headers;
  baseURL:           string;
  withCredentials:   string;
  method:            string;
  url:               string;
  data:              Data;
  code:              string;
  status:            string;
}

export interface Data {
  mode:     string;
  email:    string;
  password: string;
}

export interface Env {
  FormData: string;
}

export interface Headers {
  Accept:         string;
  "Content-Type": string;
  Authorization:  string;
}

export interface Transitional {
  silentJSONParsing:   string;
  forcedJSONParsing:   string;
  clarifyTimeoutError: string;
}

export interface Response {
  status:     string;
  statusText: string;
}
