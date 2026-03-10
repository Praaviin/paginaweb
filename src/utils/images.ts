type ImportedImage = string | { src: string };

const imageModules = import.meta.glob("../assets/images/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default"
}) as Record<string, ImportedImage>;

export function resolveImage(path?: string) {
  if (!path) {
    return undefined;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("../assets/")
    ? path.replace("../assets/", "../assets/")
    : `../assets/${path.replace(/^\/+/, "")}`;

  const asset = imageModules[normalizedPath];

  if (!asset) {
    return undefined;
  }

  return typeof asset === "string" ? asset : asset.src;
}
