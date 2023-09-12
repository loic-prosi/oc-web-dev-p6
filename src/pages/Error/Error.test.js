import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderPage from "../../utils/testsConfig";

describe("Error page", () => {
  it("should have a navbar", async () => {
    renderPage("error");
    await waitFor(() => {
      const navbar = screen.getByRole("navigation");
      expect(navbar).toBeTruthy();
    });
  });

  it("should have a navbar with 'Accueil' link inactive", async () => {
    renderPage("error");
    await waitFor(() => {
      const accueilLink = screen.getByRole("link", {
        name: "Accueil",
        current: false
      });
      expect(accueilLink).toBeTruthy();
    });
  });

  it("should have a navbar with 'A propos' link inactive", async () => {
    renderPage("error");
    await waitFor(() => {
      const aboutLink = screen.getByRole("link", {
        name: "A Propos",
        current: false
      });
      expect(aboutLink).toBeTruthy();
    });
  });

  it("should have a '404' title", async () => {
    renderPage("error");
    await waitFor(() => {
      const title = screen.getByText("404");
      expect(title).toBeTruthy();
    });
  });

  it("should have a subtitle", async () => {
    renderPage("error");
    await waitFor(() => {
      const subtitle = screen.getByText(
        "Oups! La page que vous demandez n'existe pas."
      );
      expect(subtitle).toBeTruthy();
    });
  });

  it("should have a link", async () => {
    renderPage("error");
    await waitFor(() => {
      const redirectLink = screen.getByRole("link", {
        name: "Retourner sur la page d'accueil"
      });
      expect(redirectLink).toBeTruthy();
    });
  });

  it("should have a link which redirect to the home page", async () => {
    renderPage("error");
    const redirectLink = screen.getByRole("link", {
      name: "Retourner sur la page d'accueil"
    });
    await userEvent.click(redirectLink);
    await waitFor(() => {
      const homePageBannerText = screen.getByText(
        "Chez vous, partout et ailleurs"
      );
      expect(homePageBannerText).toBeTruthy();
    });
  });

  it("should have a footer", async () => {
    renderPage("error");
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeTruthy();
    });
  });
});
