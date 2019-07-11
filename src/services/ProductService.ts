import {ipcPayload} from "@/interfaces/interfaces";
import Event = Electron.Event;
import {Product} from "../repository/entities/Product";

export const ProductServiceCb: any = async (dbConnection: any, element: ipcPayload, event: Event) => {
  const dbInstance = await dbConnection.getInstance();
  const productRepo = dbInstance.getRepository(Product);
  const {action, payload} = element;

  switch (action) {
    case "get-products":
      try {
        const allProducts = await productRepo.find();
        event.returnValue = allProducts;
      } catch (e) {
        event.returnValue = "error";
      }
      break;
    case "delete-product":
      try {
        await productRepo.delete({"product_code": payload.product_code});
        event.returnValue = "success";
      } catch (e) {
        event.returnValue = "error";
      }
      break;
    case "edit-product":
      try {
        await productRepo.update({"product_code": payload.productToUpdateCode}, payload.product);
        event.returnValue = "success";
      } catch (e) {
        event.returnValue = "error";
      }
      break;
    default:
      event.returnValue = "error";
  }
};