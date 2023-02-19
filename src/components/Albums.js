import React from "react";
//  Albums component 
export default function Albums() {
  return (
    <div style={styles.artist} className="games-section">
      <img style={styles.image}
        src="https://cdn-icons-png.flaticon.com/512/26/26805.png"
        alt=""
      />
      <h2>Albums</h2>
    </div>
  );
}

const styles = {
    artist:{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        marginTop: 60
    },
    image:{
        width: 80,
        height: 80
    }
}
