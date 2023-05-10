import Seo from "@/components/seo";
import HomeTitle from "@/components/homeTitle";
import HomeProfile from "@/components/homeProfile";
import HomeStacks from "@/components/homeStacks";
import HomeProjects from "@/components/homeProjects";
import HomeCareers from "@/components/homeCareers";

export default function Home() {
  return (
    <div>
      <Seo subtitle="Home"/>
      <HomeTitle />
      <HomeProfile />
      <HomeStacks />
      <HomeProjects />
      <HomeCareers />
    </div>
  );
}
