import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentContainer from "src/components/atoms/ContentContainer";
import Loading from "src/components/atoms/Loading";
import styled from "styled-components";
import { PinInput } from "react-input-pin-code";

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

  const [values, setValues] = useState(["", "", "", ""]);

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
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (loading) return <Loading />;

  return (
    <ContentContainer>
      <form method="post" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <Flex>
          <PinInput
            values={values}
            onChange={(value, index, values) => setValues(values)}
          />
          <Input name="date" />
          <Input name="start" />
          <Input name="end" />
          <Input name="coffee" />
          <button type="submit">확인</button>
        </Flex>
      </form>
    </ContentContainer>
  );
};

export default Recording;
