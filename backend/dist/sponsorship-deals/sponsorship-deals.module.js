"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorshipDealsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sponsorship_deals_service_1 = require("./sponsorship-deals.service");
const sponsorship_deals_controller_1 = require("./sponsorship-deals.controller");
const sponsorship_deal_entity_1 = require("../modules/sponsorship_deal.entity");
let SponsorshipDealsModule = class SponsorshipDealsModule {
};
exports.SponsorshipDealsModule = SponsorshipDealsModule;
exports.SponsorshipDealsModule = SponsorshipDealsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sponsorship_deal_entity_1.SponsorshipDeal])],
        providers: [sponsorship_deals_service_1.SponsorshipDealsService],
        controllers: [sponsorship_deals_controller_1.SponsorshipDealsController],
    })
], SponsorshipDealsModule);
//# sourceMappingURL=sponsorship-deals.module.js.map