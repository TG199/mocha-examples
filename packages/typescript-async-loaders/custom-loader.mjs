export async function load(url, context, defaultLoad) {
  if (url.endsWith(".ts")) {
    console.log("Loaded with custom loader");
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
  return defaultLoad(url, context, defaultLoad);
}
