const Dashboard = () => {

  // Dummy data (later API se aayega)
  const stats = [
    { title: "Total Users", value: 124 },
    { title: "Total Blogs", value: 36 },
    { title: "Certificates", value: 8 },
    { title: "Messages", value: 19 },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

      {/* STAT CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {stats.map((item, index) => (
          <div key={index} style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}>
            <h4 style={{ color: "#555" }}>{item.title}</h4>
            <h2 style={{ marginTop: "10px" }}>{item.value}</h2>
          </div>
        ))}
      </div>

      {/* RECENT SECTION */}
      <div style={{ marginTop: "40px" }}>
        <h3>Recent Blogs</h3>

        <table style={{ width: "100%", marginTop: "15px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>Title</th>
              <th style={th}>Category</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>How AI is Changing Tech</td>
              <td style={td}>Technology</td>
              <td style={td}>Published</td>
            </tr>
            <tr>
              <td style={td}>React Admin Panel</td>
              <td style={td}>Development</td>
              <td style={td}>Draft</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

const th = {
  borderBottom: "1px solid #ddd",
  textAlign: "left",
  padding: "10px"
};

const td = {
  borderBottom: "1px solid #eee",
  padding: "10px"
};

export default Dashboard;