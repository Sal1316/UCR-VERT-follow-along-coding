import CardAddress from "./CardAddress";
import CardCompany from "./CardCompany";

export default function CardBody({ company, address }) {
  return (
    <>
      <div>Card Body</div>
      <div className="card-body">
        <CardCompany {...company} />
        <CardAddress {...address} />
      </div>
    </>
  );
}
