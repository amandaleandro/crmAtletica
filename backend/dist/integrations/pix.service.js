"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixService = void 0;
const common_1 = require("@nestjs/common");
let PixService = class PixService {
    generatePayload({ chave, valor, nome, cidade, infoAdicional }) {
        return `00020126360014BR.GOV.BCB.PIX0114${chave}520400005303986540${valor.toFixed(2)}5802BR5913${nome}6009${cidade}62070503***6304`;
    }
};
exports.PixService = PixService;
exports.PixService = PixService = __decorate([
    (0, common_1.Injectable)()
], PixService);
//# sourceMappingURL=pix.service.js.map