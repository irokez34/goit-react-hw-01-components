import css from './Statistics.css';
import getRandomHexColor  from "../randomColor";
 const Statistics = ({ title, stats }) => {
  const statiscticList = stats.map((stat) => (
    
    <li
      key={stat.id}
      className='item'
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className='label'>{stat.label}</span>
      <span className='percentage'>{stat.percentage}%</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="statList">{statiscticList}</ul>
    </section>
  );
};
export default Statistics