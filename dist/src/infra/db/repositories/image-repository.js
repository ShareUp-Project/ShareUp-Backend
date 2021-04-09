"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRepository = void 0;
const entities_1 = require("@/domain/entities");
const typeorm_1 = require("typeorm");
let ImageRepository = class ImageRepository {
    async add(data) {
        await typeorm_1.getRepository(entities_1.Image)
            .createQueryBuilder("image")
            .insert()
            .into(entities_1.Image)
            .values(data)
            .execute();
    }
};
ImageRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.Image)
], ImageRepository);
exports.ImageRepository = ImageRepository;
//# sourceMappingURL=image-repository.js.map