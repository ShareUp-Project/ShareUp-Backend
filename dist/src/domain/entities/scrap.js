"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrap = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("@/domain/entities");
let Scrap = class Scrap {
};
__decorate([
    typeorm_1.PrimaryColumn({ name: "user_id", length: 45 }),
    __metadata("design:type", String)
], Scrap.prototype, "userId", void 0);
__decorate([
    typeorm_1.PrimaryColumn({ name: "post_id", length: 45 }),
    __metadata("design:type", String)
], Scrap.prototype, "postId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => entities_1.User, (user) => user.id, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "user_id" }),
    __metadata("design:type", entities_1.User)
], Scrap.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => entities_1.Post, (post) => post.id, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "post_id" }),
    __metadata("design:type", entities_1.Post)
], Scrap.prototype, "post", void 0);
Scrap = __decorate([
    typeorm_1.Entity()
], Scrap);
exports.Scrap = Scrap;
//# sourceMappingURL=scrap.js.map