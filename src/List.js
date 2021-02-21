import React from "react";
import Client from "./prismic/client";
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs'
import FirstParagraph from "./components/FirstPara";
import Prismic from '@prismicio/client'

function App() {
  const [posts, setPostData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'post')
      )
      if (response) {
        setPostData(response.results)
      }
    }
    fetchData()
  }, [])

  function linkResolver(doc) {
    if (doc.type === 'post') return `/posts/${doc.id}`
    return '/'
  }
  return (
    <article>
      <h2 style={{ textAlign: 'center' }}>最新消息</h2>
      {posts ? posts.map(doc => (<div key={doc.id} style={{ borderBottom: 'whitesmoke 1px solid' }}>
        <Link to={linkResolver(doc)}>
          <h4>{RichText.asText(doc.data.title)}</h4>
        </Link>
        <FirstParagraph
          sliceZone={doc.data.body}
          textLimit={300}
        />
      </div>)
      ) : <></>}
    </article>
  );
}

export default App;
