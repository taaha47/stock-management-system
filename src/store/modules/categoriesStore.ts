import {ipcRenderer} from "electron";

type categoriesState = {
  categories: any[]
}


const state: categoriesState = {
  categories: [],
};

const getters = {
  categories: (state: categoriesState) => state.categories,
};

const mutations = {
  setCategories(state: categoriesState, categories: []) {
    state.categories = categories;
  }
};

const actions = {
  getCategories({commit, state}: any) {
    const allCategories = ipcRenderer.sendSync("category-service", {
      action: "get-categories",
      payload: {
      }
    });
    if (allCategories && allCategories !== "error") {
      commit("setCategories", allCategories);
    } else {
      alert("Impossible de lire les categories de la base de donnees")
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
