import ReactDOM from "react-dom"
export default function getFormattedTags(tags: string[], postTitle: string) {
  return tags.map((tag, i) => {
    if (typeof window !== 'undefined') {
      ReactDOM.render(<main/>, document.getElementById("root"));
      var tagElment = document.getElementById(`blogtag${i}-${postTitle}`);
      const emphasizedTags = ["Showcase"];

      if (emphasizedTags.includes(tag)) {
        let classList = tagElment?.classList;
        classList?.toggle("bg-yellow-600");
      }

      return tag.replaceAll("_", " ");
    } else return tag.replaceAll("_", " ");
  });
}
