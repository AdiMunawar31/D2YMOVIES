import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';
import { trailer } from '../../assets';
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {
  const location = useLocation();
  const movie = location.movies;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}

// https://vod-progressive.akamaized.net/exp=1633371124~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=b4e1654fca7fee10143b960a7629d0d3ff3a3e39780a884389c307d619954e40/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4
