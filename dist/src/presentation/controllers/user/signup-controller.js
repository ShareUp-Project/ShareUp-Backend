"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const helpers_1 = require("@/presentation/helpers");
class SignUpController {
    constructor(createUser, findUser) {
        this.createUser = createUser;
        this.findUser = findUser;
    }
    async handle(request) {
        try {
            const user = await this.findUser.findOne(request.phone);
            if (user)
                return helpers_1.alreadyExistsData();
            await this.createUser.create(request);
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.SignUpController = SignUpController;
//# sourceMappingURL=signup-controller.js.map