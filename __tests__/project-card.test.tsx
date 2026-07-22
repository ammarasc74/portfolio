import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

const base: Project = {
  slug: "x",
  name: "TestApp",
  tagline: "A test app",
  contribution: "Built the whole thing including the test suite",
  tech: ["React Native", "TypeScript"],
  links: [{ store: "googleplay", url: "https://play.google.com/store/apps/details?id=x" }],
  screenshots: [],
};

test("renders name, tagline, contribution, tech chips and link", () => {
  render(<ProjectCard project={base} />);
  expect(screen.getByText("TestApp")).toBeInTheDocument();
  expect(screen.getByText("A test app")).toBeInTheDocument();
  expect(screen.getByText(/Built the whole thing/)).toBeInTheDocument();
  expect(screen.getByText("React Native")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /google play/i })).toHaveAttribute(
    "href",
    "https://play.google.com/store/apps/details?id=x"
  );
});

test("renders screenshot image with alt text when present", () => {
  render(<ProjectCard project={{ ...base, screenshots: ["/screenshots/x/shot-1.jpg"] }} />);
  const img = screen.getByRole("img", { name: "TestApp screenshot" });
  expect(img).toBeInTheDocument();
});

test("renders no links section and no image when project has none", () => {
  render(<ProjectCard project={{ ...base, links: [] }} />);
  expect(screen.queryByRole("link")).toBeNull();
  expect(screen.queryByRole("img")).toBeNull();
});
