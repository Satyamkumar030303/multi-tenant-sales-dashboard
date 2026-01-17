import { leadsData } from "./leadsData";
import { useAuth } from "../../auth/AuthContext";
import { useState } from "react";

export default function LeadsList() {
  const { user } = useAuth();
  const [filter, setFilter] = useState("");

  const leads = leadsData[user.tenant].filter(l =>
    filter ? l.status === filter : true
  );

  return (
    <div className="card p-3 shadow mb-4">
      <h5>Leads</h5>

      <select className="form-select mb-2" onChange={e => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="New">New</option>
        <option value="Converted">Converted</option>
        <option value="Pending">Pending</option>
      </select>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(l => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.phone}</td>
              <td>{l.status}</td>
              <td>
                {user.role === "Admin" ? (
                  <button className="btn btn-sm btn-primary">Edit</button>
                ) : (
                  <span className="text-muted">View only</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {leads.length === 0 && <p>No leads found</p>}
    </div>
  );
}
