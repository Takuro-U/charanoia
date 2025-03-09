interface SheetData {
  basicInfo: {
    [key: string]: string;
  };
  backSideInfo:
    | {
        mutantPower: string;
        secretSociety: string;
        rank: string;
        uncommonSkill: string;
        uncommonSkillValue: string;
        unlikelySkill: string;
        unlikelySkillValue: string;
        unhealthySkill: string;
        unhealthySkillValue: string;
      }
    | false;
  status: {
    [key: string]: number[];
  };
  competencies: {
    [key: string]: number[][];
  };
}

interface SkillNames {
  [key: string]: string[][];
}
