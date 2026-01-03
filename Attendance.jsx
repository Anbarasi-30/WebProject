export default function Attendance({ students, attendance, setAttendance }) {
  const markAttendance = (regNo, status) => {
    setAttendance({ ...attendance, [regNo]: status });
  };

  return (
    <>
      <h2>Attendance</h2>

      {students.length === 0 ? (
        <p className="text-danger">No students available.</p>
      ) : (
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Reg No</th>
              <th>Student Name</th>
              <th>Department</th>
              <th>PR</th>
              <th>AB</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td>{s.regNo}</td>
                <td>{s.name}</td>
                <td>{s.dept}</td>

                <td>
                  <input
                    type="radio"
                    name={s.regNo}
                    checked={attendance[s.regNo] === "Present"}
                    onChange={() => markAttendance(s.regNo, "Present")}
                  />
                </td>

                <td>
                  <input
                    type="radio"
                    name={s.regNo}
                    checked={attendance[s.regNo] === "Absent"}
                    onChange={() => markAttendance(s.regNo, "Absent")}
                  />
                </td>

                <td
                  className={
                    attendance[s.regNo] === "Present"
                      ? "text-success fw-bold"
                      : attendance[s.regNo] === "Absent"
                      ? "text-danger fw-bold"
                      : ""
                  }
                >
                  {attendance[s.regNo] || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
