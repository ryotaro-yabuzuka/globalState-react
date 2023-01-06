import { atom } from "recoil";

// システム全体でこのStateを参照できる一意の値をkeyとして記述(ファイル名が良い)
//defaultでグローバルにするStateを記述
//使用する際は、<RecoilRoot>で使用するコンポーネントをかこう
export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
