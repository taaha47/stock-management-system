export interface ipcPayload {
  action: string;
  payload: any;
}

export interface ipcResponse {
  response: "success" | "error";
}
