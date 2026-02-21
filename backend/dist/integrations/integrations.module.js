"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const whatsapp_service_1 = require("./whatsapp.service");
const whatsapp_controller_1 = require("./whatsapp.controller");
const pix_service_1 = require("./pix.service");
const pix_controller_1 = require("./pix.controller");
const calendar_service_1 = require("./calendar.service");
const calendar_controller_1 = require("./calendar.controller");
const qrcode_service_1 = require("./qrcode.service");
const qrcode_controller_1 = require("./qrcode.controller");
let IntegrationsModule = class IntegrationsModule {
};
exports.IntegrationsModule = IntegrationsModule;
exports.IntegrationsModule = IntegrationsModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [whatsapp_service_1.WhatsappService, pix_service_1.PixService, calendar_service_1.CalendarService, qrcode_service_1.QrcodeService],
        controllers: [whatsapp_controller_1.WhatsappController, pix_controller_1.PixController, calendar_controller_1.CalendarController, qrcode_controller_1.QrcodeController],
    })
], IntegrationsModule);
//# sourceMappingURL=integrations.module.js.map