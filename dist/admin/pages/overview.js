"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildOverviewPage = void 0;
const document_builder_1 = require("@formify-tech/document-builder");
function BuildOverviewPage() {
    return (0, document_builder_1.Container)({
        children: [
            (0, document_builder_1.Text)({
                type: "h1",
                innerText: "Blog Builder Overview Page",
            }),
        ],
    });
}
exports.BuildOverviewPage = BuildOverviewPage;
//# sourceMappingURL=overview.js.map