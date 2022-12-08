import LanguageList from "~/components/languageList";
import Login from "~/components/login";
import OverView from "~/components/overview";
import RepoList from "~/components/repo/list";
import SearchBar from "~/components/searchBar";
import SideBar from "~/components/sideBar";
import TagList from "~/components/tagList";
import UserInfo from "~/components/userInfo";
import useUser from "~/hooks/useUser";
import "~/styles/app.css";

const App = () => {
  const { user } = useUser();

  console.log(user);

  if (!user) return <Login />;

  return (
    <main className="container  mx-auto h-screen relative flex py-10">
      <SideBar>
        <UserInfo></UserInfo>
        <OverView />
        <LanguageList></LanguageList>
      </SideBar>
      <section className="flex-1 flex flex-col px-4">
        <SearchBar></SearchBar>
        <RepoList></RepoList>
      </section>
      <SideBar>
        <TagList></TagList>
      </SideBar>
    </main>
  );
};

export default App;
