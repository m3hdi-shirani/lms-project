import { BlogPostSummery } from "@/types/blog-post-summery.interface";
import BlogPostCard from "./BlogPostCard";

type BlogPostCardListProps = {
  posts: BlogPostSummery[];
};

const blogPostCardList: React.FC<BlogPostCardListProps> = ({
  posts,
}: BlogPostCardListProps) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {posts?.map((post) => (
        <BlogPostCard key={`blog-post-${post.slug}`} {...post} />
      ))}
    </div>
  );
};

export default blogPostCardList;
