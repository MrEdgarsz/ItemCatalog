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

        }
    }
})
