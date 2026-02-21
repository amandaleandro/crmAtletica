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
exports.UiCustomizationController = void 0;
const common_1 = require("@nestjs/common");
const ui_customization_service_1 = require("./ui-customization.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UiCustomizationController = class UiCustomizationController {
    uiCustomizationService;
    constructor(uiCustomizationService) {
        this.uiCustomizationService = uiCustomizationService;
    }
    async getByRole(role) {
        const config = await this.uiCustomizationService.findByRole(role);
        if (!config)
            throw new Error('Config not found');
        return config;
    }
    async createOrUpdate(body) {
        return this.uiCustomizationService.createOrUpdate(body.role, body.config);
    }
    async getMyConfig(req) {
        const user = req.user;
        const roles = user?.roles || [];
        if (roles.length === 0)
            throw new Error('No role found');
        const config = await this.uiCustomizationService.findByRole(roles[0]);
        if (!config)
            throw new Error('Config not found');
        return config;
    }
};
exports.UiCustomizationController = UiCustomizationController;
__decorate([
    (0, common_1.Get)(':role'),
    __param(0, (0, common_1.Param)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UiCustomizationController.prototype, "getByRole", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UiCustomizationController.prototype, "createOrUpdate", null);
__decorate([
    (0, common_1.Get)('/me/config'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UiCustomizationController.prototype, "getMyConfig", null);
exports.UiCustomizationController = UiCustomizationController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('ui-customization'),
    __metadata("design:paramtypes", [ui_customization_service_1.UiCustomizationService])
], UiCustomizationController);
//# sourceMappingURL=ui-customization.controller.js.map