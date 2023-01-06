import styled from "styled-components";
import { SecondaryButton } from "../atoms/SecondaryButton";
import { SearchInput } from "../morecurels/searchInput";
import { UserCards } from "../organisms/user/UserCards";
import { useRecoilState } from "recoil";
import { userState } from "../../store/UserState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `やぶ-${val}`,
    image: "https://source.unsplash.com/JT-d0vVrUuA",
    email: "1234234@example.com",
    phone: "090-1234-1234",
    company: {
      name: "1234株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContiner>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCards key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContiner>
  );
};

const SContiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
