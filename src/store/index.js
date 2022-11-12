import store from "./store";
import { login } from "./user/actions";

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(
    login({
      // Thong tin user fetch tu token
      id: 1,
      name: "Admin",
      token,
    })
  );
}

export { store };
