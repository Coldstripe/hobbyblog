import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import Video from "@/app/components/Video";
import MDXImage from "@/app/components/MDXImage";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | null> {
  const res = await fetch(
    `https://raw.githubusercontent.com/Coldstripe/blogposts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return null;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return null;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    author: string;
    tags: string[];
    cardImg: string;
    description: string;
    isPinned: boolean;
    isHidden: boolean;
  }>({
    source: rawMDX,
    components: {
      Video,
      MDXImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      author: frontmatter.author,
      tags: frontmatter.tags,
      cardImg: frontmatter.cardImg,
      description: frontmatter.description,
      isPinned: frontmatter.isPinned,
      isHidden: frontmatter.isHidden,
    },
    content,
  };

  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | null> {
  const res = await fetch(
    "https://api.github.com/repos/Coldstripe/blogposts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return null;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post && !post.meta.isHidden) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => {
    var x = a.date > b.date;
    return !x ? +b.isPinned - +a.isPinned : +x;
  });
}
