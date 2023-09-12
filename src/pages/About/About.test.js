import { screen, waitFor } from "@testing-library/react";

import renderPage from "../../utils/testsConfig";

describe("About page", () => {
  it("should have a navbar", async () => {
    renderPage("about");
    await waitFor(() => {
      const navbar = screen.getByRole("navigation");
      expect(navbar).toBeTruthy();
    });
  });

  it("should have a navbar with 'Accueil' link inactive", async () => {
    renderPage("about");
    await waitFor(() => {
      const accueilLink = screen.getByRole("link", {
        name: "Accueil",
        current: false
      });
      expect(accueilLink).toBeTruthy();
    });
  });

  it("should have a navbar with 'A propos' link active", async () => {
    renderPage("about");
    await waitFor(() => {
      const aboutLink = screen.getByRole("link", {
        name: "A Propos",
        current: "page"
      });
      expect(aboutLink).toBeTruthy();
    });
  });

  it("should have 4 collapses elements", async () => {
    renderPage("about");
    await waitFor(() => {
      const collapses = screen.getAllByRole("article");
      expect(collapses.length).toBe(4);
    });
  });

  it("should have a footer", async () => {
    renderPage("about");
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeTruthy();
    });
  });
});
