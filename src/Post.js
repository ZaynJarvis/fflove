import React, { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';

import { DefaultLayout, BackButton, SliceZone } from './components';
import NotFound from './NotFound';
import Client from './prismic/client';

import "./styles.scss";

const Post = ({ match }) => {
  const [prismicDoc, setPrismicDoc] = useState(null);
  const [notFound, toggleNotFound] = useState(false);

  const uid = match.params.id;

  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const doc = await Client.getByID(uid);
        if (doc) {
          setPrismicDoc(doc);
        } else {
          console.warn('Blog post document was not found. Make sure it exists in your Prismic repository');
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    }

    fetchPrismicData();
  }, [uid]);

  if (prismicDoc) {
    const title =
      prismicDoc.data.title.length !== 0 ?
        RichText.asText(prismicDoc.data.title) :
        'Untitled';

    return (
      <DefaultLayout wrapperClass="main" seoTitle={title}>
        <div className="outer-container">
          <BackButton />
          <h2>{title}</h2>
        </div>
        <SliceZone sliceZone={prismicDoc.data.body} />
        <footer>Copyright © 2021 FaradayFuture.love. All rights reserved.</footer>
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}

export default Post;