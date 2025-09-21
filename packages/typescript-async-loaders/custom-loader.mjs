export async function load(url, context, defaultLoad) {
  if (url.endsWith('.ts')) {
    await new Promise(resolve => setTimeout(resolve, 1));
  }
  return defaultLoad(url, context, defaultLoad);
}
