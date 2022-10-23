import { render, screen } from "@testing-library/react";
import NewsSection from "../news-section";
import aktuality from "../../../../../public/data/aktuality.json";

it("displays the heading and the previous button", () => {
  const { container } = render(<NewsSection aktuality={aktuality} />);

  const mainHeading = screen.getByRole("heading", { name: /aktuality/i });
  expect(mainHeading).toBeInTheDocument();

  const aktualitaHeading = screen.getByRole("heading", { name: /oprava kol zdarma/i });
  expect(aktualitaHeading).toBeInTheDocument()

  const buttonPrev = container.getElementsByClassName("alice-carousel__prev-btn")[0];
  expect(buttonPrev).toBeInTheDocument();

  const mock = jest.fn()
});


