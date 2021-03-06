import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.scss';
import List from '../../components/list/List';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(`lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTlhOTkxODYxZTMxYjllNjc2ZDU0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzMyMDU3NiwiZXhwIjoxNjMzNzUyNTc2fQ.ezOMV5IS0l9ZgCm98y3ttSiVa3rvsKjwC_BmzozZ6YU',
          },
        });
        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />

      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
    </div>
  );
};

export default Home;
