import { createStore } from "vuex";
import staff from "./modules/staff";

export default createStore({
  modules: {
    staff,
  },
});
