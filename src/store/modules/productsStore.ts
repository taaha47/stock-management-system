import {ipcRenderer} from "electron";

type productsState = {
  products: any[]
};


const state: productsState = {
  products: [],
};

const getters = {
  products: (state: productsState) => state.products,
  productsCount: (state: productsState) => state.products.length
};

const mutations = {
  setProducts(state: productsState, products: []) {
    state.products = products;
  }
};

const actions = {
  // get all products
  getProducts({commit, dispatch}: any) {
    dispatch("pushLoader", {"issuer": "get-products"});
    ipcRenderer.send("product-service", {
      action: "get-products"
    });
  },
  getProductsSuccess({commit, dispatch}: any, allProducts: any[]) {
    commit("setProducts", allProducts);
    dispatch("deleteLoader", {"issuer": "get-products"});
  },
  getProductsError({commit, dispatch}: any, errorMessage: string) {
    dispatch("deleteLoader", {"issuer": "get-products"});
    alert("Impossible de lire les articles de la base de données")
  },


  deleteProduct({commit, dispatch}: any, codeProduct: string) {
    const deleted: string = ipcRenderer.sendSync("product-service", {
      action: "delete-product",
      payload: {
        product_code: codeProduct
      }
    });
    if (deleted === "success") {
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
      alert(`l'article ${product.product_code} a été ajoutée avec succès`);
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
