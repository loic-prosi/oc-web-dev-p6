import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderPage from "../../utils/testsConfig";

describe("Rentals page", () => {
  it("should have a navbar", async () => {
    renderPage("rentals");
    await waitFor(() => {
      const navbar = screen.getByRole("navigation");
      expect(navbar).toBeTruthy();
    });
  });

  it("should have a navbar with 'Accueil' link inactive", async () => {
    renderPage("rentals");
    await waitFor(() => {
      const accueilLink = screen.getByRole("link", {
        name: "Accueil",
        current: false
      });
      expect(accueilLink).toBeTruthy();
    });
  });

  it("should have a navbar with 'A propos' link inactive", async () => {
    renderPage("rentals");
    await waitFor(() => {
      const aboutLink = screen.getByRole("link", {
        name: "A Propos",
        current: false
      });
      expect(aboutLink).toBeTruthy();
    });
  });

  it("should redirect to error page if rental id is unknown", async () => {
    const rentals = [
      {
        id: "wrongId"
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const errorPageTitle = screen.getByText("404");
      expect(errorPageTitle).toBeTruthy();
    });
  });

  it("should have a slideshow with 5 pictures", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        pictures: ["picture1", "picture2", "picture3", "picture4", "picture5"]
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const images = screen.getAllByRole("img", { name: "title1" });
      expect(images.length).toBe(5);
    });
  });

  it("should have a slideshow with 5 pictures and a navigation", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        pictures: ["picture1", "picture2", "picture3", "picture4", "picture5"]
      }
    ];
    renderPage("rentals", rentals);

    await waitFor(() => {
      const prevImageButton = screen.getByRole("img", { name: "Précédent" });
      const nextImageButton = screen.getByRole("img", { name: "Suivant" });
      const pagination = screen.getByText("1/5");
      expect(prevImageButton && nextImageButton && pagination).toBeTruthy();
    });
  });

  it("should have a slideshow with no navigation when there is only 1 picture", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        pictures: ["picture1"]
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      screen.getByRole("navigation");
      const prevImageButton = screen.queryByRole("img", { name: "Précédent" });
      const nextImageButton = screen.queryByRole("img", { name: "Suivant" });
      expect(prevImageButton && nextImageButton).toBeNull();
    });
  });

  it("should have not a slideshow when there is 0 pictures", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        pictures: []
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      screen.getByRole("navigation");
      const slideshow = screen.queryByRole("banner");
      expect(slideshow).toBeNull();
    });
  });

  it("should have a slideshow which can loop frontward", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        pictures: ["picture1", "picture2"]
      }
    ];
    const user = userEvent.setup();
    renderPage("rentals", rentals);
    let nextImageButton;
    await waitFor(() => {
      nextImageButton = screen.getByRole("img", { name: "Suivant" });
    });
    user.click(nextImageButton);
    await waitFor(() => {
      screen.getByText("2/2");
    });
    user.click(nextImageButton);
    await waitFor(() => {
      const pagination = screen.getByText("1/2");
      expect(pagination).toBeTruthy();
    });
  });

  it("should have a slideshow which can loop backward", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1",
        pictures: ["picture1", "picture2", "picture3"]
      }
    ];
    const user = userEvent.setup();
    renderPage("rentals", rentals);
    let prevImageButton;
    await waitFor(() => {
      prevImageButton = screen.getByRole("img", { name: "Précédent" });
    });
    user.click(prevImageButton);
    await waitFor(() => {
      const pagination = screen.getByText("3/3");
      expect(pagination).toBeTruthy();
    });
  });

  it("should have a title", async () => {
    const rentals = [
      {
        id: "1",
        title: "title1"
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const title = screen.getByText("title1");
      expect(title).toBeTruthy();
    });
  });

  it("should have a location", async () => {
    const rentals = [
      {
        id: "1",
        location: "location1"
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const location = screen.getByText("location1");
      expect(location).toBeTruthy();
    });
  });

  it("should have 2 tags", async () => {
    const rentals = [
      {
        id: "1",
        tags: ["tag1", "tag2"]
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const tag1 = screen.getByText("tag1");
      const tag2 = screen.getByText("tag2");
      expect(tag1 && tag2).toBeTruthy();
    });
  });

  it("should have a profile name", async () => {
    const rentals = [
      {
        id: "1",
        host: {
          name: "host1"
        }
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const profileName = screen.getByText("host1");
      expect(profileName).toBeTruthy();
    });
  });

  it("should have a profile picture", async () => {
    const rentals = [
      {
        id: "1",
        host: {
          name: "host1",
          picture: "hostPicture1"
        }
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const profilePicture = screen.getByRole("img", { name: "host1" });
      expect(profilePicture).toBeTruthy();
    });
  });

  it("should have a 3 active stars in a 3/5 rating", async () => {
    const rentals = [
      {
        id: "1",
        rating: "3"
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const activeStars = screen.getAllByRole("img", {
        name: "Active star"
      });
      expect(activeStars.length).toBe(3);
    });
  });

  it("should have a 2 inactive stars in a 3/5 rating", async () => {
    const rentals = [
      {
        id: "1",
        rating: "3"
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const inactiveStars = screen.getAllByRole("img", {
        name: "Inactive star"
      });
      expect(inactiveStars.length).toBe(2);
    });
  });

  it("should have a description collapse", async () => {
    const rentals = [
      {
        id: "1",
        description: "description1"
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const description = screen.getByText("description1");
      expect(description).toBeTruthy();
    });
  });

  it("should have an equipments collapse", async () => {
    const rentals = [
      {
        id: "1",
        equipments: ["equipment1", "equipment2", "equipment3"]
      }
    ];
    renderPage("rentals", rentals);
    await waitFor(() => {
      const equipment1 = screen.getByText("equipment1", { exact: false });
      const equipment2 = screen.getByText("equipment2", { exact: false });
      const equipment3 = screen.getByText("equipment3", { exact: false });
      expect(equipment1 && equipment2 && equipment3).toBeTruthy();
    });
  });

  it("should have a footer", async () => {
    renderPage("rentals");
    await waitFor(() => {
      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeTruthy();
    });
  });
});
