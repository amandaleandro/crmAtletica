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
exports.EventRegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_registration_entity_1 = require("../modules/event_registration.entity");
let EventRegistrationsService = class EventRegistrationsService {
    registrationsRepository;
    constructor(registrationsRepository) {
        this.registrationsRepository = registrationsRepository;
    }
    async findAll() {
        return this.registrationsRepository.find();
    }
    async findOne(id) {
        const reg = await this.registrationsRepository.findOne({ where: { id } });
        if (!reg)
            throw new common_1.NotFoundException('Inscrição não encontrada');
        return reg;
    }
    async create(data) {
        const reg = this.registrationsRepository.create(data);
        return this.registrationsRepository.save(reg);
    }
    async update(id, data) {
        await this.findOne(id);
        await this.registrationsRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.registrationsRepository.delete(id);
    }
};
exports.EventRegistrationsService = EventRegistrationsService;
exports.EventRegistrationsService = EventRegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_registration_entity_1.EventRegistration)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventRegistrationsService);
//# sourceMappingURL=event-registrations.service.js.map