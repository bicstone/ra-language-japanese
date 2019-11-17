import messages from "./index";

describe("messages", () => {
  test("should messages object only include 'ra' key", () => {
    expect(messages).toMatchObject({ ra: {} });
  });
});
