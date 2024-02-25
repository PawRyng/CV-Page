import { HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
//elements
import Main from "./main";
import Loading from "./Controllers/loading";
//data
import dataOther from "./Other/translate.json";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState();
  const [gitHub, setGitHub] = useState();
  const [youtube, setYoutube] = useState();
  let link = dataOther.OtherLinks.join(",");
  const [cookies] = useCookies(["dark_mode"]);
  useEffect(() => {
    const youtubeApiLink = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${link}&key=${process.env.REACT_APP_API_GOOGLE_KEY}&fields=items(id,snippet(title,thumbnails,description))`;
    const githubApiLink = "https://api.github.com/users/PawRyng/repos";

    axios
      .get(githubApiLink, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_GITHUB_KEY}`,
        },
      })
      .then((data) => {
        const photoApiLink = `https://picsum.photos/v2/list?page=3&limit=${
          data.data.length +
          dataOther.en.PortfolioContent.search[3].content.length
        }`;
        setGitHub(data.data);
        axios.get(photoApiLink).then((dataPhoto) => {
          setPhotos(dataPhoto.data);
        });
      });
    axios.get(youtubeApiLink).then((dataYt) => setYoutube(dataYt.data.items));

    if (cookies.dark_mode === "true") {
      document.querySelector("body").setAttribute("id", "dark");
    } else {
      document.querySelector("body").setAttribute("id", "");
    }
  }, [cookies.dark_mode, link]);

  return (
    <HashRouter>
      {loading ? (
        <Main
          setloading={setLoading}
          photos={photos}
          git={gitHub}
          youtube={youtube}
        />
      ) : (
        <Loading setloading={setLoading} />
      )}
    </HashRouter>
  );
}

export default App;
