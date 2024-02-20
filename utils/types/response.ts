interface Response {
  code: string;
  message: string;
}

export interface MessageResponse {
  data: any;
  errors: Response;
  messages: Response;
}
