"use client"
import { FileText, BookOpen, Users } from "lucide-react"; // Import Lucide icons
import { data } from "@/data";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const icons: { [key: string]: JSX.Element } = {
  "<FileText />": <FileText  />,
  "<BookOpen />": <BookOpen />,
  "<Users />": <Users />,
};

export default function Home() {
  const router = useRouter()
  const handleOnJobs =()=>{
    router.push('/jobs')
  }
  return (
    <main className=" bg-cyan-950 relative min-h-screen flex flex-col ">
      <div className="flex flex-col justify-center items-center py-20 px-10">
        <div className=" flex flex-col lg:gap-7 justify-center items-center w-2/3 py-7">
          <h1 className="lg:text-7xl md:text-5xl text-xl font-bold">Jobify</h1>
          <p className="lg:text-4xl md:text-3xl text-lg font-semibold">
            Discover Your Next dream Opportunity
          </p>
          <p className="lg:text-lg text-sm text-center">
            Connect with top companies and discover exciting remote career
            opportunities tailored to your skills and aspirations.
          </p>
          <div className="h-8">
            <button className=" hover:bg-[#5046e6] border-[#5046e6] border-[2px] transition-all ease-in-out duration-300 px-4 py-3 hover:text-sm text-xs rounded-3xl hover:rounded-3xl" onClick={handleOnJobs}>
              Explore Jobs
            </button>
          </div>
        </div >
        <div className="grid grid-cols-1 md:grid-cols-3  ">
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
