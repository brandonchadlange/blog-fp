import { Container, Text } from "@formify-tech/document-builder";

export function BuildPostPage() {
  return Container({
    children: [
      Text({
        type: "h1",
        innerText: "Edit your post here!!!",
      }),
    ],
  });
}
