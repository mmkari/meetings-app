import * as React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Card = styled.div.attrs({ className: "Card" })`
  padding: 0.8rem;
`;

const DetailItem = ({ className, iconType, label, children }) => {
  const [visible, setVisible] = React.useState(false);

  const onClick = () => {
    if (children) {
      setVisible((prev) => !prev);
    }
  };

  return (
    <div className={className}>
      <Card onClick={onClick}>
        <Icon type={iconType} />
        <div className="DetailItem-label">{label}</div>
        {children && (
          <span>
            {visible ? <Icon type="collapse" /> : <Icon type="expand" />}
          </span>
        )}
      </Card>
      {visible && <Card className="DetailItem-children">{children}</Card>}
    </div>
  );
};

const StyledDetailItem = styled(DetailItem)`
  .Card {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ededed;

    span {
      margin-left: auto;
    }
  }

  .DetailItem-label {
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 700;
  }

  .Icon {
    padding-right: 1rem;
  }

  .DetailItem-children {
    padding-left: 2rem;
  }
`;

export default StyledDetailItem;
