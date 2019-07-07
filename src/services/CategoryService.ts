import {ipcPayload} from "@/interfaces/interfaces";
import Event = Electron.Event;
import {Category} from "../repository/entities/Category";

export const CategoryServiceCb: any = async (dbConnection: any, element: ipcPayload, event: Event) => {
  const dbInstance = await dbConnection.getInstance();
  const categoryRepo = dbInstance.getRepository(Category);
  const {action, payload} = element;

  switch (action) {
    case "get-categories":
      //const {password} = payload;
      try {
        const allCategories = await categoryRepo.find();
        event.returnValue = allCategories;
      } catch(e) {
        event.returnValue = "error";
      }
      break;
    case "delete-category":
      try {
        const deleted = await categoryRepo.delete({"category_code": payload.category_code});
        event.returnValue = "success";
      } catch (e) {
        event.returnValue = "error";
      }
    default:
      event.returnValue = "error";
  }
};