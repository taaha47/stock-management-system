import {ipcRenderer} from "electron";

type suppliersState = {
  suppliers: any[]
};


const state: suppliersState = {
  suppliers: [],
};

const getters = {
  suppliers: (state: suppliersState) => state.suppliers,
  suppliersCount: (state: suppliersState) => state.suppliers.length
};

const mutations = {
  setSuppliers(state: suppliersState, suppliers: []) {
    state.suppliers = suppliers;
  }
};

const actions = {
  // get all suppliers
  getSuppliers({commit, dispatch}: any) {
    dispatch("pushLoader", {"issuer": "get-suppliers"});
    ipcRenderer.send("supplier-service", {
      action: "get-suppliers"
    });
  },
  getSuppliersSuccess({commit, dispatch}: any, allSuppliers: any[]) {
    dispatch("deleteLoader", {"issuer": "get-suppliers"});
    commit("setSuppliers", allSuppliers);
  },
  getSuppliersError({commit, dispatch}: any, errorMessage: string) {
    dispatch("deleteLoader", {"issuer": "get-suppliers"});
    alert("erreur lors de la récupération de la liste des fournisseurs")
  },

  // delete supplier
  deleteSupplier({commit, dispatch}: any, supplierId: string) {
    dispatch("pushLoader", {"issuer": "delete-supplier"});
    ipcRenderer.send("supplier-service", {
      action: "delete-supplier",
      payload: {
        supplierId: supplierId
      }
    });
  },
  deleteSupplierSuccess({commit, dispatch}: any) {
    dispatch("getSuppliers");
    dispatch("deleteLoader", {"issuer": "delete-supplier"});
  },
  deleteSupplierError({commit, dispatch}: any, deletedSupplierId: any) {
    dispatch("deleteLoader", {"issuer": "delete-supplier"});
    alert(`impossible de supprimer le fournisseur ${deletedSupplierId}`)
  },


  // edit supplier
  editSupplier({commit, dispatch}: any, {supplierId, supplier}: any) {
    dispatch("pushLoader", {"issuer": "edit-supplier"});
    ipcRenderer.send("supplier-service", {
      action: "edit-supplier",
      payload: {
        supplierId,
        supplier
      }
    });
  },
  editSupplierSuccess({commit, dispatch}: any) {
    dispatch("getSuppliers");
    dispatch("deleteLoader", {"issuer": "edit-supplier"});
  },
  editSupplierError({commit, dispatch}: any, supplierId: any) {
    dispatch("deleteLoader", {"issuer": "edit-supplier"});
    alert(`impossible de modifier le fournisseur ${supplierId}`)
  },

  // add supplier
  addSupplier({commit, dispatch}: any, supplier: any) {
    dispatch("pushLoader", {"issuer": "add-supplier"});
    ipcRenderer.send("supplier-service", {
      action: "add-supplier",
      payload: {
        supplier
      }
    });
  },
  addSupplierSuccess({commit, dispatch}: any) {
    dispatch("deleteLoader", {"issuer": "add-supplier"});
    dispatch("getSuppliers");
  },
  addSupplierError({commit, dispatch}: any, errorMessage: string) {
    dispatch("deleteLoader", {"issuer": "add-supplier"});
    dispatch("getSuppliers");
    alert("impossible d'ajouter ce fournisseur");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
