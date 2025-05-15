import { IDeceasedPerson } from "@/providers/deceased-person/context";
import { Card } from "antd";

interface DeceasedCardProps {
  person: IDeceasedPerson;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const DeceasedCard: React.FC<DeceasedCardProps> = ({ person }) => {
  return (
    <Card title={`${person.firstName} ${person.lastName}`}>
      <p>
        <strong>ID Number:</strong> {person.idNumber}
      </p>
      <p>
        <strong>Date of Birth:</strong> {formatDate(person.dateOfBirth)}
      </p>
      <p>
        <strong>Date of Death:</strong> {formatDate(person.dateOfDeath)}
      </p>
      <p>
        <strong>Funeral:</strong> {formatDate(person.dateOfFuneral)}
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
