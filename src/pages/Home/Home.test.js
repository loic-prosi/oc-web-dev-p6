import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderPage from "../../utils/testsConfig";

describe("Home page", () => {
  it("should have a navbar", async () => {
    renderPage("home");
    await waitFor(() => {
      const navbar = screen.getByRole("navigation");
      expect(navbar).toBeTruthy();
    });
  });

  it("should have a navbar with 'Accueil' link active", async () => {
    renderPage("home");
    await waitFor(() => {
      const accueilLink = screen.getByRole("link", {
        name: "Accueil",
        current: "page"
      });
      expect(accueilLink).toBeTruthy();
    });
  });

  it("should have a navbar with 'A propos' link inactive", async () => {
    renderPage("home");
    await waitFor(() => {
      const aboutLink = screen.getByRole("link", {
        name: "A Propos",
        current: false
      });
      expect(aboutLink).toBeTruthy();
    });
  });

  it("should have a banner 'Chez vous, partout et ailleurs'", async () => {
    renderPage("home");
    await waitFor(() => {
      const banner = screen.getByRole("banner");
      const bannerText = within(banner).getByText(
        "Chez vous, partout et ailleurs"
      );
      expect(bannerText).toBeTruthy();
    });
  });

  it("should redirect to rental page when clicking on a rental card", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        cover: "cover1",
        location: "location1"
      }
    ];
    renderPage("home", rentals);
    let card;
    await waitFor(() => {
      const page = screen.getByRole("main");
      card = within(page).getByRole("link");
    });
    await userEvent.click(card);
    await waitFor(() => {
      const location = screen.getByText("location1");
      expect(location).toBeTruthy();
    });
  });

  it("should have 2 rental cards", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        cover: "cover1"
      },
      {
        id: "2",
        title: "title2",
        cover: "cover2"
      }
    ];
    renderPage("home", rentals);
    await waitFor(() => {
      const page = screen.getByRole("main");
      const cards = within(page).getAllByRole("link");
      expect(cards.length).toBe(2);
    });
  });

  it("should have 0 rental cards if rentals have no id", async () => {
    const rentals = [
      {
        title: "title1",
        cover: "cover1"
      }
    ];
    renderPage("home", rentals);
    await waitFor(() => {
      const page = screen.getByRole("main");
      const cards = within(page).queryAllByRole("link");
      expect(cards.length).toBe(0);
    });
  });

  it("should have a rental card with no title", async () => {
    const rentals = [
      {
        id: "1",
        cover: "cover1"
      }
    ];
    renderPage("home", rentals);
    await waitFor(() => {
      const page = screen.getByRole("main");
      const card = within(page).getByRole("link");
      expect(within(card).queryByText("title1")).toBeNull();
    });
  });

  it("should have a rental card with no cover", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1"
      }
    ];
    renderPage("home", rentals);
    await waitFor(() => {
      const page = screen.getByRole("main");
      const card = within(page).getByRole("link");
      expect(within(card).queryByRole("img")).toBeNull();
    });
  });

  it("should have a footer", async () => {
    renderPage("home");
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeTruthy();
    });
  });
});
