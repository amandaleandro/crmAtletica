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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("../modules/payment.entity");
let PaymentsService = class PaymentsService {
    paymentsRepository;
    constructor(paymentsRepository) {
        this.paymentsRepository = paymentsRepository;
    }
    async findAll() {
        return this.paymentsRepository.find();
    }
    async findOne(id) {
        const payment = await this.paymentsRepository.findOne({ where: { id } });
        if (!payment)
            throw new common_1.NotFoundException('Pagamento não encontrado');
        return payment;
    }
    async create(data) {
        const payment = this.paymentsRepository.create(data);
        return this.paymentsRepository.save(payment);
    }
    async update(id, data) {
        await this.findOne(id);
        await this.paymentsRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.paymentsRepository.delete(id);
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map