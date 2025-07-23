import { mountSuspended } from "@nuxt/test-utils/runtime";
import { Header } from "#components";

it("can mount Header", async () => {
  const component = await mountSuspended(Header);
  console.log("component.text()", component.text());
  expect(component.text()).toMatchInlineSnapshot('"Header"');
});
