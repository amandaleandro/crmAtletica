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
exports.Payment = void 0;
const typeorm_1 = require("typeorm");
const member_entity_1 = require("./member.entity");
const event_entity_1 = require("./event.entity");
let Payment = class Payment {
    id;
    member;
    event;
    amount;
    dueDate;
    paid;
    paidAt;
    proofUrl;
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => member_entity_1.Member),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", member_entity_1.Member)
], Payment.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'event_id' }),
    __metadata("design:type", event_entity_1.Event)
], Payment.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Payment.prototype, "paid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Payment.prototype, "paidAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "proofUrl", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)('payments')
], Payment);
//# sourceMappingURL=payment.entity.js.map