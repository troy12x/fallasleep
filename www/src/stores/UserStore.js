import { createStore, action, persist } from "easy-peasy";

const userStore = createStore(
  persist({
    user: {},
    onLogin: action((state, payload) => {
      state.user = payload;
    }),
  })
);

export default userStore;