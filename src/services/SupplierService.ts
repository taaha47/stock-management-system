import {ipcPayload} from "@/interfaces/interfaces";
import Event = Electron.Event;
import {Supplier} from "../repository/entities/Supplier";

export const SupplierServiceCb: any = async (dbConnection: any, element: ipcPayload, event: Event) => {
  const dbInstance = await dbConnection.getInstance();
  const supplierRepo = dbInstance.getRepository(Supplier);
  const {action, payload} = element;

  switch (action) {
    case "get-suppliers":
      try {
        const allSuppliers = await supplierRepo.createQueryBuilder( "supplier")
          .select("supplier.supplier_id", "supplier_id")
          .addSelect("supplier.supplier_company_name", "supplier_company_name")
          .addSelect("supplier.createdAt", "created_at")
          .addSelect("supplier.supplier_tel", "supplier_tel")
          .addSelect("supplier.supplier_email", "supplier_email")
          //.addSelect("COUNT(product.category.category_id)", "products_count")
          //.leftJoin("category.products", "product")
          //.groupBy("category.category_code")
          .getRawMany();
        event.sender.send("supplier-service", {action, status: "success", data: allSuppliers});
      } catch(e) {
        event.sender.send("supplier-service", {action, status: "error", data: e.message});
      }
      break;
    case "add-supplier":
      try {
        await supplierRepo.save(payload.supplier);
        event.sender.send("supplier-service", {action, status: "success"});
      } catch (e) {
        event.sender.send("supplier-service", {action, status: "error", data: e.message});
      }
      break;
    case "delete-supplier":
      try {
        await supplierRepo.delete({"supplier_id": payload.supplierId});
        event.sender.send("supplier-service", {action, status: "success"});
      } catch (e) {
        event.sender.send("supplier-service", {action, status: "error", data: payload.supplierId});
      }
      break;
    case "edit-supplier":
      try {
        await supplierRepo.update({"supplier_id": payload.supplierId}, payload.supplier);
        event.sender.send("supplier-service", {action, status: "success"});
      } catch (e) {
        event.sender.send("supplier-service", {action, status: "error", data: payload.supplierId});
      }
      break;
    default:
      event.sender.send("supplier-service", {action, status: "error", data: "unknown error"});
  }
};
