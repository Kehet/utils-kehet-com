import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,
  }),
  actions: {},
});
