import React from 'react';
import { Link } from 'gatsby';

const BlogListItem: React.FC<{
  link: string;
  title: string;
  date: string;
  innerHtml: string;
}> = ({ link, title, date, innerHtml }) => {
  const slug = link;
  return (
    <li key={slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="header">
          <h2>
            <Link to={link} itemProp="url">
              <span itemProp="headline" style={{ color: '#111111' }}>
                {title}
              </span>
            </Link>
          </h2>
          <small>{date}</small>
        </div>
        <section style={{ paddingRight: '10%' }}>
          <p
            dangerouslySetInnerHTML={{
              __html: innerHtml,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  );
};

export default BlogListItem;
