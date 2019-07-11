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
    default:
      event.returnValue = "error";
  }
};