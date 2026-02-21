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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorshipDealsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sponsorship_deal_entity_1 = require("../modules/sponsorship_deal.entity");
let SponsorshipDealsService = class SponsorshipDealsService {
    dealsRepository;
    constructor(dealsRepository) {
        this.dealsRepository = dealsRepository;
    }
    async findAll() {
        return this.dealsRepository.find();
    }
    async findOne(id) {
        const deal = await this.dealsRepository.findOne({ where: { id } });
        if (!deal)
            throw new common_1.NotFoundException('Negociação não encontrada');
        return deal;
    }
    async create(data) {
        const deal = this.dealsRepository.create(data);
        return this.dealsRepository.save(deal);
    }
    async update(id, data) {
        await this.findOne(id);
        await this.dealsRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.dealsRepository.delete(id);
    }
};
exports.SponsorshipDealsService = SponsorshipDealsService;
exports.SponsorshipDealsService = SponsorshipDealsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sponsorship_deal_entity_1.SponsorshipDeal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SponsorshipDealsService);
//# sourceMappingURL=sponsorship-deals.service.js.map