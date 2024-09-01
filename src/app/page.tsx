import { Search, FileText, BookOpen, Users } from "lucide-react"; // Import Lucide icons
import { data } from "@/data";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const icons: { [key: string]: JSX.Element } = {
  "<FileText />": <FileText />,
  "<BookOpen />": <BookOpen />,
  "<Users />": <Users />,
};

export default function Home() {
  return (
    <main className=" bg-cyan-950 relative min-h-screen flex flex-col ">
      <div className="flex flex-col justify-center items-center py-20">
        <div className=" flex flex-col lg:gap-7 justify-center items-center w-2/3">
          <h1 className="lg:text-6xl font-bold">Jobify</h1>
          <p className="lg:text-3xl font-semibold">
            Discover Your Next dream Opportunity
          </p>
          <p className="lg:text-lg text-center">
            Connect with top companies and discover exciting remote career
            opportunities tailored to your skills and aspirations.
          </p>
          <div className="h-8">
            <button className=" py-1 px-3 bg-[#5046e6] hover:bg-blue-800 transition-all ease-in-out duration-300 hover:px-[14px] hover:py-[6px] hover:text-sm text-xs rounded-2xl">
              Explore Jobs
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          {data.map((card) => (
            <Card
              icon={icons[card.icon]}
              description={card.description}
              title={card.title}
              key={card.id}
            />
          ))}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
