export default function getFormattedTags(tags: string[]) {
  return tags.map((tag, i) => {
    return tag.replaceAll("_", " ");
  });
}
