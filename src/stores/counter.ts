import { defineStore } from "pinia";

export const useInitialStore = defineStore("counter", {
  state: () => ({ hostUrl: "", apiHost: "http://127.0.0.4:8000/api/v1" }),
  getters: {
    domainUrl(state) {
      state.hostUrl = window.location.host;
      return state.hostUrl;
    },
  },
  actions: {},
});
