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
exports.Post = exports.Category = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("@/domain/entities");
var Category;
(function (Category) {
    Category["PAPER"] = "paper";
    Category["PLASTIC"] = "plastic";
    Category["GLASS"] = "glass";
    Category["STYROFOAM"] = "styrofoam";
    Category["VINYL"] = "vinyl";
    Category["CAN"] = "can";
    Category["CLOTHING"] = "clothing";
    Category["ETC"] = "etc";
})(Category = exports.Category || (exports.Category = {}));
let Post = class Post {
};
__decorate([
    typeorm_1.PrimaryColumn({ length: 45 }),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({ name: "user_id", length: 45 }),
    __metadata("design:type", String)
], Post.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ type: "enum", enum: Category }),
    __metadata("design:type", String)
], Post.prototype, "category", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "views", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => entities_1.User, (user) => user.id, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "user_id" }),
    __metadata("design:type", entities_1.User)
], Post.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany((type) => entities_1.Image, (image) => image.post),
    __metadata("design:type", Array)
], Post.prototype, "images", void 0);
__decorate([
    typeorm_1.OneToMany((type) => entities_1.Hashtag, (hashtag) => hashtag.post),
    __metadata("design:type", Array)
], Post.prototype, "hashtags", void 0);
__decorate([
    typeorm_1.OneToMany((type) => entities_1.Scrap, (scrap) => scrap.post),
    __metadata("design:type", Array)
], Post.prototype, "scraps", void 0);
Post = __decorate([
    typeorm_1.Entity()
], Post);
exports.Post = Post;
//# sourceMappingURL=post.js.map