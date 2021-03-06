/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * プロフィールカードコンポーネント
 */
const Profile = () => {
  const data = useStaticQuery<GatsbyTypes.ProfileQuery>(graphql`
    query Profile {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 124, height: 124, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            facebook
            github
          }
        }
      }
    }
  `);

  const author = data.site?.siteMetadata?.author;
  const social = data.site?.siteMetadata?.social;
  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <div className="profile">
      <div className="profile-background-pattern">
        {avatar && (
          <img
            src="/image/v1588754816/beluga_jwpply.jpg"
            alt={author?.name || ``}
            className="avator"
          />
        )}
      </div>

      <h1 className="name">FooQoo</h1>
      <div className="job">Web Engineer</div>
      <div className="location">
        <svg id="icon-location" viewBox="0 0 1024 1024" width="22" height="22">
          <path d="M854.6 289.1c-18.8-43.4-45.7-82.3-79.9-115.7-34.2-33.4-73.9-59.5-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8-34.2 33.4-61.1 72.4-79.9 115.7-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153 6.9 4.1 14.7 6.1 22.4 6.1 7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1z" />
          <path d="M512 263c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 539.3 541.9 551 512 551c-29.9 0-58-11.7-79.2-32.8C411.7 497 400 468.9 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z" />
        </svg>
        <div className="tokyo-japan">Tokyo, Japan</div>
      </div>
      <div className="sns">
        <a
          href={'https://twitter.com/' + social?.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-twitter"
            viewBox="0 0 1024 1024"
            width="28"
            height="28"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m215.3 337.7c0.3 4.7 0.3 9.6 0.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2-50.8-10.3-88.9-55-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1-30.9-20.6-49.5-55.3-49.5-92.4 0-20.7 5.4-39.6 15.1-56 54.7 67.4 136.9 111.4 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
          </svg>
        </a>
        <a
          href={'https://www.facebook.com/' + social?.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-facebook"
            viewBox="0 0 1024 1024"
            width="28"
            height="28"
          >
            <path d="M514.45351025 57.52909227c-248.630625 0-449.8921875 201.2671875-449.8921875 449.8921875s201.2671875 449.8921875 449.8921875 449.8921875c248.630625 0 449.8921875-201.2671875 449.8921875-449.8921875 0-248.630625-201.2671875-449.8921875-449.8921875-449.8921875zM635.18663525 505.05971727h-78.10500001v281.77125h-116.02499999v-281.77125h-59.2040625v-97.065h59.2040625v-59.2040625c0-78.10500001 33.1528125-125.4759375 125.4759375-125.4759375h78.10499999v97.065h-47.36718749c-35.499375 0-37.865625 14.22-37.865625 37.865625v47.3671875h87.58687499l-11.833125 99.4509375z" />
          </svg>
        </a>
        <a
          href={'https://github.com/' + social?.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-github"
            viewBox="0 0 1024 1024"
            width="28"
            height="28"
          >
            <path d="M511.6 65.63333334C264.3 65.53333334 64 265.73333334 64 512.83333334 64 708.23333334 189.3 874.33333334 363.8 935.33333334c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 715.33333334 171.5 707.33333334 184.5 692.33333334c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Profile;
