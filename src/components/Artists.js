import React from "react";
/* Artists component represents artists page */
export default function Artists() {
  return (
    <div style={styles.artist} className="games-section">
      <img style={styles.image}
        src="https://cdn-icons-png.flaticon.com/512/3083/3083417.png"
        alt=""
      />
      <h2>Artists</h2>
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