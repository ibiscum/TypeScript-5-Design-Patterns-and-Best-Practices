"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stats(data) {
    const stats = {};
    data.forEach((item) => {
        const name = item.name;
        stats[name] = { free: item.totalFree, used: item.totalUsed, size: item.totalSize };
    });
    return stats;
}
//# sourceMappingURL=records.js.map