import { apiConnection } from "./Http";
import ResponseData  from "../types/ResponseData";

export default class GameListService {
  getAll(): Promise<ResponseData> {
    return apiConnection.get("/applicant-test");
  }

  getList = apiConnection.get("/applicant-test");
}