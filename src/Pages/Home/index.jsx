import Featured from '../../Components/Featured';
import Navbar from '../../Components/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Featured type="movie" />
    </div>
  );
};

export default Home;
