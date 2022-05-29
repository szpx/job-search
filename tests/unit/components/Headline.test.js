import { mount } from "@vue/test-utils";
import Headline from "@/components/Headline.vue";

describe("Headline", () => {
  describe("Jest playground", () => {
    it("tracks whether it has been called", () => {
      const mockFunction = jest.fn();
      mockFunction(1, 2, 5);
      expect(mockFunction).toHaveBeenCalledWith(1, 2);
    });
  });
});
