import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { user, setUser } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Sales Dashboard</span>

      <div className="d-flex gap-2">
        <select
          className="form-select"
          value={user.tenant}
          onChange={(e) => setUser({ ...user, tenant: e.target.value })}
        >
          <option value="OrgA">Organization A</option>
          <option value="OrgB">Organization B</option>
        </select>

        <select
          className="form-select"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="Admin">Admin</option>
          <option value="Agent">Agent</option>
        </select>
      </div>
    </nav>
  );
}
