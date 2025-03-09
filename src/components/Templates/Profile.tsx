import React from "react";

// components
import TextInput from "../Molecules/TextInput";
import NumberInput from "../Molecules/NumberInput";
import SelectorInput from "../Molecules/SelectorInput";

//costum-hooks
import { useSheetContext } from "../../hooks/SheetProvider";

// util
import { filteredAlphabets } from "../../util/functions";

// assets
import { clearances } from "../../assets/lists";
import { serviceGroups } from "../../assets/lists";

const Profile: React.FC = () => {
  const { sheetData, updateBasicInfo } = useSheetContext();

  return (
    <div className="flex justify-center w-[100%] pt-[20px]">
      <div className="w-[90%]">
        <div className="flex">
          <TextInput
            id="name"
            className="w-[60%] box-border pr-[10px]"
            label="名前"
            value={sheetData.basicInfo.name}
            onChange={(value) => updateBasicInfo("name", value)}
          />
          <NumberInput
            id="age"
            className="w-[20%] box-border pr-[10px]"
            label="年齢"
            value={sheetData.basicInfo.age}
            onChange={(value) => updateBasicInfo("age", value)}
          />
          <SelectorInput
            id="gender"
            className="w-[20%]"
            label="性別"
            value={sheetData.basicInfo.gender}
            options={["", "男", "女", "その他"].map((element) => ({
              display: element,
              value: element,
            }))}
            onChange={(value) => updateBasicInfo("gender", value)}
          />
        </div>
        <div className="flex mt-2">
          <SelectorInput
            id="clearrance"
            className="w-[30%] box-border pr-[10px]"
            label="クリアランス"
            value={sheetData.basicInfo.clearance}
            options={clearances.map((element) => ({
              display: element,
              value: element,
            }))}
            onChange={(value) => updateBasicInfo("clearance", value)}
          />
          <TextInput
            id="sector"
            className="w-[30%] box-border pr-[10px]"
            label="セクター"
            value={sheetData.basicInfo.sector}
            onChange={(value) =>
              updateBasicInfo("sector", filteredAlphabets(value))
            }
          />
          <SelectorInput
            id="cloneNumber"
            className="w-[40%]"
            label="クローンナンバー"
            value={sheetData.basicInfo.cloneNumber}
            options={Array(6)
              .fill(null)
              .map((element, index) => ({
                display: String(index + 1),
                value: String(index + 1),
              }))}
            onChange={(value) => updateBasicInfo("cloneNumber", value)}
          />
        </div>
        <div className="flex mt-2">
          <SelectorInput
            id="serviceGroup"
            className="w-[100%]"
            label="サービスグループ"
            value={sheetData.basicInfo.serviceGroup}
            options={serviceGroups.map((element) => ({
              display: element,
              value: element,
            }))}
            onChange={(value) => updateBasicInfo("serviceGroup", value)}
          />
        </div>
        <div className="flex mt-2">
          <TextInput
            id="habit"
            className="w-[100%]"
            label="癖"
            value={sheetData.basicInfo.habit}
            onChange={(value) =>
              updateBasicInfo("habit", filteredAlphabets(value))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
