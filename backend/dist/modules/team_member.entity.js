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
exports.TeamMember = void 0;
const typeorm_1 = require("typeorm");
const team_entity_1 = require("./team.entity");
const member_entity_1 = require("./member.entity");
let TeamMember = class TeamMember {
    team_id;
    member_id;
    team;
    member;
    role;
    joinedAt;
};
exports.TeamMember = TeamMember;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], TeamMember.prototype, "team_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], TeamMember.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    __metadata("design:type", team_entity_1.Team)
], TeamMember.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => member_entity_1.Member),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", member_entity_1.Member)
], TeamMember.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TeamMember.prototype, "joinedAt", void 0);
exports.TeamMember = TeamMember = __decorate([
    (0, typeorm_1.Entity)('team_members')
], TeamMember);
//# sourceMappingURL=team_member.entity.js.map