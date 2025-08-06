import { readData } from "@/core/http-service/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useQuery } from "@tanstack/react-query";

type GetCommentOptions = {
  params: {
    slug: string;
    page: number;
  };
};

const getComments = ({
  params,
}: GetCommentOptions): Promise<CourseCommentList> => {
  const { slug, page } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
};

export const useCourseComments = ({ params }: GetCommentOptions) => {
  const { data } = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => getComments({ params }),
    staleTime: 1000 * 60 * 60 * 5, // 5 hours
    gcTime: 1000 * 60 * 60 * 6, // 6 hours
  });

  return { data };
};
