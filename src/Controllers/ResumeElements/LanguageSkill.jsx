// elements
import LanguageItem from "./LanguageSkill_item";

import allData from "../../Other/translate.json";
const Language = ({ lang }) => {
  const { Languages } = allData;
  let translations = lang.Lang;
  let tab = [];
  Languages.forEach((element) => {
    translations.forEach((item) => {
      if (item.shrot === element.short) {
        tab.push({ Name: item.Name, Level: element.Level });
      }
    });
  });

  return (
    <div className="language">
      <div className="language__title">
        <h2>{lang.title}</h2>
      </div>
      {tab.map((item, index) => (
        <LanguageItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};
export default Language;
