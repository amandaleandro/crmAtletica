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
exports.SponsorshipDeal = void 0;
const typeorm_1 = require("typeorm");
const sponsor_entity_1 = require("./sponsor.entity");
let SponsorshipDeal = class SponsorshipDeal {
    id;
    sponsor;
    status;
    value;
    description;
    createdAt;
};
exports.SponsorshipDeal = SponsorshipDeal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SponsorshipDeal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sponsor_entity_1.Sponsor),
    (0, typeorm_1.JoinColumn)({ name: 'sponsor_id' }),
    __metadata("design:type", sponsor_entity_1.Sponsor)
], SponsorshipDeal.prototype, "sponsor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'lead' }),
    __metadata("design:type", String)
], SponsorshipDeal.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SponsorshipDeal.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SponsorshipDeal.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SponsorshipDeal.prototype, "createdAt", void 0);
exports.SponsorshipDeal = SponsorshipDeal = __decorate([
    (0, typeorm_1.Entity)('sponsorship_deals')
], SponsorshipDeal);
//# sourceMappingURL=sponsorship_deal.entity.js.map