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
exports.SponsorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sponsor_entity_1 = require("../modules/sponsor.entity");
let SponsorsService = class SponsorsService {
    sponsorsRepository;
    constructor(sponsorsRepository) {
        this.sponsorsRepository = sponsorsRepository;
    }
    async findAll() {
        return this.sponsorsRepository.find();
    }
    async findOne(id) {
        const sponsor = await this.sponsorsRepository.findOne({ where: { id } });
        if (!sponsor)
            throw new common_1.NotFoundException('Patrocinador não encontrado');
        return sponsor;
    }
    async create(data) {
        const sponsor = this.sponsorsRepository.create(data);
        return this.sponsorsRepository.save(sponsor);
    }
    async update(id, data) {
        await this.findOne(id);
        await this.sponsorsRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.sponsorsRepository.delete(id);
    }
};
exports.SponsorsService = SponsorsService;
exports.SponsorsService = SponsorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sponsor_entity_1.Sponsor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SponsorsService);
//# sourceMappingURL=sponsors.service.js.map