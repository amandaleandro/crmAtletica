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
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asset_entity_1 = require("../modules/asset.entity");
let AssetsService = class AssetsService {
    assetsRepository;
    constructor(assetsRepository) {
        this.assetsRepository = assetsRepository;
    }
    async findAll() {
        return this.assetsRepository.find({ relations: ['responsible'] });
    }
    async findOne(id) {
        const asset = await this.assetsRepository.findOne({ where: { id }, relations: ['responsible'] });
        return asset === null ? undefined : asset;
    }
    async create(data) {
        const asset = this.assetsRepository.create(data);
        return this.assetsRepository.save(asset);
    }
    async update(id, data) {
        await this.assetsRepository.update(id, data);
        const updated = await this.findOne(id);
        if (!updated)
            throw new Error('Asset not found');
        return updated;
    }
    async remove(id) {
        await this.assetsRepository.delete(id);
    }
};
exports.AssetsService = AssetsService;
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asset_entity_1.Asset)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AssetsService);
//# sourceMappingURL=assets.service.js.map