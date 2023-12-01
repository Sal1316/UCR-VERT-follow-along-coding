import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";

export default function ProfileDetailed({ user }) {
  return (
    <>
      <div>Profile Detailed</div>
      <div className="card">
        <CardHeader user={user} />
        <CardBody company={user.company} address={user.address} />
      </div>
    </>
  );
}
