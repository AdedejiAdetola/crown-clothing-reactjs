import './MenuContent.scss';
const MenuContent = ({ title }) => {
    return ( 
        <div className='menu-content'>
            <h1>{ title.toUpperCase() }</h1>
            <p>SHOP NOW</p>
        </div>
     );
}
 
export default MenuContent;