import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentContainer from "src/components/atoms/ContentContainer";
import Loading from "src/components/atoms/Loading";
import styled from "styled-components";
import PinInput from "react-pin-input";
import { getDate, getTime } from "src/utils";

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
const HiddenInput = styled.input`
  display: none;
`;

type Props = {
  loading: boolean;
  setLoading: (state: boolean) => void;
};

const Recording = ({ loading, setLoading }: Props) => {
  const navigate = useNavigate();
  const formRef = useRef(null!);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

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

  const today = getDate();

  if (loading) return <Loading />;

  return (
    <ContentContainer>
      <Input defaultValue={today} />

      <PinInput
        length={4}
        initialValue=""
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
        initialValue=""
        type="numeric"
        inputMode="number"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "red" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value) => {
          setEnd(getTime(value));
        }}
      />

      <form method="post" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <Flex>
          <HiddenInput name="date" defaultValue={today} />
          <HiddenInput name="start" defaultValue={start} />
          <HiddenInput name="end" defaultValue={end} />
          <HiddenInput name="coffee" defaultValue={`bb`} />
          <button type="submit">확인</button>
        </Flex>
      </form>
    </ContentContainer>
  );
};

export default Recording;
