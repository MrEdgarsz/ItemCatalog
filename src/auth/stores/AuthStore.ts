import { defineStore } from "pinia";
import type { AuthTokenDto } from "../models/dtos/AuthTokenDto";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        expiry: null as Date | null
    }),
    getters: {
        isExpired(): boolean {
            return this.expiry == null || this.expiry <= new Date();
        },
        isAuthenticated(): boolean {
            return this.token != null && !this.isExpired;
        },
    },
    actions: {
        setToken(dto: AuthTokenDto) {
            this.token = dto.access_token;
            this.expiry = new Date(dto.expires_at);
            localStorage.setItem('token', this.token);
            localStorage.setItem('expiry', this.expiry.toISOString());
        },
        loadFromStorage() {
            const expiry = localStorage.getItem('expiry');
            if (expiry != null) {
                this.expiry = new Date(expiry);
            }
            else {
                this.expiry = null;
            }
            this.token = localStorage.getItem('token') as string | null;
        },
        logOut() {
            this.token = null;
            this.expiry = null;
            localStorage.removeItem('token');
            localStorage.removeItem('expiry');

        }
    }
})
