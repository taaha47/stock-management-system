import {ipcRenderer} from "electron";

type productsState = {
  products: any[]
};


const state: productsState = {
  products: [],
};

const getters = {
  products: (state: productsState) => state.products.map(prd => ({...prd, ...prd.category})),
  productsCount: (state: productsState) => state.products.length
};

const mutations = {
  setProducts(state: productsState, products: []) {
    state.products = products;
  }
};

const actions = {
  getProducts({commit, state}: any) {
    const allProducts = ipcRenderer.sendSync("product-service", {
      action: "get-products",
      payload: {
      }
    });
    if (allProducts && allProducts !== "error") {
      commit("setProducts", allProducts);
    } else {
      alert("Impossible de lire les articles de la base de données")
    }
  },

  deleteProduct({commit, dispatch}: any, codeProduct: string) {
    const deleted: string = ipcRenderer.sendSync("product-service", {
      action: "delete-product",
      payload: {
        product_code: codeProduct
      }
    });
    if (deleted !== "error") {
      dispatch("getProducts");
    } else {
      alert(`impossible de supprimer l'article avec le code ${codeProduct}`)
    }
  },

  editProduct({commit, dispatch}: any, {productToUpdateCode, product}: any) {
    const editedProduct: string = ipcRenderer.sendSync("product-service", {
      action: "edit-product",
      payload: {
        productToUpdateCode,
        product
      }
    });
    if(editedProduct === "success") {
      dispatch("getProducts");
    } else {
      alert(`impossible de modifier l'article ${product.product_code}`)
    }
  },

  addProduct({commit, dispatch}: any, product: any) {
    const addedProduct: string = ipcRenderer.sendSync("product-service", {
      action: "add-product",
      payload: {
        product
      }
    });
    if (addedProduct === "success") {
      dispatch("getProducts");
      alert(`l'article ${product.prd_code} a été ajoutée avec succès`);
    } else {
      alert("impossible d'ajouter cet article");
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
