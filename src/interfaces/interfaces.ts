export interface ipcPayload {
  action: string;
  payload: any;
}

export interface ipcResponse {
  response: "success" | "error";
}

export type actionDispacher = (attribute: string ,value?: any) => void;

export interface storeType {
  debug: true;
  state: any;
  setAttributeAction: actionDispacher;
  clearAttributeAction: actionDispacher;
}