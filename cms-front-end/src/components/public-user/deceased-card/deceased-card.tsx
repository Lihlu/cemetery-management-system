import { IDeceasedPerson } from "@/providers/deceased-person/context";
import { Card } from "antd";

interface DeceasedCardProps {
  person: IDeceasedPerson;
}

const DeceasedCard: React.FC<DeceasedCardProps> = ({ person }) => {
  return (
    <Card title={`${person.firstName} ${person.lastName}`}>
      <p>
        <strong>ID Number:</strong> {person.idNumber}
      </p>
      <p>
        <strong>Date of Birth:</strong> {person.dateOfBirth}
      </p>
      <p>
        <strong>Date of Death:</strong> {person.dateOfDeath}
      </p>
      <p>
        <strong>Funeral:</strong> {person.dateOfFuneral}
      </p>
      <p>
        <strong>Grave No.:</strong> {person.graveNumber}
      </p>
      <p>
        <strong>Section:</strong> {person.section}
      </p>
      <p>
        <strong>Buried:</strong> {person.isBuried ? "Yes" : "No"}
      </p>
    </Card>
  );
};

export default DeceasedCard;
