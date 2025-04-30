import { createCookieSessionStorage, redirect } from "@remix-run/node";
import type { Build } from "~/data/components";
import { createEmptyBuild } from "./build";

// Create a session storage that uses cookies
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "pc_builder_session",
    secrets: ["s3cr3t"], // In production, use environment variables
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
});

// Get the user session
async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

// Get the current build from the session
export async function getCurrentBuild(request: Request): Promise<Build | null> {
  const session = await getSession(request);
  const buildJson = session.get("currentBuild");
  
  if (!buildJson) {
    return null;
  }
  
  return JSON.parse(buildJson);
}

// Save the current build to the session
export async function saveCurrentBuild(request: Request, build: Build): Promise<string> {
  const session = await getSession(request);
  session.set("currentBuild", JSON.stringify(build));
  
  return sessionStorage.commitSession(session);
}

// Clear the current build from the session
export async function clearCurrentBuild(request: Request): Promise<string> {
  const session = await getSession(request);
  session.unset("currentBuild");
  
  return sessionStorage.commitSession(session);
}

// Initialize a new build if one doesn't exist
export async function ensureBuild(request: Request): Promise<{ build: Build; cookie?: string }> {
  const currentBuild = await getCurrentBuild(request);
  
  if (currentBuild) {
    return { build: currentBuild };
  }
  
  const newBuild = createEmptyBuild();
  const cookie = await saveCurrentBuild(request, newBuild);
  
  return { build: newBuild, cookie };
}

// Save a build to the user's saved builds
export async function saveBuild(request: Request, build: Build): Promise<string> {
  const session = await getSession(request);
  const savedBuildsJson = session.get("savedBuilds");
  let savedBuilds: Build[] = [];
  
  if (savedBuildsJson) {
    savedBuilds = JSON.parse(savedBuildsJson);
  }
  
  // Check if build with same ID already exists
  const existingIndex = savedBuilds.findIndex(b => b.id === build.id);
  if (existingIndex >= 0) {
    savedBuilds[existingIndex] = build;
  } else {
    savedBuilds.push(build);
  }
  
  session.set("savedBuilds", JSON.stringify(savedBuilds));
  
  return sessionStorage.commitSession(session);
}

// Get all saved builds
export async function getSavedBuilds(request: Request): Promise<Build[]> {
  const session = await getSession(request);
  const savedBuildsJson = session.get("savedBuilds");
  
  if (!savedBuildsJson) {
    return [];
  }
  
  return JSON.parse(savedBuildsJson);
}

// Load a saved build as the current build
export async function loadSavedBuild(request: Request, buildId: string): Promise<string | null> {
  const savedBuilds = await getSavedBuilds(request);
  const build = savedBuilds.find(b => b.id === buildId);
  
  if (!build) {
    return null;
  }
  
  return saveCurrentBuild(request, build);
}

// Delete a saved build
export async function deleteSavedBuild(request: Request, buildId: string): Promise<string> {
  const session = await getSession(request);
  const savedBuildsJson = session.get("savedBuilds");
  
  if (!savedBuildsJson) {
    return sessionStorage.commitSession(session);
  }
  
  const savedBuilds: Build[] = JSON.parse(savedBuildsJson);
  const updatedBuilds = savedBuilds.filter(b => b.id !== buildId);
  
  session.set("savedBuilds", JSON.stringify(updatedBuilds));
  
  return sessionStorage.commitSession(session);
}
