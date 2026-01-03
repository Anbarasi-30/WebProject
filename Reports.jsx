export default function Reports({ students, attendance }) {
  const totalStudents = students.length;

  const presentCount = students.filter(
    (s) => attendance[s.regNo] === "Present"
  ).length;

  const absentCount = students.filter(
    (s) => attendance[s.regNo] === "Absent"
  ).length;

  return (
    <div>
      <h2 className="mb-4">Attendance Report</h2>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Total Students</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{totalStudents}</td>
            <td className="text-success fw-bold">{presentCount}</td>
            <td className="text-danger fw-bold">{absentCount}</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-4">Student-wise Report</h4>

      <table className="table table-striped table-bordered text-center">
        <thead className="table-secondary">
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4">No students available</td>
            </tr>
          ) : (
            students.map((s, i) => (
              <tr key={i}>
                <td>{s.regNo}</td>
                <td>{s.name}</td>
                <td>{s.dept}</td>
                <td
                  className={
                    attendance[s.regNo] === "Present"
                      ? "text-success fw-bold"
                      : attendance[s.regNo] === "Absent"
                      ? "text-danger fw-bold"
                      : ""
                  }
                >
                  {attendance[s.regNo] || "Not Marked"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
