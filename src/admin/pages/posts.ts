import { Container, Text } from "@formify-tech/document-builder";

export function BuildPostsPage() {
  return Container({
    children: [
      Text({
        type: "h1",
        innerText: "Your posts",
      }),
      Container({
        innerText: buildTableMockup(),
      }),
    ],
  });
}

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
