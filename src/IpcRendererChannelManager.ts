import { ipcRenderer } from "electron";
import { Store } from "vuex";

export function registerIpcRendererChannel(store: Store<any>, ...args: any[]): any {
  ipcRenderer.on("category-service", async (event: any, payload: any) => categoryManager(store, payload));
  ipcRenderer.on("product-service",(event: any, payload: any) => productManager(store, payload));
  ipcRenderer.on("supplier-service", (event: any, payload: any) => supplierManager(store, payload));
}

function productManager(store: Store<any>, payload: any) {
  const {status, action, data} = payload;
  switch (action) {
    case "get-products":
      if (status === "success") {
        store.dispatch("getProductsSuccess", data);
      } else {
        store.dispatch("getProductsError");
      }
      break;
    default:
      break;
  }
}

function categoryManager(store: Store<any>, payload: any) {
    const {status, action, data} = payload;
    switch (action) {
      case "add-category":
        if (status === "success") {
          store.dispatch("addCategorySuccess");
        } else {
          store.dispatch("addCategoryError");
        }
        break;
      case "get-categories":
        if (status === "success") {
          store.dispatch("getCategoriesSuccess", data);
        } else {
          store.dispatch("getCategoriesError");
        }
        break;
      case "delete-category":
        if (status === "success") {
          store.dispatch("deleteCategorySuccess");
        } else {
          store.dispatch("deleteCategoryError", data);
        }
        break;
      case "edit-category":
        if (status === "success") {
          store.dispatch("editCategorySuccess");
        } else {
          store.dispatch("editCategoryError", data);
        }
        break;
    }
}

function supplierManager(store: Store<any>, payload: any) {
  const {status, action, data} = payload;
  switch (action) {
    case "add-supplier":
      if (status === "success") {
        store.dispatch("addSupplierSuccess");
      } else {
        store.dispatch("addSupplierError");
      }
      break;
    case "get-suppliers":
      if (status === "success") {
        store.dispatch("getSuppliersSuccess", data);
      } else {
        store.dispatch("getSuppliersError");
      }
      break;
    case "delete-supplier":
      if (status === "success") {
        store.dispatch("deleteSupplierSuccess");
      } else {
        store.dispatch("deleteSupplierError", data);
      }
      break;
    case "edit-supplier":
      if (status === "success") {
        store.dispatch("editSupplierSuccess");
      } else {
        store.dispatch("editSupplierError", data);
      }
      break;
  }
}
