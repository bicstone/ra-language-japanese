import messages from "./index";

describe("messages", () => {
  test("should messages object include 'ra' key only", () => {
    expect(messages).toMatchObject({ ra: {} });
  });
});
