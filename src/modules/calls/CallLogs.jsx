import { callsData } from "./callsData";
import { useAuth } from "../../auth/AuthContext";

export default function CallLogs() {
  const { user } = useAuth();

  return (
    <div className="card p-3 shadow">
      <h5>Call Logs</h5>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Lead</th><th>Time</th><th>Duration</th><th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          {callsData[user.tenant].map(c => (
            <tr key={c.id}>
              <td>{c.lead}</td>
              <td>{c.time}</td>
              <td>{c.duration}</td>
              <td>{c.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
