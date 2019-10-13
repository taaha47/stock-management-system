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


  //delete a product
  deleteProduct({commit, dispatch}: any, productCode: any) {
    dispatch("pushLoader", {"issuer": "delete-product"});
    ipcRenderer.send("product-service", {
      action: "delete-product",
      payload: {
        product_code: productCode
      }
    });
  },
  deleteProductSuccess({commit, dispatch}: any) {
    dispatch("getProducts");
    dispatch("deleteLoader", {"issuer": "delete-product"});
  },
  deleteProductError({commit, dispatch}: any, deleteProductCode: any) {
    dispatch("deleteLoader", {"issuer": "delete-product"});
    alert(`impossible de supprimer le produit avec le code ${deleteProductCode}`)
  },

  //edit a product
  editProduct({commit, dispatch}: any, {productToUpdateCode, product}: any) {
    dispatch("pushLoader", {"issuer": "edit-product"});
    ipcRenderer.send("product-service", {
      action: "edit-product",
      payload: {
        product_code: productToUpdateCode,
        product
      }
    });
  },
  editProductSuccess({commit, dispatch}: any) {
    dispatch("getProducts");
    dispatch("deleteLoader", {"issuer": "edit-product"});
  },
  editProductError({commit, dispatch}: any, editProductCode: any) {
    dispatch("deleteLoader", {"issuer": "edit-product"});
    alert(`impossible de modifier le produit avec le code ${editProductCode}`)
  },

  //add a product
  addProduct({commit, dispatch}: any, product: any) {
    dispatch("pushLoader", {"issuer": "add-product"});
    ipcRenderer.send("product-service", {
      action: "add-product",
      payload: {
        product
      }
    });
  },
  addProductSuccess({commit, dispatch}: any) {
    dispatch("deleteLoader", {"issuer": "add-product"});
    dispatch("getProducts");
  },
  addProductError({commit, dispatch}: any, errorMessage: string) {
    dispatch("deleteLoader", {"issuer": "add-product"});
    dispatch("getProducts");
    alert("operation impossible");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
