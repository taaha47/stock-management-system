import {Article} from "../entities/Article.scheme";

export const articleRepositoryCb = async (dbConnection: any, element: any, event: any) => {
    const dbInstance = await dbConnection.getInstance();
    const itemRepo = dbInstance.getRepository(Article);
    const {action, payload} = element;

    switch (action) {
        case "add-article":
            try {
                const item = await itemRepo.create({"name": "beauty"});
                await itemRepo.save(item);
                event.returnValue = "success";
            } catch (e) {
                event.returnValue = "error";
            }
            break;
        case "get-articles":
            try {
                const items = await itemRepo.find();
                event.returnValue = items[0].name;
            } catch (e) {
                event.returnValue = "error";
            }
            break;
        default:
            break;
    }
};