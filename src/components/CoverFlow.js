
export default function CoverFlow() {
  return (
    <div style={styles.coverflow} className="coverflow">
      <h2>Coverflow</h2>
    </div>
  );
}

const styles = {
    coverflow:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 100
    }
}