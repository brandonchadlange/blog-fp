import { Container, Text } from "@formify-tech/document-builder";

export function BuildOverviewPage() {
  return Container({
    children: [
      Text({
        type: "h1",
        innerText: "Blog Builder Overview Page",
      }),
    ],
  });
}
