import MenuContent from '../MenuContent/MenuContent';
import './MenuItem.scss';
const MenuItem = ({ title, imageUrl }) => {
    return ( 
        <div className='menu-item'>
            <MenuContent title={ title }/>
        </div>
     );
}
 //contain menu contents
export default MenuItem;