"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClaseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_clase_dto_1 = require("./create-clase.dto");
class UpdateClaseDto extends (0, mapped_types_1.PartialType)(create_clase_dto_1.CreateClaseDto) {
}
exports.UpdateClaseDto = UpdateClaseDto;
//# sourceMappingURL=update-clase.dto.js.map