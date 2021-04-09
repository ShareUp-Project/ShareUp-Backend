"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddImage = void 0;
class DbAddImage {
    constructor(addImageRepository, makeId) {
        this.addImageRepository = addImageRepository;
        this.makeId = makeId;
    }
    async add(data) {
        const id = await this.makeId.makeId();
        await this.addImageRepository.add({ id, ...data });
    }
}
exports.DbAddImage = DbAddImage;
//# sourceMappingURL=db-add-image.js.map