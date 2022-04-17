"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildPostPage = void 0;
const document_builder_1 = require("@formify-tech/document-builder");
function BuildPostPage() {
    return (0, document_builder_1.Container)({
        children: [
            (0, document_builder_1.Text)({
                type: "h1",
                innerText: "Edit your post here!!!",
            }),
        ],
    });
}
exports.BuildPostPage = BuildPostPage;
//# sourceMappingURL=post.js.map