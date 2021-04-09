"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const entities_1 = require("@/domain/entities");
const typeorm_1 = require("typeorm");
let UserRepository = class UserRepository {
    async create(data) {
        await typeorm_1.getRepository(entities_1.User)
            .createQueryBuilder("user")
            .insert()
            .into(entities_1.User)
            .values(data)
            .execute();
    }
    async findOne(phone) {
        return await typeorm_1.getRepository(entities_1.User)
            .createQueryBuilder("user")
            .where("phone = :phone", { phone })
            .getOne();
    }
    async findOneByNickname(nickname) {
        return await typeorm_1.getRepository(entities_1.User)
            .createQueryBuilder("user")
            .where("nickname = :nickname", { nickname })
            .getOne();
    }
    async change(data) {
        await typeorm_1.getRepository(entities_1.User)
            .createQueryBuilder("user")
            .update(entities_1.User)
            .set({ password: data.password })
            .where("phone = :phone", { phone: data.phone })
            .execute();
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map