import { useAuthStore } from "@/auth/stores/AuthStore";
import axios, { AxiosHeaders, type AxiosInstance } from "axios";

export class AxiosClient {
    private static _instance: AxiosInstance;

    private constructor() {
        AxiosClient._instance = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
            headers: this._createHeaders(),

        });

        AxiosClient._instance.interceptors.request.use((config) => {
            const authStore = useAuthStore();
            if (authStore.isAuthenticated) {
                config.headers["Authorization"] = `Bearer ${authStore.token}`;
            }
            return config;
        });
    }


    public static get instance(): AxiosInstance {
        if (!AxiosClient._instance) {
            new AxiosClient();
        }
        return AxiosClient._instance;
    }

    private _createHeaders(): AxiosHeaders {
        return new AxiosHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json",
        });
    }
}
