/// <reference types = "Cypress" />

const faker = require("faker");

describe.only("Create issue", () => {
  it("successfully", () => {
    const issue = {
      title: `issue-${faker.random.uuid()}`,
      description: faker.random.word(3),
      project: {
        name: `project-${faker.random.uuid()}`,
        description: faker.random.word(5),
      },
    };

    cy.api_createIssue(issue).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.title).to.equal(issue.title);
      expect(response.body.description).to.equal(issue.description);
    });
  });
});
