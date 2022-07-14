export function addContent(param) {
  const content = document.createElement("div");
  content.classList.add("styleContent");
  document.body.append(content);
  content.append(param);
}
