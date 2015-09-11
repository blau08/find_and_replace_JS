describe("find_and_replace", function() {
  it("will find and replace a word in a string", function() {
    expect(find_and_replace("Hello world", "world", "universe")).to.equal("Hello universe");
  });
  it("will find and replace a word in a string", function() {
    expect(find_and_replace("Hello world world", "world", "universe")).to.equal("Hello universe universe");
  });
});
