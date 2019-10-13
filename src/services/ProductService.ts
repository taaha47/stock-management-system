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
        const allProducts = await productRepo.createQueryBuilder("product")
          .select("product.product_id", "id")
          .addSelect("product.product_code", "product_code")
          .addSelect("product.product_name", "product_name")
          .addSelect("product.product_packaging", "product_packaging")
          .addSelect("product.product_description", "product_description")
          .leftJoin("product.category", "category")
          .addSelect("category.category_id", "category_id")
          .addSelect("category.category_code", "category_code")
          .addSelect("category.category_name", "category_name")
          .getRawMany();
        event.sender.send("product-service", {action, status: "success", data: allProducts});
      } catch (e) {
        event.sender.send("product-service", {action, status: "error", data: e.message});
      }
      break;
    case "delete-product":
      try {
        await productRepo.delete({"product_code": payload.product_code});
        event.sender.send("product-service", {action, status: "success"});
      } catch (e) {
        event.sender.send("product-service", {action, status: "error", data: payload.product_code});
      }
      break;
    case "edit-product":
      try {
        await productRepo.update({"product_code": payload.product_code}, payload.product);
        event.sender.send("product-service", {action, status: "success"});
      } catch (e) {
        event.sender.send("product-service", {action, status: "error", data: payload.product_code});
      }
      break;
    case "add-product":
      try {
        await productRepo.save(payload.product);
        event.sender.send("product-service", {action, status: "success"});
      } catch (e) {
        event.sender.send("product-service", {action, status: "error", data: e.message});
      }
      break;
    default:
      event.returnValue = "error";
  }
};