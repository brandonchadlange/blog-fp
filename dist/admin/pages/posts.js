"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildPostsPage = void 0;
const document_builder_1 = require("@formify-tech/document-builder");
function BuildPostsPage({ postsDb }) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield postsDb.find();
        console.log(posts);
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
                <td>
                    <a href="/plugins/blog-builder/posts/how-to-eat-a-cat"">How to eat a cat</a>
                </td>
                <td>how-to-eat-a-cat</td>
                <td>Ching Chong Woo</td>
                <td>Draft</td>
            </tr>
            <tr>
                <td>
                    <a href="/plugins/blog-builder/posts/more-doors-or-wheels">More doors or wheels?</a>
                </td>
                <td>more-doors-or-wheels</td>
                <td>John Doe</td>
                <td>Published</td>
            </tr>
            <tr>
                <td>
                    <a href="/plugins/blog-builder/posts/top-10-snails-2022">Top 10 Snails 2022</a>
                </td>
                <td>top-10-snails-2022</td>
                <td>Jane Doe</td>
                <td>Published</td>
            </tr>
        </tbody>
    </table>`;
}
//# sourceMappingURL=posts.js.map