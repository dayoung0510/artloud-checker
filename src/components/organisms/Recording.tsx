import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentContainer from "src/components/atoms/ContentContainer";
import Loading from "src/components/atoms/Loading";
import styled from "styled-components";
import PinInput from "react-pin-input";
import { getDate, getTime } from "src/utils";
import CoffeeCheck from "src/components/atoms/CoffeeCheck";
import {
  style,
  startInputStyle,
  endInputStyle,
  inputFocusStyle,
} from "src/styles/pincodeStyles";

export type CoffeeType = "TRUE" | "FALSE";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  padding: 0.2rem 0;
  border: none;
  background: none;
  outline: none;
  color: #fff;
  letter-spacing: 3px;
  filter: drop-shadow(0 0 5px #76fc55);
  width: 4.5rem;
  font-size: 48px;
  @media screen and (max-width: 500px) {
    width: 3.5rem;
    font-size: 36px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: fit-content;
  @media screen and (max-width: 500px) {
    gap: 0.25rem;
  }
`;
const Label = styled.div`
  font-size: 0.25rem;
  margin-bottom: 0.1rem;
  color: #999;
`;
const SubmitButton = styled.button`
  background: #0977cb;
  border-bottom: 6px inset rgba(0, 0, 0, 0.5);
  border-left: 6px inset rgba(0, 0, 0, 0.5);
  border-right: 6px inset rgba(255, 255, 255, 0.5);
  border-top: 6px inset rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-family: "dung";
  letter-spacing: 5px;
  width: 100%;

  :disabled {
    background: #7c7c7c;
    cursor: not-allowed;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    padding: 0.2rem;
    margin-top: 0.2rem;
  }
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
      <InputContainer>
        <Input
          defaultValue={today}
          onChange={(e) => setToday(e.target.value)}
        />

        <div>
          <Label>START</Label>
          <PinInput
            length={4}
            type="numeric"
            inputMode="number"
            style={style}
            inputStyle={startInputStyle}
            inputFocusStyle={inputFocusStyle}
            onComplete={(value) => {
              setStart(getTime(value));
            }}
          />
        </div>

        <div>
          <Label>END</Label>
          <PinInput
            length={4}
            type="numeric"
            inputMode="number"
            style={style}
            inputStyle={endInputStyle}
            inputFocusStyle={inputFocusStyle}
            onComplete={(value) => {
              setEnd(getTime(value));
            }}
          />
        </div>

        <CoffeeCheck coffee={coffee} setCoffee={handleCoffeeToggle} />

        <form
          method="post"
          ref={formRef}
          onSubmit={(e) => handleSubmit(e)}
          style={{ width: "100%" }}
        >
          <Flex>
            <input type="hidden" name="date" defaultValue={today} />
            <input type="hidden" name="start" defaultValue={start} />
            <input type="hidden" name="end" defaultValue={end} />
            <input type="hidden" name="coffee" defaultValue={coffee} />

            <SubmitButton
              type="submit"
              disabled={start.length !== 5 || end.length !== 5}
            >
              SAVE
            </SubmitButton>
          </Flex>
        </form>
      </InputContainer>
    </ContentContainer>
  );
};

export default Recording;
