import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { banner, l } from '../../assets';
import './featured.scss';
import axios from 'axios';

export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`movies/random?type=${type}`, {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTlhOTkxODYxZTMxYjllNjc2ZDU0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzMyMDU3NiwiZXhwIjoxNjMzNzUyNTc2fQ.ezOMV5IS0l9ZgCm98y3ttSiVa3rvsKjwC_BmzozZ6YU',
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  // console.log(content);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="banner" />
      <div className="info">
        <img src={l} alt="logo film" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
