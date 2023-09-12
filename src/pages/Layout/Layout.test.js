import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderPage from "../../utils/testsConfig";

describe("Layout", () => {
  it("should have a navbar", async () => {
    renderPage();
    await waitFor(() => {
      const navbar = screen.getByRole("navigation");
      expect(navbar).toBeTruthy();
    });
  });

  it("should have a navbar with a logo", async () => {
    renderPage();
    await waitFor(() => {
      const navbar = screen.getByRole("navigation");
      const navbarLogo = within(navbar).getByRole("img", { name: "Kasa" });
      expect(navbarLogo).toBeTruthy();
    });
  });

  it("should have a navbar with 'Accueil' link", async () => {
    renderPage();
    await waitFor(() => {
      const accueilLink = screen.getByRole("link", {
        name: "Accueil"
      });
      expect(accueilLink).toBeTruthy();
    });
  });

  it("should have a navbar with 'Accueil' link which redirect to the home page", async () => {
    renderPage();
    let accueilLink;
    await waitFor(() => {
      accueilLink = screen.getByText("Accueil");
    });
    userEvent.click(accueilLink);
    await waitFor(() => {
      const homePageBanner = screen.getByRole("banner");
      const homePageBannerText = within(homePageBanner).getByText(
        "Chez vous, partout et ailleurs"
      );
      expect(homePageBannerText).toBeTruthy();
    });
  });

  it("should have a navbar with 'A propos' link", async () => {
    renderPage();
    await waitFor(() => {
      const aboutLink = screen.getByRole("link", {
        name: "A Propos"
      });
      expect(aboutLink).toBeTruthy();
    });
  });

  it("should have a navbar with 'A propos' link which redirect to the about page", async () => {
    renderPage();
    let aboutLink;
    await waitFor(() => {
      aboutLink = screen.getByRole("link", {
        name: "A Propos"
      });
    });
    userEvent.click(aboutLink);
    await waitFor(() => {
      const aboutPageBannerImg = screen.getByRole("img", {
        name: "Paysage de montagnes enneigées avec une forêt de sapins"
      });
      expect(aboutPageBannerImg).toBeTruthy();
    });
  });

  it("should have a footer", async () => {
    renderPage();
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeTruthy();
    });
  });

  it("should have a footer with a logo", async () => {
    renderPage();
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      const footerLogo = within(footer).getByRole("img", { name: "Kasa" });
      expect(footerLogo).toBeTruthy();
    });
  });

  it("should have a footer with a copyright", async () => {
    renderPage();
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      const footerCopyright = within(footer).getByText(
        "© 2020 Kasa. All rights reserved"
      );
      expect(footerCopyright).toBeTruthy();
    });
  });
});
