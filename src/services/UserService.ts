import {ipcPayload} from "@/interfaces/interfaces";
import Event = Electron.Event;
import {User} from "../repository/entities/User.scheme";
const bcrypt = require('bcryptjs');

export const UserServiceCb: any = async (dbConnection: any, element: ipcPayload, event: Event) => {
  const dbInstance = await dbConnection.getInstance();
  const userRepo = dbInstance.getRepository(User);
  const {action, payload} = element;

  switch (action) {
    case "authenticate":
      const {password} = payload;
      try {
        const user = await userRepo.createQueryBuilder("user").where("user.username = :username", {username: "admin"});
        const auth = await bcrypt.compare(user.passwordHash, password);
        console.log(auth);
        event.returnValue = "success";
      } catch(e) {
        event.returnValue = "error";
      }
      break;
    default:
      event.returnValue = "error";
  }
};
