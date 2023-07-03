const params = new URLSearchParams(window.location.search);
const version = params.get("version") || "latest";
// const client = params.get("client") || "bigemap";

export const url = [
  ".",
  version === "latest" ? "api.json" : `${version}-api.json`,
]
  .filter((item) => !!item)
  .join("/");
