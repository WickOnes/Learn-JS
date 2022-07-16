export const ANAKIN_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoFFLfpBcmGpKhRPi-Va8Nm7e_rsQNKXZfw&usqp=CAU";
export const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
export const Chewbacca_IMG =
  "https://st4.depositphotos.com/3429495/38405/i/600/depositphotos_384058520-stock-photo-cannes-france-may-15-chewbacca.jpg";
export const Loreal_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3sA2tNdrKVwTdlzoA0yck7vMSssKNzw5pg&usqp=CAU";

const icons = {
  hearth: require("./icons/hearth.png"),
  spend: require("./icons/spend.png"),
  share: require("./icons/share.png"),
  comments: require("./icons/comments.png"),
};

export const Post = ({ author, content, image, date, like }) => {
  const { name, photo, nickname } = author;
  return (
    <div className="content">
      <div className="author">
        <img className="author_photo" src={photo} alt="no"></img>
        <p className="author_name">{name}</p>
        <p className="author_nickname">{nickname}</p>
        <p className="author_date">{date}</p>
      </div>
      <div className="post">
        <p className="post_content">{content}</p>
        <img className="post_photo" src={image} alt="no"></img>
        <div className="post_icons">
          <img src={icons.comments} alt="no"></img>
          <img src={icons.spend} alt="no"></img>
          <img src={icons.share} alt="no"></img>
          <div className="post_icons_icon">
            <img src={icons.hearth} alt="no"></img>
            <span>{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
