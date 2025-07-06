import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Item from "./ListItem/Item";
import Buttons from './Buttons/Buttons'
import { Repos } from "../../store/UserSlice";
const Reposetries = () => {
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state.user.UserData);
  let repos = useSelector((state) => state.user.repo);
  const [page, setpage] = useState(1);
  const Max_page = Math.floor(UserData.public_repos / 30)+1;
  const base_url = "https://api.github.com/users/";

  const onSubmit = async (pageNumber) => {
    try {
      const res = await fetch(`${base_url}${UserData.login}/repos?per_page=30&page=${pageNumber}`);
      if (!res.ok) return console.error("Error fetching repos");

      const newrepos = await res.json();

      dispatch(Repos(newrepos)); // ← just these 30
      setpage(pageNumber);
    } catch (err) {
      console.error("Error in repositories", err);
    }
  };
  

  return (
    <div className="container pt-24 text-black text-lg flex justify-center  h-screen">
      <div className="h-[95%] w-[95%] border shadow-lg bg-gray-100 rounded-lg space-y-2.5">
        <div className="flex justify-center font-semibold py-3">
          <p className="text-indigo-600 text-xl">Number of Repositories: {UserData?.public_repos || 0}</p>
        </div>

        <div className="flex flex-col font-semibold overflow-y-auto max-h-[85%] px-4">
          <ul className="space-y-2">
            {repos && repos.length > 0 ? (
              repos.map((repo,index) => (
                <li key={repo.id} className="bg-gray-300 p-2 rounded">
                  <Item number={(page - 1) * 30 + index + 1}  name={repo.name} language={repo.language} url={repo.html_url} />
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No repositories found.</p>
            )}
          </ul>
        </div>
        <Buttons current_page={page} Max_page={Max_page} onSubmit={onSubmit} setPage={setpage} />
      </div>
    </div>
  );
};

export default Reposetries;
