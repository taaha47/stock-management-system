import {ipcPayload} from "@/interfaces/interfaces";
import Event = Electron.Event;
import {Category} from "../repository/entities/Category";
import {ipcRenderer} from "electron";

export const CategoryServiceCb: any = async (dbConnection: any, element: ipcPayload, event: Event) => {
  const dbInstance = await dbConnection.getInstance();
  const categoryRepo = dbInstance.getRepository(Category);
  const {action, payload} = element;

  switch (action) {
    case "get-categories":
      try {
        const allCategories = await categoryRepo.createQueryBuilder( "category")
          .select("category.category_code", "category_code")
          .addSelect("category.category_name", "category_name")
          .addSelect("category.category_description", "category_description")
          .addSelect("COUNT(product.category.category_id)", "products_count")
          .leftJoin("category.products", "product")
          .groupBy("category.category_code")
          .getRawMany();
        event.sender.send("category-service", {action, status: "success", data: allCategories});
      } catch(e) {
        event.sender.send("category-service", {action, status: "error", data: e.message});
      }
      break;
    case "delete-category":
      try {
        await categoryRepo.delete({"category_code": payload.category_code});
        event.returnValue = "success";
      } catch (e) {
        event.returnValue = "error";
      }
      break;
    case "edit-category":
      try {
        await categoryRepo.update({"category_code": payload.categoryToUpdateCode}, payload.category);
        event.returnValue = "success";
      } catch (e) {
        event.returnValue = "error";
      }
      break;
    case "add-category":
      try {
        await categoryRepo.save(payload.category);
        event.sender.send("category-service", {action, status: "success"});
      } catch (e) {
        event.sender.send("category-service", {action, status: "error", data: e.message});
      }
    break;
    default:
      event.returnValue = "error";
  }
};
