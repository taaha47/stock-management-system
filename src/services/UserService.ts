import {ipcPayload} from "@/interfaces/interfaces";
import Event = Electron.Event;

export const UserServiceCb: any = async (dbConnection: any, element: ipcPayload, event: Event) => {
  const {action, payload} = element;

  switch (action) {
    case "authenticate":
      const {password} = payload;
      if (password === "password")
        event.returnValue = "success";
      event.returnValue = "error";
    default:
      event.returnValue = "success";
  }
};
