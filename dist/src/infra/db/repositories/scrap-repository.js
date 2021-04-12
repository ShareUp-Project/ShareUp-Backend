"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapRepository = void 0;
const entities_1 = require("@/domain/entities");
const typeorm_1 = require("typeorm");
let ScrapRepository = class ScrapRepository {
    async scrap(data) {
        await typeorm_1.getRepository(entities_1.Scrap)
            .createQueryBuilder("scrap")
            .insert()
            .into(entities_1.Scrap)
            .values(data)
            .execute();
    }
    async cancle(data) {
        await typeorm_1.getRepository(entities_1.Scrap)
            .createQueryBuilder("scrap")
            .delete()
            .from(entities_1.Scrap)
            .where("userId = :userId", { userId: data.userId })
            .andWhere("postId = :postId", { postId: data.id })
            .execute();
    }
};
ScrapRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.Scrap)
], ScrapRepository);
exports.ScrapRepository = ScrapRepository;
//# sourceMappingURL=scrap-repository.js.map