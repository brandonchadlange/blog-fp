"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildPostsPage = void 0;
const document_builder_1 = require("@formify-tech/document-builder");
function BuildPostsPage() {
    return (0, document_builder_1.Container)({
        children: [
            (0, document_builder_1.Text)({
                type: "h1",
                innerText: "Your posts",
            }),
            (0, document_builder_1.Container)({
                innerText: buildTableMockup(),
            }),
        ],
    });
}
exports.BuildPostsPage = BuildPostsPage;
function buildTableMockup() {
    return `
    <table>
        <thead>
            <th>Title</th>
            <th>Slug</th>
            <th>Author</th>
            <th>Status</th>
        </thead>
        <tbody>
            <tr>
                <td>How to eat a cat</td>
                <td>how-to-eat-a-cat</td>
                <td>Ching Chong Woo</td>
                <td>Draft</td>
            </tr>
            <tr>
                <td>More doors or wheels?</td>
                <td>more-doors-or-wheels</td>
                <td>John Doe</td>
                <td>Published</td>
            </tr>
            <tr>
                <td>Top 10 Snails 2022</td>
                <td>top-10-snails-2022</td>
                <td>Jane Doe</td>
                <td>Published</td>
            </tr>
        </tbody>
    </table>`;
}
//# sourceMappingURL=posts.js.map