import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';
import { trailer } from '../../assets';

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src={trailer} />
    </div>
  );
}
