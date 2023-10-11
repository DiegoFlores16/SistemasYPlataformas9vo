"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMembresiaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_membresia_dto_1 = require("./create-membresia.dto");
class UpdateMembresiaDto extends (0, mapped_types_1.PartialType)(create_membresia_dto_1.CreateMembresiaDto) {
}
exports.UpdateMembresiaDto = UpdateMembresiaDto;
//# sourceMappingURL=update-membresia.dto.js.map