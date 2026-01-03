import { useState } from "react";

export default function Students({ students, setStudents }) {
  const [regNo, setRegNo] = useState("");
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");

  const addStudent = () => {
    if (!regNo || !name || !dept) return;

    setStudents([...students, { regNo, name, dept }]);
    setRegNo("");
    setName("");
    setDept("");
  };

  return (
    <>
      <h2>Students</h2>

      <div className="row mb-3">
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Reg No"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={addStudent}>
            Add
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.regNo}</td>
              <td>{s.name}</td>
              <td>{s.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
