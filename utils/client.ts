import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class HTTPClient<T> {
  private instance: AxiosInstance;
  constructor(target = "", config?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: target ? target : "",
      timeout: 10000,
      ...config,
    });
  }
  async getData<T>(action: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.instance.get<T>(action, {
        withCredentials: true,
        ...config,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async postData<T>(action: string, config?: AxiosRequestConfig<T>) {
    try {
      const response = await this.instance.post<T>(action, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async putData<T>(action: string, config?: AxiosRequestConfig<T>) {
    try {
      const response = await this.instance.put<T>(action, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteData<T>(action: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.instance.delete<T>(action, config);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const client = new HTTPClient("http://localhost:8008");
export default client;
