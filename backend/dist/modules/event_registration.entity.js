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
exports.EventRegistration = void 0;
const typeorm_1 = require("typeorm");
const event_entity_1 = require("./event.entity");
const member_entity_1 = require("./member.entity");
let EventRegistration = class EventRegistration {
    id;
    event;
    member;
    status;
    checkIn;
    checkInAt;
};
exports.EventRegistration = EventRegistration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EventRegistration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event),
    (0, typeorm_1.JoinColumn)({ name: 'event_id' }),
    __metadata("design:type", event_entity_1.Event)
], EventRegistration.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => member_entity_1.Member),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", member_entity_1.Member)
], EventRegistration.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'inscrito' }),
    __metadata("design:type", String)
], EventRegistration.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], EventRegistration.prototype, "checkIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], EventRegistration.prototype, "checkInAt", void 0);
exports.EventRegistration = EventRegistration = __decorate([
    (0, typeorm_1.Entity)('event_registrations')
], EventRegistration);
//# sourceMappingURL=event_registration.entity.js.map