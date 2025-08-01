import Image from "next/image";
import { featureProps } from "./feature.types";

const Feature: React.FC<featureProps> = ({
  feature: { title, icon, description },
}: featureProps) => {
  return (
    <article className="flex-1 flex flex-col items-center lg:items-start gap-4">
      <Image src={icon} width={52} height={52} alt="" />
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="max-w-md text-lg text-center lg:text-right">
        {description}
      </p>
    </article>
  );
};

export default Feature;
