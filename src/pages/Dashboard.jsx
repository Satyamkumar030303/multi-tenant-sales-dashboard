import LeadsList from "../modules/leads/LeadsList";
import CallLogs from "../modules/calls/CallLogs";

export default function Dashboard() {
  return (
    <div className="container mt-4">
      <LeadsList />
      <CallLogs />
    </div>
  );
}
