import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");

  return fs.readdirSync(blogDir).filter(fileName => {
    if( fileName.endsWith(".md") ) {
      const filePath = path.join(process.cwd(), '/app/blog', fileName);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const matterdata = matter(fileContents);
    
      return matterdata;
    }
  });
}

