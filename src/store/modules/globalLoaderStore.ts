import {ipcRenderer} from "electron";
import router from "@/router";

type loaderType = {
    issuer: string,
    status: ("success" | "loading" | "error")
}

type loadersType = {
    loaders: Array<loaderType>
}

const state: loadersType = {
    loaders: [],
};

const getters = {
    getLoaders: (state: loadersType) => state.loaders,
    getGlobalLoader: (state: loadersType) => state.loaders.length !==0
};

const mutations = {
    pushLoader(state: loadersType, loader: loaderType) {
        state.loaders = [...state.loaders, loader];
    },
    deleteLoader(state: loadersType, loader: loaderType) {
        state.loaders = [...state.loaders.filter((loaderElement) => loaderElement.issuer !== loader.issuer)];
    },
    resetLoader(state: loadersType) {
        state.loaders = [];
    }
};

const actions = {
    pushLoader({commit, state}: any, loader: loaderType) {
        commit("pushLoader", loader);
    },
    deleteLoader({commit, state}: any, loader: loaderType) {
        commit("deleteLoader", loader);
    },
    resetLoader({commit, state}: any) {
        commit("resetLoader");
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
