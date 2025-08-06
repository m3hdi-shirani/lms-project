"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment";

const CourseComment = () => {
  const { slug } = useParams();
  const { data: commants } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  return (
    <>
      {commants?.data.map((comment) => (
        <Comment key={`comment-${comment.id}`} {...comment} variant="info" />
      ))}
    </>
  );
};

export default CourseComment;
