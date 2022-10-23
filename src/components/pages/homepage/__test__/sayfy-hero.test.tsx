import { render, screen } from "@testing-library/react";
import SayfyHero from "../sayfy-hero";

it("has correct heading and image", () => {
  render(<SayfyHero />);

  const heading = screen.getByRole("heading", { name: /CYKLISTICKÝ ZÁVOD SAYFYHO MEMORIAL/i });
  expect(heading).toBeInTheDocument();

  const image = screen.getByRole("img", { name: /david sayfy seifrt/i });
  expect(image).toBeInTheDocument();
});
