import moment from 'moment';
import patataOscura from '../../assets/img/patata.png'
export const EntriesItem = ({title, description, date, id, image}: {title:string, description:string, date:number, id:string, image: string}) => {

  const noteDate = moment(date);


  return (
    <li className="entry-item" id={id}>
     <div className="entry-img" style={{ backgroundPosition : 'center', backgroundSize: 'cover', backgroundImage: `url(${image ? image : patataOscura})`}} />
      <div className="entry-info">
        <p className="entry-info__title">{title}</p>
        <p className="entry-info__description">{description.slice(0,17) + '...'}</p>
      </div>
      <div className="entry-date">
        <p className="entry-date__day">{noteDate.format('dddd')}</p>
        <p className="entry-date__nDay">{noteDate.format('Do')}</p>
      </div>
    </li>
  )
}
