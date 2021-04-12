"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const entities_1 = require("@/domain/entities");
const typeorm_1 = require("typeorm");
let PostRepository = class PostRepository {
    async write(data) {
        await typeorm_1.getRepository(entities_1.Post)
            .createQueryBuilder("post")
            .insert()
            .into(entities_1.Post)
            .values(data)
            .execute();
    }
    async get(data) {
        return await typeorm_1.getRepository(entities_1.Post)
            .createQueryBuilder("post")
            .leftJoinAndSelect("post.user", "user")
            .leftJoinAndSelect("post.images", "image")
            .leftJoinAndSelect("post.hashtags", "hashtag")
            .leftJoinAndSelect("post.scraps", "scrap")
            .skip(data.page * 7)
            .take(7)
            .getMany();
    }
    async delete(data) {
        await typeorm_1.getRepository(entities_1.Post)
            .createQueryBuilder("post")
            .delete()
            .from(entities_1.Post)
            .where("id = :id", { id: data.id })
            .andWhere("userId = :userId", { userId: data.userId })
            .execute();
    }
    async findOne(data) {
        return await typeorm_1.getRepository(entities_1.Post)
            .createQueryBuilder("post")
            .where("id = :id", { id: data.id })
            .getOne();
    }
    async getScrap(data) {
        return await typeorm_1.getRepository(entities_1.Post)
            .createQueryBuilder("post")
            .innerJoinAndSelect("post.user", "user")
            .innerJoinAndSelect("post.images", "image")
            .innerJoinAndSelect("post.hashtags", "hashtag")
            .innerJoinAndSelect("post.scraps", "scrap", "scrap.userId = :userId", {
            userId: data.userId,
        })
            .skip(data.page * 7)
            .take(7)
            .getMany();
    }
};
PostRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.Post)
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=post-repository.js.map