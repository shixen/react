import React from "react";
import css from "./css/PostItem.module.css";

function PostItem({ post }) {
    const { title, name, image, description } = post;

    return (
        <div className={css.SearchItem}>
            <p>{title}</p>
            <p>{name}</p>
            <img src={image} alt="random" />
            <p>{description}</p>
        </div>
    );
}

export default PostItem;