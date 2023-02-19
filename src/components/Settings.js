
export default function Settings() {
  return (
    <div style={styles.artist} className="games-section">
      <img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/126/126472.png" alt="" />
      <h2>Settings</h2>
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