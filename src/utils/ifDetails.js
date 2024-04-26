import { InfoItem } from "components/CatalogCard/CatalogCard.module";

export const renderIfDetails = (condition, icon, text) => {
    return condition !== 0 && condition !== '' && renderInfoItem(icon, text);
  };

  const renderInfoItem = (icon, text) => {
    return (
      <InfoItem>
        {icon}
        {text}
      </InfoItem>
    );
  };

