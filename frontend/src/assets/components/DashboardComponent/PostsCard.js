import React from "react";
import Clipboard from "../../images/clipboard.png";
const PostsCrad = (props) => {

const {title,desc} = props;

  return (
    <div className="posts_cards_body">
        <div className="posts_cards_image">
            <img src={Clipboard}></img>
        </div>
        <div className="posts_cards_content">
        <div className="dashboar_body_heading">Anweisungen | 10.10.2022</div>
        <b>{title}</b>
        <div>{desc}</div>
        </div>
    </div>
  );
};

export default PostsCrad;
