import { ipcRenderer } from "electron";
import { Store } from "vuex";

export function registerIpcRendererChannel(store: Store<any>, ...args: any[]): any {
    ipcRenderer.on("category-service", async (event: any, payload: any) =>
        {categoryManager(store, payload);}
    );
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
    }
}
