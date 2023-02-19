// we imported ListGroup because it is more flexible and powerful then li tag to show a series of content
import { ListGroup } from 'react-bootstrap';
//this is my home component where we can see different items

const Home = (props) => {
    return(
        <div style={styles.homeScreen} id='home-screen'>
            <div style={styles.menuList} id='menu-list'>
                <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/284/284087.png"></img>
                </div>
                <ListGroup style={{borderRadius:'0'}}>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='CoverFlow'?'active':''}>
                        Cover Flow {props.activeItem==='CoverFlow'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='Music'?'active':''}>
                        Music {props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='Games'?'active':''}>
                        Games {props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={props.activeItem==='Settings'?'active':''}>
                        Settings {props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div style={styles.imageContainer} id='image-container'>
            </div>
        </div>
    );
}

const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1'
    },
    imageContainer : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg1HpIIKSi4jkbJ0AzARAGGS7M0MPsTz_KA&usqp=CAU")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Home;