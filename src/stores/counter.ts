import { defineStore } from "pinia";

export const useInitialStore = defineStore("counter", {
  state: () => ({ apiHost: "http://127.0.0.4:8000/api/v1" }),
  getters: {},
  actions: {}
});
