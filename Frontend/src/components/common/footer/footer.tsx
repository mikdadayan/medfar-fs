export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        backgroundColor: "#eee",
        width: "100%",
        padding: "10px",
      }}
    >
      <div className="container text-center">
        <p>&copy; {currentYear} - Medfar Solutions Cliniques</p>
      </div>
    </footer>
  );
}
