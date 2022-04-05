import React from 'react';
import styles from './Avatar.module.css';

// const monStyle = {
//     backgroundColor: 'red'
// };
// const badgeColor = "#ffb703";
// const imgAvatar = './images/chat.jpg';

const circleId = 'circle'+ Date.now();

const Avatar = ({imgAvatar, badgeColor}) => {
    return (
        <>
            <div className={styles.avatar}>
            <svg role="none" style={{height:"120pxn", width:"120px"}} >
                <mask id={circleId}>
                <circle cx="60" cy="60" fill="white" r="60"></circle>
                { badgeColor && <circle cx="102" cy="102" fill="black" r="15"></circle>}
                </mask>
                <g mask={"url(#"+circleId+")"}>
                <image
                    x='0'
                    y='0'
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid slice"
                    xlinkHref = {imgAvatar} 
                    style={{height: "120px" , width: "120px"}}/> 
                <circle className={styles.border} cx="60" cy="60" r="60" ></circle>
                </g>
            </svg>
            {badgeColor && <div className={styles.badge} style={{backgroundColor:badgeColor}}></div>}            
            </div>
        </>
    
    
    );
}
 
export default Avatar;