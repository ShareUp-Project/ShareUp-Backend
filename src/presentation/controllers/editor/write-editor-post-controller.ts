import { WriteEditorPost } from "@/domain/usecases";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class WriteEditorPostController implements Controller {
  constructor(private readonly writeEditorPost: WriteEditorPost) {}

  async handle(
    request: WriteEditorPostController.Request
  ): Promise<HttpResponse> {
    try {
      if (request.image) request.image = request.image["key"];
      await this.writeEditorPost.write(request);
      return ok({ message: "success" });
    } catch (e) {
      console.log(e.message);
      return serverError(e);
    }
  }
}

export namespace WriteEditorPostController {
  export type Request = {
    title: string;
    content: string;
    image: any;
  };
}
