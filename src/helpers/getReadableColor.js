import { getContrastRatio } from "@mui/material/styles";

export function getReadableColor(bg) {
  return getContrastRatio(bg, "#000") >= 4.5 ? "#000" : "#fff";
}
