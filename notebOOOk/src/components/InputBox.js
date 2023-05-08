import styled from "styled-components";
import { COLOR } from "../styles/color";

export const InputBox = ({ type, placeholder, onChange, value, name }) => {
  return (
    <StInput>
      <input
        className="inputbox"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StInput>
  );
};

export const InputLine1 = ({ type, placeholder, onChange }) => {
  return (
    <StInput>
      <input
        className="inputline1"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StInput>
  );
};
export const InputLine2 = ({ type, placeholder, onChange }) => {
  return (
    <StInput>
      <input
        className="inputline2"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StInput>
  );
};
export const InputLine3 = ({ type, placeholder, onChange }) => {
  const handleResizeText = (e) => {
    const element = e.target;
    element.style.height = "1px";
    element.style.height = `${12 + element.scrollHeight}px`;
  };

  return (
    <StInput>
      <textarea
        className="inputline3"
        placeholder={placeholder}
        onKeyDown={handleResizeText}
        onKeyUp={handleResizeText}
        rows={1}
        onChange={onChange}
      />
    </StInput>
  );
};

const StInput = styled.div`
  .inputbox {
    padding-left: 1.5rem;
    width: 400px;
    height: 45px;
    letter-spacing: 1px;
    font-family: "SUITE-Regular";
    font-weight: 600;
    font-size: 16px;
    border: 2.5px solid ${COLOR.MAIN};
    border-radius: 10px;
    ::placeholder {
      color: ${COLOR.BLACK};
    }
  }
  .inputbox:focus {
    outline: none;
    border: 2.5px solid ${COLOR.MAIN_LIGHT};
    background-color: ${COLOR.MAIN_LIGHT};
  }

  .inputline1 {
    padding: 0;
    padding-left: 5px;
    width: 450px;
    height: 40px;
    letter-spacing: 1px;
    font-family: "SUITE-Regular";
    font-weight: 600;
    font-size: 16px;
    border: 0;
    border-bottom: 3px solid ${COLOR.MAIN_LIGHT};
    ::placeholder {
      color: ${COLOR.DARK_GRAY};
    }
  }
  .inputline1:focus {
    outline: 0;
    border-bottom: 3px solid ${COLOR.MAIN_DARK};
    ::placeholder {
      color: ${COLOR.BLACK};
    }
  }
  .inputline2 {
    padding: 0;
    padding-left: 5px;
    width: 300px;
    height: 40px;
    letter-spacing: 1px;
    font-family: "SUITE-Regular";
    font-weight: 600;
    font-size: 16px;
    border: 0;
    border-bottom: 3px solid ${COLOR.MAIN_LIGHT};
    ::placeholder {
      color: ${COLOR.DARK_GRAY};
    }
    ${({ theme }) => theme.tablet`
    margin-top: 10px;
  `};
  }
  .inputline2:focus {
    outline: 0;
    border-bottom: 3px solid ${COLOR.MAIN_DARK};
    ::placeholder {
      color: ${COLOR.BLACK};
    }
  }
  .inputline3 {
    padding-top: 10px;
    padding-left: 5px;
    width: 1000px;
    min-height: 450px;
    overflow-y: scroll;
    resize: none;
    letter-spacing: 1px;
    font-family: "SUITE-Regular";
    font-weight: 600;
    font-size: 16px;
    border: 0;
    border-top: 3px solid ${COLOR.MAIN_LIGHT};
    ::placeholder {
      color: ${COLOR.DARK_GRAY};
    }
    ${({ theme }) => theme.tablet`
    width: 720px;
  `};
    ${({ theme }) => theme.mobile`
    width: 450px;
  `};
  }
  .inputline3:focus {
    outline: 0;
    border-top: 3px solid ${COLOR.MAIN_DARK};
    ::placeholder {
      color: ${COLOR.BLACK};
    }
  }
`;
