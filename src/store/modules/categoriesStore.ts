import {ipcRenderer} from "electron";

type categoriesState = {
  categories: any[]
};


const state: categoriesState = {
  categories: [],
};

const getters = {
  categories: (state: categoriesState) => state.categories,
  categoriesCount: (state: categoriesState) => state.categories.length
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
  },

  deleteCategory({commit, dispatch}: any, codeCategory: string) {
    const deleted: string = ipcRenderer.sendSync("category-service", {
      action: "delete-category",
      payload: {
        category_code: codeCategory
      }
    });
    if (deleted !== "error") {
      dispatch("getCategories");
    } else {
      alert(`impossible de supprimer la categorie avec le code ${codeCategory}`)
    }
  },

  editCategory({commit, dispatch}: any, {categoryToUpdateCode, category}: any) {
    const editedCategory: string = ipcRenderer.sendSync("category-service", {
      action: "edit-category",
      payload: {
        categoryToUpdateCode,
        category
      }
    });
    if(editedCategory === "success") {
      dispatch("getCategories");
    } else {
      alert(`impossible de modifier la categorie ${category.category_code}`)
    }
  },

  addCategory({commit, dispatch}: any, category: any) {
    const addedCategory: string = ipcRenderer.sendSync("category-service", {
      action: "add-category",
      payload: {
        category
      }
    });
    if (addedCategory === "success") {
      dispatch("getCategories");
      alert(`la catégorie ${category.category_code} a été ajoutée avec succès`);
    } else {
      alert("impossible d'ajouter la catégorie");
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
