export const ALLOWED_DOCUMENTS_FILES = [
  "text/plain",
  "application/pdf",
  "application/msword",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const VALID_FILE_TYPES = ".jpg,.png,.jpeg,.pdf,.txt,.doc,.docx,.xls";
export const ERROR_TEXT = "Vyberte 1 soubor typu jpg, png, jpeg, pdf, txt, doc, docx, xls.";

export const replaceImageElementWithLink = (imageUrl: string, fileNameToShow: string) => {
  const imageElement = document.querySelector(`img[src='${imageUrl}']`);
  let anchorElement = document.createElement("a");
  anchorElement.href = imageUrl;
  anchorElement.setAttribute("target", "_blank");
  anchorElement.setAttribute("draggable", "true");
  anchorElement.innerHTML = fileNameToShow;
  anchorElement.classList.add("editor--file");
  imageElement?.replaceWith(anchorElement);
};
