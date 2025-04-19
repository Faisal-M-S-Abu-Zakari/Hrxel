import { Card, CardHeader } from "./ui/card";
import { useSwitch } from "@/context/switchContext";

interface ServiceItem {
  title: string;
  titleAr: string;
  icon?: React.ElementType;
}

interface ServiceCardProps {
  items: ServiceItem[];
}

const ServiceCard = ({ items }: ServiceCardProps) => {
  const { isEnglish } = useSwitch();

  const textStyle = {
    fontFamily: isEnglish ? "var(--font-elegant)" : "var(--font-arabic)",
  };

  return (
    <section
      className="mb-10"
      dir={isEnglish ? "ltr" : "rtl"}
      style={textStyle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {items.map((item, index) => (
          <Card
            key={index}
            className="bg-[#2b3b4b]/80 backdrop-blur-sm border border-gray-600 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.035] transition-all duration-300 ease-in-out"
          >
            <CardHeader className="p-6 flex items-center gap-4 text-white text-lg font-semibold">
              {item.icon && (
                <item.icon className="w-6 h-6 text-[#F39921] shrink-0" />
              )}
              <span className="flex-1 leading-snug">
                {isEnglish ? item.title : item.titleAr}
              </span>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
