import "antd/dist/antd.css";
import { Card } from "antd";
import { useHistory } from "react-router-dom"; //envoi vers un url(une route)
const Cart = (props) => {
  const history = useHistory();
  const { Meta } = Card;
  return (
    <div onClick={() => history.push(`/details/${props.dataM.id}`)}>
      <Card
        hoverable
        style={{
          width: 240,
          boxShadow: "0 5px 8px #000",
          marginBottom: 15,
          marginTop: 15,
        }}
        cover={
          <img
            alt="example"
            src={`http://image.tmdb.org/t/p/w300${props.dataM.poster_path}`}
          />
        }
      >
        <Meta
          title={props.dataM.title}
          description={props.dataM.release_date}
        />
        <p style={{ color: "blue", fontSize: 15 }}>
          vote average: {props.dataM.vote_average}
        </p>
      </Card>
    </div>
  );
};

export default Cart;
