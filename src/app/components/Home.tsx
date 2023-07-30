import { FC, Fragment, useEffect, useState } from "react";
import { useAppDispatch } from "@/app/hooks/hooks";
import Indicator from "@/app/components/containers/Indicator";
import NotFound from "@/app/components/containers/errors/NotFound";
import { Logo } from "@/svg/Logo";
import { initialState } from "@/app/reducers/postPageReducer";

const Home: FC = (...props) => {
  let dispatch = useAppDispatch();
  let [state, setState] = useState(initialState);
  let { isFetching, content } = state;

  useEffect(() => {
    // let postPage = useAppSelector((state) => state.postPage);
    setTimeout(() => {
      setState({
        isFetching: false,
        error: null,
        content: {
          list: [
            { title: "Под Таганрогом упал беспилотник" },
            { title: "В Чехии заявили об аресте имущества Евтушенкова в Карловых Варах" },
          ],
          totalElements: 2,
        },
      });
    }, 3000);
  });

  let structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://x.dev/",
    name: "X",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://x.dev/search/{search_term}",
      "query-input": "required name=search_term",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@x.dev",
      url: "https://x.dev/",
      contactType: "technical support",
      areaServed: "RU",
      availableLanguage: ["English", "Russian"],
    },
  };

  let renderIndicator = () => (
    <Fragment>
      {isFetching && content.list.length === 0 ? <Indicator /> : null}
      {!isFetching && content.list.length === 0 ? (
        <NotFound message="Публикации отсутствуют" />
      ) : null}
    </Fragment>
  );

  return (
    <Fragment>
      <div className="canopy-home">
        <div className="container">
          {isFetching ? (
            <div className="column p-4 is-centered">
              <Logo className="heart-beat" />
            </div>
          ) : null}
        </div>
      </div>
      <div className="app-container">
        {isFetching ? renderIndicator() : null}
        {!isFetching ? (
          <div className="columns">
            <div className="column content-list">
              {content.list.map((post) => (
                <div>{post.title}</div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Home;
