"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetaMsg = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["RecetaQueue"] = "recetas";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var RecetaMsg;
(function (RecetaMsg) {
    RecetaMsg["CREATE"] = "CREATE_RECETA";
    RecetaMsg["FIND_ALL"] = "FIND_RECETAS";
    RecetaMsg["FIND_ONE"] = "FIND_RECETA";
    RecetaMsg["UPDATE"] = "UPDATE_RECETA";
    RecetaMsg["DELETE"] = "DELETE_RECETA";
})(RecetaMsg || (exports.RecetaMsg = RecetaMsg = {}));
//# sourceMappingURL=constants.js.map