import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HTTPClient<T> {
  private instance: AxiosInstance;
  constructor(target = "") {
    this.instance = axios.create({
      baseURL: target ? target : "",
      timeout: 10000,
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

  async postData<T, D>(action: string, config?: AxiosRequestConfig<D>) {
    try {
      const response = await this.instance.post<T>(action, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async putData<T, D>(action: string, config?: AxiosRequestConfig<D>) {
    try {
      const response = await this.instance.put<T>(action, config);
    } catch (error) {
      throw error;
    }
  }

  async deleteData<T>(action: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.instance.delete<T>(action, config);
    } catch (error) {
      throw error;
    }
  }
}

export default new HTTPClient();
