import { render, screen } from "@testing-library/react";
import InfoSection from "../info-section";

it("renders the heading and plays the video", () => {
  const {container} = render(<InfoSection />);

  const heading = screen.getByRole("heading", { name: /každý rok/i });
  expect(heading).toBeInTheDocument();

  const video = container.getElementsByClassName('info-section__video--content')
  expect(video[0]).toBeInTheDocument()
  
});
