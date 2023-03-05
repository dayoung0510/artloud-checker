import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentContainer from "src/components/atoms/ContentContainer";
import Loading from "src/components/atoms/Loading";
import styled from "styled-components";
import PinInput from "react-pin-input";
import { getDate, getTime } from "src/utils";
import CoffeeCheck from "src/components/atoms/CoffeeCheck";
import Toast from "src/components/atoms/Toast";
import {
  style,
  startInputStyle,
  endInputStyle,
  inputFocusStyle,
} from "src/styles/pincodeStyles";
import Arrow from "src/components/atoms/Arrow";

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
  width: 4rem;
  font-size: 48px;
  @media screen and (max-width: 500px) {
    width: 3rem;
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
const TempSaveButton = styled.button`
  font-size: 0.25rem;
  margin-bottom: 0.1rem;
  outline: none;
  background: none;
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

  const [toast, setToast] = useState(false);

  //시작시간 로컬스토리지 불러오기
  const tempStart = window.localStorage.getItem("tempStart") ?? "";

  const [today, setToday] = useState<string>(getDate());
  const [start, setStart] = useState<string>(tempStart);
  const [end, setEnd] = useState<string>("");
  const [coffee, setCoffee] = useState<CoffeeType>("TRUE");

  //시작시간 임시저장
  const handleTempSave = () => {
    const trimmed = start.replace(":", "");
    window.localStorage.setItem("tempStart", trimmed);
    setToast(true);
  };

  //임시저장 완료 후 2초 뒤 토스트 사라짐
  useEffect(() => {
    if (toast) {
      let timer = setTimeout(() => {
        setToast(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast]);

  //로컬스토리지에서 불러온 값이 있으면(1200) 세미콜론 추가한값으로 바꿔줌(12:00)
  useEffect(() => {
    if (tempStart !== "") {
      setStart(getTime(tempStart));
    }
  }, [tempStart]);

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
        window.localStorage.removeItem("tempStart");
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Label>START</Label>
            <TempSaveButton type="button" onClick={handleTempSave}>
              💾
            </TempSaveButton>
          </div>
          <PinInput
            length={4}
            initialValue={start}
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

      <Arrow dir="DOWN" />
      {toast && <Toast />}
    </ContentContainer>
  );
};

export default Recording;
