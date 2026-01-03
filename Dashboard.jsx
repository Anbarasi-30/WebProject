export default function Dashboard({ students, attendance }) {
  const totalStudents = students.length;

  const presentCount = Object.values(attendance).filter(
    (s) => s === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (s) => s === "Absent"
  ).length;

  return (
    <>
      <h2>Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h5>Total Students</h5>
            <h2>{totalStudents}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-3 text-success">
            <h5>Present Today</h5>
            <h2>{presentCount}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-3 text-danger">
            <h5>Absent Today</h5>
            <h2>{absentCount}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
