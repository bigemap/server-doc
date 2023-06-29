const params = new URLSearchParams(window.location.search);
const version = params.get("version") || "latest";
const client = params.get("client") || "bigemap";

export const url = [
  "./docs",
  version === "latest" ? "" : `${version}`,
  client === "bigemap" ? "api.json" : `${client}-api.json`,
]
  .filter((item) => !!item)
  .join("/");
