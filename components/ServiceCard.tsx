import { CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ServiceCard = ({
  title,
  desc,
  items,
  isEnglish,
}: {
  title: string;
  desc: string;
  items: {
    title: string;
    titleAr: string;
    desc: string;
    descAr: string;
  }[];
  isEnglish: boolean;
}) => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <h4 className="flex items-center font-semibold gap-2 text-base">
              <CheckCircle2 className="text-primary w-5 h-5" />
              {isEnglish ? item.title : item.titleAr}
            </h4>
            <p className="text-sm text-muted-foreground">
              {isEnglish ? item.desc : item.descAr}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
export default ServiceCard;
