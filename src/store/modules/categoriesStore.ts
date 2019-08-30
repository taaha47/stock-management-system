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
  // get all categories
  getCategories({commit, dispatch}: any) {
      dispatch("pushLoader", {"issuer": "get-categories"});
      ipcRenderer.send("category-service", {
      action: "get-categories"
    });
  },

  getCategoriesSuccess({commit, dispatch}: any, allCategories: any[]) {
      dispatch("deleteLoader", {"issuer": "get-categories"});
      commit("setCategories", allCategories);
  },

  getCategoriesError({commit, dispatch}: any, errorMessage: string) {
      dispatch("deleteLoader", {"issuer": "get-categories"});
      alert("erreur lors de l ajout de cet article")
  },

  // delete category
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

  // add category
  addCategory({commit, dispatch}: any, category: any) {
    dispatch("pushLoader", {"issuer": "add-category"});
    ipcRenderer.send("category-service", {
      action: "add-category",
      payload: {
        category
      }
    });
  },

  addCategorySuccess({commit, dispatch}: any) {
      dispatch("deleteLoader", {"issuer": "add-category"});
      dispatch("getCategories");
  },

  addCategoryError({commit, dispatch}: any, errorMessage: string) {
      dispatch("deleteLoader", {"issuer": "add-category"});
      dispatch("getCategories");
      alert("operation impossible");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
