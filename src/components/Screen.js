//here we have imported all the reuire components to show in screen according to logic
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';
import Albums from './Albums';
import CoverFlow from './CoverFlow';

const Screen = (props) => {
    return(
        <div style={styles.screen} id='screen-container'>
            {props.activePage==='Home'?<Home activeItem={props.activeItem}/> : null}
            {props.activePage==='Music'?<Music activeItem={props.activeItem}/> : null}
            {props.activePage==='Games'?<Games /> : null}
            {props.activePage==='Settings'?<Settings /> : null}
            {props.activePage==='MyMusic'?<MyMusic audio={props.audio} /> : null}
            {props.activePage==='Artists'?<Artists /> : null}
            {props.activePage==='Albums'?<Albums /> : null}
            {props.activePage==='CoverFlow'?<CoverFlow /> : null}
            
        </div>
    );
}

const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1rem'
    }
}

export default Screen;