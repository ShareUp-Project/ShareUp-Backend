"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddHashtag = void 0;
class DbAddHashtag {
    constructor(addHashtagRepository, makeId) {
        this.addHashtagRepository = addHashtagRepository;
        this.makeId = makeId;
    }
    async add(data) {
        const id = await this.makeId.makeId();
        await this.addHashtagRepository.add({ ...data, id });
    }
}
exports.DbAddHashtag = DbAddHashtag;
//# sourceMappingURL=db-add-hashtag.js.map