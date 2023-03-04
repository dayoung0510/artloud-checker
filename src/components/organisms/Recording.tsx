import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ContentContainer from "src/components/atoms/ContentContainer";
import Loading from "src/components/atoms/Loading";

type Props = {
  loading: boolean;
  setLoading: (state: boolean) => void;
};

const Recording = ({ loading, setLoading }: Props) => {
  const navigate = useNavigate();
  const formRef = useRef(null!);

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
      <Loading />
      {/* <form method="post" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <input name="date" />
        <input name="start" />
        <input name="end" />
        <input name="coffee" />
        <button type="submit">확인</button>
      </form> */}
    </ContentContainer>
  );
};

export default Recording;
