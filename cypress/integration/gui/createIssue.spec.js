/// <reference types = "Cypress" />

const faker = require("faker");

describe("Create issue", () => {
  const issue = {
    title: `issue-${faker.random.uuid()}`,
    description: faker.random.word(3),
    project: {
      name: `project-${faker.random.uuid()}`,
      description: faker.random.word(5),
    },
  };

  before(() => {
    cy.login();
    cy.api_createProject(issue.project);
  });

  it("successfully", () => {
    cy.gui_createIssue(issue);

    cy.get(".issue-details")
      .should("contain", issue.title)
      .and("contain", issue.description);
  });
});
