import { projects, featured } from "@/data/projects";
import { profile } from "@/data/profile";

test("exactly one featured project, and it is Manafith with screenshots", () => {
  expect(featured.name).toBe("Manafith");
  expect(featured.screenshots.length).toBeGreaterThanOrEqual(2);
  expect(projects.filter((p) => p.featured)).toHaveLength(1);
});

test("every project states a personal contribution, not just an app description", () => {
  for (const p of projects) {
    expect(p.tagline.length, p.name).toBeGreaterThan(10);
    expect(p.contribution.length, p.name).toBeGreaterThan(20);
    expect(p.tech.length, p.name).toBeGreaterThanOrEqual(2);
    expect(p.tech.length, p.name).toBeLessThanOrEqual(6);
    expect(p.contribution, p.name).toMatch(/^(Built|Implemented|Maintained|Led|Shipped)/);
  }
});

test("slugs are unique", () => {
  const slugs = projects.map((p) => p.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
});

test("all links are https and non-empty", () => {
  for (const p of projects) {
    for (const l of p.links) {
      expect(l.url, `${p.name} ${l.store}`).toMatch(/^https:\/\/.+/);
    }
  }
});

test("profile has contact links", () => {
  expect(profile.email).toContain("@");
  expect(profile.github).toMatch(/^https:\/\/github\.com\//);
  expect(profile.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
});
