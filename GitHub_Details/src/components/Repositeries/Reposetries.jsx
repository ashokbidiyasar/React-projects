import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./ListItem/Item";
import Buttons from "./Buttons/Buttons";
import { Repos } from "../../store/UserSlice";

const Reposetries = () => {
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state.user.UserData);
  const repos = useSelector((state) => state.user.repo);
  const [page, setpage] = useState(1);

  const Max_page = Math.floor(UserData.public_repos / 30) + 1;
  const base_url = "https://api.github.com/users/";

  const onSubmit = async (pageNumber) => {
    try {
      const res = await fetch(`${base_url}${UserData.login}/repos?per_page=30&page=${pageNumber}`);
      if (!res.ok) {
        console.error("Error fetching repos");
        return;
      }
      dispatch(Repos(await res.json()));
      setpage(pageNumber);
    } catch (err) {
      console.error("Error in repositories", err);
    }
  };

  return (
    <div className="container pt-22 text-black text-md flex justify-center h-screen">
      <div className="h-[95%] w-[95%] border shadow-lg bg-gray-100 rounded-lg flex flex-col">
        <div className="flex justify-center font-semibold py-2">
          <p className="text-indigo-600 text-lg">Number of Repositories: {UserData?.public_repos || 0}</p>
        </div>

        <div className="flex flex-col flex-1 px-4 pb-3 overflow-hidden">
          <div className="flex-1 overflow-y-auto font-semibold pr-1">
            <ul className="space-y-2">
              {repos && repos.length > 0 ? (
                repos.map((repo, index) => (
                  <li key={repo.id} className="bg-gray-300 p-2 rounded">
                    <Item
                      number={(page - 1) * 30 + index + 1}
                      name={repo.name}
                      language={repo.language}
                      url={repo.html_url}
                    />
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-500">No repositories found.</p>
              )}
            </ul>
          </div>

          <div className="mt-3">
            <Buttons current_page={page} Max_page={Max_page} onSubmit={onSubmit} setPage={setpage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reposetries;
