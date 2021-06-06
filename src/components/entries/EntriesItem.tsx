
import patataOscura from '../../assets/img/patata.png'
export const EntriesItem = () => {
  return (
    <li className="entry-item">
      <img className="entry-img" src={patataOscura} alt="entrie minimized pic" />
      <div className="entry-info">
        <p className="entry-info__title">My Day</p>
        <p className="entry-info__description">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="entry-date">
        <p className="entry-date__day">Monday</p>
        <p className="entry-date__nDay">28</p>
      </div>
    </li>
  )
}
