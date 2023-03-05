import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentContainer from "src/components/atoms/ContentContainer";
import Loading from "src/components/atoms/Loading";
import styled from "styled-components";
import PinInput from "react-pin-input";
import { getDate, getTime } from "src/utils";
import CoffeeCheck from "src/components/atoms/CoffeeCheck";

export type CoffeeType = "TRUE" | "FALSE";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  border-bottom: 1px solid #ececec;
  background: none;
  outline: none;
  color: #fff;
  filter: drop-shadow(0 0 5px #76fc55);
`;

type Props = {
  loading: boolean;
  setLoading: (state: boolean) => void;
};

const Recording = ({ loading, setLoading }: Props) => {
  const navigate = useNavigate();
  const formRef = useRef(null!);

  const [today, setToday] = useState<string>(getDate());
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [coffee, setCoffee] = useState<CoffeeType>("TRUE");

  //제출하기
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    fetch(import.meta.env.VITE_SPREADSHEET_API, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        navigate(0);
        console.log(res);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  const handleCoffeeToggle = (value: CoffeeType) => {
    setCoffee(value);
  };

  if (loading) return <Loading />;

  return (
    <ContentContainer>
      <Input defaultValue={today} onChange={(e) => setToday(e.target.value)} />

      <PinInput
        length={4}
        type="numeric"
        inputMode="number"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "red" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value) => {
          setStart(getTime(value));
        }}
      />

      <PinInput
        length={4}
        type="numeric"
        inputMode="number"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "red" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value) => {
          setEnd(getTime(value));
        }}
      />

      <CoffeeCheck coffee={coffee} setCoffee={handleCoffeeToggle} />

      <form method="post" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <Flex>
          <input type="hidden" name="date" defaultValue={today} />
          <input type="hidden" name="start" defaultValue={start} />
          <input type="hidden" name="end" defaultValue={end} />
          <input type="hidden" name="coffee" defaultValue={coffee} />

          <button type="submit">확인</button>
        </Flex>
      </form>
    </ContentContainer>
  );
};

export default Recording;
