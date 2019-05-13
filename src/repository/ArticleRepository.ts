import {Article} from "./entities/Article.scheme";

export const articleRepositoryCb = async (dbConnection: any, element: any, event: any) => {
    const dbInstance = await dbConnection.getInstance();
    const itemRepo = dbInstance.getRepository(Article);
    const {action, payload} = element;

    switch (action) {
        case "add-article":
            try {
                const item = await itemRepo.create({"name": payload.name});
                await itemRepo.save(item);
                event.returnValue = "success";
            } catch (e) {
                event.returnValue = e.message;
            }
            break;
        case "get-articles":
            try {
                const items = await itemRepo.find();
                if (items && items.length !== 0)
                    event.returnValue = items[items.length - 1].name;
                event.returnValue = "no data";
            } catch (e) {
                event.returnValue = e.message;
            }
            break;
        default:
            break;
    }
};
