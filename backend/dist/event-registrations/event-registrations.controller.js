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
exports.EventRegistrationsController = void 0;
const common_1 = require("@nestjs/common");
const event_registrations_service_1 = require("./event-registrations.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let EventRegistrationsController = class EventRegistrationsController {
    registrationsService;
    constructor(registrationsService) {
        this.registrationsService = registrationsService;
    }
    findAll() {
        return this.registrationsService.findAll();
    }
    findOne(id) {
        return this.registrationsService.findOne(id);
    }
    create(body) {
        return this.registrationsService.create(body);
    }
    update(id, body) {
        return this.registrationsService.update(id, body);
    }
    remove(id) {
        return this.registrationsService.remove(id);
    }
};
exports.EventRegistrationsController = EventRegistrationsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventRegistrationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EventRegistrationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventRegistrationsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], EventRegistrationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EventRegistrationsController.prototype, "remove", null);
exports.EventRegistrationsController = EventRegistrationsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('event-registrations'),
    __metadata("design:paramtypes", [event_registrations_service_1.EventRegistrationsService])
], EventRegistrationsController);
//# sourceMappingURL=event-registrations.controller.js.map