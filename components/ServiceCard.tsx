import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useSwitch } from "@/context/switchContext";

const ServiceCard = ({
  title,
  desc,
  items,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon?: React.ElementType;
  items: {
    title: string;
    titleAr: string;
    desc: string;
    descAr: string;
    icon?: React.ElementType;
  }[];
}) => {
  const { isEnglish } = useSwitch();
  const textStyle = isEnglish
    ? { fontFamily: "var(--font-elegant)" }
    : { fontFamily: "var(--font-arabic)" };
  return (
    <Card
      className={`bg-transparent border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300  `}
      style={textStyle}
      dir={isEnglish ? "ltr" : "rtl"}
    >
      <CardHeader className="p-6">
        <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-white" />}
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400 text-lg mt-2">
          {desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="flex items-center font-semibold gap-3 text-white text-lg">
              {item.icon && <item.icon className="w-5 h-5 text-white" />}
              {isEnglish ? item.title : item.titleAr}
            </h4>
            <p className="text-sm text-gray-300">
              {isEnglish ? item.desc : item.descAr}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
