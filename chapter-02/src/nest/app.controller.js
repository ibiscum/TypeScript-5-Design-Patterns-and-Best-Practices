"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Controller)()
class AppController {
    @(0, common_1.Get)("/health")
    getHealth() {
        return "OK!";
    }
}
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map