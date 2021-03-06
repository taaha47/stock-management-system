import {ipcRenderer} from "electron";
import router from "@/router";

enum roles {
  none = -1,
  admin = 0
}

type userState = {
  username: string,
  role: roles
}


const state: userState = {
    username: "",
    role: roles.none
};

const getters = {
    activeUser: (state: userState) => state.username !== "",
    isAdmin: (state: userState) => state.role === roles.admin
};

const mutations = {
    setUsername(state: userState, username: string) {
        state.username = username;
    },
    setRole(state: userState, role: roles) {
        state.role = role;
    }
};

const actions = {
    authenticate({commit, state}: any, password: string) {
        const auth = ipcRenderer.sendSync("user-service", {
            action: "authenticate",
            payload: {
                password: password
            }
        });
        if (auth === "success") {
            commit("setUsername", "admin");
            commit("setRole", 0);
            router.push("/dashboard");
        } else {
            router.push("/login");
            alert("Erreur de connexion");
        }
    },
    logout({commit, state}: any) {
        //async clean work here
        commit("setUsername", "");
        commit("setRole", -1);
        router.push("/login");
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
