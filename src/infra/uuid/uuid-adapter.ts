import { MakeId } from "@/data/protocols";
import uuid4 from "uuid4";

export class UuidAdapter implements MakeId {
  async makeId(): Promise<string> {
    const id = await uuid4().split("-");
    return id[2] + id[1] + id[0] + id[3] + id[4];
  }
}
