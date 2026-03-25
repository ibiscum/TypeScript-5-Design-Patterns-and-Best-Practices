"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
@(0, common_1.Module)({
    imports: [],
    controllers: [app_controller_1.AppController],
})
class AppModule {
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map