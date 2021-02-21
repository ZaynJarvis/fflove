import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom'

function linkResolver(doc) {
  if (doc.type === 'post') return `/posts/${doc.uid}`
  return '/'
}
export const customLink = (type, element, content, children, index) => (
  <Link to={linkResolver(element.data)} key={index}>
    {content}
  </Link>
);

const Text = ({ slice }) => (
  <div className="post-part single container">
    <RichText
      render={slice.primary.text}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    />
  </div>
);

export default Text;
