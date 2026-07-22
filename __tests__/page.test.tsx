import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("one-page portfolio renders all sections in order", () => {
  const { container } = render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: /ammar yasser/i })).toBeInTheDocument();
  expect(screen.getByText(/featured project/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^projects$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^skills$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^experience$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /get in touch/i })).toBeInTheDocument();

  // ">…</h2>" markers match the section headings only, not the nav links.
  const html = container.innerHTML;
  const order = ["Featured project", ">Projects</h2>", ">Skills</h2>", ">Experience</h2>", "Get in touch"].map((m) => html.indexOf(m));
  expect([...order].sort((a, b) => a - b)).toEqual(order);
  expect(Math.min(...order)).toBeGreaterThan(-1);
});

test("featured Manafith section shows store badges", () => {
  render(<Page />);
  expect(screen.getAllByText("Manafith").length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByRole("link", { name: /google play/i }).length).toBeGreaterThanOrEqual(1);
});

test("every nav anchor has a matching section id", () => {
  const { container } = render(<Page />);
  const navLinks = Array.from(container.querySelectorAll("header nav a")).map((a) => a.getAttribute("href")!);
  for (const href of navLinks.filter((h) => h.startsWith("#"))) {
    expect(container.querySelector(href), href).not.toBeNull();
  }
});
